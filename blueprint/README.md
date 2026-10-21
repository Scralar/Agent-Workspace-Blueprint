# Agent workspace blueprint

**Audience:** an agent (or a person) setting up a software project so later agent sessions can ship without re-learning conventions, losing deferred work, or leaking secrets.

**Harness:** written for Cursor, usable anywhere that reads `AGENTS.md`. Cursor-only detail lives in [reference/cursor.md](reference/cursor.md).

A guidebook, not a rulebook. Adapt it. Do not silently drop the safety rules.

## Start here

1. **Intake.** Ask only what you cannot find: owner name, repo visibility (public or private), solo or team, locale (default en-GB), and the cheapest real Verify command.
2. **Existing repo?** Read [reference/adopt.md](reference/adopt.md) first. Migrate, do not bulldoze.
3. **Write `AGENTS.md`** from [AGENTS.template.md](AGENTS.template.md). Hand-write it for this repo. Never commit a generated repo dump.
4. **Copy what you need** from [templates/](templates/README.md): CI, scripts, hooks, PR template. Wire the checks into Verify.
5. **Commit** the setup (`docs(agent): add agent workspace`). Do not push unless asked.
6. Stop. Build features only if the owner said to carry on.

Tiny repo (a script pack, a plugin)? Steps 1, 3 and 5 only, and keep `AGENTS.md` to Verify, git and security. Add the rest when it hurts.

## What to read when

| Open | When |
|------|------|
| [core/working-rules.md](core/working-rules.md) | Every project. How the agent behaves, operating limits, plans |
| [core/done.md](core/done.md) | Every change. Definition of done and the wrap-up |
| [core/branches.md](core/branches.md) | Choosing a branch and PR model, or before any push |
| [core/security.md](core/security.md) | Secrets, credentials, build-time variables |
| [core/docs-homes.md](core/docs-homes.md) | Where each kind of fact lives, public vs private, memory, backlog |
| [core/upkeep.md](core/upkeep.md) | Monthly check that the rules still match practice |
| [shipping/release.md](shipping/release.md) | The project ships builds or deploys |
| [shipping/user-facing.md](shipping/user-facing.md) | The project has end users: wording, errors, user guide, first-run tour |
| [reference/cursor.md](reference/cursor.md) | Cursor rule types, the injected git rule, skills, MCP, hooks |
| [reference/adr.md](reference/adr.md) | Deciding whether to write an ADR, and the template |
| [reference/adopt.md](reference/adopt.md) | The repo already exists |
| [reference/locale-en-gb.md](reference/locale-en-gb.md) | Spelling and punctuation |
| [extras/](extras/) | Web UI, workflow automation, or a product with a loopback API |
| [templates/](templates/README.md) | Copy-ready workflows, scripts, hooks and PR template |

## Repo shape: the only differences

| | Public | Private, solo | Private, team |
|---|---|---|---|
| Backlog `docs/TODO.md`, plans `.cursor/plans/`, tooling note | Gitignored (under `.cursor/`) | Tracked | Tracked |
| Personal preferences | Gitignored `.cursor/user-preferences.md` | May sit on `AGENTS.md` | Gitignored per person |
| CHANGELOG covers the agent harness | No | Yes | Yes |
| Collaboration rule (parallel agents) | If shared | Optional | Required |
| Licence | Required | Optional | Optional |

Test for anything tracked in a public repo: is it safe on GitHub? If not, it is not tracked.

## The kit improves itself

When a project finds a better way of working that would help other projects (general, proven in real use, publishable), propose it upstream to [this repository](https://github.com/Scralar/Agent-Workspace-Blueprint). Propose, never act silently.
