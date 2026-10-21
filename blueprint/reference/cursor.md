# Cursor specifics

Up: [../README.md](../README.md). Everything else in the kit works in any harness that reads `AGENTS.md`.

## Rules

| Type | Frontmatter | Use for |
|------|-------------|---------|
| Always | `alwaysApply: true` | The constitution: constraints and pointers true on every turn |
| Files | `globs: ...` | Conventions for matching files (`**/*.tsx`) |
| Intelligent | `description: ...` | Guidance the agent pulls in when the task matches |
| Manual | none | Only when `@`-mentioned |

- Rules are `.mdc` files in `.cursor/rules/`. Plain `.md` files there are ignored.
- Use the narrowest type that still fires. Every always-on line costs context on every turn.
- Add a rule only after the agent makes the same mistake twice. Prefer a linter or test when one can catch it.
- A file mentioned in a rule is not inlined; the agent reads it when needed. Put must-know text in the rule body.
- Nested `AGENTS.md` files apply to their folder; keep the root one repo-wide.

## The injected git rule

Cursor adds its own "only commit when asked" guidance that you cannot remove. If the project wants commit-as-you-go, the constitution must say so positively: "The owner gives standing authorisation to commit each verified unit locally without asking. Push, PRs and merges still need an ask in the current message." Keep the safety parts (no `--no-verify`, no force-push, no git config edits).

## Skills

`.cursor/skills/<name>/SKILL.md` with `name` and a `description` that starts "Use when..." and names triggers only. Three earn their place in most repos:

- **wrap-up**: runs the [definition of done](../core/done.md), commits, reports the hash, does not push.
- **write-plan**: writes a plan per [working rules](../core/working-rules.md#plans).
- **update-memory**: writes learned facts to the one memory home ([docs-homes.md](../core/docs-homes.md#memory)).

Do not copy plugin skills into the repo; invoke them by name.

## MCP and tools

- Prefer a well-known CLI (`gh`, `aws`) over an MCP server that duplicates it. Keep the set small: more tools means worse tool choice and a wider attack surface.
- Each server lives in one config (user or project, not both). Secrets by `${env:NAME}`, never inline.
- Research live (Marketplace, vendor docs) when choosing tools; lists in docs go stale. Record the choice in `docs/agent-tools.md` with a last-reviewed date.
- `.cursorignore` bulky generated trees.

## Hooks

Hooks turn the few absolute rules into fences. Template: [../templates/hooks/](../templates/hooks/hooks.json).

- `beforeShellExecution` with a matcher, answering `allow`, `ask` or `deny`.
- Exit code 2 blocks. Other non-zero exits fail open, so the guard must catch its own errors and answer `deny` or `ask`.
- Keep hooks for push, PR, merge and staging private files. Style belongs in linters.
- A `stop` hook can run a quick check and send a follow-up if it fails; cap it with `loop_limit`.

## Cloud agents

Only when the owner asks. If the project uses them, commit `.cursor/environment.json` with an idempotent `install` step, keep the repo testable without network secrets, and give them OIDC or scoped tokens, never personal keys.
