# Agent workspace blueprint

**Audience:** an LLM (or human) bootstrapping a **new** software project so later agent sessions can ship without re-learning conventions, losing deferred work, or colliding.

**Harness:** Cursor Agent (project rules, `.cursor/skills/`, MCP, Plan mode). If you reuse these ideas in Claude Code, Codex, or another environment, adapt paths and drop Cursor-only sections. Do not assume `.cursor/` exists there.

**Guidelines, not a rigid spec.** Adapt, challenge, or replace defaults. Ask with recommendation + options + why. Never silently ignore production safety or parallel-agent hygiene.

Optimise for short rules, frozen decisions where they matter, a living backlog, and **minimal ceremony**.

Do **not** implement product features until a workable agent framework exists unless the user says skip setup or proceed in parallel.

## Pick your folder

Everything you need lives inside **one** folder. Pick the folder for the repo's shape and follow its `README.md` from top to bottom. Do not mix folders.

| Folder | Use when |
|--------|----------|
| [public/](public/README.md) | Anyone can clone the repo. Tracked files must stay publishable. |
| [private-solo/](private-solo/README.md) | Private repo, one maintainer. Working files tracked. |
| [private-team/](private-team/README.md) | Private repo, collaborators or several parallel agents. |

Each folder is self-contained: policy, philosophy, bootstrap, sessions, file recipes, skills, MCP guidance, references, and that shape's day-one tree, sample `AGENTS.md`, memory homes, and gitignore. If the repo's shape changes later (goes public, gains collaborators), switch folders and migrate what differs (tracking, memory homes, entry file).

## New project

1. Copy this whole `blueprint/` folder into the new repo, usually `.cursor/brief/`. (Copy just the matching shape folder if the shape will never change.)
2. Ask the agent to follow the `README.md` of the folder matching the repo's shape (intake → research tooling → propose layout → scaffold).
3. Keep the folder in the new repo if later sessions should re-read policy. Do not treat this GitHub repo’s live `.cursor/` as the copy source.

## This repo (meta)

Edits to the canonical kit happen **here**. The three folders are deliberate near-copies: a dedicated path per repo shape beats hunting through shared files. When you change a shared idea, change it in **all three** folders in the same commit. The live Cursor harness (`.cursor/`) is local and untracked. Public changelog and ADRs live in the repo root / `docs/adr/`.
