# ADR-0005: Dated tooling catalogue as a pick-and-choose extra

- **Status:** Superseded by [ADR-0014](ADR-0014-lean-core-and-shipping-scope.md) (2026-10-21)
- **Date:** 2026-08-31
- **Owner:** Scralar

## Context

Shape `mcp-tooling.md` files tell agents not to trust example lists in this kit, and to research live at project start. That rule exists because Marketplace listings, vendor servers, and community directories change faster than a copied kit, and because Anthropic archived many 2024 reference servers in 2025.

A bootstrapping agent still needs a starting menu: which *jobs* exist, which official options usually win for each job, when a CLI beats MCP, and which Cursor primitives (skills, hooks, rules, commands, subagents, automations) already cover the work. Without that, live research starts from a blank page and either under-installs or dumps twenty servers into one session.

The extras shelf was written for short, proven use-case modules (~60 lines). A research catalogue is a different artefact: dated, broader, and explicitly not policy.

## Decision

1. **Add a dated catalogue** under `blueprint/extras/tooling-catalogue.md` (chooser) plus sibling files for MCP, skills, and hooks. It is a picker, not a default install list.

2. **Live research still wins.** The catalogue is a starting menu. Agents re-verify on [Marketplace](https://cursor.com/marketplace), [cursor.com/docs](https://cursor.com/docs), and vendor docs before recommending an install. A named row that has vanished or been archived is not a kit bug until the next refresh; treat it as stale.

3. **Catalogues are a second extras type.** Use-case modules stay short and proven. Catalogues may be longer, must carry a last-researched date, and must not invent blueprint-default policy for consumer projects.

4. **Do not freeze a plugin list in shape rules.** The per-project MCP note remains the inventory of what *this* repo actually uses.

## Alternatives

| Option | Why not |
|--------|---------|
| No catalogue; live search only | Agents waste the first session rediscovering the same jobs and official names |
| One frozen default stack in every shape | Wrong for most products; token and security cost of unused servers |
| Dump every Marketplace listing | Goes stale in days; exceeds the file-size budget; selection accuracy collapses |
| Put the catalogue in `reference/` | References are recipes and policy. This is optional shelf material |

## Consequences

- Bootstrap and tooling-refresh steps can open the catalogue, then confirm live.
- Refreshing the catalogue is a kit slice (new date, re-fetch official docs), not a consumer-repo chore.
- Consumer projects still keep their own MCP note; they copy names from the catalogue only after a live check.
