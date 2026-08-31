# Agent Workspace Blueprint

A kit for giving coding agents a short workspace: where truth lives, what "done" means, which tools to reach for. Cursor first; Claude Code, Codex, and others work if you adapt paths. Public. [MIT](LICENSE). No deploy.

## Use the kit

Point your agent at the live folder and ask it to follow [`blueprint/README.md`](blueprint/README.md) **for your project**:

https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint

Do not paste another project's MCP list or personal preferences.

Copying `blueprint/` into the project (for example `.cursor/brief/`) is optional: offline use or a pinned snapshot. Note the source URL if you do. Do not copy this repository's `.cursor/` tree (local maintainer state, gitignored here).

## This repository

| Path | What |
|------|------|
| [`blueprint/`](blueprint/) | The kit |
| [`AGENTS.md`](AGENTS.md) | Agent map for *this* repo |
| [`docs/`](docs/README.md) | ADRs |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | How to send a change |
| [`COLLABORATORS.md`](COLLABORATORS.md) | Who can merge |

Verify: `node scripts/check-links.mjs`
