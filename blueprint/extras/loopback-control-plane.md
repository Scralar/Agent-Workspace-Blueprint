# Extra: loopback control plane

Up: [../README.md](../README.md). Use when the product already exposes a loopback HTTP API (or another local port) that the agent should call.

Nothing here applies to a repo whose only tools are editor MCP servers.

## Conventions

- **One control plane.** The product's loopback API is the registry of operations. If the agent also has an MCP server for those operations, that server calls the API. It does not reimplement the routes.
- **Same slice.** Extend the registry in the same change as the feature. If you cannot, wrap-up names the gap in one sentence.
- **No second server** for the same operations.

## Do not

Put product routes, a framework, or a sample server in this module. Add an MCP process that only proxies the loopback routes you already have. Assume the loopback port is private: other local users can call it unless the product already authenticates them.
