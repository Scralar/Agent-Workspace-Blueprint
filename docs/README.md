# Docs

Published writing about **this GitHub repository** and **why the kit looks like this**. Not the kit itself (that is [`blueprint/`](../blueprint/README.md)). Not a private backlog or personal notes (those stay out of git).

Humans who want to *use* the kit start at the root [`README.md`](../README.md). Agents working *on this repo* start at [`AGENTS.md`](../AGENTS.md). Open a file below only when its trigger matches.

## What lives here

| Path | Open when |
|------|-----------|
| [community.md](community.md) | You need to know how contributing, collaborators, conduct, and security fit together |
| [adr/](adr/README.md) | A kit decision needs a why, or you are writing an ADR |

That is the whole folder on purpose. Process *files* that GitHub looks for (`CONTRIBUTING.md`, `COLLABORATORS.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`, `LICENSE`) stay at the **repo root** so clones and GitHub's community checklist find them. This folder explains them. It does not replace them.

## What does not live here

| Need | Home |
|------|------|
| Copyable agent workspace | [`blueprint/`](../blueprint/README.md) |
| How to send a pull request | [`CONTRIBUTING.md`](../CONTRIBUTING.md) |
| Who can push to `main` | [`COLLABORATORS.md`](../COLLABORATORS.md) |
| Licence text | [`LICENSE`](../LICENSE) |
| Kit history (what shipped) | [`CHANGELOG.md`](../CHANGELOG.md) |
| Private TODO or MCP inventory | gitignored `.cursor/` (not published) |

## Writing here

- British English. Publishable. No real names, emails, or other people's repos.
- One home per fact: if the rule already lives in `CONTRIBUTING.md` or an ADR, link it. Do not paste a second copy.
- New ADR: copy [`adr/TEMPLATE.md`](adr/TEMPLATE.md), take the next number, add a row to [`adr/README.md`](adr/README.md).
