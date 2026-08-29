# Extras — optional add-on modules

Up: [../README.md](../README.md). Shared by all repo shapes.

Nothing here is needed to bootstrap. Open a module after bootstrap when the project matches its trigger. This is a shelf, not a syllabus.

| Module | Open when |
|--------|-----------|
| [web-design.md](web-design.md) | The product has a user-facing UI |
| [workflow-automation.md](workflow-automation.md) | The product is an orchestrated workflow (n8n and similar) |

## Module template

One file per use case. Keep it under ~60 lines: a `Use when` line, the conventions that actually change agent behaviour, and a short do-not list. Link out for depth; never restate the core kit. No empty placeholder modules: a module exists only once someone has real experience to distil.

## Upstreaming — how this kit improves itself

When a project bootstrapped from this kit changes its way of working (the user asks for a different flow, a new skill, hook, rule, or convention), the agent should ask at wrap-up: **would this help other projects too?**

Passes the bar when it is all three:

- **General**: useful beyond this repo (a reusable guardrail, a lifecycle, a new module), not product policy or a local filename choice
- **Proven**: survived real use, not a one-session experiment
- **Publishable**: no secrets, no personal preferences

If it passes: **propose, never act silently.** Tell the user what changed and why it generalises, then with their consent either edit the blueprint repo directly (when it lives on this machine) or draft an issue or PR against its GitHub home. Editing another repo and opening PRs are outbound actions; the kit's ask-first rule applies. New use-case material lands here in `extras/`; changes to core behaviour belong in the shape folders and need stronger evidence.

If it fails the bar, it stays local, which is fine. Most changes should.
