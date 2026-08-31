# Agent Workspace Blueprint

[![Licence: MIT](https://img.shields.io/badge/Licence-MIT-blue.svg)](LICENSE)
[![Verify](https://github.com/Scralar/Agent-Workspace-Blueprint/actions/workflows/verify.yml/badge.svg)](https://github.com/Scralar/Agent-Workspace-Blueprint/actions/workflows/verify.yml)
[![AGENTS.md](https://img.shields.io/badge/AGENTS.md-compatible-111.svg)](https://agents.md)

A guidebook you point a coding agent at, not a plugin you install.

It gives the agent a short workspace: where truth lives, what "done" means, which tools to reach for, and how not to leak private notes on a public repo. Cursor first. Claude Code, Codex, Copilot, and others work if you adapt paths.

## Why it exists

Most repos either have no agent instructions, or they have one giant always-on rule that burns context and goes stale. This kit is a **choose-your-path folder**. You pick the shape of *your* repository, follow it once, and later sessions inherit the map instead of re-learning the project.

It is not a software-development methodology plugin (those already exist). It is the missing workspace: homes, bootstrap, sessions, and a dated catalogue of MCP, skills, and hooks to pick from.

## Start in thirty seconds

In the project you want to set up, paste this into the agent:

```text
Follow https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint
for *this* project. Start at blueprint/README.md.
Do not copy that repository's .cursor/ tree or anyone else's MCP list.
```

The agent reads the live kit, picks a path, and scaffolds **in your repo**.

| Your situation | Path it should take |
|----------------|---------------------|
| Tiny repo (script pack, plugin, exercises) | [`blueprint/minimal.md`](blueprint/minimal.md): one `AGENTS.md`, done |
| Existing repo with history | [`blueprint/adopt.md`](blueprint/adopt.md) plus the matching shape |
| New public repo | [`blueprint/public/`](blueprint/public/) |
| New private repo, one maintainer | [`blueprint/private-solo/`](blueprint/private-solo/) |
| New private repo, collaborators or parallel agents | [`blueprint/private-team/`](blueprint/private-team/) |

Copying `blueprint/` into the project (for example `.cursor/brief/`) is optional: offline use or a pinned snapshot. Note the source URL if you do.

## What you get

| Piece | What it is |
|-------|------------|
| Three **shape folders** | Full reading path for that kind of repo: policy, bootstrap, sessions, file recipes, sample `AGENTS.md`, gitignore |
| **Minimal** tier | One file when a full harness would outweigh the code |
| **Adopt** guide | Migrate an existing repo instead of scaffolding over it |
| **Extras** | Short add-ons (web design, workflow automation) opened after bootstrap, not as a syllabus |
| **Tooling catalogue** | Dated pick-and-choose notes for MCP, skills, and hooks. Live Marketplace still wins |
| **Reference** | Git guardrail, plugin clashes, optional hooks fence |

The kit is a guidebook, not a rulebook. Adapt it. Do not silently ignore production safety or parallel-agent hygiene.

## What this is not

- **Not this repository's `.cursor/` tree.** That is local maintainer state and is gitignored. Do not copy it.
- **Not a default install list.** The catalogue is research with a date on it. Re-verify live before you add a server or skill.
- **Not Cursor-only.** Other harnesses read [`AGENTS.md`](https://agents.md) (or a one-line pointer such as `CLAUDE.md`). Drop Cursor-only paths if they do not exist there.
- **Not your product's README.** Humans land here. Agents working *on this repo* start at [`AGENTS.md`](AGENTS.md). Agents setting up *your* project start at [`blueprint/README.md`](blueprint/README.md).

## This repository

| Path | Open when |
|------|-----------|
| [`blueprint/`](blueprint/) | You are using or changing the kit |
| [`AGENTS.md`](AGENTS.md) | An agent is working on *this* repo |
| [`docs/adr/`](docs/adr/) | You need why a kit decision exists |
| [`CHANGELOG.md`](CHANGELOG.md) | Kit history (not harness chatter) |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | You want to send a change |
| [`COLLABORATORS.md`](COLLABORATORS.md) | You need to know who can merge |

Verify:

```bash
node scripts/check-links.mjs
```

## Contributing

Improvements that are general, proven, and publishable are welcome. See [`CONTRIBUTING.md`](CONTRIBUTING.md). Please read the [code of conduct](CODE_OF_CONDUCT.md). Security reports: [`SECURITY.md`](SECURITY.md).

## Licence

[MIT](LICENSE). Copyright 2026 Agent Workspace Blueprint contributors.
