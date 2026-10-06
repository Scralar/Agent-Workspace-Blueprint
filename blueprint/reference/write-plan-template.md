# Reference H: Write-plan template

Shared by all repo shapes. Up: [../README.md](../README.md). The skill stays short; this file is the shape of the plan.

Trigger: multi-phase work. The user approves the plan before large execution unless they said to run with it.

## Plan

- Title, owner, status.
- Recommendation, options, and why, before any phase.
- Exact paths. Link current vendor docs. Do not paste them.
- No phase for work nobody asked for.

Link the constitution, ADRs, and the backlog. Do not copy them into the plan.

## Each phase

A phase is done when its gates are true, or explicitly not applicable.

| Gate | Exit question |
|------|----------------|
| Behaviour | What changed for the user or the caller? |
| Automated | Which command passed? |
| Manual | What did a person, or the agent, actually run? |
| Debug | If something failed, what evidence (log, test output, MCP result) did you read before explaining it? |
| Docs | Which one home was updated, or why none? |
| Commit | Commit hash, or why this phase does not commit yet? |

## Executor

- Explain progress at each phase boundary.
- Stop after four failed attempts on the same blocker. Say what you tried and the most likely next step. Do not start a fifth variation.

## Folder README

Private shapes track `.cursor/plans/`. The folder README states what is tracked, who may edit an in-flight plan, where finished plans go, and pointers to an ADR or the backlog. The public shape gitignores plans; a local README is optional and uses the same headings.
