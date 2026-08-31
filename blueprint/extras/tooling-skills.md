# Tooling catalogue — skills, plugins, commands

Up: [tooling-catalogue.md](tooling-catalogue.md). Last researched: 2026-08-31. Clash table when Superpowers / Team Kit / Notion / Canvas / Playwright are in play: [../reference/plugin-clashes.md](../reference/plugin-clashes.md).

A **skill** is a folder with `SKILL.md` (YAML frontmatter + markdown). Agents load the name and description at start, then the body and `scripts/`, `references/`, `assets/` only when the skill fires. That is the [Agent Skills](https://agentskills.io/specification) standard (Anthropic, Dec 2025; Cursor, Claude Code, Codex, Copilot, Gemini CLI, and others).

A **plugin** bundles skills with optional MCP, rules, hooks, commands, and subagents. [Agent Plugins](https://agent-plugins.org) (`plugin.json` at root) are portable skills + MCP. **Cursor Plugins** (`.cursor-plugin/plugin.json`) add rules, agents, commands, hooks, and variables. Marketplace listings are manually reviewed Git repos.

A **command** is a slash prompt. In Cursor 2.4+, `/migrate-to-skills` turns old slash commands into skills with `disable-model-invocation: true`. Prefer skills.

## Where Cursor loads skills

| Location | Scope |
|----------|--------|
| `.cursor/skills/`, `.agents/skills/` | Project |
| Nested `.cursor/skills/` under a package | Auto-scoped to that directory |
| `~/.cursor/skills/`, `~/.agents/skills/` | User, this machine only (not Cloud Agents) |
| `.claude/skills/`, `.codex/skills/` and the home equivalents | Compatibility |

Frontmatter that matters in Cursor: `name`, `description` (trigger conditions only, third person, “Use when…”), optional `paths` (globs), `disable-model-invocation` (user `/name` only; hides it from the model), `icon` / `color` for Custom Modes. Hold a skill for the whole session with Option+Enter / Alt+Enter.

Do **not** copy a plugin's `SKILL.md` into the repo. Invoke it. Write repo skills only for *this* project's workflow.

## Built-in Cursor skills (complete as of last fetch)

From [cursor.com/docs/skills](https://cursor.com/docs/skills). Type `/` to run; the agent may also auto-invoke when the request matches.

| Skill | Use when |
|-------|----------|
| `/automate` | Creating a Cloud Automation (schedule, Slack, GitHub, Linear, webhook) |
| `/babysit` | A cloud subagent should watch a PR (review comments, conflicts, failing checks) |
| `/canvas` | An interactive React artefact beside the chat |
| `/create-hook` | Authoring `hooks.json` + a hook script |
| `/create-rule` | Authoring a project `.mdc` rule |
| `/create-skill` | Authoring a `SKILL.md` |
| `/create-subagent` | Authoring `.cursor/agents/*.md` |
| `/cursor-blame` | Investigating which prompt produced an AI edit |
| `/loop` | Repeat a prompt or skill on an interval |
| `/migrate-to-skills` | Converting dynamic rules and slash commands |
| `/review` | Picking the right review agent |
| `/review-bugbot` | Bugbot-style bug/regression review (user asked) |
| `/review-security` | Security Review agent (user asked) |
| `/sdk` | Building on `@cursor/sdk` |
| `/shell` | Run the following text as a literal shell command |
| `/split-to-prs` | Slice a large diff into smaller PRs |
| `/statusline` | Cursor CLI status line |
| `/update-cli-config` | `~/.cursor/cli-config.json` |
| `/update-cursor-settings` | Cursor / VS Code settings |

Related harness skills you will also see in Agent: `/create-rule` equivalents in user skill dirs (`create-hook`, `create-skill`, `origin`, `share`, `new-repo`, and so on). Treat `/review-bugbot` and `/review-security` as **ask-first** on repos that do not already run those automations.

## Process packs (install as plugins, then pick)

These change *how* the agent works. Record clashes on the MCP note. This kit's constitution wins when they conflict.

### Superpowers ([Marketplace](https://cursor.com/marketplace/superpowers))

| Skill | Use when | Watch for |
|-------|----------|-----------|
| `using-superpowers` | Session start: find and invoke skills | Over-invoking on tiny edits |
| `brainstorming` | New behaviour, architecture | Spec-file gate before every typo; this kit: recommend + options on real design, just do tiny docs |
| `systematic-debugging` | A real bug with evidence | — |
| `test-driven-development` | A real test runner | Failing a markdown-only slice for lack of a unit test |
| `writing-plans` / `executing-plans` | Large implementation | Prefer a repo `write-plan` if you have one |
| `dispatching-parallel-agents` | 2+ independent workstreams | Shared-state tasks |
| `subagent-driven-development` | Isolated implementation slices | — |
| `using-git-worktrees` | Parallel feature branches on one machine | — |
| `verification-before-completion` | About to claim done | — |
| `requesting-code-review` / `receiving-code-review` | Review loops | Performative "looks good" |
| `finishing-a-development-branch` | Branch is done | Auto-push / merge; this kit: ask |
| `writing-skills` | Authoring skills | — |

### Cursor Team Kit ([Marketplace](https://cursor.com/marketplace))

| Skill | Use when | Watch for |
|-------|----------|-----------|
| `deslop` | Strip AI slop from a diff | — |
| `check-compiler-errors` | Typecheck / compile loop | — |
| `fix-ci` / `loop-on-ci` / `get-pr-comments` | PR is red or commented | — |
| `fix-merge-conflicts` | Non-interactive conflict resolution | — |
| `new-branch-and-pr` / `review-and-ship` / `make-pr-easy-to-review` | Shipping a PR | Auto-push; this kit: wrap-up, push only if asked |
| `run-smoke-tests` | The repo *has* that Playwright suite | Adding Playwright to a docs kit |
| `verify-this` | Claim vs fresh local evidence | — |
| `control-cli` / `control-ui` | Building a local harness | Replacing the IDE browser |
| `weekly-review` / `what-did-i-get-done` / `workflow-from-chats` | Team retros | Writing private notes into public files |
| `thermo-nuclear-code-quality-review` | Harsh maintainability pass | Everyday nits |

### Other process plugins

| Plugin | Use when |
|--------|----------|
| **Compound Engineering** | Brainstorm → plan → debug → review → compound learnings |
| **pstack** | Deep-first, parallelisable workflows |
| **Thermos** | Harsh correctness + quality review, optional merge-ready flows |
| **CLI for Agents** | Designing CLIs that agents can run (flags, dry-run, idempotency) |
| **Create Plugin** | Scaffolding a Marketplace plugin |
| **Cursor SDK** | Headless / productised agents |
| **Orchestrate** | Fan-out across parallel Cloud Agents via the SDK |

## Repo skills this kit recommends writing (not copying)

Each consumer repo writes its own short skills. Typical set:

| Skill | Trigger | Notes |
|-------|---------|--------|
| `wrap-up` | Wrap up, tidy, commit the slice | Verify, one-homes, no push unless asked |
| `write-plan` | Multi-phase work | Zero session context; user approves unless they said run |
| `update-memory` | Wrap-up or “remember this” | Private prefs vs publishable facts; **off** Marketplace Continual Learning if this exists |

Authoring: keep `SKILL.md` short; description = triggers only; checklists in sibling files.

## Portable skill sources

| Source | Use for |
|--------|---------|
| [skills.sh](https://skills.sh) | `npx skills add owner/repo` into the right agent directory |
| [agentskills.io](https://agentskills.io/specification) | Format and validation |
| [github.com/anthropics/skills](https://github.com/anthropics/skills) | Anthropic examples (frontend-design, skill-creator, …) |
| [github.com/vercel-labs/agent-skills](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) | Vercel React / Next guidance |
| [github.com/mattpocock/skills](https://github.com/mattpocock/skills) | TDD, research, domain modelling, handoff (community) |
| Customize → Add Rule → Remote Rule (GitHub) | Import a repo of skills/rules |

Invoke if installed; recommend otherwise; never vendor a plugin skill into `.cursor/skills/`.

## Vendor plugin skills (pick by stack)

Most Marketplace plugins are “skills + MCP + rules” for one vendor. If the product uses the vendor, install the plugin and let the agent invoke the skills. Do not copy them.

**Frontend / design:** Figma, shadcn, Superdesign, Mobbin, GSAP, Svelte, Modern Web Guidance, 21st.dev Magic, Magic Patterns, Webflow, Wix.

**Docs / content:** Notion (search, knowledge-capture, tasks-*), GitBook, Mintlify, Sanity, Canva.

**Data / backend:** Prisma, Supabase, Neon, Firebase, Convex, dbt, Databricks, Snowflake, Hex, Omni, PostHog, Amplitude, Mixpanel.

**Cloud:** AWS (many plugins), Cloudflare, Vercel, Netlify, Azure, Railway, Render, Temporal.

**Quality / security:** Snyk, Semgrep, Sentry, Datadog, Checkmarx, SonarQube, React Doctor, CodeRabbit.

**Domain extras already in this kit:** [web-design.md](web-design.md) names `frontend-design`, `web-design-guidelines`, `design-inspiration`. [workflow-automation.md](workflow-automation.md) is conventions, not a plugin.

## Commands vs skills vs rules

| Mechanism | Loads when | Good for | Bad for |
|-----------|------------|----------|---------|
| Always-on rule | Every chat | Hard policy, few bullets | Style guides, vendor manuals |
| Glob rule | Matching files in context | Language or folder conventions | Cross-cutting git policy |
| Intelligent rule (`description`, no globs) | Agent decides | Legacy; migrate to a skill | Anything you can make a skill |
| Skill (model-invoked) | Description matches | Workflows with steps and scripts | Always-on law |
| Skill (`disable-model-invocation`) | User types `/name` | Rare, user-gated rituals | Flows another skill must call |
| Command (legacy slash file) | User types `/` | Migrate to a skill | New work |
| Custom Mode | User pins a skill for the session | Playbooks (TDD, review) that must stay on | One-shot tasks |

## Do not

Copy plugin skills into the repo · set `disable-model-invocation` on a skill that wrap-up or another skill must run · install Superpowers *and* blindly follow its auto-push / TDD-on-docs habits · turn on Continual Learning beside a repo `update-memory` skill · write a skill that restates the constitution.
