# Templates

Up: [../README.md](../README.md). Copy what the project needs; skip the rest. Every script is plain Node (20 or later), no dependencies, and has tests you can copy with it.

| Template | Copy to | What it does |
|----------|---------|--------------|
| [workflows/verify.yml](workflows/verify.yml) | `.github/workflows/` | Verify on PRs into `dev` and `main`, plus docs checks |
| [workflows/release.yml](workflows/release.yml) | `.github/workflows/` | Version-gated release from `main`: OIDC deploy, dry run, tag and GitHub Release ([../shipping/release.md](../shipping/release.md)) |
| [workflows/post-deploy-check.yml](workflows/post-deploy-check.yml) | `.github/workflows/` | After release, fetches what users fetch and checks the version |
| [workflows/release-workflow.test.mjs](workflows/release-workflow.test.mjs) | `scripts/` | Fails if someone edits the release guards away |
| [scripts/check-links.mjs](scripts/check-links.mjs) | `scripts/` | Relative markdown links resolve |
| [scripts/check-en-gb.mjs](scripts/check-en-gb.mjs) | `scripts/` | No common US spellings in markdown prose |
| [scripts/check-punctuation.mjs](scripts/check-punctuation.mjs) | `scripts/` | No em or en dashes in any text file |
| [scripts/check-version-sync.mjs](scripts/check-version-sync.mjs) | `scripts/` | One home for the version; `--write` syncs the copies |
| [scripts/check-user-copy.mjs](scripts/check-user-copy.mjs) | `scripts/` | Banned words (vendors, internals) in user-facing text |
| [scripts/check-build-env.mjs](scripts/check-build-env.mjs) | `scripts/` | Allowlist and denylist for build-time variables |
| [scripts/lib-files.mjs](scripts/lib-files.mjs) | `scripts/` | File listing shared by the checks (copy with any of them) |
| [scripts/checks.test.mjs](scripts/checks.test.mjs) | `scripts/` | Tests for the scripts above |
| [hooks/hooks.json](hooks/hooks.json), [hooks/git-guard.mjs](hooks/git-guard.mjs), [hooks/never-push.txt](hooks/never-push.txt) | `.cursor/hooks.json`, `.cursor/hooks/` | Asks before push, PR and release; denies force-push, `--no-verify`, never-push branches and staging private files |
| [hooks/git-guard.test.mjs](hooks/git-guard.test.mjs) | `.cursor/hooks/` | Tests for the guard |
| [github/PULL_REQUEST_TEMPLATE.md](github/PULL_REQUEST_TEMPLATE.md) | `.github/` | The definition of done as a checklist |

## Wiring

- Add the checks to the project's Verify command, for example `"verify": "tsc --noEmit && node --test scripts/*.test.mjs && node scripts/check-links.mjs && node scripts/check-en-gb.mjs && node scripts/check-punctuation.mjs"`.
- The config-driven scripts read `version-sync.json`, `user-copy.json` and `build-env.json` from the repo root; each script's header shows the shape.
- This repository runs the same scripts and tests on itself in CI, so the templates stay working.
