# Where things live

Up: [../README.md](../README.md). One home per fact. Everything else links to it. If two files disagree, fix both in the same change.

| Fact | Home | Audience |
|------|------|----------|
| How agents work here | `AGENTS.md`, plus `.cursor/rules/` only when a rule earns it | Agents |
| What the project is, how to start | `README.md` | People |
| Topic to home map | `docs/README.md` (once `README.md` would become a dump) | Both |
| Engineering history | `CHANGELOG.md`, `## YYYY-MM-DD` sections, newest first, Added / Changed / Fixed / Removed | Developers |
| What changed for users | `docs/release-notes.md`, `## X.Y.Z` sections ([../shipping/release.md](../shipping/release.md)) | Users |
| Why | `docs/adr/` ([../reference/adr.md](../reference/adr.md)) | Developers |
| How to diagnose | `docs/debug.md` (symptom, cause, recovery) | Developers, support |
| How to test | `docs/testing.md` (what Verify runs, fixtures, what never runs in CI) | Developers |
| How to use the product | User guide in the product ([../shipping/user-facing.md](../shipping/user-facing.md)) | Users |
| Deferred work | `docs/TODO.md`: Imminent, Planned, Ideas, Discuss, Completed (`- [x] YYYY-MM-DD: ...`) | Both |
| Multi-step how | `.cursor/plans/` (at most 3 active) | Agents |
| Tools the agent uses here | `docs/agent-tools.md`: in use, recommended, deferred, last reviewed | Agents |
| Learned preferences and facts | `AGENTS.md` section, or gitignored `.cursor/user-preferences.md` for personal ones | Agents |

Public repos gitignore the backlog, plans, tooling note and preferences (see the shape table in [../README.md](../README.md)).

## Rules for docs

- One job per page: a how-to, a reference, an explanation or a tutorial. Do not mix them.
- Plain, short, important first. Define jargon or drop it.
- No empty ceremony folders (`runbooks/`, `standards/`) and no placeholder pages.
- Engineering docs never ship to users; user docs never explain the code.
- A GitHub wiki or Notion page is never the source of truth. If one exists, it is a published copy of files in git, or it links back.

## Memory

At most about 12 bullets per memory section. One writer only (a memory skill run at wrap-up, or a memory plugin, never both). No secrets, one-offs, or copies of rules. Prune any bullet an agent would rediscover by reading the repo. If a bullet is policy, move it into the constitution.
