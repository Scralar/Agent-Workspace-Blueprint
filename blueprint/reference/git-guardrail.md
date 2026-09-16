# Reference A — Cursor’s injected git guardrail

Shared by all repo shapes. Up: [../README.md](../README.md)

Trigger: scaffolding git policy, or the agent refuses to commit despite commit-as-you-go.

## Blueprint default (commit as you go)

**Commit as you go is the very strong default** for every repo bootstrapped from this kit. Treat it as normal working practice, not a perk the user must request each slice.

| Expectation | Detail |
|-------------|--------|
| **When** | After each **coherent, verified logical unit**: Verify (or the smallest scoped check) has passed for the touched area, one-home docs are updated, and the diff is ready to land. |
| **Standing authorisation** | The project constitution (`AGENTS.md` + always-on project rules) must state that the owner **continuously authorises local commits** under commit-as-you-go. That wording is the counter to Cursor’s injection (below). |
| **Do not** | Finish a slice with tracked changes left uncommitted when commit-as-you-go applies. Ask “should I commit?” when policy already says commit-as-you-go. Wait for “please commit” before committing verified work. |
| **Still never** | Push, open a PR, or merge to production unless the user asks in the **current** message. |
| **Opt-out** | **Ask-first** commits only when intake explicitly recorded ask-first on `AGENTS.md`. Session overrides (“don’t commit this turn”) still win. |

Scaffold **commit-as-you-go** unless the user chooses ask-first at intake. When in doubt during intake, recommend commit-as-you-go and say why (parallel agents, recoverable history, less chat friction).

## Cursor injection (cannot remove)

Agent mode injects product blocks tagged `<user_rules>` even when **Customize → Rules → User Rules is empty**. They are **not** files on disk, **not** in Settings, and **cannot be turned off**. Cursor staff: intentional guardrail, not a bug; no toggle as of 2026-08.

Typical blocks (wording varies by model family; Composer is the loudest):

- `committing-changes-with-git`: only commit when asked; git safety (no config edits, no `--no-verify`, no force-push to main, strict amend).
- `creating-pull-requests`: use `gh` for PRs; still do not push/PR unless the user asked **now**.

That **contradicts** commit-as-you-go. **Repo constitution wins:** commit without waiting for “please commit”, still **never push/PR unasked**. Keep every **safety** bit from the injection (no config edits, no skipped hooks, no force-push of shared branches, no secrets).

**Cannot:** delete or edit the injection. “Ignore Cursor’s commit rule” (negation) usually loses to the stricter guardrail.

**Can (workaround):** positive **standing authorisation** in the constitution (always-on project rule) and optionally a Settings User Rule ([user-rule.md](user-rule.md)). Cursor staff: that counts as the user having asked. Repeat the authorisation in the constitution session loop and definition of done so every session sees it.

Do **not** copy the injection into the repo. Point here.

Sources: [Cursor hidden rules](https://forum.cursor.com/t/cursor-hidden-rules/161232), [Composer injected rules](https://forum.cursor.com/t/composer-2-5-always-on-injected-rules/164643), [Battling the cursor instructions](https://forum.cursor.com/t/battling-the-cursor-instructions/163971) (Dean Rie, Cursor, 2026-06).
