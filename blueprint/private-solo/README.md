# Blueprint — private repository, solo

Up: [../README.md](../README.md). This folder carries the **full reading path** for a private solo repo. Shape-agnostic leaf material (references, extras) lives once at the `blueprint/` level and is linked where relevant.

Use when the repo is private and one person maintains it. Nothing leaks, so working files are tracked: history survives machine moves and clones.

## How to use

These are **steps**. Open a later file only when its trigger matches. Do not ingest the whole folder before acting.

1. **Intake** ([bootstrap.md](bootstrap.md)) if anything is unknown: name, commit policy, locale, cheapest verify command. Confirm the repo really is private with one maintainer; otherwise switch to [../public/](../public/README.md) or [../private-team/](../private-team/README.md).
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
| [file-recipes.md](file-recipes.md) | Writing TODO, ADRs, changelog, MCP note, memory, plans |
| [skills.md](skills.md) | Adding or changing skills |
| [mcp-tooling.md](mcp-tooling.md) | MCP, browser, outbound, GitHub, tooling refresh |
| [extras.md](extras.md) | Visual product, naming, scoped rules, plans hygiene |
| [done.md](done.md) | Definition of done, do-not list |
| [../reference/git-guardrail.md](../reference/git-guardrail.md) | Agent will not commit, or you are writing git policy |
| [../reference/plugin-clashes.md](../reference/plugin-clashes.md) | Superpowers, Team Kit, Playwright, Notion, or Canvas are in play |
| [../reference/user-rule.md](../reference/user-rule.md) | User wants a Settings User Rule on this machine |

## Day-one tree

| Intent | Example | Notes |
|--------|---------|-------|
| Constitution | `.cursor/rules/project.mdc` | Tracked. `alwaysApply: true`. |
| Collaboration | `.cursor/rules/collaboration.mdc` | Optional. Add when parallel agents become common. |
| Entry | `AGENTS.md` | Short map with Learned headings (sample below). |
| TODO | `docs/TODO.md` | Tracked. |
| Tooling inventory | `docs/agent-mcp.md` | Tracked. |
| Changelog | `CHANGELOG.md` | Dated day sections. |
| Skills | `.cursor/skills/` wrap-up, write-plan, update-memory | Tracked. |
| Decision log | `docs/adr/` or `DECISIONS.md` | Match project size. |
| Plans | `.cursor/plans/` + `README.md` | Tracked. Few active; archive when done. |

## Gitignore starter

```gitignore
.cursor/hooks/state/
.cursor/settings.json
.screenshots/
```

## Memory homes

Learned User Preferences and Learned Workspace Facts live as sections on `AGENTS.md`. One writer only:

- **Preferred:** a repo `update-memory` skill, run from wrap-up (in session, no subagent).
- Alternative: the Marketplace Continual Learning plugin (hook-driven, zero setup). Do not run both.

Split preferences into a gitignored file only if the repo later gains collaborators or goes public (switch folders and migrate).

## Sample `AGENTS.md`

```markdown
# Agent entry — {project}

Start here every session.

## Read order
1. This file
2. `.cursor/rules/project.mdc`
3. `docs/TODO.md` — Imminent and Discuss
4. Domain truth for the current task (link the real homes)

## Verify
{exact commands from intake, with flags}
Prefer the smallest scoped run. Report failures, not pages of passing output.

## Git
{commit-as-you-go or ask-first, from intake}
Never push, open a PR, or merge unless asked in the current message.

## Always / Ask first / Never
Always: update the one home that changed; run Verify for the touched area.
Ask first: push, PR, merge, outbound send/share, new write/pay MCP, product policy.
Never: secrets, force-push of shared branches, skip hooks, clobber foreign WIP.

## Learned User Preferences

## Learned Workspace Facts
```
