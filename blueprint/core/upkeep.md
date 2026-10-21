# Upkeep: do the rules still match practice?

Up: [../README.md](../README.md). Written rules drift from how the owner really works, and agents trust the first file they read. Stale rules are worse than none.

## In every session

If the owner's instruction contradicts a tracked rule, follow the owner, then fix the rule in the same change (or ask which one is right). Never leave the contradiction in place.

When the same mistake happens twice, add a check (test, lint, hook) or a narrowly scoped rule. Do not grow the always-on file.

## Monthly (or at each release)

Add a recurring item to `docs/TODO.md`. Then:

1. Re-read `AGENTS.md` and every always-on rule against the last month of merged PRs and the owner's recent corrections. Fix what no longer matches: branch names, Verify commands, release steps.
2. Archive finished plans; keep at most 3 active.
3. Prune the backlog (Imminent about 5 items, open about 25) and memory bullets (about 12 per section).
4. Review the tooling note: drop tools unused for a month; check that each remaining one is still maintained.
5. Run the docs checks (links, en-GB, punctuation) and fix failures.
6. Note any lesson that would help other projects as blueprint feedback for Ethan in your reply. Do not edit the blueprint.

## Budgets

| Item | Soft limit |
|------|-----------|
| `AGENTS.md` | about 60 lines |
| Each always-on rule | about 40 lines; pointers, not manuals |
| Active plans | 3 |
| Imminent backlog | 5 |
| Hand-written source file | 500 (hard about 800) |
