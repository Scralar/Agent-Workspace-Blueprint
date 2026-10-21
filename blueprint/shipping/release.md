# Release pipeline

Up: [../README.md](../README.md). Use when the project ships builds (desktop, mobile, packages) or deploys a service. Templates: [../templates/workflows/release.yml](../templates/workflows/release.yml) and [../templates/workflows/post-deploy-check.yml](../templates/workflows/post-deploy-check.yml).

## The rules

1. **Release only from `main`, only when the version changes.** A merge to `main` that changes the version publishes. Everything else (docs, CI, a merge with no bump) does nothing. A manual run is allowed on `main` only. Builds from `dev` or feature branches never release.
2. **One home for the version.** One file holds it (`package.json`, `app.meta.json`, `pyproject.toml`). A sync script copies it everywhere else (app manifests, lock files) and a check fails Verify when any copy drifts: [../templates/scripts/check-version-sync.mjs](../templates/scripts/check-version-sync.mjs).
3. **A gate job decides.** It reads the version, checks whether that tag already exists, and outputs `publish`, `create_release` and `version`. Later jobs only run on those outputs.
4. **Deploy with OIDC.** The workflow assumes a role scoped to the release bucket or service, trusted only for this repository's `main`. No stored cloud keys.
5. **The workflow tags and creates the GitHub Release itself**, after a successful publish. Nobody pushes release tags by hand, and there is no tag trigger.
6. **Never cancel a publish half way.** `concurrency` with `cancel-in-progress: false`, so a second run waits.
7. **Dry run.** A manual `dry_run` input builds everything and uploads nothing, tags nothing.
8. **Check what users fetch.** After publish, a separate workflow fetches the public artefact the user's client fetches (update feed, health URL, download) and checks status and version. If you later restrict access (IP allowlists, auth), keep this check working.
9. **Test the workflow.** A small test parses the workflow file and asserts the guards (branch, version gate, concurrency, dry run). Guards that live only in YAML get edited away.

Why each rule exists, from one desktop app: a manual run tagged a version without creating its GitHub Release; a publish run stuck in the queue blocked the next one until the concurrency group was renamed; a version bump left the lock file on the old number and failed Verify after merge.

## What ships

A shipped build contains only what users need: the app, its backend or runtime, migrations, the user guide and release notes. Never ship:

- ADRs, the engineering CHANGELOG, debug notes, plans, dev docs, writing guides
- Design sandboxes, labs, admin or debug pages (unless it is a debug build)
- `.env` files, test fixtures, source maps for private code

Enforce it with a test on the build inputs (the list of entry pages or bundled folders), not by remembering.

## Release notes

`docs/release-notes.md`, separate from `CHANGELOG.md`:

```markdown
## 1.4.0

- **Lead with the outcome.** One sentence the user cares about.
- Plain language, UI labels in bold. No file names, model names or vendors.
```

- One `## X.Y.Z` per version, newest first, matching the version home.
- The release workflow extracts the section for the update feed or GitHub Release body.
- In-app history shows only versions up to the installed one, so notes written ahead of a bump never leak.

## Release checklist

1. Notes for the new version written; version bumped in its one home; sync script run; Verify green.
2. PR `dev` into `main`, reviewed, merged.
3. Watch the release run; then the post-deploy check.
4. Merge `main` back into `dev` (and sync any working line).
