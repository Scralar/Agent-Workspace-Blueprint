# ADR-0003 — Shared leaves beside self-contained shape folders

- **Status:** Accepted
- **Date:** 2026-08-29
- **Owner:** Scralar

## Context

ADR-0002 made each repo-shape folder fully self-contained, including three `reference-*.md` files. In practice those references were byte-identical in all three folders: they describe machine-level Cursor behaviour (injected git guardrail, plugin clashes, Settings User Rules) that does not vary by repo shape. Every edit had to be made three times with zero divergence, which is duplication without a payoff.

The kit also needs new material that is shape-agnostic by nature: a guide for adopting existing repos, a minimal tier for tiny repos, an optional hooks recipe, and a shelf of optional add-on modules. Tripling those would multiply the same problem.

## Decision

1. **Core stays per shape.** The numbered reading path (policy, philosophy, bootstrap, sessions, file recipes, skills, MCP guidance, extras-by-type, done) remains duplicated and tailored per folder, synced in the same commit, exactly as ADR-0002 decided. The reading-path argument still holds: a bootstrapping agent follows one folder without hopping.

2. **Leaves are shared.** Files that are opened by trigger, sit at the end of a link, and do not vary by shape live **once** at the `blueprint/` level:
   - `reference/` — git guardrail, plugin clashes, user rule, hooks recipe
   - `adopt.md` — adopting an existing repo
   - `minimal.md` — minimal tier for tiny repos
   - `extras/` — optional add-on modules

3. **The test for where a file lives:** if two shape folders would carry different text, it belongs in each folder; if the text would be identical, it lives once and is linked.

## Alternatives

| Option | Why not |
|--------|---------|
| Keep references duplicated | Byte-identical triple maintenance with no reader benefit |
| Share the whole core again | Tried before ADR-0002; broke the reading path and filled core files with per-variant caveats |
| Triple the new shape-agnostic files | Multiplies the same dead duplication for adopt/minimal/extras |

## Consequences

- Shape folders are no longer literally self-contained; their READMEs say shared leaf material lives one level up.
- Editing a reference or extra is a single change again.
- The same-commit sync rule now applies only to the shape-tailored core files.
