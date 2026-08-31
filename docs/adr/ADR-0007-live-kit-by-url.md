# ADR-0007 — Follow the live kit by URL

- **Status:** Accepted
- **Date:** 2026-08-31
- **Owner:** Scralar

## Context

ADR-0001 assumed people would copy `blueprint/` into each project (often `.cursor/brief/`). That made sense when the kit was unpublished. The kit now lives on a public GitHub repository. A copied snapshot goes stale, duplicates hundreds of lines, and is the extra step most agents do not need: they can read the live tree.

Root `README.md`, `AGENTS.md`, and `docs/community.md` also restated the same maps. `docs/community.md` repeated `CONTRIBUTING.md` and `COLLABORATORS.md`.

## Decision

1. **Default:** point the consumer agent at the live `blueprint/` folder on this repository and ask it to follow `blueprint/README.md` for *that* project. Canonical URL: `https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint`.

2. **Copy is optional.** A local snapshot (for example `.cursor/brief/`) is fine when offline or when someone wants a pinned revision. Note the source URL. Do not copy this repository's `.cursor/` tree.

3. **One map each.** Root `README.md` is the human door. `AGENTS.md` is the agent door. `docs/README.md` only lists what is under `docs/`. Process files stay at the repo root and are not re-explained in `docs/`.

## Alternatives

| Option | Why not |
|--------|---------|
| Keep copy-first | Stale snapshots; extra work for no gain when the kit is public |
| Forbid copies | Offline and air-gapped repos still need a snapshot |
| Keep `docs/community.md` | Duplicated `CONTRIBUTING.md` / `COLLABORATORS.md` |

## Consequences

- ADR-0001's "people copy `blueprint/`" is no longer the primary path.
- ADR-0006's `docs/community.md` is removed. Root process files stand alone.
- Consumer wrap-up still proposes upstreaming to this GitHub repository; following the live kit makes that home obvious.
