# Agent Workspace Blueprint

> **Read it, do not change it.** Agents setting up a project read only the files they need from this repo (raw GitHub or web fetch), copy the templates into the new project and adapt them there. Do not clone, fork, vendor or edit this repository unless Ethan explicitly asks to change the blueprint. After setup the project follows its own `AGENTS.md` and links back with one provenance line only. Suggest improvements to Ethan in your reply or handoff, not as a PR.

![Licence: MIT](https://img.shields.io/badge/Licence-MIT-blue.svg)
![Verify](https://github.com/Scralar/Agent-Workspace-Blueprint/actions/workflows/verify.yml/badge.svg)
![AGENTS.md](https://img.shields.io/badge/AGENTS.md-compatible-111.svg)

A short guidebook you point a coding agent at when starting or adopting a project: how the agent should behave, what "done" means, how branches and releases work, how not to leak secrets, and copy-ready checks that enforce it.

## Start in thirty seconds

In the project you want to set up, paste this into the agent:

```text
Read (do not clone) https://raw.githubusercontent.com/Scralar/Agent-Workspace-Blueprint/main/blueprint/README.md
and follow it to set up this project.
```

The agent fetches the files it needs, asks a few intake questions, writes a hand-made `AGENTS.md`, and copies the checks the project needs into the project.

## What you get

| Piece | What it is |
|-------|------------|
| [`blueprint/core/`](blueprint/core/) | Working rules, definition of done, branches and PRs, security, where docs live, monthly upkeep |
| [`blueprint/shipping/`](blueprint/shipping/) | Release pipeline, user-facing wording and errors, user guide and first-run tour |
| [`blueprint/templates/`](blueprint/templates/README.md) | CI, release and post-deploy workflows, check scripts with tests, a git guard hook, a PR template |
| [`blueprint/reference/`](blueprint/reference/) | Cursor specifics, ADRs, adopting an existing repo, en-GB |
| [`blueprint/extras/`](blueprint/extras/) | Web UI, workflow automation, loopback control plane |

Lean on purpose: short rules, checks instead of prose, one home per fact. Sources behind the practices: [`docs/sources.md`](docs/sources.md).

## This repository

| Path | Open when |
|------|-----------|
| [`blueprint/`](blueprint/README.md) | You are using or changing the kit |
| [`AGENTS.md`](AGENTS.md) | An agent is working on this repo |
| [`docs/adr/`](docs/adr/README.md) | You need to know why the kit looks like this |
| [`CHANGELOG.md`](CHANGELOG.md) | Kit history |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | You want to send a change |

Verify (Node 20 or later):

```bash
node --test blueprint/templates/*/*.test.mjs
node blueprint/templates/scripts/check-links.mjs
node blueprint/templates/scripts/check-en-gb.mjs
node blueprint/templates/scripts/check-punctuation.mjs
```

## Contributing

General, proven, publishable improvements are welcome: [CONTRIBUTING.md](CONTRIBUTING.md), [code of conduct](CODE_OF_CONDUCT.md), [security](SECURITY.md).

## Licence

[MIT](LICENSE). Copyright 2026 Agent Workspace Blueprint contributors.
