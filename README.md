# Agent Workspace Blueprint

A copyable kit for bootstrapping Cursor agent workspaces. Point a new project at `blueprint/`, then tell the agent to follow it.

## Use in a new project

1. Copy the [`blueprint/`](blueprint/) folder into the new repo (typical path: `.cursor/brief/`).
2. Ask the agent to follow the folder matching the repo's shape: `public/`, `private-solo/`, or `private-team/`. Each is self-contained.
3. Adapt intake (owner, repo shape, commit policy, locale, verify command). Do not paste another repo’s MCP list.

Details: [`blueprint/README.md`](blueprint/README.md).

## This repository

**Tracked (public):** the blueprint kit, `AGENTS.md`, changelog, ADRs.

**Untracked:** `.cursor/` — maintainer harness for editing the kit here. Not the artefact you copy.

Work on `main`. British English (en-GB).
