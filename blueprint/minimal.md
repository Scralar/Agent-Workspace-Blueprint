# Minimal tier — tiny repos

Up: [README.md](README.md). Shared by all repo shapes.

Use when the repo is small and simple: a game plugin, a template pack, a script folder, exercises, a one-file tool. A full harness would outweigh the code, and the usual failure is that agents skip setup entirely rather than build ceremony. The minimal harness is **one file**: an `AGENTS.md` with a Verify command, git policy, and a security line. Nothing else until pain demands it.

## Sample minimal `AGENTS.md`

```markdown
# Agent entry: {project}

{One line: what this repo is.}

## Verify
{cheapest real command, from the table below}

## Git
**Commit as you go** after each coherent verified unit (very strong kit default). Standing local commit authorisation; do not wait for “please commit”. Ask-first only if recorded here. Never push, open a PR, or merge unless asked in the current message. Conventional Commits.

## Code
Smallest correct diff; match existing style; no drive-by refactors. Hand-written source: split before ~500 lines gets painful (~800 hard). See kit [reference/coding-practices.md](reference/coding-practices.md) when using the full blueprint.

## Security
No secrets in git. {Where env/config secrets live, if any.}
```

## Cheapest Verify by stack

The single highest-value line in any agent workspace. Exact commands, with flags. `none yet` is honest but temporary: add the cheapest real check in the first slice that allows one.

| Stack | Cheapest verify |
|-------|-----------------|
| Node / web | `npm run build` (or `pnpm build`); add lint/test scripts when they exist |
| Java, Maven | `mvn -q package` |
| Java / Kotlin, Gradle | `./gradlew build` |
| .NET | `dotnet test` (or `dotnet build` if no tests) |
| Python | `pytest`; else `ruff check .`; else `python -m compileall .` |
| PHP / WordPress | `composer validate` plus `php -l` on touched files |
| Workflow JSON (n8n and similar) | Confirm the JSON parses; dry-run in the editor. Do not invent a CLI |
| Unity / game engine | Editor-centric; usually `none yet`, and say so honestly |
| Templates / docs only | Markdown link check, or `none yet` |

## Growing out of minimal

Add pieces only when their trigger fires, not preemptively:

- Deferred work is piling up in chat → persistent TODO
- First hard-to-reverse decision → `DECISIONS.md` (one file beats an ADR folder here)
- Rules outgrow `AGENTS.md`, or the same mistake happened twice → `.cursor/rules/`
- Collaborators, production deploys, or a real product → switch to the full folder for the repo's shape ([README.md](README.md))
- README becoming a dump, or humans asking for a Wiki tab → [docs.md](docs.md)
