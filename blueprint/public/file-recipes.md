# File recipes

Up: [README.md](README.md)

Trigger: writing the files. Templates to adapt, not mandatory filenames.

## Constitution (always-on rule)

Owner (intake name) · recorded locale · **commit as you go** as very strong default with **continuous standing local commit authorisation** in the constitution (counter to Cursor's injected guardrail, [../reference/git-guardrail.md](../reference/git-guardrail.md)); record ask-first on `AGENTS.md` only if intake opted out · git policy and Verify live on `AGENTS.md`: point, do not restate · Always/Ask/Never · one-home pointers · session loop (including suggest a new chat) · rules may change · must-not list · tracked files stay publishable. Visual products: light/dark, motion, `prefers-reduced-motion` (or a glob rule, not always-on, if the repo is mixed).

Do **not** paste architecture, local-dev runbooks, or plugin manuals here. Link them.

## TODO

**Imminent** · **Planned** · **Ideas** · **Discuss** · **Completed** as `- [x] YYYY-MM-DD: …` (never leave checked boxes in active sections).

Home on this shape: **gitignored** `.cursor/TODO.md`. Use a tracked `docs/TODO.md` only if the project wants a public roadmap.

Add when later/blocked/debt. Do **not** park this-turn requested work only in the TODO. Session todos = this chat; file TODO = persistent.

## Learned memory

- Personal preferences → **gitignored** `.cursor/user-preferences.md`
- Publishable workspace facts → tracked `AGENTS.md` under **Workspace facts**

If it is not safe on GitHub, it is not a workspace fact. Writer: a repo `update-memory` skill run from wrap-up (in session, no subagent). Keep the Marketplace Continual Learning plugin **off**: it writes Learned sections, including personal preferences, onto the public root `AGENTS.md`.

Whatever the home: ≤12 bullets per section; no secrets, one-offs, or copies of process/ADR/TODO. Constitution wins if a bullet contradicts it; prune the bullet. Prune test per bullet: would removing it cause mistakes? Anything an agent would rediscover in one session of reading the repo does not earn a bullet. **No** `docs/agent-notes.md`; a short local notes file only when there is no memory mechanism at all.

Gitignore `.cursor/hooks/state/` and `.cursor/tmp/` (session scratch scripts).

## Code practices (glob rule)

When the repo has application code: `alwaysApply: false` with globs for the main languages (e.g. `**/*.{ts,tsx,js,jsx,py,go,rs}`). Point at [../reference/coding-practices.md](../reference/coding-practices.md); repeat only project-specific overrides (naming, test layout, forbidden patterns). Skip if the repo is docs-only or [minimal.md](../minimal.md) tier with a **Code** line on `AGENTS.md`.

## Collaboration rule

Before acting: git status, terminals, backlog/plans. Prefer **Cursor IDE browser** (`browser_tabs` → new tab → lock → work → unlock → close yours). User’s Chrome/DevTools (`list_pages` → `new_page`) only if they already have Chrome in play or asked.

When committing: stage only your paths; mention foreign dirty files in chat; never revert others' WIP, kill foreign processes, or force-push shared branches. Leave notes another agent can continue from.

## Changelog

Same commit, today’s `## YYYY-MM-DD`. `### Added` / `### Changed` / `### Fixed` as useful. Notable **and publishable** only. Scope: the product or kit; this repo's own agent harness never appears here.

## Cursor plans

`.cursor/plans/` is **gitignored** on this shape; plans stay local. Cursor Plan mode and write-plan output. Few active; archive or delete when done. Link process/ADR/TODO; no secrets.

## ADRs

Context, decision, alternatives, consequences. Include the user's name as author (from intake). Proposed → Accepted → freeze (typos / supersession / dated amendments). `ADR-0001-short-title.md` or one `DECISIONS.md` on tiny projects.

Write ADRs **as you go**: when a decision is hard to reverse, cross-cutting, or options were argued, record it in the same slice, without waiting to be asked. Skip trivial fixes. On a public repo, ADRs describe the product or kit and must read cleanly without local files.

Keep the folder `README.md` as an index (number, title, status). Lifecycle: Proposed → Accepted → Superseded, linked both ways when superseding. Before changing an area, check the index for ADRs that bind it; when you meet an undocumented convention worth keeping, draft the missing ADR.

## Production guardrail (deploy-on-push repos)

When a branch auto-deploys, add a short always-on rule naming the protected branch: no checkout, commit, merge, or push to it unless the owner asks in the current message; the default route is topic branch → PR. Absolute wording, no exceptions inside the rule. This is a legitimate place to spend always-on budget. Add the rule as soon as the deploy branch is named, not when the first deploy happens: "will eventually auto-deploy" already qualifies.

## Docs map

Writing docs, public vs private homes, or an optional wiki: [../docs.md](../docs.md).

One table of topic → home beats duplicated conventions. Put it where humans look (`README` or `docs/`). Point at it from `AGENTS.md`; do not copy it there.

## Project MCP note (living)

Home on this shape: **gitignored** `.cursor/agent-mcp.md`. **This project only.** Do not paste plugin manuals.

| Section | Purpose |
|---------|---------|
| **Last reviewed** | ISO date. Calendar window **~30 days**. Also refresh on **significant scope shift** ([mcp-tooling.md](mcp-tooling.md)). |
| **In use** | Installed and used here: when / do-not. Prefer a well-known CLI when the model already knows it (e.g. `gh`) if MCP would only duplicate it. |
| **Recommended, not installed** | Helps *this* stack: how to install, why, what not to grant |
| **Deferred** | Wrong for now, including assistant MCP vs **product** integration |
| **Skill precedence** | Plugin vs constitution: prefer / do-not |

Optional `.cursor/mcp.json` for project stdio servers. Secrets: `${env:NAME}` or `envFile` → gitignored `.env`. Ship `.env.example` with **names only**. Reload MCP after config changes.

Recommend; never silent-install; never assume plugins are present.
