# Agent Workspace Blueprint

A copyable kit for giving coding agents a short, durable workspace: where truth lives, what "done" means, and which tools to reach for. Cursor is the primary harness. The same ideas work in Claude Code, Codex, and other editors if you adapt the paths.

This GitHub repository is **public**. Everything tracked here is meant to be cloned, copied, and reused. There is no application to deploy.

## Use the kit

1. Copy the [`blueprint/`](blueprint/) folder into your project (a common path is `.cursor/brief/`).
2. Open [`blueprint/README.md`](blueprint/README.md) and choose a path:
   - **Tiny repo** → [`blueprint/minimal.md`](blueprint/minimal.md) (one `AGENTS.md`)
   - **Existing repo** → [`blueprint/adopt.md`](blueprint/adopt.md)
   - **Public** / **private solo** / **private team** → the matching folder under `blueprint/`
3. Ask your agent to follow that folder. Do not paste another project's MCP list or personal preferences into the new repo.

The kit is a guidebook, not a rulebook. Adapt it. Do not copy this repository's live `.cursor/` tree: that is local maintainer state and is gitignored here.

## Other editors

| Editor | What to read |
|--------|----------------|
| Cursor | [`AGENTS.md`](AGENTS.md), then `blueprint/` |
| Claude Code | [`CLAUDE.md`](CLAUDE.md) (points at `AGENTS.md`). Skills may live under `.claude/skills/` as well as `.cursor/skills/` |
| Codex and others that honour `AGENTS.md` | [`AGENTS.md`](AGENTS.md). Treat `.cursor/` paths as Cursor-specific |
| Humans (no agent) | This file, then [`CONTRIBUTING.md`](CONTRIBUTING.md) |

## This repository

| Path | What it is |
|------|------------|
| [`blueprint/`](blueprint/) | The kit you copy |
| [`AGENTS.md`](AGENTS.md) | Map for agents working *on this repo* |
| [`docs/adr/`](docs/adr/) | Why the kit looks like this |
| [`CHANGELOG.md`](CHANGELOG.md) | Kit history only (not local editor harness chatter) |
| [`scripts/check-links.mjs`](scripts/check-links.mjs) | Verify: relative markdown links |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to propose a change |
| [`COLLABORATORS.md`](COLLABORATORS.md) | Who maintains the repo and how write access works |
| [`LICENSE`](LICENSE) | MIT |

## Verify

```bash
node scripts/check-links.mjs
```

Needs Node.js. Reports failures only. GitHub Actions runs the same command on pull requests.

## Contributing

Issues and pull requests are welcome. Read [`CONTRIBUTING.md`](CONTRIBUTING.md) first. Be kind: [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## Licence

[MIT](LICENSE). Copy the kit, change it, ship it. Keep the copyright notice.
