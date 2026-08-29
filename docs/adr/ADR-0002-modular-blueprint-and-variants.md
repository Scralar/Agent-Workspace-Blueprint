# ADR-0002 — Self-contained blueprint folders per repo shape

- **Status:** Accepted
- **Date:** 2026-08-29
- **Owner:** Scralar

## Context

After ADR-0001, the kit lived in one long markdown file (`blueprint/agent-workspace-blueprint.md`). Agents and humans had to ingest the whole document or hunt inside it.

The kit also assumed one day-one tree and one memory model. Real projects differ:

- **Public repos** must keep tracked files publishable. Private backlog, tooling inventory, and personal preferences must not land in git.
- **Private solo repos** can track working files and may keep learned memory on a single entry file.
- **Private team repos** need shared workspace facts but must not bind collaborators to one person's preferences.

A first split used shared core files plus thin variant folders. That kept one home per fact but broke the reading path: a bootstrapping agent had to hop between its variant folder and the core, and core files carried per-variant caveats.

The Marketplace Continual Learning plugin writes Learned sections (including personal preferences) onto the root `AGENTS.md`. That is unsafe on public or shared repos.

## Decision

1. **One folder per repo shape, self-contained** — `blueprint/` holds a short chooser `README.md` and three folders: `public/`, `private-solo/`, `private-team/`. Each folder carries the **full** file set (policy, philosophy, bootstrap, sessions, file recipes, skills, MCP guidance, done, references) already tailored to that shape, plus its day-one tree, sample `AGENTS.md`, memory homes, and gitignore starter. A reader picks one folder and never leaves it.

2. **Deliberate duplication, synced in the same commit** — The folders are near-copies. When a shared idea changes, all three folders change in the same commit. A dedicated path per shape is worth the triple maintenance; the chooser README records this rule.

3. **Modular sections inside each folder** — Topic files opened by trigger, indexed by the folder `README.md`. No single long file.

4. **Memory homes by repo shape** —
   - **Public:** publishable facts on tracked `AGENTS.md` under **Workspace facts**; personal preferences in gitignored `.cursor/user-preferences.md`
   - **Private solo:** Learned User Preferences and Learned Workspace Facts on tracked `AGENTS.md`
   - **Private team:** team facts on tracked `AGENTS.md`; personal preferences gitignored per user

5. **Writer for learned memory** — Prefer a repo `update-memory` skill run from wrap-up (in session, no subagent). Keep the Marketplace Continual Learning plugin **off** wherever the root `AGENTS.md` must not receive personal preferences. On private-solo only, the plugin remains an acceptable sole writer; never run both.

6. **ADRs are written as you go** — When a decision meets the bar (hard to reverse, cross-cutting, or options were argued), the agent records the ADR in the same slice, without being asked. This is kit policy in every folder and the working rule of this repo.

## Alternatives

| Option | Why not |
|--------|---------|
| One long blueprint file | Hard to navigate; agents pay the cost of irrelevant sections |
| Shared core plus thin variant folders | Tried first. Readers hop between folder and core; core files fill with per-variant caveats; no dedicated path |
| Generate variants from one source at build time | Tooling ceremony for a docs kit; drift moves to the generator |
| Continual Learning plugin everywhere | Writes personal preferences onto shared or public `AGENTS.md` |
| ADRs only on request | Decisions evaporate between sessions; the record trails the code |

## Consequences

- New projects copy `blueprint/`, pick the folder for their shape, and follow one README top to bottom.
- Maintenance cost: shared ideas must be edited three times, in the same commit. Accepted trade-off; the chooser README states it.
- If a repo's shape changes (goes public, gains collaborators), switch folders and migrate what differs (tracking, memory homes, entry file).
- Decisions get recorded when they land, not when someone remembers to ask.
- Deferred: whether consumer projects delete the unused shape folders after bootstrap.
