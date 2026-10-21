# ADR-0009: Docs hygiene and optional wiki for consumer projects

- **Status:** Accepted
- **Date:** 2026-08-31
- **Owner:** Scralar

## Context

ADR-0008 made this GitHub repository's Wiki tab a published view of `docs/`, and said consumer projects are not asked to enable a wiki. The kit still had no guidance on writing documentation that works for humans **and** agents, or on keeping publishable docs apart from private working files. Consumer agents were left to invent a Wiki tab, a second home in Notion, or a dump inside `AGENTS.md`.

Research on 2026-08-31 (Diátaxis; GitHub's documentation guide; docs-as-code vs wiki-as-authoring):

- Each page should have one job (tutorial, how-to, reference, or explanation). That is a writing test, not a mandatory folder tree.
- Documentation that must stay aligned with the code belongs in the repository, reviewed like code.
- A GitHub wiki used as the authoring surface is a weak default: it is not versioned with the code, it is not in a clone, and it skips pull requests. The hybrid that works is source in the repo, wiki as a published view (the ADR-0008 pattern).
- Put each artefact where the workflow that keeps it true already lives, and where it is safe to be. Two current copies are worse than one slightly inconvenient home.

## Decision

1. **Shared leaf** [`blueprint/docs.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/b4ba37d/blueprint/docs.md) is the kit's docs and wiki guidance for every shape (ADR-0003: identical text lives once).

2. **The repository is the source of truth.** A wiki is optional. If used, it is a published view of repo docs, never a second home. Consumer projects are not required to enable a wiki.

3. **Public vs private follows the existing shapes.** Tracked files on a public repo must stay publishable. Working backlog, MCP inventory, personal preferences, and session scratch stay gitignored there. Private shapes may track working files as they already do.

4. **Humans and agents get different doors, not different facts.** `README.md` is the human welcome. `AGENTS.md` is a short map (where things live, Verify, git, security). Do not paste one into the other.

5. **Do not default** GitHub Pages, `llms.txt`, or a second wiki in Notion / Confluence. Name one source of truth if an external knowledge tool is already how non-engineers will keep a page alive.

## Alternatives

| Option | Why not |
|--------|---------|
| Require every consumer to enable a wiki | Most projects never open the Wiki tab; agents clone the repo |
| Keep ADR-0008's "consumers are not asked" with no kit page | Leaves the gap that produced this ADR |
| Mandate a Diátaxis four-folder tree | Ceremony. The writing test is enough |
| Treat extras/ as the home | Docs hygiene is core, not an optional use-case module |

## Consequences

- ADR-0008 point 4 is superseded: consumers are pointed at `blueprint/docs.md` instead of being told nothing.
- ADR-0003's shared-leaf list gains `docs.md`.
- Shape folders link the leaf from their README and file recipes. They do not grow a third copy of the guidance.
