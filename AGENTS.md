# Agent entry — Agent Workspace Blueprint

This file is **public**. It is the map for anyone who clones this GitHub repository. Do not put private or internal working notes here.

## Read order

1. This file
2. [`blueprint/agent-workspace-blueprint.md`](blueprint/agent-workspace-blueprint.md)
3. [`blueprint/README.md`](blueprint/README.md)
4. [`docs/adr/`](docs/adr/)

Maintainer-only entry (gitignored, not present in a fresh clone): `.cursor/AGENTS.md`.

## What this repo is

A copyable kit for bootstrapping Cursor agent workspaces. Copy `blueprint/` into a new project and follow that file. The `.cursor/` tree in this repository is local maintainer state. It is not the kit.

## Verify

none yet

Prefer the smallest scoped run when a check exists. Report failures, not pages of passing output.

## Git

Never commit secrets. Never commit `.cursor/`. Do not push, open a PR, or merge unless asked in the current message.

## Always / Ask first / Never

Always: keep tracked files publishable.

Ask first: push, PR, merge.

Never: secrets; private backlog, tooling inventory, or Learned memory in tracked files.
