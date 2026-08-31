# ADR-0008 — GitHub wiki as a published view of `docs/`

- **Status:** Accepted
- **Date:** 2026-08-31
- **Owner:** Scralar

## Context

ADR-0006 turned the Wiki tab off so documentation stayed in git and in pull requests. That avoided a second, unreviewed edit surface. The repository now has a public community surface, and a Wiki tab is a useful place for long-form reading (Home, sidebar, ADRs) if it does not become another source of truth.

## Decision

1. **The repository stays the source of truth.** Hand-written wiki pages live in `docs/wiki/`. ADRs stay in `docs/adr/` and are copied onto the wiki at publish time.

2. **The Wiki tab is a published view.** Change `docs/`, then run `node scripts/publish-wiki.mjs`. Edits made only on the Wiki tab may be overwritten.

3. **Do not duplicate homes.** Wiki pages are short doors. They link to `README.md`, `AGENTS.md`, `CONTRIBUTING.md`, and `blueprint/`. They do not restate those files.

4. **This is this GitHub repository's surface.** Consumer projects are not asked to enable a wiki.

5. **Access stays at the GitHub default:** only people with write access can edit the wiki.

## Alternatives

| Option | Why not |
|--------|---------|
| Wiki as the only docs | Splits truth away from pull requests (the ADR-0006 objection) |
| Keep the wiki off | Leaves the Wiki tab empty on a public guidebook |
| Bidirectional sync | Invites unreviewed Wiki-tab edits back into git |
| Actions publish with `GITHUB_TOKEN` | Often cannot push to `*.wiki.git` without a personal token; not required to start |

## Consequences

- ADR-0006 point 4 (wiki stays off) is superseded.
- The published tree gains `docs/wiki/` and `scripts/publish-wiki.mjs`.
- Someone with write access runs the publish script after wiki-source or ADR changes.
