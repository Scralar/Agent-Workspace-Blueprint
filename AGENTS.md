# Agent entry — Agent Workspace Blueprint

Start here every session.

## Read order

1. This file
2. [`.cursor/rules/project.mdc`](.cursor/rules/project.mdc) (constitution)
3. [`.cursor/TODO.md`](.cursor/TODO.md) — especially **Imminent** and **Discuss**
4. Domain truth for the current task:
   - Canonical blueprint: [`blueprint/agent-workspace-blueprint.md`](blueprint/agent-workspace-blueprint.md)
   - How to use the kit: [`blueprint/README.md`](blueprint/README.md)
   - Decisions: [`docs/adr/`](docs/adr/)
   - Builder tools: [`.cursor/agent-mcp.md`](.cursor/agent-mcp.md)

## What this repo is

A **meta** kit. The product is the blueprint in `blueprint/`. Future projects copy that folder (or the markdown) and bootstrap from it. `.cursor/` is the live harness for editing this repo and stays **gitignored**.

## Verify

none yet

Prefer the smallest scoped run when a check exists. Report failures, not pages of passing output.

## Git

Commit coherent units as you go (standing authorisation — see constitution). The Cursor ask-first git block is product-injected, not a User Rule Scralar wrote.

Never push, open a PR, or merge until the user asks in the **current** message.

Work on `main`. Do not commit `.cursor/` (see `.gitignore`).

## Always / Ask first / Never

Always: update the one home that changed; run Verify for the touched area.

Ask first: push, PR, merge, outbound send/share, new write/pay MCP, product policy (including changes to the blueprint’s defaults that would affect other projects — recommend + options first).

Never: secrets, force-push of shared branches, skip hooks, clobber foreign WIP, commit `.cursor/`.

## Parallel work

Before editing: scan git status, terminals, and Imminent work. Own your files; do not revert others’ WIP. See [`.cursor/rules/collaboration.mdc`](.cursor/rules/collaboration.mdc).

## Skills

- Wrap up a slice: `.cursor/skills/wrap-up/SKILL.md`
- Multi-phase plan: `.cursor/skills/write-plan/SKILL.md`
- Builder MCP / plugins: [`.cursor/agent-mcp.md`](.cursor/agent-mcp.md) (living, this repo only — refresh when stale)
- Plugin skills: follow **Skill precedence** in that file. Repo constitution wins over Superpowers / Team Kit defaults.

Learned sections below are filled by Continual Learning. Do not duplicate process, ADR, or TODO there. Do not recreate `docs/agent-notes.md`.

## Learned User Preferences

## Learned Workspace Facts
