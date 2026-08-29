# 3. Bootstrap

Up: [README.md](README.md)

## Intake

Ask in the first message if unknown. Recommend + options + why. Record answers in the constitution.

| Ask | Recommended default |
|-----|---------------------|
| Name or team handle | Required. ADR author and owner. |
| Variant | Check `gh repo view --json isPrivate`, or ask, plus whether collaborators or parallel agents share the repo. Public → [public/](public/README.md). Private, one maintainer → [private-solo/](private-solo/README.md). Private with collaborators → [private-team/](private-team/README.md). |
| Commit policy | **Commit as you go** after each coherent verified unit. Alternative: ask-first. |
| Locale | **en-GB** in chat and in work, unless the product locale differs by design. |
| Cheapest verify command | Required. Exact command(s) with flags. If none exist yet, write `none yet` in Verify and add a real command as soon as the repo can be checked. |

## Order

1. Intake.
2. Scan existing repo / WIP (do not clobber).
3. **Research current tooling** for *this* domain (Marketplace, vendor MCP, skills). The blueprint is not a catalogue.
4. Propose layout **and** a first MCP note (in use / recommend / defer), with challenges. Start from the variant's day-one tree; adapt to the user and the project.
5. Scaffold → record the workspace decision (ADR or short note) → add wrap-up + write-plan.
6. Commit locally. List plugins the user still needs to install.
7. Features only if they said to proceed in parallel.

## Cursor rule types

Use the **narrowest** type that still fires when needed. Do not make everything `alwaysApply`.

| Type | Frontmatter | Use when |
|------|-------------|----------|
| Always | `alwaysApply: true` | True on every turn (constitution). |
| Glob | `alwaysApply: false` plus `globs` | Conventions for matching files (e.g. `**/*.tsx`). |
| Description | `alwaysApply: false` plus `description` | Agent should pull it in when the task matches. |
| Manual | neither glob nor description | Only when `@`-mentioned. |

Plain `.md` under `.cursor/rules/` is ignored. Use `.mdc` or `AGENTS.md`.

## Day-one tree and sample `AGENTS.md`

Both live in the **variant** folder: [public/](public/README.md), [private-solo/](private-solo/README.md), or [private-team/](private-team/README.md). The variant also owns memory homes and what is gitignored.

The tree is a starting shape. Drop, merge, rename, or add files when the project is simpler, a monorepo, docs-only, or the user wants a different map. Do not create empty ceremony folders. Backlog hygiene may be its own rule (`.cursor/rules/todo.mdc`) or fold into the constitution if both would be tiny.

Whatever the variant, keep the `AGENTS.md` **invariants**: short map, pointers not copies, a Verify block with real commands, git/push policy, Always/Ask/Never. Do not pad with architecture essays, style guides, or command encyclopaedias. Do not auto-generate a repo dump (`/init` style).

**Add later, not empty:** production guardrails, scoped domain rules, design skills, brief, runbooks.

Commit with `docs(agent): add agent workspace framework`, then stop unless they asked for features in parallel.

## Budgets

| Item | Soft | Note |
|------|------|------|
| Constitution | ~80–120 lines | Longer for production/visual QA |
| `AGENTS.md` | ~40–80 lines | Map + Verify + constraints. Pointers for the rest. |
| alwaysApply rules | ~1–3 files | Collaboration only if shared. Fold TODO hygiene if tiny. |
| Imminent backlog | ≈≤5 | n/a |
| Open backlog | ~25 | prune |
| Active plans | ≈≤3 | archive when done |
| Source file | ~500 / hard ~800 | Split when painful |

Anti-pattern: runbooks inside always-on rules.

## Self-check

- [ ] Intake recorded (name, variant, commit policy, locale, Verify command)
- [ ] Always-on files are constraints and pointers, not manuals
- [ ] Rule types are the narrowest that still work
- [ ] `AGENTS.md` adapted to this project, with a real Verify block
- [ ] Constitution + backlog hygiene + collaboration (or a justified skip/merge)
- [ ] TODO + changelog
- [ ] Memory homes set per the variant; hook state gitignored
- [ ] wrap-up + write-plan
- [ ] Living MCP note (in use, recommended, deferred, skill precedence, last reviewed) after **current** research
- [ ] `.cursor/plans/` policy matches the variant
- [ ] `.cursor/mcp.json` only if this repo needs stdio MCP; no secrets
- [ ] ADR/decision starter; architecture + local dev somewhere agents will **see when relevant** (pointer, not always-on)
- [ ] Framework committed; user told what changed from this blueprint; push waits for their ask
