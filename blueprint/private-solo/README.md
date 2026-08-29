# Variant: private, solo

Up: [../README.md](../README.md). Core files apply; this folder owns only what differs.

Use when the repo is private and one person maintains it. Nothing leaks, so working files are tracked: history survives machine moves and clones.

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

Split preferences into a gitignored file only if the repo later gains collaborators or goes public (see the other variants).

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
