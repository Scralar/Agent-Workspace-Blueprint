# Agent entry — Agent Workspace Blueprint

This file is **public**. It is the map for anyone (human or agent) who clones this GitHub repository. Do not put private or internal working notes here.

Humans start at [`README.md`](README.md). Other editors: Claude Code reads [`CLAUDE.md`](CLAUDE.md) (this file). Codex and similar read this file. Cursor-only paths (`.cursor/`) may not exist in your harness; adapt.

## Read order

1. This file
2. [`blueprint/README.md`](blueprint/README.md) when changing the kit
3. [`docs/adr/`](docs/adr/) when a decision needs why
4. [`CONTRIBUTING.md`](CONTRIBUTING.md) when proposing a change

## What this repo is

A copyable kit for bootstrapping agent workspaces. Copy `blueprint/` into a new project and follow its choose-your-path README. The `.cursor/` tree in *this* repository is local maintainer state. It is not the kit. A fresh clone does not contain it.

## Where things live

| What | Where |
|------|-------|
| The kit (the product) | `blueprint/` (chooser: `blueprint/README.md`) |
| Why | `docs/adr/` |
| Kit history | `CHANGELOG.md` (kit changes only, never a local editor harness) |
| Verify | `scripts/check-links.mjs` |
| How to contribute | `CONTRIBUTING.md` |
| Who can merge | `COLLABORATORS.md` |
| Licence | `LICENSE` (MIT) |

## Verify

```
node scripts/check-links.mjs
```

Checks that relative markdown links resolve and shape folders carry no stale reference copies. Run it after edits to `blueprint/` or `docs/`. Report failures, not pages of passing output.

## Git

Work on `main`. Conventional Commits. Never commit secrets. Never commit `.cursor/`.

On a clone or fork: do not push to this repository's `main` unless [`COLLABORATORS.md`](COLLABORATORS.md) says you have write access. Open a pull request instead. Do not force-push shared branches.

## Always / Ask first / Never

Always: keep tracked files publishable. No private backlog, personal preferences, or session scratch in git.

Ask first: merge to `main` if you are not listed in `COLLABORATORS.md`.

Never: secrets; private working notes in tracked files; inventing a second map beside this file.

## Workspace facts

Publishable facts about this repo. No personal preferences.

- Work on `main`. There is no production deploy.
- Future projects copy the `blueprint/` folder. They do not copy this repository's `.cursor/` tree.
- The kit is MIT-licensed. Community files at the repo root describe *this* GitHub project; they are not part of the folder you copy unless you want them.
