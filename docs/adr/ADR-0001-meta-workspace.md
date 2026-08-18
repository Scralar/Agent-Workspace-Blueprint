# ADR-0001 — Meta-repo layout and git policy

- **Status:** Accepted
- **Date:** 2026-08-18
- **Owner:** Ethan

## Context

This repository is the home of the agent workspace blueprint. It is **public**. We will edit the blueprint here, then copy `blueprint/` into future projects as the bootstrap base.

We need a lean agent harness so sessions do not re-litigate conventions, without publishing this machine’s live Cursor state (rules, skills, plans, hooks) as if it were the kit.

## Decision

1. **Two-layer repo** — Tracked kit: `blueprint/`, `AGENTS.md`, `CHANGELOG.md`, `docs/adr/`. Live harness: entire `.cursor/` (gitignored).
2. **TODO and builder MCP note** live at `.cursor/TODO.md` and `.cursor/agent-mcp.md` (not under `docs/`). They stay with the local harness.
3. **Git** — Work on `main`. Commit as you go on tracked files. Never push or open a PR until Ethan asks in the current message. Never commit `.cursor/`.
4. **Verify** — `none yet` until the kit has a cheap check worth running.
5. **Memory** — Continual Learning owns Learned sections on `AGENTS.md`. No `docs/agent-notes.md`.
6. **Always-on rules** — Constitution + collaboration. Backlog hygiene is folded into the constitution.

## Alternatives

| Option | Why not now |
|--------|-------------|
| Track `.cursor/` except plans/settings | Ethan asked to keep the live harness untracked |
| Also ship `blueprint/templates/` of rules/skills | Second home; the blueprint generates a tree adapted per project |
| `docs/TODO.md` and `docs/agent-mcp.md` | Ethan asked those two files to live in `.cursor/` |
| `dev` branch like a production app | No deploy; extra ceremony |
| Single `DECISIONS.md` | One ADR folder is enough and matches the blueprint default |

## Consequences

- Clones of the public repo get the kit, not this workspace’s rules or backlog.
- Future projects copy `blueprint/`, not `.cursor/`.
- Agents editing this repo must create/read `.cursor/` locally; it will not appear in git status as a file to commit.
- Blueprint default paths (`docs/TODO.md`, `docs/agent-mcp.md`) are overridden **here** only until we change the blueprint itself.
