# Extra: workflow automation (n8n and similar)

Up: [../README.md](../README.md). Use when the product is an orchestrated workflow: n8n, Make, or similar node-graph platforms.

## Conventions

- **The workflow JSON is the artefact.** Keep exported copies versioned in the repo; the platform's live copy and the repo copy must not silently diverge. Note in `AGENTS.md` which one is truth and when to re-export.
- **Verify:** confirm the JSON parses, then dry-run in the platform's editor with a test payload. Do not invent a CLI the platform does not have. Record known-good test inputs beside the workflow.
- **Human-in-the-loop steps are contracts.** Document each approval step (who approves, where, what timeout) in the workflow's README; agents must not remove or bypass them as cleanup.
- **The destination API belongs to the workflow, not the assistant.** A system the workflow already writes to (accounting, CRM, mail) is not an assistant MCP unless the user explicitly wants the assistant to operate it directly. Keep credentials in the platform's credential store, never in git or `mcp.json`.
- **Name nodes for the next reader:** verb plus object ("Extract invoice fields"), not defaults ("HTTP Request 3"). Sticky notes in the graph for non-obvious branches.

## Do not

Edit live production workflows without a dry-run path · store API keys in exported JSON (strip before committing) · duplicate the platform's execution history into the repo · treat retry/error branches as optional polish.
