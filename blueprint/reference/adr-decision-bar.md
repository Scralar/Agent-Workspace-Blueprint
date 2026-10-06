# Reference J: ADR decision bar

Shared by all repo shapes. Up: [../README.md](../README.md). How to file one: the shape's file-recipes (ADRs).

Trigger: deciding whether this slice needs an ADR.

## Write one when

- The choice is hard to reverse.
- It is cross-cutting (more than one home).
- Options were argued, and a later session would not see which option won.

Write it in the same slice, without waiting to be asked.

## Do not write one when

- The change is a trivial fix, a typo, or a refactor that preserves behaviour.
- It is testing policy. That lives in `docs/testing.md` ([testing-harness.md](testing-harness.md)).
- It is a task plan (`.cursor/plans/`, [write-plan-template.md](write-plan-template.md)).
- It is a preference or a backlog item.

## Litmus

Would a later agent, in a new chat, do the wrong thing without this page, and fail to recover the answer by reading the code and the one homes? If they would recover it, skip the ADR.

## Wrap-up

Name the ADR this slice wrote, or one sentence on why none. Skipping is a normal outcome. The sentence is what stops a real decision from disappearing.
