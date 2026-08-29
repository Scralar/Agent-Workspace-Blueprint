# Adopting an existing repo

Up: [README.md](README.md). Shared by all repo shapes.

Use when the repo already exists, with or without a partial agent harness. The goal is the same end state as a fresh bootstrap, reached by migration instead of scaffolding. Do not bulldoze: working conventions that merely differ in filename are renamed, not rewritten.

## 1. Assess

- Intake as usual ([the shape folder's](README.md) `bootstrap.md`): owner, shape, commit policy, locale, Verify command.
- Inventory what exists: `AGENTS.md` or `CLAUDE.md`, `.cursorrules` (legacy), `.cursor/rules/`, any backlog file, ADRs or `DECISIONS.md`, changelog, MCP notes, skills, plans, scratch files.
- Read before judging. Note what is live, what is stale, and what contradicts what.

## 2. Migrate, smallest moves first

| Found | Do |
|-------|----|
| No `AGENTS.md` (even with rich rules) | Write one: map, where-things-live, Verify, git policy, security. Rules without an entry file get missed. |
| `CLAUDE.md` only | Move content to `AGENTS.md`; make `CLAUDE.md` a one-line `@AGENTS.md` import or symlink. |
| `.cursorrules` (legacy) | Convert to `.cursor/rules/*.mdc` with the narrowest activation type that works. |
| Backlog under another name (`backlog.md`, scattered TODOs) | Move to the shape's standard home; keep the section taxonomy (Imminent / Planned / Ideas / Discuss / Completed). One backlog only. |
| `docs/agent-notes.md` or another scratchpad | Retire it: durable preferences to the shape's memory homes, decisions to ADRs, tasks to the backlog, the rest deleted. |
| README contradicting ADRs or rules | Fix the stale one **now**; agents trust the first file they read. |
| Plan sprawl, `tmp/` scratch | Archive completed plans, delete dead ones, gitignore `.cursor/tmp/`. |
| A copied blueprint snapshot (e.g. `.cursor/brief/`) | Keep or refresh it from the canonical kit; note the source so it can be re-synced. |
| Duplicated facts across files | Pick the one home, link from the rest, in the same change. |

## 3. Finish like a bootstrap

Run the shape folder's self-check (`bootstrap.md`), write the MCP note from **current** research, and record the adoption as a short ADR or decision note (what moved, what was retired, what was kept deliberately non-standard). Commit under the recorded policy; no push unasked.

Migrate incrementally if the repo is busy: entry file and Verify first, backlog second, memory homes third, cosmetics last.
