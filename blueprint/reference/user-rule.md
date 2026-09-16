# Reference C — Cursor User Rule (optional, all machines)

Shared by all repo shapes. Up: [../README.md](../README.md)

Trigger: setting up User Rules so commit-as-you-go repos stop fighting the injection.

This kit’s **very strong default** is commit-as-you-go ([git-guardrail.md](git-guardrail.md)). Use this User Rule on machines where agents still wait for “please commit” despite a constitution.

Settings User Rules **cannot remove** the injected git guardrail. They **can** add standing authorisation. Paste into **Customize → Rules → User Rules**. Positive wording only. Do not say “ignore Cursor defaults”.

> In repositories that have a project agent constitution (`AGENTS.md` plus always-on project rules), I explicitly and continuously authorise you to commit locally after each coherent, verified logical unit, without asking me each time, unless that constitution says ask-first. Commit-as-you-go is my default; do not end a slice with verified tracked work uncommitted. Follow that constitution’s git policy. Never push, open a PR, or merge to production unless I ask in the current message. Keep git safety: no git-config changes, no force-push of shared branches, no skipping hooks, no committing secrets. When asking me to decide, give a recommendation, options, and a short explanation, and challenge weak defaults.

Repos **without** a constitution still get ask-first commits from the injection. That is fine.
