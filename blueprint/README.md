# Agent workspace blueprint

**Audience:** an LLM (or human) bootstrapping a **new** software project so later agent sessions can ship without re-learning conventions, losing deferred work, or colliding.

**Harness:** Cursor Agent (project rules, `.cursor/skills/`, MCP, Plan mode). If you reuse these ideas in Claude Code, Codex, or another environment, adapt paths and drop Cursor-only sections. Do not assume `.cursor/` exists there.

**Guidelines, not a rigid spec.** Adapt, challenge, or replace defaults. Ask with recommendation + options + why. Never silently ignore production safety or parallel-agent hygiene.

Optimise for short rules, frozen decisions where they matter, a living backlog, and **minimal ceremony**.

Do **not** implement product features until a workable agent framework exists unless the user says skip setup or proceed in parallel.

Always-on files must stay **minimal**. Extra always-on instructions are usually followed, and they make unrelated tasks slower and more expensive. Put only what is true on **every** turn in `AGENTS.md` and `alwaysApply` rules. Everything else is a pointer, a glob/description rule, or a skill.

Copy this **folder** into a new project (typical home: `.cursor/brief/`) or follow [bootstrap.md](bootstrap.md) and generate a tree adapted to that project. [policy.md](policy.md) is the stable centre. Folders and taxonomy are guidance.

## How to use

These are **steps**. Open a later file only when its trigger matches. Do not ingest the whole folder before acting.

1. **Intake** ([bootstrap.md](bootstrap.md)) if anything below is unknown: name, variant, commit policy, locale, cheapest verify command.
2. Pick the **variant** folder for the repo's shape (below). It owns the day-one tree, sample `AGENTS.md`, memory homes, and git-tracking policy.
3. Read [policy.md](policy.md) and [bootstrap.md](bootstrap.md). Skim [philosophy.md](philosophy.md). Open other files by trigger.
4. **Research current tooling** ([mcp-tooling.md](mcp-tooling.md)) before locking a stack. This kit goes stale; the Marketplace does not.
5. Propose a layout for *this* repo (keep / drop / replace). Challenge weak defaults. The variant tree and sample `AGENTS.md` are a starting shape, not a mandatory schema.
6. Scaffold, commit locally, summarise, including plugins still to install.
7. Keep the project MCP note current as the work changes.

## Variants

| Folder | Use when |
|--------|----------|
| [public/](public/README.md) | Anyone can clone the repo. Tracked files must stay publishable. |
| [private-solo/](private-solo/README.md) | Private repo, one maintainer. Working files tracked. |
| [private-team/](private-team/README.md) | Private repo, collaborators or several parallel agents. |

The core files below apply to **every** variant; variant folders hold only what differs (tree, sample entry, memory homes, tracking policy). Do not copy core content into a variant; link it. If the repo's shape changes later (goes public, gains collaborators), switch variant and migrate the differing files.

## Files (core)

| File | Open when |
|------|-----------|
| [policy.md](policy.md) | Working agreements (always, with bootstrap) |
| [philosophy.md](philosophy.md) | Why the kit exists; one home per fact |
| [bootstrap.md](bootstrap.md) | Intake, bootstrap order, rule types, budgets, self-check |
| [sessions.md](sessions.md) | Session loop, git, parallel work, suggesting a new chat |
| [file-recipes.md](file-recipes.md) | Writing TODO, ADRs, changelog, MCP note, plans folder |
| [skills.md](skills.md) | Adding or changing skills |
| [mcp-tooling.md](mcp-tooling.md) | MCP, browser, outbound, GitHub, tooling refresh |
| [extras.md](extras.md) | Visual product, naming, scoped rules, plans hygiene |
| [done.md](done.md) | Definition of done, do-not list |
| [reference-git-guardrail.md](reference-git-guardrail.md) | Agent will not commit, or you are writing git policy |
| [reference-plugin-clashes.md](reference-plugin-clashes.md) | Superpowers, Team Kit, Playwright, Notion, or Canvas are in play |
| [reference-user-rule.md](reference-user-rule.md) | User wants a Settings User Rule on this machine |

## New project

1. Copy this folder into the new repo, usually `.cursor/brief/`.
2. Ask the agent to follow this README (intake → research tooling → propose layout → scaffold).
3. Keep the folder in the new repo if later sessions should re-read policy. Do not treat this GitHub repo’s live `.cursor/` as the copy source.

## This repo (meta)

Edits to the canonical kit happen **here**. The live Cursor harness (`.cursor/`) is local and untracked. Public changelog and ADRs live in the repo root / `docs/adr/`.
