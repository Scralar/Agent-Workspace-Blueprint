# ADRs

Up: [../README.md](../README.md). An ADR records why. Home: `docs/adr/ADR-NNNN-short-title.md`, with `docs/adr/README.md` as an index (number, title, status). Tiny projects may use one `DECISIONS.md`.

## Write one when

- The choice is hard to reverse, or
- it crosses more than one area, or
- options were argued and a later session could not tell which won.

Litmus: would a later agent in a new chat do the wrong thing without it, and fail to recover the answer from the code? If not, skip it.

Do not write one for bug fixes, refactors, test layout, plans or preferences. Write it in the same change as the decision, without being asked. At wrap-up, name the ADR or say in one sentence why none.

## Lifecycle

Proposed, Accepted, Superseded by ADR-NNNN (linked both ways). Accepted ADRs are frozen apart from typo fixes and dated amendments.

## Template

```markdown
# ADR-NNNN: Title

- Status: Proposed
- Date: YYYY-MM-DD
- Owner: {name}

## Context
What forces the decision?

## Decision
What we chose.

## Alternatives
What else we considered, and why not.

## Consequences
What gets easier, what gets harder, what we deferred.
```
