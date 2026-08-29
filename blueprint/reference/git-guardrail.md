# Reference A — Cursor’s injected git guardrail

Shared by all repo shapes. Up: [../README.md](../README.md)

Trigger: scaffolding git policy, or the agent refuses to commit despite commit-as-you-go.

Agent mode injects product blocks tagged `<user_rules>` even when **Customize → Rules → User Rules is empty**. They are **not** files on disk, **not** in Settings, and **cannot be turned off**. Cursor staff: intentional guardrail, not a bug; no toggle as of 2026-08.

Typical blocks (wording varies by model family; Composer is the loudest):

- `committing-changes-with-git`: only commit when asked; git safety (no config edits, no `--no-verify`, no force-push to main, strict amend).
- `creating-pull-requests`: use `gh` for PRs; still do not push/PR unless the user asked **now**.

That **contradicts** commit-as-you-go: commit without waiting for “please commit”, still **never push/PR unasked**.

**Cannot:** delete or edit the injection. “Ignore Cursor’s commit rule” (negation) usually loses to the stricter guardrail.

**Can (workaround):** positive **standing authorisation** in the constitution (always-on project rule) and optionally a Settings User Rule ([user-rule.md](user-rule.md)). Cursor staff: that counts as the user having asked. Keep the **safety** bits from the injection.

Do **not** copy the injection into the repo. Point here.

Sources: [Cursor hidden rules](https://forum.cursor.com/t/cursor-hidden-rules/161232), [Composer injected rules](https://forum.cursor.com/t/composer-2-5-always-on-injected-rules/164643), [Battling the cursor instructions](https://forum.cursor.com/t/battling-the-cursor-instructions/163971) (Dean Rie, Cursor, 2026-06).
