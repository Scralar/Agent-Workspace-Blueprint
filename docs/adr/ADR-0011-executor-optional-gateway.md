# ADR-0011: Executor is an optional gateway, not the default MCP path

- **Status:** Superseded by [ADR-0014](ADR-0014-lean-core-and-shipping-scope.md) (2026-10-21)
- **Date:** 2026-09-22
- **Owner:** Scralar

## Context

[Executor](https://executor.sh) (MIT, [UsefulSoftwareCo/executor](https://github.com/UsefulSoftwareCo/executor)) is a gateway in front of MCP servers, OpenAPI specs, GraphQL APIs, and other schema-described tools. One catalogue, shared by any MCP client, with a per-tool allow, approve, or block policy. The agent uses a small code-mode surface: it writes TypeScript that runs in a JavaScript sandbox, instead of receiving one MCP tool per API method. It can run as a local CLI or desktop app, as Executor Cloud, or self-hosted.

The catalogue already named it in one cell beside Composio, Merge, and Zapier. That was too easy to miss, and too easy to read as "use this for MCP." Shape `mcp-tooling.md` already says the opposite: keep the set tight, prefer a well-known CLI, prefer official Marketplace plugins.

## Decision

1. **Executor is a catalogue option, not the default.** Direct Marketplace plugins and well-known CLIs stay the MCP path for a normal project. Record the option in [tooling-mcp.md](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/b4ba37d/blueprint/extras/tooling-mcp.md) and the decision tree in [tooling-catalogue.md](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/b4ba37d/blueprint/extras/tooling-catalogue.md). Each shape's `mcp-tooling.md` points here so a consumer agent sees the verdict without opening the whole catalogue.

2. **Pick it only for the many-agent case.** Several clients should share one catalogue and one policy layer, and the project will not also install the official servers for those same apps.

3. **Do not promote it to a use-case module yet.** Extras modules are for conventions proven in real use ([extras README](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/b4ba37d/blueprint/extras/README.md)). This row is dated research, same class as the rest of the catalogue ([ADR-0005](ADR-0005-dated-tooling-catalogue.md)).

## Alternatives

| Option | Why not |
|--------|---------|
| Default MCP layer for every project | Extra runtime and secret store. Code mode hides Marketplace skills and OAuth the kit already prefers. The sandbox still runs with stored secrets. Cloud sends tool traffic off the machine. Public since February 2026, with a large open-issue count at review. Stacks badly with official plugins for the same apps |
| Leave the one-word catalogue cell | The default-or-not question was asked. A name in a lumped row does not answer it |
| Short proven module under `extras/` | No project here has run it. A module would overclaim |

## Consequences

- Bootstrapping agents may recommend Executor when several agents share one SaaS catalogue. They must not install it as the MCP layer by default, and they must not stack it with Composio, Merge, Zapier, or the official servers for the same apps.
- Revisit if Executor ships as a Marketplace plugin whose skills match this kit, or after a consumer repo has actually run it. Until then it stays on the shelf.
