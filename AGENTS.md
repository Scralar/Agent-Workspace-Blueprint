# Agent entry — Agent Workspace Blueprint

This file is **public**. It is the map for anyone who clones this GitHub repository. Do not put private or internal working notes here.

## Read order

1. This file
2. [`blueprint/README.md`](blueprint/README.md)
3. [`docs/adr/`](docs/adr/)

Maintainer-only preferences (gitignored, not present in a fresh clone): `.cursor/user-preferences.md`.

## What this repo is

A copyable kit for bootstrapping Cursor agent workspaces. Copy `blueprint/` into a new project and follow its choose-your-path README (shape folders, minimal tier, adoption guide). The `.cursor/` tree in this repository is local maintainer state. It is not the kit.

## Where things live

| What | Where |
|------|-------|
| The kit (the product) | `blueprint/` (chooser: `blueprint/README.md`) |
| Why | `docs/adr/` |
| Kit history | `CHANGELOG.md` (kit changes only, never the local harness) |
| Verify script | `scripts/check-links.mjs` |

## Verify

```
node scripts/check-links.mjs
```

Checks that relative markdown links resolve and shape folders carry no stale reference copies. Run it after edits to `blueprint/` or `docs/`. Report failures, not pages of passing output.

## Git

Commit as you go after each coherent, verified unit (the constitution is standing authorisation). Never commit secrets. Never commit `.cursor/`. Do not push, open a PR, or merge unless asked in the current message. Conventional Commits, on `main`.

## Always / Ask first / Never

Always: keep tracked files publishable.

Ask first: push, PR, merge.

Never: secrets; private working notes in tracked files.

## Workspace facts

Publishable facts about this repo. `update-memory` may add bullets here. No personal preferences.

- Work on `main`. There is no production deploy.
- Future projects copy the `blueprint/` folder. They do not copy this repo’s `.cursor/` tree.
