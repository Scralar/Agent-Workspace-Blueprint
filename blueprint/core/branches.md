# Branches and pull requests

Up: [../README.md](../README.md). Pick one model at intake and write it in `AGENTS.md`. Agents commit locally on their own; pushing, PRs and merges wait for the owner's ask in the current message.

## Pick a model

| Model | Use when | Shape |
|-------|----------|-------|
| **Main only** | No production deploy yet | Commit on `main`. Fine until something ships from it |
| **Integration plus release** | One working line, `main` ships | Short-lived branch off `dev`, PR into `dev`; release by PR `dev` into `main` |
| **Two working lines plus release** | Two long-lived lines (for example a platform port and the main line) that must both carry every shared fix | Below |

## Two working lines kept in sync

```
work ──PR──► dev ──PR (release)──► main ──► publish
  ▲           │
  └───PR──────┘   (sync back, except work-only changes)
```

- Work happens on the working line (`work` here; name it for real, such as `linux`) or a short-lived branch off it.
- Every shared change reaches `dev` through a PR. After it merges, sync `dev` back into the working line through a PR (or a fast-forward if nothing diverged), so neither line drifts.
- Changes that only make sense on one line (platform packaging, local tooling) stay there; say so in the PR description.
- `main` only moves by a release PR from `dev`. A merge to `main` that changes the version publishes ([../shipping/release.md](../shipping/release.md)). Builds from `dev` never release.
- After a release, merge `main` back into `dev` so the release commit (version bump, notes) is not lost.

## Local-only branches

Preview and experiment branches that must never leave the machine are listed in `AGENTS.md` under Git ("Never push: ..."). Back the list with the hook in [../templates/hooks/](../templates/hooks/git-guard.mjs), which refuses to push them.

## Pull requests

- Small and single-purpose. If a reviewer cannot hold it in their head, split it.
- The PR template is the definition of done ([done.md](done.md)).
- CI runs Verify on every PR into `dev` and `main` ([../templates/workflows/verify.yml](../templates/workflows/verify.yml)).
- Never force-push a shared branch. Never rewrite pushed history without an explicit yes.

## Protect the release branch

Name the release branch in an always-on rule the day you know it will deploy: no direct commits, merges or pushes to it unless the owner asks in the current message. Turn on branch protection on GitHub for it when the repo plan allows.

Why: a real project's written git rules still said "work on dev, no PRs" months after the owner moved to a working line plus PRs. Agents followed the stale file. Check the rules against practice ([upkeep.md](upkeep.md)).
