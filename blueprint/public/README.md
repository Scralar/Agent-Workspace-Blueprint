# Variant: public repository

Up: [../README.md](../README.md). Core files apply; this folder owns only what differs.

Use when anyone can clone the repo. **Tracked files must be safe to publish.** No private backlog, tooling inventory, personal preferences, or session scratch in git. ADRs describe the product or kit and must read cleanly without local files.

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
