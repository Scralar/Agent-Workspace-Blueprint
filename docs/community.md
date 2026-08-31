# Community files — how to use them

Up: [README.md](README.md). The files themselves live at the **repo root** (and `.github/` for templates and code owners). This page is the map, not a second copy.

## Which file to open

| You want to… | Open |
|--------------|------|
| Send a change, or know what not to commit | [`CONTRIBUTING.md`](../CONTRIBUTING.md) |
| See who can merge, or ask for write access | [`COLLABORATORS.md`](../COLLABORATORS.md) |
| Know how pull-request review is routed | [`.github/CODEOWNERS`](../.github/CODEOWNERS) |
| Report harassment or unacceptable behaviour | [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md) |
| Report a secret or a unsafe instruction in the kit | [`SECURITY.md`](../SECURITY.md) |
| Reuse or ship the kit | [`LICENSE`](../LICENSE) (MIT) |
| Open a structured issue or PR | [`.github/ISSUE_TEMPLATE/`](../.github/ISSUE_TEMPLATE/), [`.github/PULL_REQUEST_TEMPLATE.md`](../.github/PULL_REQUEST_TEMPLATE.md) |

You do **not** need write access to open an issue or a pull request from a fork. That is the default path.

## Collaborators, in practice

[`COLLABORATORS.md`](../COLLABORATORS.md) is the access list for *this* repository. A row there is a GitHub handle plus a role. It is not a credits file and not a list of everyone who ever sent a PR.

1. **Most people never join the table.** Fork, change the kit, open a PR. [`CONTRIBUTING.md`](../CONTRIBUTING.md) is enough.
2. **Request write access** only if you will merge or triage here on an ongoing basis. Open an issue titled `Collaborator access` and say what you will maintain. There is no SLA.
3. **When access is granted**, add a row to `COLLABORATORS.md` and the same handle to `.github/CODEOWNERS` in that change. Do not leave the two files out of sync.
4. **Write access is not a second licence.** Still no secrets, no private notes in tracked files, no force-push of `main`.

Handles only. No emails, real names, or employer details.

## What consumer projects should copy

Copy [`blueprint/`](../blueprint/README.md). Do **not** copy this repo's `COLLABORATORS.md`, `CONTRIBUTING.md`, or `.github/` unless you want the same GitHub process and the same maintainer list (you almost never do). A public consumer repo should have *a* licence (see the public shape bootstrap). It can write its own contributing note.

## Why these files are not under `docs/`

GitHub's community checklist and most clones look at the repository root (and `.github/`). ADR-0006 keeps the canonical files there. `docs/` holds the explanation so the root files can stay short.
