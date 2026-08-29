# 7. MCP and tooling

Up: [README.md](README.md)

Trigger: connecting tools, or the MCP note is missing / stale / the project shifted.

Discover schemas before calling. `mcp_auth` once if `needsAuth` or an auth error, then retry. Native code tools for code; MCP for browser, mail, Drive, boards, vendor APIs the **assistant** should use.

Prefer a **well-known CLI** when the model already knows it and MCP would only add schema weight (GitHub → `gh` is the usual example). Use MCP when the CLI is missing, worse, or you need a capability the CLI does not have. Keep the set **tight**. Unused tools bloat every prompt.

**Browser:** IDE browser first. Chrome/DevTools second.

**Outbound:** draft/propose by default. Send, share, Notion page, push, or PR only if asked **now**.

**Web:** Exa (`web_search_exa` / `web_fetch_exa`). Cite URLs. Do not overwrite process/ADR with a web claim.

**GitHub:** GitHub MCP when listed and useful; `gh` is a fine default and the fallback if MCP is down or only `mcp_auth` appears. That is an outage, not a policy change. No PAT in git. No push/PR unasked.

**Artefacts:** gitignore ephemeral QA, plugin hook state, `.cursor/settings.json`. **Plans:** `.cursor/plans/` is gitignored on this public shape. Optional committed visual baselines.

## Research: do not trust example lists in this kit

At **project start**, when the MCP note is **> ~30 days** old, and **whenever the project’s nature or a major aspect shifts** (e.g. docs/automation → frontend; → game; → hosted CI; a new system the *assistant* should operate).

Then:

1. Search live: [Marketplace](https://cursor.com/marketplace), [MCP guide](https://cursor.com/guides/coding-agent-mcp), [cursor.directory](https://cursor.directory), vendor docs.
2. Compare with what is actually installed.
3. Update the MCP note (in use / recommended / deferred). Cite URLs + review date.
4. Recommend installs (options + why). Do not install unasked. Do not enable write/pay scopes by default.

Prefer official Marketplace / first-party vendor MCP. Community MCP is fine as a documented authoring aid (e.g. orchestrator node schemas).

A destination API the **product workflow** already writes to is usually **not** an assistant MCP unless the user wants the assistant to operate it.
