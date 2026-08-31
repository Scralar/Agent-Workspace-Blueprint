# Contributing

Thanks for wanting to improve the kit. This file is for humans and for agents working on a fork or pull request.

## What to change

| You want to… | Change |
|--------------|--------|
| How a *new* project bootstraps | `blueprint/` (all three shape folders in the same commit if the idea is shared) |
| Optional use-case advice | `blueprint/extras/` (short modules) or the tooling catalogue |
| Why a kit decision exists | `docs/adr/` |
| How community files fit together | [`docs/community.md`](docs/community.md) (map). Do not invent a second contributing guide. |
| This GitHub repo's welcome, licence, or process | Root files (`README.md`, this file, `COLLABORATORS.md`, …) |

Do not add a second map. [`AGENTS.md`](AGENTS.md) is the agent entry. [`README.md`](README.md) is the human entry.

## Bar for kit defaults

A change that would become the default for every future project should be **general** (useful beyond one repo), **proven** (survived real use, or is an established public-repo norm), and **publishable** (no secrets, no personal preferences). See [`blueprint/extras/README.md`](blueprint/extras/README.md).

Propose first on large or controversial changes. Small docs and link fixes can go straight to a pull request.

## How to send a change

1. Fork (or branch, if you have write access).
2. Edit tracked files only. Do not commit `.cursor/`, `.env`, or editor settings.
3. Use British English (en-GB) in docs and commit messages. No em dashes.
4. Conventional Commits, for example `docs(kit): …` or `docs(repo): …`.
5. Run `node scripts/check-links.mjs` and fix failures.
6. Open a pull request against `main`. Fill in the template.

Maintainers squash or rebase at their discretion. Do not force-push `main`.

## What not to send

- Personal preferences, private backlog items, or a dump of your machine's MCP inventory
- Copies of Marketplace plugin `SKILL.md` files
- Secrets, tokens, or real names and emails
- A rewrite of the three shape folders into one "shared core" without an ADR (that was tried; see ADR-0002 and ADR-0003)

## Issues

Use an issue for a kit gap, a broken link you do not want to fix yourself, or a question. Search first. Security reports: [`SECURITY.md`](SECURITY.md).

## Licence

By contributing you agree your changes are licensed under the [MIT Licence](LICENSE).
