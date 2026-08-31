# Blueprint — private repository, with collaborators

Up: [../README.md](../README.md). This folder carries the **full reading path** for a private repo shared by several humans or agents. Shape-agnostic leaf material (references, extras) lives once at the `blueprint/` level and is linked where relevant.

Use when the repo is private and more than one human or agent works in it. Working files are tracked as team truth, but **personal preferences stay per user and gitignored**: one person's preferences must not bind everyone via a tracked file.

## How to use

These are **steps**. Open a later file only when its trigger matches. Do not ingest the whole folder before acting.

1. **Intake** ([bootstrap.md](bootstrap.md)) if anything is unknown: name, commit policy, branch shape, locale, cheapest verify command. Confirm the repo really is private with collaborators; otherwise switch to [../public/](../public/README.md) or [../private-solo/](../private-solo/README.md).
2. Read [policy.md](policy.md) and [bootstrap.md](bootstrap.md). Skim [philosophy.md](philosophy.md). Open other files by trigger.
3. **Research current tooling** ([mcp-tooling.md](mcp-tooling.md)) before locking a stack. This kit goes stale; the Marketplace does not.
4. Propose a layout for *this* repo (keep / drop / replace). Challenge weak defaults. The day-one tree and sample `AGENTS.md` below are a starting shape, not a mandatory schema.
5. Scaffold, commit locally, summarise, including plugins still to install.
6. Keep the project MCP note current as the work changes.

## Files

| File | Open when |
|------|-----------|
| [policy.md](policy.md) | Working agreements (always, with bootstrap) |
| [philosophy.md](philosophy.md) | Why the kit exists; one home per fact |
| [bootstrap.md](bootstrap.md) | Intake, bootstrap order, rule types, budgets, self-check |
| [sessions.md](sessions.md) | Session loop, git, parallel work, suggesting a new chat |
| [file-recipes.md](file-recipes.md) | Writing TODO, ADRs, changelog, MCP note, memory, plans, docs |
| [skills.md](skills.md) | Adding or changing skills |
| [mcp-tooling.md](mcp-tooling.md) | MCP, browser, outbound, GitHub, tooling refresh |
| [situational.md](situational.md) | Visual product, naming, scoped rules, plans hygiene |
| [done.md](done.md) | Definition of done, do-not list |
| [../reference/git-guardrail.md](../reference/git-guardrail.md) | Agent will not commit, or you are writing git policy |
| [../reference/plugin-clashes.md](../reference/plugin-clashes.md) | Superpowers, Team Kit, Playwright, Notion, or Canvas are in play |
| [../reference/user-rule.md](../reference/user-rule.md) | User wants a Settings User Rule on this machine |
| [../docs.md](../docs.md) | Writing project docs, public vs private homes, or an optional wiki |
| [../extras/tooling-catalogue.md](../extras/tooling-catalogue.md) | Picking MCP, skills, hooks, or plugins; then re-verify live |

## Day-one tree

| Intent | Example | Notes |
|--------|---------|-------|
| Constitution | `.cursor/rules/project.mdc` | Tracked. `alwaysApply: true`. Record the accountable owner. |
| Collaboration | `.cursor/rules/collaboration.mdc` | **Required.** `alwaysApply: true` (recipe: [file-recipes.md](file-recipes.md)). |
| Entry | `AGENTS.md` | Short map with a Learned Workspace Facts section (sample below). |
| User preferences | `.cursor/user-preferences.md` | **Gitignored, per user.** Personal durable preferences. |
| TODO | `docs/TODO.md` | Tracked. |
| Tooling inventory | `docs/agent-mcp.md` | Tracked. |
| Changelog | `CHANGELOG.md` | Dated day sections. |
| Skills | `.cursor/skills/` wrap-up, write-plan, update-memory | Tracked. |
| Decision log | `docs/adr/` | Name ADR owners as people join. |
| Plans | `.cursor/plans/` + `README.md` | Tracked. Name an owner per plan; do not steal in-flight work. |

## Gitignore starter

```gitignore
.cursor/user-preferences.md
.cursor/tmp/
.cursor/hooks/state/
.cursor/settings.json
.screenshots/
.env
.env.*
!.env.example
```

## Memory homes

- Personal preferences → each user's **gitignored** `.cursor/user-preferences.md`.
- Team workspace facts → Learned Workspace Facts on tracked `AGENTS.md`, written by a repo `update-memory` skill from wrap-up.
- Keep the Marketplace Continual Learning plugin **off**: it would write one person's preferences into the shared file.

## Sample `AGENTS.md`

```markdown
# Agent entry: {project}

Start here every session.

## Read order
1. This file
2. `.cursor/rules/project.mdc`
3. `docs/TODO.md` — Imminent and Discuss
4. Domain truth for the current task (link the real homes)

Personal preferences (gitignored, per user): `.cursor/user-preferences.md`.

## Where things live
{short table: source entry points, config, tests, docs homes. Editing the wrong file is the top agent failure; this map prevents it}

## Verify
{exact commands from intake, with flags}
Prefer the smallest scoped run. Report failures, not pages of passing output.

## Git
{commit-as-you-go or ask-first, from intake; branch shape; PR conventions}
Never push, open a PR, or merge unless asked in the current message.

## Security
Secrets live in {home, e.g. gitignored `.env`; `.env.example` carries names only}. Never commit or print them. Protected paths: {list, or none}.

## Always / Ask first / Never
Always: update the one home that changed; run Verify; leave notes another agent can use.
Ask first: push, PR, merge, outbound send/share, new write/pay MCP, product policy.
Never: secrets, force-push of shared branches, skip hooks, clobber foreign WIP, steal Imminent work.

## Learned Workspace Facts
```
