# Tooling catalogue — hooks, rules, subagents, automations

Up: [tooling-catalogue.md](tooling-catalogue.md). Last researched: 2026-08-31. This kit's optional git fence: [../reference/hooks.md](../reference/hooks.md).

Hooks are **fences**, not signs. A rule can be ignored late in a long session; a hook runs before or after the action. Keep them few. Docs: [cursor.com/docs/hooks](https://cursor.com/docs/hooks) (also `/docs/agent/hooks`). Author with `/create-hook`.

Config: `.cursor/hooks.json` (project, Cloud Agents see this) or `~/.cursor/hooks.json` (user; **not** available to Cloud Agents). Plugins may ship `hooks/hooks.json`. Enterprise: dashboard team and enterprise hooks. Reload on save.

Two execution types: **command** (script, JSON on stdin/stdout) and **prompt** (fast model; not available on Cloud Agents). Exit `0` = use JSON; exit `2` = deny; other exits fail-open unless `failClosed: true`. Matchers filter commands (regex). `timeout`, `loop_limit` (stop / subagentStop; Cursor default 5).

## Agent hook events

| Event | Typical use |
|-------|-------------|
| `sessionStart` / `sessionEnd` | Inject context; analytics. Not on Cloud Agents (session boundary is IDE-shaped) |
| `beforeSubmitPrompt` | Block secrets in the *user's* prompt (ggshield-class) |
| `preToolUse` / `postToolUse` / `postToolUseFailure` | All tools: scan args/outputs, audit |
| `beforeShellExecution` / `afterShellExecution` | Gate `git push`, network, SQL; formatters after |
| `beforeMCPExecution` / `afterMCPExecution` | Gate MCP calls. Not on Cloud Agents yet |
| `beforeReadFile` / `afterFileEdit` | Block secret files; format or lint after edits |
| `subagentStart` / `subagentStop` | Control Task-tool delegation |
| `preCompact` | Observe context compaction |
| `stop` | Agent finished a turn |
| `afterAgentResponse` / `afterAgentThought` | Telemetry |

## Tab and app events

| Event | Typical use |
|-------|-------------|
| `beforeTabFileRead` / `afterTabFileEdit` | Policy on inline Tab (IDE only) |
| `workspaceOpen` | Return extra plugin paths for this workspace |

## Cloud Agents

Supported: shell, file, generic tool, subagent, submit-prompt, compact, after-response/thought, stop. **Not:** session start/end, MCP hooks, Tab hooks, `workspaceOpen`, user-level hooks, prompt-type hooks. Hooks do not run during early read-only cloud turns.

## Recipes worth copying (adapt, do not pile on)

| Recipe | Event | Notes |
|--------|-------|--------|
| Never-push / never-stage-private-`.cursor/` | `beforeShellExecution` matcher `git\\s+(push\|add\|commit)` | [../reference/hooks.md](../reference/hooks.md); `failClosed: true` |
| Formatter | `afterFileEdit` | Project formatter only; do not fight the repo's lint |
| Secret scan | `beforeSubmitPrompt` + `preToolUse` + `postToolUse` | [ggshield](https://docs.gitguardian.com/ggshield-docs/integrations/ai-coding-tools/secret-scanning-for-ai-coding-tools) installer writes these |
| 1Password env mount | `beforeShellExecution` | Official plugin; validates Environments mounts (macOS/Linux Labs; not Windows at last fetch) |
| Semgrep / Snyk Agent Guard | vendor hook + MCP | Org already pays for that scanner |
| Block prod SQL / `kubectl apply` | `beforeShellExecution` matcher | Fail closed |
| Network allowlist | `beforeShellExecution` matcher `curl\|wget\|nc` | — |
| Analytics | `sessionEnd` / `stop` | Do not log prompt bodies that may contain secrets |

Partner integrations listed on the hooks docs at last fetch: inventory/governance MCP brokers (Runlayer and similar), Oasis (least privilege), Snyk Evo Agent Guard, 1Password. Prefer the vendor's own installer over rewriting them.

## Claude Code hooks

Enable **Third-party skills** in Cursor Settings → Rules, Skills, Subagents. Cursor maps `.claude/settings.json` (and local/user variants) into Cursor events (`PreToolUse` → `preToolUse`, and so on). Command and prompt hooks, matchers, timeouts, and exit `2` blocking are supported. For full Cursor features (MCP hooks, Tab hooks, `failClosed`), keep a native `.cursor/hooks.json`.

Precedence (high to low): Enterprise → Team → `.cursor/hooks.json` → `~/.cursor/hooks.json` → Claude local → Claude project → Claude user.

## Rules (persistent instructions)

Docs: [cursor.com/docs/rules](https://cursor.com/docs/rules). Four homes:

| Kind | Where | Use when |
|------|--------|----------|
| Project | `.cursor/rules/*.mdc` | Versioned repo policy. Needs frontmatter (`alwaysApply`, `globs`, `description`). Plain `.md` in that folder is ignored |
| User | Customize → Rules | Personal voice; not applied to inline Ctrl+K |
| Team | Dashboard | Org-wide; can be enforced. Precedence: Team → Project → User |
| `AGENTS.md` | Repo root and nested dirs | Simple map; more specific nested files win |

Apply modes: always, intelligently (description), glob, or `@mention` only. Create with `/create-rule`. Import remote GitHub rules into `.cursor/rules/imported/`. Keep always-on rules short. If the same mistake happened twice, add a glob rule or a linter, not a longer always-on file. This kit's public shape: constitution in `.cursor/rules/`, publishable map in `AGENTS.md`.

## Subagents

Docs: [cursor.com/docs/subagents](https://cursor.com/docs/subagents). Each run has its own context window. Built-in: **explore** (codebase search), **bash/shell** (verbose command series), **browser** (DOM-noisy MCP). Custom: `.cursor/agents/*.md` with `name` + `description` frontmatter; `/create-subagent`.

Use a subagent for isolation or parallelism. Use a skill for a one-shot playbook. Cloud subagents (`/in-cloud`, `/babysit`) use **team** MCP from cursor.com/agents, not your local `mcp.json`.

## Automations

Docs: [cursor.com/docs/cloud-agent/automations](https://cursor.com/docs/cloud-agent/automations). Create from the Agents Window, cursor.com/automations, `/automate`, or Marketplace templates. Triggers: schedule, GitHub/GitLab, Slack, Linear, webhooks, PagerDuty.

Cursor-managed: **Bugbot**, **Security Agents**, **PR Routing & Approval**. Marketplace templates at last fetch include: assign reviewers, daily Slack digest, find vulnerabilities, fix Slack-reported bugs, triage failed Actions, add test coverage, autofix review comments, clean stale flags, investigate Sentry/Datadog/PagerDuty, triage Linear, scan the repo on a schedule.

Tools on an automation are a separate allowlist (GitHub, Slack, MCP, memory). Repo scope: none (Slack/MCP only), one repo, or a multi-repo environment. Do not turn these on for a public docs kit unless the user asked.

## When a hook vs a rule vs a skill

| Need | Use |
|------|-----|
| Must not happen even if the model is tired | Hook, `failClosed` |
| Always-on convention the model should see | Short rule |
| Folder- or language-specific convention | Glob rule |
| Multi-step workflow | Skill |
| Rare user-gated ritual | Skill with `disable-model-invocation` |
| Recurring in the background | Automation |
| Isolated research or verification | Subagent |

## Do not

Pile style into hooks · fail-open on secret or push gates · rely on user-level hooks for Cloud Agents · treat Bugbot as a substitute for review the user asked a human to do · let an automation open PRs or page on-call without an explicit ask.
