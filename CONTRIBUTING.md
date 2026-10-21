# Contributing

Thanks for wanting to improve the kit. This file is for people. Agents edit this repository only when Ethan explicitly asks to change the blueprint.

## What to change

| You want to change | Edit |
|--------------------|------|
| How every project works | `blueprint/core/` |
| Release, user-facing text, guide and tour | `blueprint/shipping/` |
| A check, workflow or hook | `blueprint/templates/` (with its test) |
| Tool-specific or occasional detail | `blueprint/reference/` or `blueprint/extras/` |
| Why a kit decision exists | `docs/adr/` |

## Bar for kit defaults

A change that becomes the default for every future project must be **general** (useful beyond one repo), **proven** (survived real use, or backed by a public source in `docs/sources.md`) and **publishable** (no secrets, no personal preferences). It should also be **lean**: if a script or test can enforce it, send the script.

## How to send a change

1. Fork, or branch if you have write access ([COLLABORATORS.md](COLLABORATORS.md)).
2. British English, no em or en dashes, Conventional Commits.
3. Run the Verify commands in [AGENTS.md](AGENTS.md) and fix failures.
4. Open a pull request against `main` and fill in the template.

Do not force-push `main`.

## What not to send

- Personal preferences, private backlog items, or your machine's tool inventory
- Copies of plugin skills
- Secrets, tokens, account ids, real names or emails
- Dated lists of tools or vendors (they go stale; projects research live)

## Issues

Use an issue for a kit gap, a broken link, or a question. Security reports: [SECURITY.md](SECURITY.md).

## Licence

By contributing you agree your changes are licensed under the [MIT Licence](LICENSE).
