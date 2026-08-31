# ADR-0006 — Public community surface

- **Status:** Accepted
- **Date:** 2026-08-31
- **Owner:** Scralar

## Context

This repository is already public, but the GitHub listing had no licence, description, or topics, and the root `README.md` assumed a Cursor user who already knew the kit. Clones and other editors (Claude Code, Codex, VS Code, and similar) need a human-first door, a licence they can reuse, and a way to propose changes without reading the maintainer harness.

ADR-0001 listed the published tree as the kit, `AGENTS.md`, `README.md`, `CHANGELOG.md`, and `docs/adr/`. Community files were missing.

## Decision

1. **MIT licence** at the repo root. The kit is meant to be copied; a permissive licence matches that. Copyright line names the project, not a private identity.

2. **Community files live at the repo root**, not inside `blueprint/`. They describe *this* GitHub repository. Consumer projects do not copy them unless they want the same licence and process. Files: `LICENSE`, `CONTRIBUTING.md`, `COLLABORATORS.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, and `.github/` templates plus a link-check workflow.

3. **Root `README.md` is for humans.** `AGENTS.md` remains the agent map. Other harnesses read `AGENTS.md` and adapt Cursor-only paths; a one-line `CLAUDE.md` points at it.

4. **GitHub listing** carries a short description and topics. The wiki stays off (docs live in the repo).

5. **Public-shape bootstrap** asks for a licence (or a written reason there is none). That is a consumer-repo check, not a copy of this repo's community files.

## Alternatives

| Option | Why not |
|--------|---------|
| Copy community files into every shape folder | They are about this GitHub repo, not every bootstrapped project |
| No licence | Leaves reuse legally unclear |
| Copyleft (GPL) | Fights the "copy this folder" model |
| Wiki as the human docs | Splits truth away from git |

## Consequences

- ADR-0001's published tree grows by these root community files.
- Agents working *on this repo* still follow `AGENTS.md`; humans land on `README.md` first.
- Consumer public repos get a licence checkbox, not a mandated MIT file.
