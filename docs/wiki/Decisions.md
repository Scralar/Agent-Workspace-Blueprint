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

## New ADR

Copy [`docs/adr/TEMPLATE.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/docs/adr/TEMPLATE.md), take the next number, add a row to [`docs/adr/README.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/docs/adr/README.md) and to this page, then run `node scripts/publish-wiki.mjs`.
