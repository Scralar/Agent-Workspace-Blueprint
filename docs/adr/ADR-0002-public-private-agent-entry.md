# ADR-0002 — Public vs private agent entry

- **Status:** Accepted
- **Date:** 2026-08-18
- **Owner:** Scralar

## Context

Root `AGENTS.md` is a shared, committed file. Continual Learning normally writes Learned bullets there. This GitHub repository is **public**. Maintainer backlog, tooling inventory, and working memory must not land on GitHub.

## Decision

1. **Public** `AGENTS.md` — publishable map only. No Learned sections. No private TODO, MCP, or session notes.
2. **Private** `.cursor/AGENTS.md` — maintainer entry for this machine. Continual Learning writes Learned sections **only** here.
3. **Tracked files** (`AGENTS.md`, `README.md`, `CHANGELOG.md`, `docs/`, `blueprint/`) stay safe to publish. Changelog records notable kit changes, not internal harness chatter.
4. If the Continual Learning plugin writes to root `AGENTS.md`, move those bullets to `.cursor/AGENTS.md` and strip the public file before committing.
5. No `docs/agent-notes.md`. No name-only owner file.

## Alternatives

| Option | Why not now |
|--------|-------------|
| Learned sections on public `AGENTS.md` | Public repo; private prefs would be published |
| Only User Rules in Settings | Not repo-scoped; other clones would not share maintainer workflow on this machine |
| Track `.cursor/AGENTS.md` | Would publish the private entry |

## Consequences

- Clones see how to use the kit. They do not see maintainer memory.
- Agents on this machine must read `.cursor/AGENTS.md` (constitution points there).
- The Marketplace plugin still *says* `AGENTS.md`; this repo overrides the target path.
