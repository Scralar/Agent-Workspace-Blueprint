# Philosophy

Up: [README.md](README.md)

Without a light framework, agents re-debate architecture, lose “later” work, duplicate facts, overwrite WIP, and push by accident.

**One home per fact.** Other places link. If two sources disagree, fix both in the same change. **Day-to-day rules win** over long-form docs.

| Fact | Typical home |
|------|----------------|
| Imperative how | Agent rules (e.g. `.cursor/rules/`) |
| Entry | `AGENTS.md` |
| Overview | `README.md` |
| History | Changelog |
| Why | ADRs (or `DECISIONS.md` on tiny projects) |
| Domain how | Process / package README |
| Deferred work | Persistent TODO (`docs/TODO.md`, tracked) |
| Learned preferences | Per-user gitignored `.cursor/user-preferences.md` |
| Learned workspace facts | Learned Workspace Facts on tracked `AGENTS.md` (team truth) |
| Session scratch | Skip when memory homes exist; else a short local notes file |
| Builder tools | Living project MCP note (day one) |
| Multi-phase how | Plans (few, temporary, tracked, owned) |
| Product story | Brief (optional) |

Writing project documentation or considering a wiki: [../docs.md](../docs.md).

Do not invent empty `packages/`, `standards/`, or `runbooks/` folders.

**Always-on vs on-demand.** `AGENTS.md` and `alwaysApply` rules pay a cost on every turn. Put universally true constraints there. Put procedures in skills. Put domain detail behind a pointer with a sharp trigger (“read `docs/process/…` before changing capture or matching”). Cursor rule types: always / glob / description / `@mention` ([bootstrap.md](bootstrap.md)).

Agents may update project rules when it helps. Note that in chat. Do not invent **product** policy; ask first.

**Code:** smallest correct diff, match existing conventions, split hand-written source before ~500 lines gets painful (~800 hard). Situation-aware detail: [../reference/coding-practices.md](../reference/coding-practices.md). Put that in a glob rule when the repo has real application code; do not bloat always-on rules with a style encyclopaedia.
