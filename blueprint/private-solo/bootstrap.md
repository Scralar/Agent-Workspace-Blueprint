# Bootstrap

Up: [README.md](README.md)

## Intake

Ask in the first message if unknown. Recommend + options + why. Record answers in their homes: git/commit policy, branch shape, and Verify on `AGENTS.md`; owner and locale in the constitution.

| Ask | Recommended default |
|-----|---------------------|
| Name or team handle | Required. ADR author and owner. |
| Repo shape | Confirm this folder fits: **private, one maintainer**. Public repo → [../public/](../public/README.md). Collaborators or several parallel agents → [../private-team/](../private-team/README.md). Check with `gh repo view --json isPrivate` or ask. |
| Commit policy | **Commit as you go** (very strong default): after each coherent verified unit, commit locally without waiting to be asked; constitution records standing authorisation ([../reference/git-guardrail.md](../reference/git-guardrail.md)). **Ask-first** only if the user explicitly opts out at intake and you record it on `AGENTS.md`. Agree the branch shape too: `main` alone is fine until there is a production deploy. |
| Locale | **en-GB** in chat and in work, unless the product locale differs by design. |
| Cheapest verify command | Required, and the highest-value line in the workspace. Exact command(s) with flags; per-stack examples in [../minimal.md](../minimal.md). If none exist yet, write `none yet` in Verify and add the cheapest real check in the first slice that allows one. |

## Order

1. Intake.
2. Scan existing repo / WIP (do not clobber).
3. **Research current tooling** for *this* domain (Marketplace, vendor MCP, skills). The blueprint is not a catalogue.
4. Propose layout **and** a first MCP note (in use / recommend / defer), with challenges. Start from the day-one tree in [README.md](README.md); adapt to the user and the project.
5. Scaffold → record the workspace decision (ADR or short note) → add wrap-up + write-plan + update-memory.
6. Commit locally on `main` (rename first if git defaulted to `master`) with `docs(agent): add agent workspace framework`. List plugins the user still needs to install.
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

Both live in this folder's [README.md](README.md), together with the memory homes and the gitignore starter.

The tree is a starting shape. Drop, merge, rename, or add files when the project is simpler, a monorepo, docs-only, or the user wants a different map. Do not create empty ceremony folders. Backlog hygiene may be its own rule (`.cursor/rules/todo.mdc`) or fold into the constitution if both would be tiny.

Whatever the shape, keep the `AGENTS.md` **invariants**: short map, where-things-live table, pointers not copies, a Verify block with real commands, git/push policy, a security block, Always/Ask/Never. Do not pad with architecture essays, style guides, or command encyclopaedias. Do not auto-generate a repo dump (`/init` style): committing unedited LLM-generated boilerplate measurably hurts agents; write these files by hand for this repo. Monorepos: nested `AGENTS.md` is supported by most harnesses (nearest file wins); root carries universal rules, package files carry local invariants.

**Add later, not empty:** production guardrails, scoped domain rules, design skills, brief, runbooks. A product `README.md` too: write it when there is a product to describe.

After the framework commit, stop unless they asked for features in parallel.

## Budgets

| Item | Soft | Note |
|------|------|------|
| Constitution | ~80–120 lines | Longer for production/visual QA |
| `AGENTS.md` | ~40–80 lines | Map + Verify + constraints. Pointers for the rest. |
| alwaysApply rules | ~1–3 files | Collaboration only if shared. Fold TODO hygiene if tiny. |
| Imminent backlog | ≈≤5 | n/a |
| Open backlog | ~25 | prune |
| Active plans | ≈≤3 | archive when done |
| Source file | ~500 / hard ~800 | Hand-written application code; split when painful ([../reference/coding-practices.md](../reference/coding-practices.md)) |

Anti-pattern: runbooks inside always-on rules.

## Self-check

- [ ] Intake recorded (name, repo shape confirmed, commit policy, locale, Verify command)
- [ ] Always-on files are constraints and pointers, not manuals
- [ ] Rule types are the narrowest that still work
- [ ] `AGENTS.md` adapted to this project, with a real Verify block, where-things-live map, and security block
- [ ] Constitution + backlog hygiene + collaboration (or a justified skip/merge); **coding** glob rule or pointer when the repo has application code ([../reference/coding-practices.md](../reference/coding-practices.md))
- [ ] TODO + changelog
- [ ] Memory homes set per [README.md](README.md); one writer; hook state gitignored
- [ ] wrap-up + write-plan + update-memory
- [ ] Living MCP note (in use, recommended, deferred, skill precedence, last reviewed) after **current** research, or a dated deferral recorded in the note and TODO
- [ ] Token load ([../reference/token-efficiency.md](../reference/token-efficiency.md)): bulky trees ignored, and no server listed in both the user and the project MCP config
- [ ] `.cursor/plans/` tracked, with a short `README.md` in the folder
- [ ] `.cursor/mcp.json` only if this repo needs stdio MCP; no secrets
- [ ] ADR/decision starter; architecture + local dev somewhere agents will **see when relevant** (pointer, not always-on)
- [ ] Framework committed; user told what changed from this blueprint; push waits for their ask
