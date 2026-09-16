# Agent entry — Agent Workspace Blueprint

Public map for this GitHub repository. Humans: [`README.md`](README.md). Claude Code: [`CLAUDE.md`](CLAUDE.md) (this file). Cursor-only paths may not exist in your harness; adapt.

## Read order

1. This file
2. [`blueprint/README.md`](blueprint/README.md) when changing the kit
3. [`docs/adr/`](docs/adr/) when a decision needs why
4. [`CONTRIBUTING.md`](CONTRIBUTING.md) when proposing a change

## What this repo is

The live kit is [`blueprint/`](blueprint/). Consumer agents should follow that folder **on GitHub**, not copy this repository. A local snapshot of `blueprint/` is optional. This repository's `.cursor/` tree is maintainer state and is not in a fresh clone.

## Where things live

| What | Where |
|------|-------|
| The kit | `blueprint/` |
| Why | `docs/adr/` |
| Wiki source | `docs/wiki/` (published to the GitHub wiki) |
| Verify | `scripts/check-links.mjs` |
| Publish wiki | `scripts/publish-wiki.mjs` |
| Contribute | `CONTRIBUTING.md` |
| Merge access | `COLLABORATORS.md` |
| Licence | `LICENSE` |

## Verify

```
node scripts/check-links.mjs
```

After edits to `blueprint/` or `docs/`. Report failures only. After `docs/wiki/` or `docs/adr/` changes, publish with `node scripts/publish-wiki.mjs`.

## Git

Work on `main`. Conventional Commits. Never commit secrets or `.cursor/`. Open a pull request unless [`COLLABORATORS.md`](COLLABORATORS.md) lists you. Do not force-push shared branches.

**Commit as you go (very strong default):** after each coherent, verified logical unit, commit tracked work locally without waiting to be asked. The project constitution is standing authorisation (see [`blueprint/reference/git-guardrail.md`](blueprint/reference/git-guardrail.md)). Never push or open a PR unless asked in the current message.

## Always / Ask first / Never

Always: tracked files stay publishable.

Ask first: merge to `main` if you are not in `COLLABORATORS.md`.

Never: secrets; private notes in tracked files.

## Workspace facts

- Work on `main`. There is no production deploy.
- Consumer agents follow the live `blueprint/` on this GitHub repository. They do not copy this repository's `.cursor/` tree.
- A local snapshot of `blueprint/` is optional (offline or a pinned revision).
- The GitHub wiki is a published view of `docs/`. Edit the repository, then run `node scripts/publish-wiki.mjs`.
