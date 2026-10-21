# Adopting an existing repo

Up: [../README.md](../README.md). Reach the same end state as a fresh setup by migration. Keep the substance of existing conventions; move them to the kit's homes. Existing production-safety rules win over kit defaults.

1. **Inventory.** `AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `.cursor/rules/`, backlog files, ADRs, changelog, plans, scratch notes, CI workflows. Note what is live, stale or contradictory.
2. **Entry and Verify first.** Write `AGENTS.md` from the template with a real Verify command. `CLAUDE.md` becomes a one-line `@AGENTS.md`. Convert `.cursorrules` to `.cursor/rules/*.mdc`.
3. **One home per fact.** One backlog (`docs/TODO.md`), one changelog, ADRs in `docs/adr/`. Retire scratch notes: decisions to ADRs, tasks to the backlog, preferences to memory, the rest deleted.
4. **Fix every reference** to moved files, then run the link check.
5. **Fix stale rules now.** A README or rule that contradicts practice misleads every later session ([../core/upkeep.md](../core/upkeep.md)).
6. **Add the checks** the repo lacks from [../templates/](../templates/README.md), starting with CI Verify: fetch each file, copy it into the repo and adapt it there. Never clone or vendor the blueprint. Add the one provenance line to `AGENTS.md`.
7. **Record the adoption** in a short ADR: what moved, what was retired, what stays deliberately different.

Busy repo: entry file and Verify first, backlog second, checks third, cosmetics last.
