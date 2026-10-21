# Agent entry: Agent Workspace Blueprint

**Edit this repository only when Ethan explicitly asks to change the blueprint.** Setting up another project? Read the files you need, copy templates into that project and adapt them there. Put lessons learned in your reply to Ethan, not in a PR here.

Public repo. The kit is `blueprint/`; people start at `README.md`. Everything tracked must be safe to publish. Claude Code reads this through `CLAUDE.md`.

## Read when

| File | When |
|------|------|
| `blueprint/README.md` | Changing the kit |
| `docs/adr/README.md` | Changing something an ADR governs |
| `CONTRIBUTING.md` | The bar for kit defaults |
| `docs/sources.md` | Adding a practice that rests on outside guidance |

## Verify

```bash
node --test blueprint/templates/*/*.test.mjs
node blueprint/templates/scripts/check-links.mjs
node blueprint/templates/scripts/check-en-gb.mjs
node blueprint/templates/scripts/check-punctuation.mjs
```

CI also runs `actionlint` on `.github/workflows/` and `blueprint/templates/workflows/`.

## Git

Work on `main`. Commit each verified unit without being asked. Push or open a PR only when the maintainer asks in the current message. Conventional Commits (`docs(kit): ...`, `feat(templates): ...`). Never force-push. `.cursor/` is gitignored here and never committed.

## Rules for kit text

- Lean: a new rule needs a reason a later agent would otherwise get wrong. Prefer a template script with a test over a paragraph.
- One home per idea; link, do not restate.
- British English, no em or en dashes (the checks enforce both).
- No secrets, personal preferences, private repo names, account ids or IPs. Consumer lessons appear as one-line "Why" notes without identifiers.
- Template changes need their tests updated in the same commit.

## Always / Ask first / Never

- Always: Verify; CHANGELOG line for notable changes; ADR when the bar in `blueprint/reference/adr.md` is met.
- Ask first: push, PR, merge, anything sent to other people.
- Never: secrets; force-push; private notes in tracked files.
