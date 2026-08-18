# Blueprint kit

This folder is the **base** to copy into future agent projects.

| File | What |
|------|------|
| [agent-workspace-blueprint.md](agent-workspace-blueprint.md) | How an agent bootstraps a workspace. Guidelines, not a rigid spec. |

## New project

1. Copy `agent-workspace-blueprint.md` to the new repo, usually `.cursor/brief/agent-workspace-blueprint.md`.
2. In that project, ask the agent to follow the blueprint (intake → research tooling → propose layout → scaffold).
3. Keep the blueprint file in the consumer repo if you want later sessions to re-read policy. Do not treat this GitHub repo’s live `.cursor/` as the copy source.

## This repo (meta)

Edits to the canonical file happen **here**. The live Cursor harness (`.cursor/`) is local and untracked. Public changelog and ADRs live in the repo root / `docs/adr/`.
