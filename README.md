# Agent Workspace Blueprint

A copyable kit for bootstrapping Cursor agent workspaces. Point a new project at `blueprint/`, then tell the agent to follow it.

## Use in a new project

1. Copy [`blueprint/agent-workspace-blueprint.md`](blueprint/agent-workspace-blueprint.md) into the new repo (typical path: `.cursor/brief/agent-workspace-blueprint.md`).
2. Ask the agent to set up the project from that file.
3. Adapt intake (owner, visibility, commit policy, locale, verify command). Do not paste another repo’s MCP list.

Details: [`blueprint/README.md`](blueprint/README.md).

## This repository

**Tracked:** the blueprint kit, `AGENTS.md`, changelog, ADRs.

**Untracked:** `.cursor/` (live rules, skills, plans, [`TODO`](.cursor/TODO.md), [`agent-mcp`](.cursor/agent-mcp.md)). That harness is for editing the blueprint here; it is not the artefact you copy.

Owner: Ethan. Work on `main`. British English (en-GB).
