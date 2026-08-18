# Ultimate Agent Workspace Blueprint

**Audience:** an LLM (or human) bootstrapping a **new** software project so later agent sessions can ship without re-learning conventions, losing deferred work, or colliding.

**Harness:** Cursor Agent (project rules, `.cursor/skills/`, MCP, Plan mode). If you reuse these ideas in Claude Code, Codex, or another environment, adapt paths and drop Cursor-only sections. Do not assume `.cursor/` exists there.

**Guidelines, not a rigid spec.** Adapt, challenge, or replace defaults. Ask with recommendation + options + why. Never silently ignore production safety or parallel-agent hygiene.

Optimise for short rules, frozen decisions where they matter, a living backlog, and **minimal ceremony**.

Do **not** implement product features until a workable agent framework exists unless the user says skip setup or proceed in parallel.

Always-on files must stay **minimal**. Extra always-on instructions are usually followed, and they make unrelated tasks slower and more expensive. Put only what is true on **every** turn in `AGENTS.md` and `alwaysApply` rules. Everything else is a pointer, a glob/description rule, or a skill.

---

## How to use

These are **steps**. Open a later section only when its trigger matches. Do not ingest the whole file before acting.

1. **Intake** (§3) if anything below is unknown: name, visibility, commit policy, locale, cheapest verify command.
2. Read §1 (policy) and §3 (bootstrap). Skim §2. Open other sections by trigger.
3. **Research current tooling** (§7) before locking a stack. This file goes stale; the Marketplace does not.
4. Propose a layout for *this* repo (keep / drop / replace). Challenge weak defaults. The example tree and the sample `AGENTS.md` are a starting shape, not a mandatory schema.
5. Scaffold, commit locally, summarise, including plugins still to install.
6. Keep the project MCP note current as the work changes.

| Open | When |
|------|------|
| §4 | Session loop, git, parallel work, suggesting a new chat |
| §5 | Writing TODO, ADRs, changelog, MCP note, plans folder |
| §6 | Adding or changing skills |
| §7 | MCP, browser, outbound, GitHub, tooling refresh |
| §8 | Visual product, naming, scoped rules, plans hygiene |
| §9 | Definition of done, do-not list |
| Reference A | Agent will not commit, or you are writing git policy |
| Reference B | Superpowers, Team Kit, Playwright, Notion, or Canvas are in play |
| Reference C | User wants a Settings User Rule on this machine |

---

## 1. Working agreements (policy)

Treat as policy unless you argue otherwise and the user agrees. Record intake choices in the constitution (commit policy, locale, owner, verify command).

| Topic | Default |
|-------|---------|
| **Commits** | After each coherent, verified logical unit, unless intake chose ask-first. Do not wait to be asked under commit-as-you-go. The constitution is **standing authorisation** to commit locally (Reference A). |
| **Push / PR** | Never until the user asks in the **current** message. |
| **CHANGELOG** | Root `CHANGELOG.md`; daily `## YYYY-MM-DD` only (newest first). No `## Unreleased`. Notable changes only; not a dump of commit subjects. |
| **Backlog** | Persistent TODO with priority sections. |
| **Tooling inventory** | Living, **project-specific** MCP note (usually `docs/agent-mcp.md`). Do not copy another repo’s list. Recommend missing plugins; do not assume they are installed. Record **skill precedence** when plugins clash with repo rules. |
| **Rule size** | Lean. Exceed for safety (production, multi-agent, legal). |
| **Commit messages** | `type(scope): summary` (Conventional Commits). |
| **Branches** | `dev` (or topics off `dev`) → PR → `main` when `main` is production. Simpler repos may work on `main`; agree first. |
| **Parallel agents** | Leave enough instruction that two agents do not collide. |
| **Precedence** | Repo constitution (`AGENTS.md` + project rules) wins over Settings User Rules **and** Cursor plugin skills. Cursor also injects product git/PR blocks labelled `<user_rules>` that are **not** in Settings and **cannot be deleted** (Reference A). Session overrides (“don’t commit”, “push now”) still win. |
| **Decisions** | Recommendation + options + short why. Challenge weak defaults. |
| **Language** | British English (en-GB) in **chat replies** and in **work** (docs, commits, UI strings, comments) wherever possible, unless intake set another locale. Follow the product locale where the product is not en-GB by design. |
| **Punctuation** | No em dashes (—). No en dashes used as clause breaks. Use a comma, colon, parentheses, or a full stop. Hyphens in compounds (`git-config`) and markdown `---` separators are fine. Completed backlog rows: `- [x] YYYY-MM-DD: …` |
| **Owner** | The user's name from intake. Use for ADRs and decision ownership unless they name someone else. |

### Always / Ask first / Never

| | |
|--|--|
| **Always** | Follow the recorded commit policy. Update the one home that changed. Run the Verify command for the touched area (or the smallest scoped equivalent). Leave notes another agent can use. |
| **Ask first** | Push, open a PR, merge, or deploy to production. Send email, share Drive, create a Notion page. Install plugins or enable write/pay MCP scopes. Invent product policy. |
| **Never** | Commit secrets. Force-push shared branches. Skip hooks. Edit git config. Revert others’ WIP. Kill foreign processes. Steal Imminent work. |

---

## 2. Philosophy

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
| Deferred work | Persistent TODO |
| Learned preferences / facts | `AGENTS.md` via Continual Learning |
| Session scratch | Skip if Continual Learning is on; else a short notes file |
| Builder tools | Living project MCP note (day one) |
| Multi-phase how | Plans (few, temporary) |
| Product story | Brief (optional) |

Do not invent empty `packages/`, `standards/`, or `runbooks/` folders.

**Always-on vs on-demand.** `AGENTS.md` and `alwaysApply` rules pay a cost on every turn. Put universally true constraints there. Put procedures in skills. Put domain detail behind a pointer with a sharp trigger (“read `docs/process/…` before changing capture or matching”). Cursor rule types: always / glob / description / `@mention` (§3).

Agents may update project rules when it helps. Note that in chat. Do not invent **product** policy; ask first.

---

## 3. Bootstrap

### Intake

Ask in the first message if unknown. Recommend + options + why. Record answers in the constitution.

| Ask | Recommended default |
|-----|---------------------|
| Name or team handle | Required. ADR author and owner. |
| Repo visibility | `gh repo view --json isPrivate`, or ask. **Private** default: track `.cursor/plans/` in git. **Public:** gitignore that folder. |
| Commit policy | **Commit as you go** after each coherent verified unit. Alternative: ask-first. |
| Locale | **en-GB** in chat and in work, unless the product locale differs by design. |
| Cheapest verify command | Required. Exact command(s) with flags. If none exist yet, write `none yet` in Verify and add a real command as soon as the repo can be checked. |

### Order

1. Intake.
2. Scan existing repo / WIP (do not clobber).
3. **Research current tooling** for *this* domain (Marketplace, vendor MCP, skills). The blueprint is not a catalogue.
4. Propose layout **and** a first MCP note (in use / recommend / defer), with challenges. Adapt the tree to the user and the project.
5. Scaffold → record the workspace decision (ADR or short note) → add wrap-up + write-plan.
6. Commit locally. List plugins the user still needs to install.
7. Features only if they said to proceed in parallel.

### Cursor rule types

Use the **narrowest** type that still fires when needed. Do not make everything `alwaysApply`.

| Type | Frontmatter | Use when |
|------|-------------|----------|
| Always | `alwaysApply: true` | True on every turn (constitution). |
| Glob | `alwaysApply: false` plus `globs` | Conventions for matching files (e.g. `**/*.tsx`). |
| Description | `alwaysApply: false` plus `description` | Agent should pull it in when the task matches. |
| Manual | neither glob nor description | Only when `@`-mentioned. |

Plain `.md` under `.cursor/rules/` is ignored. Use `.mdc` or `AGENTS.md`.

### Day-one tree (adapt)

This is a starting shape. Drop, merge, rename, or add files when the project is simpler, a monorepo, docs-only, or the user wants a different map. Do not create empty ceremony folders.

| Intent | Example | Notes |
|--------|---------|-------|
| Constitution | `.cursor/rules/project.mdc` | `alwaysApply: true`. Only universally true constraints. |
| Backlog hygiene | `.cursor/rules/todo.mdc` | Fold into the constitution if both would be tiny. |
| Collaboration | `.cursor/rules/collaboration.mdc` | When more than one agent/human may share the repo. Else skip. |
| Entry | `AGENTS.md` | Short map. See sample below. |
| TODO | `docs/TODO.md` | §5 |
| Learned memory | Learned sections on `AGENTS.md` | If Continual Learning is installed |
| Changelog | `CHANGELOG.md` | Dated day sections |
| Skills | `.cursor/skills/wrap-up`, `write-plan` | §6 |
| Tooling inventory | `docs/agent-mcp.md` | Day one. §5 / §7 |
| Decision log | `docs/adr/` or `DECISIONS.md` | Match project size |
| Cursor plans | `.cursor/plans/` + `README.md` | **Private (default):** track in git. **Public:** gitignore. Few active; archive when done. |
| Ignore | screenshots, `.cursor/hooks/state/`, `.cursor/settings.json` | Local Cursor junk. Public repos also gitignore `.cursor/plans/`. |

**Add later, not empty:** production guardrails, scoped domain rules, design skills, brief, runbooks.

Commit with `docs(agent): add agent workspace framework`, then stop unless they asked for features in parallel.

### Sample `AGENTS.md` (starting shape)

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

### Budgets

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

### Self-check

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

---

## 4. Sessions, git, parallel work

Trigger: day-to-day work after bootstrap.

### Session loop

1. Entry + constitution → Imminent / Discuss
2. Collaboration scan (git / terminals / browser)
3. **Tooling freshness:** MCP note missing, last-reviewed older than **~30 days**, *or* the project’s nature / a major aspect has **shifted** (see §7)
4. Architectural? → ADR
5. Multi-phase? → write-plan (user approves unless they said run with it)
6. Smallest correct diff → **Verify**
7. Update the one homes that changed → **commit** (if commit-as-you-go)
8. Repeat; wrap-up at end of slice
9. **Stop.** No push/PR unless asked
10. **Suggest a new chat** when the slice is done, the next task is a different concern, the thread is long, or you are repeating mistakes. Be relatively persistent (remind rather than nag once and drop). The user decides.

Ask: context → recommendation → options → why. Challenge weak requests.

**Autonomous** (“run with it”): proceed unless secrets, production merge, destructive git, or legal. Still follow the recorded commit policy; still no push unasked.

### Git

```
feat/* ──► dev ──PR──► main (production)
```

| Action | Default |
|--------|---------|
| Commit | As you go, unless intake chose ask-first |
| Push / open PR | Only when asked |
| Merge / push production | Only when owner asks in the current message |
| Force-push | Never unless they explicitly demand and understand |

PowerShell:

```powershell
git commit -m "type(scope): summary" -m "Optional body."
```

Types: `feat` `fix` `docs` `chore` `refactor` `test`. Use `!` for breaking. One concern per commit. Never commit secrets.

If `main` auto-deploys: do not merge production PRs unless asked now. “Deploy” without “merge” → describe or open a PR, do not merge.

Injected Cursor git guardrail: Reference A.

### Parallel agents

Own your files; don’t revert others’ WIP; don’t kill foreign servers; don’t steal Imminent work. Browser: own tab only (IDE browser first). Stage your paths; mention foreign dirt. No force-push of shared branches.

---

## 5. File recipes

Trigger: writing the files. Templates to adapt, not mandatory filenames.

### Constitution (always-on rule)

Owner (intake name) · recorded commit policy and locale · standing commit authorisation if commit-as-you-go · push/PR never unasked · Always/Ask/Never · one-home pointers · session loop (including suggest a new chat) · Verify pointer · rules may change · must-not list. Visual products: light/dark, motion, `prefers-reduced-motion` (or a glob rule, not always-on, if the repo is mixed).

Do **not** paste architecture, local-dev runbooks, or plugin manuals here. Link them.

### TODO

**Imminent** · **Planned** · **Ideas** · **Discuss** · **Completed** as `- [x] YYYY-MM-DD: …` (never leave checked boxes in active sections).

Add when later/blocked/debt. Do **not** park this-turn requested work only in the TODO. Session todos = this chat; file TODO = persistent.

### Learned memory

Continual Learning installed → **no** `docs/agent-notes.md`. Hook may run `continual-learning` (`disable-model-invocation: true`; not every wrap-up). Only those two Learned headings; ≤12 bullets each; no secrets, one-offs, or copies of process/ADR/TODO. Constitution wins if a Learned bullet contradicts it; prune the bullet.

Otherwise a short notes file is fine. Prune it; not a second TODO.

Gitignore `.cursor/hooks/state/`.

### Collaboration rule

Before acting: git status, terminals, backlog/plans. Prefer **Cursor IDE browser** (`browser_tabs` → new tab → lock → work → unlock → close yours). User’s Chrome/DevTools (`list_pages` → `new_page`) only if they already have Chrome in play or asked.

### Changelog

Same commit, today’s `## YYYY-MM-DD`. `### Added` / `### Changed` / `### Fixed` as useful. Notable only.

### Cursor plans (when tracked)

Usually `.cursor/plans/`. Cursor Plan mode and write-plan output. **Private repo default:** version-controlled. **Public repo:** gitignored. Ship a short `README.md` in the folder stating which. Few active; archive or delete when done. Link process/ADR/TODO; no secrets.

### ADRs

Context, decision, alternatives, consequences. Include the user's name as author (from intake). Proposed → Accepted → freeze (typos / supersession / dated amendments). Skip trivial fixes. `ADR-0001-short-title.md` or one `DECISIONS.md` on tiny projects.

### Docs map

One table of topic → home beats duplicated conventions. Put it where humans look (`README` or `docs/`). Point at it from `AGENTS.md`; do not copy it there.

### Project MCP note (living)

Usually `docs/agent-mcp.md`. **This project only.** Do not paste plugin manuals.

| Section | Purpose |
|---------|---------|
| **Last reviewed** | ISO date. Calendar window **~30 days**. Also refresh on **significant scope shift** (§7). |
| **In use** | Installed and used here: when / do-not. Prefer a well-known CLI when the model already knows it (e.g. `gh`) if MCP would only duplicate it. |
| **Recommended, not installed** | Helps *this* stack: how to install, why, what not to grant |
| **Deferred** | Wrong for now, including assistant MCP vs **product** integration |
| **Skill precedence** | Plugin vs constitution: prefer / do-not |

Optional `.cursor/mcp.json` for project stdio servers. Secrets: `${env:NAME}` or `envFile` → gitignored `.env`. Ship `.env.example` with **names only**. Reload MCP after config changes.

Recommend; never silent-install; never assume plugins are present.

---

## 6. Skills

Trigger: adding workflows the agent should load on demand.

Repo skills: `.cursor/skills/<name>/SKILL.md` (`name` + `description`). This blueprint is for Cursor. Other harnesses use different skill directories; adapt if you copy the idea.

Keep `SKILL.md` short. Description includes “use when…” with **sharp triggers**. Extra checklists go in sibling files the skill tells the agent to read. Don’t restate the constitution.

### wrap-up

Triggers: wrap up, tidy, commit all, close a chunk.

Flow: prune diff → one-home docs (including MCP note if tools/scope changed) → Verify → **correction** → commit (if commit-as-you-go) → report hash → **do not push** → suggest a new chat if the slice is done.

**Correction:** if the user corrected a durable preference this slice, update Learned (plugin) or the constitution if it is policy. If the same class of error happened twice, add a glob/description rule or a linter, not a longer always-on file. Do not hand-edit Learned sections when the plugin owns them. Do not revive `docs/agent-notes.md`.

### write-plan

Triggers: implementation plan, roadmap, large multi-phase. Zero session context; phases + gates; exact paths; YAGNI; link don’t duplicate. Scope with recommendation + options first. Fetch **current** vendor docs (Exa) and link. Name missing plugins the executor should recommend. User approves before large execution unless they said run with it.

**Prefer this repo skill** over Superpowers `writing-plans` (`docs/superpowers/plans/`) unless the project explicitly chose that tree.

### Plugin skills

Do **not** copy plugin `SKILL.md` into the repo. Invoke by name. `continual-learning` is hook-driven. Clash table: Reference B, and only if those plugins are installed or recommended.

### UI / marketing (when the project is visual)

- `frontend-design`: distinctive UI; existing design systems win
- `web-design-guidelines`: Vercel Web Interface Guidelines
- `design-inspiration`: adapt patterns; don’t drop foreign runtimes wholesale

---

## 7. MCP and tooling

Trigger: connecting tools, or the MCP note is missing / stale / the project shifted.

Discover schemas before calling. `mcp_auth` once if `needsAuth` or an auth error, then retry. Native code tools for code; MCP for browser, mail, Drive, boards, vendor APIs the **assistant** should use.

Prefer a **well-known CLI** when the model already knows it and MCP would only add schema weight (GitHub → `gh` is the usual example). Use MCP when the CLI is missing, worse, or you need a capability the CLI does not have. Keep the set **tight**. Unused tools bloat every prompt.

**Browser:** IDE browser first. Chrome/DevTools second.

**Outbound:** draft/propose by default. Send, share, Notion page, push, or PR only if asked **now**.

**Web:** Exa (`web_search_exa` / `web_fetch_exa`). Cite URLs. Do not overwrite process/ADR with a web claim.

**GitHub:** GitHub MCP when listed and useful; `gh` is a fine default and the fallback if MCP is down or only `mcp_auth` appears. That is an outage, not a policy change. No PAT in git. No push/PR unasked.

**Artefacts:** gitignore ephemeral QA, plugin hook state, `.cursor/settings.json`. **Plans:** track `.cursor/plans/` on private repos; gitignore on public. Optional committed visual baselines.

### Research: do not trust this file’s examples

At **project start**, when the MCP note is **> ~30 days** old, and **whenever the project’s nature or a major aspect shifts** (e.g. docs/automation → frontend; → game; → hosted CI; a new system the *assistant* should operate).

Then:

1. Search live: [Marketplace](https://cursor.com/marketplace), [MCP guide](https://cursor.com/guides/coding-agent-mcp), [cursor.directory](https://cursor.directory), vendor docs.
2. Compare with what is actually installed.
3. Update the MCP note (in use / recommended / deferred). Cite URLs + review date.
4. Recommend installs (options + why). Do not install unasked. Do not enable write/pay scopes by default.

Prefer official Marketplace / first-party vendor MCP. Community MCP is fine as a documented authoring aid (e.g. orchestrator node schemas).

A destination API the **product workflow** already writes to is usually **not** an assistant MCP unless the user wants the assistant to operate it.

---

## 8. Extras by project type

Trigger: the project is visual, named for users, repeating a mistake, or planning multi-phase work.

**Naming (brand ≠ code):** Brand = user-visible; Surface = docs; Internal = code/env. Skip on personal tools.

**Scoped rules:** After the same mistake twice. Narrow globs or a description. Must/must-not. Link out for depth.

**Plans:** Multi-phase only. ADR = why; plan = how. Few active. Home: `.cursor/plans/` when the repo is **private** (tracked in git, with a short `README.md` in that folder). On **public** repos, gitignore `.cursor/plans/`; plans stay local. Archive completed plans to `.cursor/plans/archive/` or delete when the slice ships.

**Sandbox:** Dev-only visual playground; skip if not a UI project.

**Stack sketches (hints only):** marketing site · design studio · product monorepo · workflow automation (orchestrator JSON, HITL, destination API in the workflow not the assistant). Invent a fifth when needed.

---

## 9. Done and don'ts

### Definition of done

Verify command run for the touched area · smallest correct diff · one-home docs updated (MCP note if tooling or **scope** changed) · ADR if the bar was met · changelog if notable · backlog updated · correction recorded if it was a durable lesson · Learned via plugin not a notes file · UI gates if UI · committed under the recorded policy · not pushed unless asked.

### Do not

Always-on runbooks · empty ceremony folders · auto-generated repo-dump `AGENTS.md` · ADRs for every bugfix · rewriting accepted history instead of amending/superseding · parking this-turn work only in TODO · copying plugin skills into the repo · assistant MCP for a system the workflow already owns · `docs/superpowers/` trees unless chosen.

---

## Reference A — Cursor’s injected git guardrail

Trigger: scaffolding git policy, or the agent refuses to commit despite commit-as-you-go.

Agent mode injects product blocks tagged `<user_rules>` even when **Customize → Rules → User Rules is empty**. They are **not** files on disk, **not** in Settings, and **cannot be turned off**. Cursor staff: intentional guardrail, not a bug; no toggle as of 2026-08.

Typical blocks (wording varies by model family; Composer is the loudest):

- `committing-changes-with-git`: only commit when asked; git safety (no config edits, no `--no-verify`, no force-push to main, strict amend).
- `creating-pull-requests`: use `gh` for PRs; still do not push/PR unless the user asked **now**.

That **contradicts** commit-as-you-go: commit without waiting for “please commit”, still **never push/PR unasked**.

**Cannot:** delete or edit the injection. “Ignore Cursor’s commit rule” (negation) usually loses to the stricter guardrail.

**Can (workaround):** positive **standing authorisation** in the constitution (always-on project rule) and optionally a Settings User Rule (Reference C). Cursor staff: that counts as the user having asked. Keep the **safety** bits from the injection.

Do **not** copy the injection into the repo. Point here.

Sources: [Cursor hidden rules](https://forum.cursor.com/t/cursor-hidden-rules/161232), [Composer injected rules](https://forum.cursor.com/t/composer-2-5-always-on-injected-rules/164643), [Battling the cursor instructions](https://forum.cursor.com/t/battling-the-cursor-instructions/163971) (Dean Rie, Cursor, 2026-06).

---

## Reference B — Plugin skill clashes

Trigger: Superpowers, Team Kit, Playwright, Notion, or Canvas are installed or recommended. Skip this table on a clean Cursor install.

Record clashes in the MCP note.

| Plugin habit | Prefer |
|--------------|--------|
| `review-and-ship` / `new-branch-and-pr` auto-push + PR | wrap-up; push/PR only when asked |
| Superpowers `writing-plans` + TDD-sized steps | Repo write-plan; few active plans |
| Superpowers `brainstorming` spec-file gate before any edit | Recommend + options on product/architecture; tiny docs/config: just do it |
| Superpowers TDD as iron law | When there is a real test runner, not JSON/docs-only |
| Playwright `run-smoke-tests` | Only if this repo has that suite |
| Notion as a second backlog | In-repo TODO unless they asked for Notion |
| Canvas by default | Only when they ask for a canvas |

`finishing-a-development-branch` is fine **if it asks**. Still no production merge unasked.

---

## Reference C — Cursor User Rule (optional, all machines)

Trigger: setting up User Rules so commit-as-you-go repos stop fighting the injection.

Settings User Rules **cannot remove** the injected git guardrail. They **can** add standing authorisation. Paste into **Customize → Rules → User Rules**. Positive wording only. Do not say “ignore Cursor defaults”.

> In repositories that have a project agent constitution (`AGENTS.md` plus always-on project rules), I explicitly and continuously authorise you to commit locally after each coherent, verified logical unit, without asking me each time, unless that constitution says ask-first. Follow that constitution’s git policy. Never push, open a PR, or merge to production unless I ask in the current message. Keep git safety: no git-config changes, no force-push of shared branches, no skipping hooks, no committing secrets. When asking me to decide, give a recommendation, options, and a short explanation, and challenge weak defaults.

Repos **without** a constitution still get ask-first commits from the injection. That is fine.

---

Paste this file into a new project (e.g. `.cursor/brief/agent-workspace-blueprint.md`) or follow §3 and generate a tree **adapted to that project**.

§1 is the stable centre. Folders and taxonomy are guidance. Change them when the project teaches you what it needs.
