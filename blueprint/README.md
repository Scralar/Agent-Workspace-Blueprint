# Agent workspace blueprint

**Audience:** an LLM (or human) setting up a software project so later agent sessions can ship without re-learning conventions, losing deferred work, or colliding.

**Harness:** Cursor Agent (project rules, `.cursor/skills/`, MCP, Plan mode). If you reuse these ideas in Claude Code, Codex, or another environment, adapt paths and drop Cursor-only sections. Do not assume `.cursor/` exists there.

**A guidebook, not a rulebook.** Adapt, challenge, or replace defaults; mix pieces from different folders when the project genuinely needs it. Ask with recommendation + options + why. Never silently ignore production safety or parallel-agent hygiene.

Optimise for short rules, frozen decisions where they matter, a living backlog, and **minimal ceremony**.

Do **not** implement product features until a workable agent framework exists unless the user says skip setup or proceed in parallel.

## Choose your path

1. **Tiny repo** (small plugin, template pack, scripts, exercises)? → [minimal.md](minimal.md): one `AGENTS.md`, done. Come back only when the repo outgrows it.
2. **Existing repo** with history or a partial harness? → [adopt.md](adopt.md) first, alongside the shape folder it maps to.
3. **Otherwise**, pick the folder for the repo's shape and follow its `README.md` top to bottom. Do not mix folders for the core files.

| Folder | Use when |
|--------|----------|
| [public/](public/README.md) | Anyone can clone the repo. Tracked files must stay publishable. |
| [private-solo/](private-solo/README.md) | Private repo, one maintainer. Working files tracked. |
| [private-team/](private-team/README.md) | Private repo, collaborators or several parallel agents. |

Each folder carries the full reading path: policy, philosophy, bootstrap, sessions, file recipes, skills, MCP guidance, and that shape's day-one tree, sample `AGENTS.md`, memory homes, and gitignore. If the repo's shape changes later (goes public, gains collaborators), switch folders and migrate what differs (tracking, memory homes, entry file).

## Shared files (all shapes)

| File | Open when |
|------|-----------|
| [minimal.md](minimal.md) | The repo is tiny; also the per-stack Verify command table |
| [adopt.md](adopt.md) | The repo already exists; migrate instead of scaffold |
| [extras/](extras/README.md) | After bootstrap, when the project matches a module (web design, workflow automation, …) |
| [extras/tooling-catalogue.md](extras/tooling-catalogue.md) | Picking MCP, skills, hooks, or plugins; then re-verify live |
| [reference/git-guardrail.md](reference/git-guardrail.md) | Agent will not commit, or you are writing git policy |
| [reference/plugin-clashes.md](reference/plugin-clashes.md) | Superpowers, Team Kit, Playwright, Notion, or Canvas are in play |
| [reference/user-rule.md](reference/user-rule.md) | User wants a Settings User Rule on this machine |
| [reference/hooks.md](reference/hooks.md) | User wants hard enforcement of never-rules, not advice |

## Follow the kit

**Default:** the agent is already reading this folder from GitHub. Follow the path above (intake → research tooling → propose layout → scaffold) **in the consumer repo**. Do not scaffold inside this kit repository.

**Optional:** copy this folder into the consumer repo (for example `.cursor/brief/`) for offline use or a pinned revision. Note the source URL (`https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint`) so it can be refreshed. Do not copy this GitHub repository's live `.cursor/` tree.

## The kit improves itself

When a project changes its way of working in a manner that would help other projects, the agent proposes upstreaming it to this kit: use-case material to [extras/](extras/README.md), core changes to the shape folders. Bar and consent rules: [extras/README.md](extras/README.md). Propose, never act silently.

## This repo (meta)

If you are reading a local snapshot inside another project, ignore this section; it applies only to the canonical kit repository.

Edits to the canonical kit happen **here**. The three shape folders are deliberate near-copies: a dedicated path per repo shape beats hunting through shared files. When you change a shared idea in the core files, change it in **all three** folders in the same commit. Shape-agnostic leaves (`reference/`, `extras/`, `adopt.md`, `minimal.md`) live once. The live Cursor harness (`.cursor/`) is local and untracked. Public changelog and ADRs live in the repo root / `docs/adr/`. The GitHub wiki is a published view of `docs/` (ADR-0008). Community files (`LICENSE`, `CONTRIBUTING.md`, `COLLABORATORS.md`, `.github/`) describe this GitHub repository; do not copy them into a consumer project unless that project wants the same licence and process.
