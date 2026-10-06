# Decisions

Architecture Decision Records: why the kit looks like this. Canonical copies live in [`docs/adr/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/docs/adr). The pages below are published from those files.

Sending a change: [Contributing](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/Contributing).

| ADR | Title | Status |
|-----|-------|--------|
| [ADR-0001](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0001-published-kit-layout) | Published kit layout | Accepted, amended by ADR-0006, ADR-0007, and ADR-0008 |
| [ADR-0002](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0002-modular-blueprint-and-variants) | Self-contained blueprint folders per repo shape | Accepted, amended by ADR-0003 |
| [ADR-0003](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0003-shared-leaves-and-kit-surface) | Shared leaves beside self-contained shape folders | Accepted, amended by ADR-0009 |
| [ADR-0004](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0004-upstream-feedback-loop) | Upstream feedback loop | Accepted |
| [ADR-0005](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0005-dated-tooling-catalogue) | Dated tooling catalogue as a pick-and-choose extra | Accepted |
| [ADR-0006](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0006-public-community-surface) | Public community surface | Accepted, amended by ADR-0007 and ADR-0008 |
| [ADR-0007](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0007-live-kit-by-url) | Follow the live kit by URL; copy is optional | Accepted |
| [ADR-0008](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0008-wiki-published-view) | GitHub wiki as a published view of `docs/` | Accepted, amended by ADR-0009 |
| [ADR-0009](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0009-docs-hygiene-and-optional-wiki) | Docs hygiene and optional wiki for consumer projects | Accepted |
| [ADR-0010](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0010-agent-working-defaults) | Agent working defaults (commits, code hygiene, en-GB) | Accepted |
| [ADR-0011](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0011-executor-optional-gateway) | Executor is an optional gateway, not the default MCP path | Accepted |
| [ADR-0012](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0012-consumer-proven-references) | Consumer-proven references stay optional | Accepted, amended by ADR-0013 |
| [ADR-0013](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/ADR-0013-session-defaults-after-consumer-references) | Session defaults after the consumer references | Accepted |

## New ADR

Copy [`docs/adr/TEMPLATE.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/docs/adr/TEMPLATE.md), take the next number, add a row to [`docs/adr/README.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/docs/adr/README.md) and to this page, then run `node scripts/publish-wiki.mjs`.
