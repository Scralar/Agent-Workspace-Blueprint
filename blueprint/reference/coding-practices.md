# Reference B — Coding practices and file size

Shared by all repo shapes. Up: [../README.md](../README.md)

Trigger: editing application source, choosing how large a change should be, splitting files, adding helpers or tests, or reviewing agent-written code.

## Situation-aware principles

Apply to **product and library code**. Docs-only, config-only, or question-only tasks still get **smallest correct diff**; do not drive-by refactor code the user did not ask about.

| Principle | Do |
|-----------|-----|
| **Minimize scope** | Fix what the task needs. A five-line fix beats a hundred-line “cleanup”. |
| **Avoid over-engineering** | No premature abstraction, one-off micro-helpers, or heavy error handling for edges that cannot happen in practice. |
| **Match conventions** | Read neighbouring files first. Reuse types, patterns, and naming. New code should look like the same author wrote it. |
| **Comments** | Prefer self-explanatory code. Comment non-obvious business rules and deep technical constraints only. |
| **Tests** | Add when the user asks, or when they cover real behaviour worth guarding. Skip tests that only assert the obvious or mock everything. |

Language formatters, linters, and typecheckers already in the repo **win** over agent taste. Run them via the project Verify command when they exist.

## Source file size

For **hand-written** application source (not generated code, vendored trees, or lockfiles):

| | Lines (approx.) | Action |
|--|-----------------|--------|
| Soft budget | ~500 | Start planning a split when adding more hurts navigation or review. |
| Hard budget | ~800 | Split unless there is a strong, documented reason (e.g. single generated table, legacy freeze). |

Split by **cohesive responsibility** (module, feature slice, protocol), not arbitrary line counts. Harness/doc budgets (constitution, `AGENTS.md`) are separate; see the **Budgets** table in each shape’s [bootstrap.md](../public/bootstrap.md).

## Where agents should see this

| Repo shape | Home |
|------------|------|
| Full harness | Glob rule on main language globs (e.g. `**/*.{ts,tsx,py,go,rs}`) **or** a short bullet in the constitution that points here. Do not paste this entire page into always-on rules. |
| [minimal.md](../minimal.md) | One short **Code** section in `AGENTS.md`: smallest diff, match style, ~500/800 split guidance. |
| Domain-specific | Package README or an [extras](../extras/README.md) module when conventions differ (e.g. game engine, WordPress). |

## Anti-patterns

- Unrelated refactors in the same commit as a bugfix or doc tweak
- New architectural pattern in one file without a decision or team need
- God files that mix unrelated domains because “splitting is hard”
- Tests that duplicate the implementation line-for-line
- Ignoring existing eslint/ruff/clippy because the agent “prefers” another style

When the same mistake happens twice, tighten a **glob rule** or the Verify step; do not grow the constitution into a style manual.
