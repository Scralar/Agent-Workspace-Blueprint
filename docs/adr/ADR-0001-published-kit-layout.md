# ADR-0001 — Published kit layout

- **Status:** Accepted, amended by ADR-0006
- **Date:** 2026-08-18
- **Owner:** Scralar

## Context

This repository publishes a copyable agent-workspace blueprint. It is public. People will clone it and copy `blueprint/` into their own projects. The published tree should describe the kit, not a maintainer’s local editor setup.

## Decision

1. **Published tree** — `blueprint/` (the kit), root `AGENTS.md` (map for clones), `README.md`, `CHANGELOG.md`, and `docs/adr/`. ADR-0006 adds root community files (`LICENSE`, `CONTRIBUTING.md`, `COLLABORATORS.md`, conduct, security, `.github/`) that describe *this* GitHub repository and are not part of the copied kit unless a consumer wants them.
2. **Local Cursor files** — `.cursor/` is gitignored. It is not part of the kit. A fresh clone does not contain it.
3. **Branch** — work on `main`. There is no production deploy.
4. **Verify** — none yet. Add a cheap check when the kit needs one.
5. **ADRs** — record decisions about the published kit. Keep them readable without local Cursor files. The ADR template does not hard-code an owner name.

## Alternatives

| Option | Why not |
|--------|---------|
| Track `.cursor/` as example rules and skills | The blueprint is meant to generate a tree adapted per project, not ship one machine’s live Cursor state |
| `dev` branch | No deploy; extra ceremony |
| Single `DECISIONS.md` | An ADR folder matches a kit that will accumulate decisions |

## Consequences

- GitHub shows the kit and how to use it.
- `.cursor/` may exist locally for whoever maintains this repo. It does not appear in the published tree.
