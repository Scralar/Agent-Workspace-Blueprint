# The kit

The product is [`blueprint/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint). Consumer agents follow that folder on GitHub. This wiki does not replace it.

It is a guidebook, not a rulebook. Adapt it. Do not silently ignore production safety or parallel-agent hygiene.

## Shape folders

Each folder is a full reading path for that kind of repo: policy, bootstrap, sessions, file recipes, sample `AGENTS.md`, gitignore.

| Folder | Use when |
|--------|----------|
| [`public/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint/public) | Anyone can clone the repo. Tracked files must stay publishable. |
| [`private-solo/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint/private-solo) | Private repo, one maintainer. Working files tracked. |
| [`private-team/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint/private-team) | Private repo, collaborators or several parallel agents. |

If the repo's shape changes later (goes public, gains collaborators), switch folders and migrate what differs.

## Shared leaves

These sit beside the shape folders and apply to all of them.

| File | Open when |
|------|-----------|
| [`minimal.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/blueprint/minimal.md) | Tiny repo; also the per-stack Verify table |
| [`adopt.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/blueprint/adopt.md) | Existing repo: migrate instead of scaffold |
| [`docs.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/blueprint/docs.md) | Writing docs, public vs private, optional wiki |
| [`extras/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint/extras) | After bootstrap, when the project matches a module |
| [`extras/tooling-catalogue.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/blueprint/extras/tooling-catalogue.md) | Picking MCP, skills, or hooks; then re-verify live |
| [`reference/`](https://github.com/Scralar/Agent-Workspace-Blueprint/tree/main/blueprint/reference) | Git guardrail, plugin clashes, optional hooks fence |

## What you should not copy

- This repository's `.cursor/` tree (maintainer state, not in a fresh clone)
- Someone else's MCP inventory or personal preferences
- The root community files (`LICENSE`, `CONTRIBUTING.md`, and the rest) unless the consumer project wants the same licence and process

## The kit improves itself

Proven, general, publishable improvements belong upstream. Bar and consent: [`blueprint/extras/README.md`](https://github.com/Scralar/Agent-Workspace-Blueprint/blob/main/blueprint/extras/README.md). Propose, never act silently.

Why the kit looks like this: [Decisions](https://github.com/Scralar/Agent-Workspace-Blueprint/wiki/Decisions).
