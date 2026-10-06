# Reference G: Testing harness

Shared by all repo shapes. Up: [../README.md](../README.md). What a single test is for: [coding-practices.md](coding-practices.md). When not to open an ADR: [adr-decision-bar.md](adr-decision-bar.md).

Trigger: the repo has application behaviour worth guarding. Skip for docs-only repos and for [minimal.md](../minimal.md).

## Homes

| Home | Role |
|------|------|
| `docs/testing.md` | The floor: what Verify runs, same-slice tests, debugging closure |
| Optional `testing.mdc` | Always-on pointer at that doc. Recipe: the shape's file-recipes. Counts against the always-on budget |
| Optional `docs/testing-catalogue.md` | Which behaviours in *this* repo earn a test. Local. Not a kit file |

Testing policy stays in `docs/testing.md`. It is not an ADR.

## Same slice

The test that guards a behaviour lands in the same commit as that behaviour, or the commit says why it cannot yet.

## Proof

Wrap-up and the definition of done include one sentence: which tests ran, or why none. "Why none" is the right answer for a docs-only edit.

## Debugging closure

For a failure that involves a log or an MCP tool result, read that evidence before you describe the cause.

## Do not

Paste a test catalogue into an always-on rule. Add tests that only assert the obvious or mock everything ([coding-practices.md](coding-practices.md)). Open an ADR for the test layout.
