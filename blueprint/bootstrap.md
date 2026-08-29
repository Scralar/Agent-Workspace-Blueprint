# 3. Bootstrap

Up: [README.md](README.md)

## Intake

Ask in the first message if unknown. Recommend + options + why. Record answers in the constitution.

| Ask | Recommended default |
|-----|---------------------|
| Name or team handle | Required. ADR author and owner. |
| Repo visibility | `gh repo view --json isPrivate`, or ask. **Private** default: track `.cursor/plans/` in git. **Public:** gitignore that folder. |
| Commit policy | **Commit as you go** after each coherent verified unit. Alternative: ask-first. |
| Locale | **en-GB** in chat and in work, unless the product locale differs by design. |
| Cheapest verify command | Required. Exact command(s) with flags. If none exist yet, write `none yet` in Verify and add a real command as soon as the repo can be checked. |

## Order

1. Intake.
2. Scan existing repo / WIP (do not clobber).
3. **Research current tooling** for *this* domain (Marketplace, vendor MCP, skills). The blueprint is not a catalogue.
4. Propose layout **and** a first MCP note (in use / recommend / defer), with challenges. Adapt the tree to the user and the project.
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

## Day-one tree (adapt)

This is a starting shape. Drop, merge, rename, or add files when the project is simpler, a monorepo, docs-only, or the user wants a different map. Do not create empty ceremony folders.

| Intent | Example | Notes |
|--------|---------|-------|
| Constitution | `.cursor/rules/project.mdc` | `alwaysApply: true`. Only universally true constraints. |
| Backlog hygiene | `.cursor/rules/todo.mdc` | Fold into the constitution if both would be tiny. |
| Collaboration | `.cursor/rules/collaboration.mdc` | When more than one agent/human may share the repo. Else skip. |
| Entry | `AGENTS.md` | Short map. See sample below. |
| TODO | `docs/TODO.md` | [file-recipes.md](file-recipes.md) |
| Learned memory | Learned sections on `AGENTS.md` | If Continual Learning is installed |
| Changelog | `CHANGELOG.md` | Dated day sections |
| Skills | `.cursor/skills/wrap-up`, `write-plan` | [skills.md](skills.md) |
| Tooling inventory | `docs/agent-mcp.md` | Day one. [file-recipes.md](file-recipes.md) / [mcp-tooling.md](mcp-tooling.md) |
| Decision log | `docs/adr/` or `DECISIONS.md` | Match project size |
| Cursor plans | `.cursor/plans/` + `README.md` | **Private (default):** track in git. **Public:** gitignore. Few active; archive when done. |
| Ignore | screenshots, `.cursor/hooks/state/`, `.cursor/settings.json` | Local Cursor junk. Public repos also gitignore `.cursor/plans/`. |

**Add later, not empty:** production guardrails, scoped domain rules, design skills, brief, runbooks.

Commit with `docs(agent): add agent workspace framework`, then stop unless they asked for features in parallel.

## Sample `AGENTS.md` (starting shape)

Alter headings, paths, and depth to suit the user and the project. Keep the **invariants**: short map, pointers not copies, a Verify block with real commands, git/push policy, Always/Ask/Never. Do not pad with architecture essays, style guides, or command encyclopaedias. Do not auto-generate a repo dump (`/init` style).

```markdown
# Agent entry — {project}

Start here every session.

## Read order
1. This file
2. `.cursor/rules/project.mdc`
3. `docs/TODO.md` — Imminent and Discuss
4. Domain truth for the current task (link the real homes)

## Verify
{exact commands from intake, with flags}
Prefer the smallest scoped run. Report failures, not pages of passing output.

## Git
{commit-as-you-go or ask-first, from intake}
Never push, open a PR, or merge unless asked in the current message.

## Always / Ask first / Never
Always: update the one home that changed; run Verify for the touched area.
Ask first: push, PR, merge, outbound send/share, new write/pay MCP, product policy.
Never: secrets, force-push of shared branches, skip hooks, clobber foreign WIP.

## Learned User Preferences

## Learned Workspace Facts
```

(Omit Learned headings if Continual Learning is not installed.)

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

- [ ] Intake recorded (name, visibility, commit policy, locale, Verify command)
- [ ] Always-on files are constraints and pointers, not manuals
- [ ] Rule types are the narrowest that still work
- [ ] `AGENTS.md` adapted to this project, with a real Verify block
- [ ] Constitution + backlog hygiene + collaboration (or a justified skip/merge)
- [ ] TODO + changelog
- [ ] Learned sections *or* a conscious skip of a scratch file; hook state gitignored
- [ ] wrap-up + write-plan
- [ ] Living MCP note (in use, recommended, deferred, skill precedence, last reviewed) after **current** research
- [ ] `.cursor/plans/` policy matches repo visibility
- [ ] `.cursor/mcp.json` only if this repo needs stdio MCP; no secrets
- [ ] ADR/decision starter; architecture + local dev somewhere agents will **see when relevant** (pointer, not always-on)
- [ ] Framework committed; user told what changed from this blueprint; push waits for their ask
