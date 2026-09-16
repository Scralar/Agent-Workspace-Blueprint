# This repository

This page is about [Scralar/Agent-Workspace-Blueprint](https://github.com/Scralar/Agent-Workspace-Blueprint), the GitHub home of the kit. If you are setting up a *different* project, use [Getting started](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/Getting-Started) instead.

## Where things live

| Path | Open when |
|------|-----------|
| [`blueprint/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint) | You are using or changing the kit |
| [`AGENTS.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/AGENTS.md) | An agent is working on *this* repo |
| [`README.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/README.md) | Human door on GitHub |
| [`docs/wiki/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/docs/wiki) | Wiki source (this published view) |
| [`docs/adr/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/docs/adr) | Why a kit decision exists |
| [`CHANGELOG.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/CHANGELOG.md) | Kit history (not harness chatter) |
| [`CONTRIBUTING.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/CONTRIBUTING.md) | You want to send a change |
| [`COLLABORATORS.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/COLLABORATORS.md) | Who can merge |
| [`LICENSE`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/LICENSE) | MIT |

Process files live at the repo root. They describe *this* GitHub repository. Consumer projects do not copy them unless they want the same licence and process.

## One home each

| Concern | Home |
|---------|------|
| Human welcome | Root `README.md` |
| Agent map for this repo | `AGENTS.md` |
| The kit | `blueprint/` |
| Why | `docs/adr/` |
| Wiki pages | `docs/wiki/` (published here) |
| How to contribute | `CONTRIBUTING.md` |

Do not add a second map. This wiki restates only what a Wiki-tab reader needs, then links back.

## Verify

From a clone:

```bash
node scripts/check-links.mjs
node scripts/check-en-gb.mjs
```

After wiki-source or ADR edits, publish with:

```bash
node scripts/publish-wiki.mjs
```

## Facts

- Work on `main`. There is no production deploy.
- Consumer agents follow the live `blueprint/` on this repository. They do not copy this repository's `.cursor/` tree.
- A local snapshot of `blueprint/` is optional (offline or a pinned revision).
