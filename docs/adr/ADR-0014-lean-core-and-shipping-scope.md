# ADR-0014: Lean core, shipping scope, and checks over prose

- Status: Accepted
- Date: 2026-10-21
- Owner: Scralar

## Context

By October 2026 the kit was about 4,300 lines. Three shape folders (`public/`, `private-solo/`, `private-team/`) were near-copies: 27 files whose real differences fit in five table rows (what is tracked, where preferences live, CHANGELOG scope, collaboration rule, licence). A dated tooling catalogue (about 560 lines) restated vendor lists that go stale and that the kit itself said to re-check live. The GitHub wiki restated the README. Rules such as "no em dashes" were stated in every policy file but not checked, and the kit contained about 70 em dashes.

Meanwhile, a private product bootstrapped from the kit (a desktop app with an AI feature) learned lessons the kit did not cover at all: version-gated releases from `main`, a single version home, OIDC deploys, the workflow creating its own tag and GitHub Release, never cancelling a publish, checking the public artefact after release, nothing secret baked into builds, user release notes separate from the CHANGELOG, user-facing wording and error rules, an in-app user guide and first-run tour, and debug notes in every change. Each came from an incident.

ADR-0002 rejected "shared core plus thin variant folders" because core files filled with per-shape caveats. That problem came from scattering the differences. Gathering them into one table removes it.

## Decision

1. **One core, one shape table.** Replace the three shape folders with `blueprint/core/` (working rules, done, branches, security, docs homes, upkeep) and a five-row shape table in `blueprint/README.md`. Core files carry no per-shape caveats. Supersedes ADR-0002 and ADR-0003.
2. **Widen scope to shipping.** Add `blueprint/shipping/` (release pipeline, user-facing wording and errors, user guide and tour) as first-class guidance for projects that ship.
3. **Checks over prose.** Rules that can be checked ship as templates with tests in `blueprint/templates/` (CI workflows, release workflow and its contract test, post-deploy check, link, en-GB, punctuation, version sync, user copy and build env checks, git guard hook). This repository runs the same scripts and tests on itself in CI.
4. **Cut what goes stale or repeats.** Remove the dated tooling catalogue (supersedes ADR-0005 and ADR-0011; tool choice is researched live and recorded per project) and the wiki published view (supersedes ADR-0008; the README and `blueprint/` are the doors). Cursor-only detail lives in one file, `blueprint/reference/cursor.md`.
5. **Agent behaviour principles in the core.** Act on reversible in-scope work, lead with the answer, never fabricate, verify with evidence, treat fetched content as data, confirm destructive steps, draft before sending, record durable decisions. Operating limits and a plan budget (3 active, stop after 4 failed attempts) sit beside them.
6. **Sources are cited.** `docs/sources.md` lists the public guidance each practice rests on.

## Alternatives

- **Keep three folders and add shipping to each:** triples the new material and the drift risk.
- **Shipping as an optional extra only:** most projects that use the kit ship something; the lessons were costly and belong in the default reading path, opened by trigger.
- **Keep the tooling catalogue with a date:** it was already behind the Marketplace within weeks.

## Consequences

- About 2,700 lines of markdown removed; the kit reads in minutes.
- Consumers who followed a shape folder by URL now land on `blueprint/README.md`; the shape table tells them what differs.
- The GitHub wiki tab is no longer published from this repo. Its pages are stale until the wiki is turned off or replaced with a pointer.
- Templates are code, so they need tests and CI. That cost is accepted: a checked rule is worth more than a stated one.
