# Reference I: Token and MCP efficiency

Shared by all repo shapes. Up: [../README.md](../README.md). Which servers to pick: [../extras/tooling-catalogue.md](../extras/tooling-catalogue.md). When MCP earns a place at all: the shape's `mcp-tooling.md`.

Trigger: context is bloated, the same tool appears twice, or bootstrap is checking the harness before the first feature.

## Cuts that earn their place

- **One home per server.** Cursor loads `~/.cursor/mcp.json` and the project `.cursor/mcp.json`. The same server name in both is loaded twice. Keep each server in one file.
- **Ignore bulky trees.** `.cursorignore` for dependencies, build output, and large generated files the agent should not read.
- **Editor discovery.** If the editor also auto-discovers MCP servers from other tools (VS Code's `chat.mcp.discovery.enabled` is the usual switch), turn that off when it duplicates this repo's list. Cursor itself has no separate "stop listing tools" switch: disabling a server in Customize is the per-server control.
- **MCP note.** When the list is more than a handful of servers, add a few lines on what you refused to load twice. That section is local. Do not paste it into the kit.

Dynamic tool discovery lowers the token cost of idle servers. It does not fix tool choice. Prefer a known CLI for one-shot text, as `mcp-tooling.md` already says.

## Bootstrap

The shape's bootstrap self-check asks whether bulky trees are ignored and whether any server is listed twice.

## Do not

A committed `mcp.json` full of secrets, or an example file that names real tokens. Secrets stay `${env:NAME}` or `envFile`, with `.env.example` names only (file-recipes). A second copy of the tooling catalogue.
