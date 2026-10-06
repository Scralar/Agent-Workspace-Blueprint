# ADR-0013: Session defaults after the consumer references

- **Status:** Accepted
- **Date:** 2026-10-07
- **Owner:** Scralar

## Context

[ADR-0012](ADR-0012-consumer-proven-references.md) landed the consumer references and left three session-loop choices open: whether wrap-up must name an ADR, whether always-on rules keep a file-count cap, and whether the collaboration scan can be lighter on explain-only turns. The owner decided those on 2026-10-07.

## Decision

1. **Wrap-up names the ADR.** Wrap-up and the definition of done say which ADR this slice wrote, or one sentence on why none. The when/when-not litmus stays in [adr-decision-bar.md](../../blueprint/reference/adr-decision-bar.md). Skipping is a normal outcome.

2. **No fixed count of always-on rules.** Drop the ~1–3 file cap in all three bootstrap tables. Add a file when a role earns it: constitution; collaboration when the shape or the work needs it (required on the team shape); optional git, testing, or efficiency when that reference says so; a production guardrail when a branch will auto-deploy. Each file stays a pointer, soft ~80 lines, except the constitution, which keeps its own row. Runbooks stay out of always-on rules. The optional `git.mdc` recipe stays optional and off the day-one tree.

3. **Tiered collaboration scan.** A full scan (git, terminals, browser, backlog and plans) runs before any edit, commit, or other mutating action. An explain-only turn still checks foreign dirty files and in-flight plans before suggesting commands.

## Alternatives

| Option | Why not |
|--------|---------|
| Hard cap of 3 or 4 always-on files | The right number depends on the repo. A cap was pushing useful roles (testing, a deploy guardrail) into the constitution |
| Full scan on every turn, including questions | Costs more than the collisions it catches when the agent will not edit |
| Leave wrap-up without naming the ADR | The bar was already written, and real decisions were still skipped |

## Consequences

- Amends ADR-0012 item 5.
- A repo may have more than three always-on files. Length and "pointer, not a manual" are what keep them short.
- Explain-only turns must still notice foreign work before suggesting git commands.
