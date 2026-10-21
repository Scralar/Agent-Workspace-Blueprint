# ADR-0010: Agent working defaults (commits, code hygiene, en-GB)

- **Status:** Accepted
- **Date:** 2026-09-16
- **Owner:** Scralar

## Context

Three friction patterns showed up in real agent sessions on repos bootstrapped from this kit:

1. **Commits:** Cursor injects an ask-first git block in `<user_rules>` that cannot be removed. Agents often wait for “please commit” even when the project constitution already chose commit-as-you-go and standing local authorisation.
2. **Code:** Agents drive-by refactor, ignore file-size pain, or invent style that fights existing linters. The kit mentioned budgets in bootstrap tables but had no single reference for situation-aware coding habits.
3. **Locale:** Policy already said British English (en-GB), but new kit text slipped into US `-ize` spellings and there was no automated guard in this repository.

These are cross-cutting kit decisions: they touch all three shape folders, shared `reference/` leaves, and this repo’s Verify commands.

## Decision

1. **Commit as you go is the very strong default** at intake unless the user explicitly records ask-first on `AGENTS.md`. Expand [git-guardrail.md](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/b4ba37d/blueprint/reference/git-guardrail.md) with expectations, anti-patterns (uncommitted slices, permission prompts), and precedence over the injection. Wire the default through policy, bootstrap, sessions, skills, file-recipes, and done checklists in all shapes.

2. **Add [coding-practices.md](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/b4ba37d/blueprint/reference/coding-practices.md)** (Reference E) for smallest correct diff, ~500/800 line budgets, tests/comments guidance, glob-rule recipe, and philosophy/policy hooks. Do not duplicate the full text in always-on rules.

3. **Add [locale-en-gb.md](../../blueprint/reference/locale-en-gb.md)** (Reference F) for en-GB habits and vendor-UI exemptions. Add `scripts/check-en-gb.mjs` to this repository’s Verify (with `check-links.mjs`) and CI. Consumer projects may copy the script or rely on policy only.

4. **Lettering:** `coding-practices` is Reference E; existing B to D references unchanged.

## Alternatives

| Option | Why not |
|--------|---------|
| Rely on Cursor User Rules only | Injection still wins without positive standing authorisation in the repo |
| Put coding rules only in user chat preferences | Not publishable; does not travel with the kit |
| Manual en-GB review only | Repeated US drift in agent-written markdown |
| One mega “agent policy” ADR per year | Harder to find; reference files stay the operational home |

## Consequences

- Triple maintenance when shared behaviour changes: same commit across public, private-solo, and private-team, plus shared `reference/` once.
- This repo’s PRs and `main` CI run an extra markdown spelling check; false positives are handled with vendor-UI line exemptions in the script.
- Downstream consumer repos inherit defaults by following the live kit; they opt into the script if they want the same enforcement.
