# Contributing

Thanks for wanting to improve the kit. The full process is [`CONTRIBUTING.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/CONTRIBUTING.md) at the repo root. This page is the short door.

## What to change

| You want to… | Change |
|--------------|--------|
| How a *new* project bootstraps | `blueprint/` (all three shape folders in the same commit if the idea is shared) |
| Optional use-case advice | `blueprint/extras/` or the tooling catalogue |
| Why a kit decision exists | `docs/adr/` |
| This wiki | `docs/wiki/`, then `node scripts/publish-wiki.mjs` |
| This GitHub repo's welcome, licence, or process | Root files (`README.md`, `CONTRIBUTING.md`, `COLLABORATORS.md`, …) |

Do not add a second map. [`AGENTS.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/AGENTS.md) is the agent entry. [`README.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/README.md) is the human entry.

## Wiki edits

Edit `docs/wiki/` or `docs/adr/` in a pull request (or on `main` if you have write access). Then publish:

```bash
node scripts/publish-wiki.mjs
```

Edits made only on the Wiki tab may be overwritten the next time that script runs.

## Bar

A change that would become the default for every future project should be **general**, **proven**, and **publishable**. See [`blueprint/extras/README.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/blueprint/extras/README.md).

## How to send a change

1. Fork (or branch, if you have write access).
2. Edit tracked files only. Do not commit `.cursor/`, `.env`, or editor settings.
3. British English (en-GB). No em dashes.
4. Conventional Commits, for example `docs(kit): …` or `docs(repo): …`.
5. Run `node scripts/check-links.mjs` and fix failures.
6. Open a pull request against `main`.

Who can merge: [`COLLABORATORS.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/COLLABORATORS.md). Security reports: [`SECURITY.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/SECURITY.md). Conduct: [`CODE_OF_CONDUCT.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/CODE_OF_CONDUCT.md).

By contributing you agree your changes are licensed under the [MIT Licence](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/LICENSE).
