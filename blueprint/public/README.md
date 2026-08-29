# Blueprint — public repository

Up: [../README.md](../README.md). This folder is **self-contained**: everything you need for a public repo lives here.

Use when anyone can clone the repo. **Tracked files must be safe to publish.** No private backlog, tooling inventory, personal preferences, or session scratch in git. ADRs describe the product or kit and must read cleanly without local files.

## How to use

These are **steps**. Open a later file only when its trigger matches. Do not ingest the whole folder before acting.

1. **Intake** ([bootstrap.md](bootstrap.md)) if anything is unknown: name, commit policy, locale, cheapest verify command. Confirm the repo really is public; if not, switch to [../private-solo/](../private-solo/README.md) or [../private-team/](../private-team/README.md).
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
| [reference-git-guardrail.md](reference-git-guardrail.md) | Agent will not commit, or you are writing git policy |
| [reference-plugin-clashes.md](reference-plugin-clashes.md) | Superpowers, Team Kit, Playwright, Notion, or Canvas are in play |
| [reference-user-rule.md](reference-user-rule.md) | User wants a Settings User Rule on this machine |

## Day-one tree

| Intent | Example | Notes |
|--------|---------|-------|
| Constitution | `.cursor/rules/project.mdc` | Tracked. Publishable conventions only. |
| Collaboration | `.cursor/rules/collaboration.mdc` | When more than one agent/human may share the repo. Else skip. |
| Entry | `AGENTS.md` | Publishable map plus a **Workspace facts** section (sample below). |
| User preferences | `.cursor/user-preferences.md` | **Gitignored.** Personal durable preferences. |
| TODO | `.cursor/TODO.md` | **Gitignored.** Working backlog is not for publication. Use a tracked `docs/TODO.md` only if the project wants a public roadmap. |
| Tooling inventory | `.cursor/agent-mcp.md` | **Gitignored.** |
| Changelog | `CHANGELOG.md` | Publishable history only, not internal harness chatter. |
| Skills | `.cursor/skills/` wrap-up, write-plan, update-memory | Tracked when publishable. |
| Decision log | `docs/adr/` | Kit/product decisions only. |
| Plans | `.cursor/plans/` | **Gitignored.** Local only. |

Meta repos that publish a framework (like the repo this kit lives in) may gitignore the **whole** `.cursor/` tree instead; rules and skills then stay local too.

## Gitignore starter

```gitignore
# Private working files (not for publication)
.cursor/TODO.md
.cursor/agent-mcp.md
.cursor/user-preferences.md
.cursor/plans/
.cursor/hooks/state/
.cursor/settings.json

# Ephemeral QA
.screenshots/
```

## Memory homes

Keep the Marketplace Continual Learning plugin **off**: it writes Learned sections (including personal preferences) onto the public root `AGENTS.md`. Use a repo `update-memory` skill instead, run from wrap-up:

- Personal preferences → `.cursor/user-preferences.md` (gitignored)
- Publishable workspace facts → `AGENTS.md` under **Workspace facts**

If it is not safe on GitHub, it is not a workspace fact.

## Sample `AGENTS.md`

```markdown
# Agent entry — {project}

This file is public. Keep it publishable.

## Read order
1. This file
2. `.cursor/rules/project.mdc`
3. `.cursor/TODO.md` — Imminent and Discuss (local; not in a fresh clone)
4. Domain truth for the current task (link the real homes)

## Verify
{exact commands from intake, with flags}
Prefer the smallest scoped run. Report failures, not pages of passing output.

## Git
{commit-as-you-go or ask-first, from intake}
Never push, open a PR, or merge unless asked in the current message.

## Always / Ask first / Never
Always: keep tracked files publishable; update the one home that changed; run Verify.
Ask first: push, PR, merge, outbound send/share, new write/pay MCP, product policy.
Never: secrets; private working notes in tracked files.

## Workspace facts

Publishable facts about this repo. `update-memory` may add bullets here. No personal preferences.
```
