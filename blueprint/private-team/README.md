# Variant: private, with collaborators

Up: [../README.md](../README.md). Core files apply; this folder owns only what differs.

Use when the repo is private and more than one human or agent works in it. Everything from [private-solo](../private-solo/README.md) holds, with these changes.

## Differences from private-solo

| Topic | Team default |
|-------|--------------|
| Collaboration rule | **Required.** `.cursor/rules/collaboration.mdc`, `alwaysApply: true` (recipe: [../file-recipes.md](../file-recipes.md)). |
| Personal preferences | Per user, **gitignored** `.cursor/user-preferences.md`. One person's preferences must not bind everyone via a tracked file. |
| Workspace facts | Tracked. Learned Workspace Facts section on `AGENTS.md` (team truth). No personal preferences there. |
| Branches | `dev` (or topics off `dev`) → PR → `main` is the likely shape ([../policy.md](../policy.md)). Agree at intake. |
| Plans | Tracked in `.cursor/plans/`. Name an owner per plan; do not steal in-flight work. |
| Owner | Record the accountable owner in the constitution; name plan/ADR owners as people join. |

## Gitignore starter

```gitignore
.cursor/user-preferences.md
.cursor/hooks/state/
.cursor/settings.json
.screenshots/
```

## Memory homes

- Personal preferences → each user's gitignored `.cursor/user-preferences.md`.
- Team workspace facts → Learned Workspace Facts on tracked `AGENTS.md`, written by a repo `update-memory` skill from wrap-up.
- Keep the Marketplace Continual Learning plugin **off**: it would write one person's preferences into the shared file.

## Sample `AGENTS.md`

```markdown
# Agent entry — {project}

Start here every session.

## Read order
1. This file
2. `.cursor/rules/project.mdc`
3. `docs/TODO.md` — Imminent and Discuss
4. Domain truth for the current task (link the real homes)

Personal preferences (gitignored, per user): `.cursor/user-preferences.md`.

## Verify
{exact commands from intake, with flags}
Prefer the smallest scoped run. Report failures, not pages of passing output.

## Git
{commit-as-you-go or ask-first, from intake}
Never push, open a PR, or merge unless asked in the current message.

## Always / Ask first / Never
Always: update the one home that changed; run Verify; leave notes another agent can use.
Ask first: push, PR, merge, outbound send/share, new write/pay MCP, product policy.
Never: secrets, force-push of shared branches, skip hooks, clobber foreign WIP, steal Imminent work.

## Learned Workspace Facts
```
