# ADR-0012: Consumer-proven references stay optional

- **Status:** Accepted
- **Date:** 2026-10-07
- **Owner:** Scralar

## Context

A private-team consumer of the live kit, after many slices, proposed several upstream changes: a testing harness, a longer write-plan, token and MCP efficiency, a loopback control-plane extra, a sharper ADR bar, an optional git rule, and three session-loop changes (wrap-up must name an ADR, a new always-on budget, a lighter collaboration scan).

The hooks sample also denied `.cursor/plans/` while the private shapes say plans are tracked.

These ideas are general and had survived real use. Baking all of them into every new repo's session loop would raise ceremony for docs-only and minimal projects.

## Decision

1. **Correct the hooks sample** in [hooks.md](../../blueprint/reference/hooks.md) so private shapes may stage `.cursor/plans/`. The public shape still drops `plans` from the allow list. Preferences, the TODO, the MCP note, `tmp/`, and `hooks/state/` stay denied.

2. **Add shared references, not new required day-one files:**
   - [testing-harness.md](../../blueprint/reference/testing-harness.md) (Reference G)
   - [write-plan-template.md](../../blueprint/reference/write-plan-template.md) (Reference H)
   - [token-efficiency.md](../../blueprint/reference/token-efficiency.md) (Reference I)
   - [adr-decision-bar.md](../../blueprint/reference/adr-decision-bar.md) (Reference J)
   - [loopback-control-plane.md](../../blueprint/extras/loopback-control-plane.md) on the extras shelf

3. **Optional recipes** in all three file-recipes: a short `git.mdc` when the constitution is too long for the standing commit authorisation to be seen, and a short `testing.mdc` when the repo has behaviour worth guarding. Both count against the always-on budget. Neither is added to the day-one tree.

4. **One small default:** wrap-up and the definition of done ask for one sentence on which tests ran, or why none. Docs-only work answers "why none".

5. **Not in this decision:** requiring wrap-up to name an ADR, changing the ~1–3 always-on cap, and splitting the collaboration scan into full versus explain-only. Those stay open until the owner picks them.

## Alternatives

| Option | Why not |
|--------|---------|
| Copy the consumer's rules and skills into the kit | Product-specific, and it would raise the default ceremony |
| Change the session loop in the same commit | Those three items are new defaults for every future project; the references do not need them |
| Leave the hooks sample denying plans | It contradicts the private shapes' file-recipes |

## Consequences

- Shape folders gain links, not second copies of the references.
- Testing policy stays out of ADRs. The bar for that is Reference J.
- A later ADR, or an amendment here, records the three open session-loop choices once the owner decides.
