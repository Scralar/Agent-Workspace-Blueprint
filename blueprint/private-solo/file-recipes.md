# 5. File recipes

Up: [README.md](README.md)

Trigger: writing the files. Templates to adapt, not mandatory filenames.

## Constitution (always-on rule)

Owner (intake name) · recorded commit policy and locale · standing commit authorisation if commit-as-you-go · push/PR never unasked · Always/Ask/Never · one-home pointers · session loop (including suggest a new chat) · Verify pointer · rules may change · must-not list. Visual products: light/dark, motion, `prefers-reduced-motion` (or a glob rule, not always-on, if the repo is mixed).

Do **not** paste architecture, local-dev runbooks, or plugin manuals here. Link them.

## TODO

**Imminent** · **Planned** · **Ideas** · **Discuss** · **Completed** as `- [x] YYYY-MM-DD: …` (never leave checked boxes in active sections).

Home on this shape: tracked `docs/TODO.md`.

Add when later/blocked/debt. Do **not** park this-turn requested work only in the TODO. Session todos = this chat; file TODO = persistent.

## Learned memory

Learned User Preferences and Learned Workspace Facts live as sections on `AGENTS.md`. **One writer only:** a repo `update-memory` skill run from wrap-up (in session, no subagent), or the Marketplace Continual Learning plugin (hook-driven, zero setup). Never both.

Whatever the home: ≤12 bullets per section; no secrets, one-offs, or copies of process/ADR/TODO. Constitution wins if a bullet contradicts it; prune the bullet. **No** `docs/agent-notes.md`; a short local notes file only when there is no memory mechanism at all.

Gitignore `.cursor/hooks/state/`.

## Collaboration rule

Before acting: git status, terminals, backlog/plans. Prefer **Cursor IDE browser** (`browser_tabs` → new tab → lock → work → unlock → close yours). User’s Chrome/DevTools (`list_pages` → `new_page`) only if they already have Chrome in play or asked.

## Changelog

Same commit, today’s `## YYYY-MM-DD`. `### Added` / `### Changed` / `### Fixed` as useful. Notable only.

## Cursor plans

`.cursor/plans/` is **tracked** on this shape. Cursor Plan mode and write-plan output. Ship a short `README.md` in the folder stating that. Few active; archive or delete when done. Link process/ADR/TODO; no secrets.

## ADRs

Context, decision, alternatives, consequences. Include the user's name as author (from intake). Proposed → Accepted → freeze (typos / supersession / dated amendments). `ADR-0001-short-title.md` or one `DECISIONS.md` on tiny projects.

Write ADRs **as you go**: when a decision is hard to reverse, cross-cutting, or options were argued, record it in the same slice, without waiting to be asked. Skip trivial fixes.

## Docs map

One table of topic → home beats duplicated conventions. Put it where humans look (`README` or `docs/`). Point at it from `AGENTS.md`; do not copy it there.

## Project MCP note (living)

Home on this shape: tracked `docs/agent-mcp.md`. **This project only.** Do not paste plugin manuals.

| Section | Purpose |
|---------|---------|
| **Last reviewed** | ISO date. Calendar window **~30 days**. Also refresh on **significant scope shift** ([mcp-tooling.md](mcp-tooling.md)). |
| **In use** | Installed and used here: when / do-not. Prefer a well-known CLI when the model already knows it (e.g. `gh`) if MCP would only duplicate it. |
| **Recommended, not installed** | Helps *this* stack: how to install, why, what not to grant |
| **Deferred** | Wrong for now, including assistant MCP vs **product** integration |
| **Skill precedence** | Plugin vs constitution: prefer / do-not |

Optional `.cursor/mcp.json` for project stdio servers. Secrets: `${env:NAME}` or `envFile` → gitignored `.env`. Ship `.env.example` with **names only**. Reload MCP after config changes.

Recommend; never silent-install; never assume plugins are present.
