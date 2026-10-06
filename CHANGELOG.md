# Changelog

## 2026-10-07

### Added

- Optional references from a private-team consumer, kept off the day-one tree ([ADR-0012](docs/adr/ADR-0012-consumer-proven-references.md)): testing harness, write-plan template, token and MCP efficiency, ADR decision bar, and a loopback control-plane extra
- Optional `git.mdc` and `testing.mdc` recipes in file-recipes. Neither is required at bootstrap

### Changed

- Hooks sample allows tracked `.cursor/plans/` on private shapes. The public shape still denies plans
- Wrap-up and the definition of done ask which tests ran, or why none
- Wrap-up names the ADR this slice wrote, or why none ([ADR-0013](docs/adr/ADR-0013-session-defaults-after-consumer-references.md))
- Always-on rules have no fixed file count. A file is added when a role earns it, and each file stays a short pointer
- Collaboration scan is full before edits and commits, and lighter on explain-only turns

### Fixed

- Hooks prose no longer lists plans as files that always need guarding

## 2026-09-22

### Added

- Executor recorded as an optional MCP gateway in the tooling catalogue, with an explicit verdict that it is not the default path ([ADR-0011](docs/adr/ADR-0011-executor-optional-gateway.md))

## 2026-09-16

### Changed

- **Commit as you go** documented as the very strong kit default across policy, bootstrap, sessions, constitution recipes, and [git-guardrail](blueprint/reference/git-guardrail.md); maintainer `AGENTS.md` aligned
- **Coding practices** reference ([coding-practices](blueprint/reference/coding-practices.md)): file size budgets, situation-aware diff rules, glob-rule recipe, policy/philosophy/session hooks, minimal-tier `AGENTS.md` sample
- **British English:** [locale-en-gb](blueprint/reference/locale-en-gb.md) reference and `scripts/check-en-gb.mjs` in repo Verify and CI ([ADR-0010](docs/adr/ADR-0010-agent-working-defaults.md))

### Added

- ADR-0010: agent working defaults (commit-as-you-go, coding practices reference, en-GB check)

## 2026-09-15

### Changed

- Browser Use called out in the tooling catalogue as an optional Chrome/CDP path (Marketplace plugin; not a bootstrap default; do not stack with the IDE browser and Playwright for the same click). Local Chrome needs remote debugging enabled first (`chrome://inspect/#remote-debugging`)

## 2026-09-09

### Added

- SuperMe listed as an optional MCP in the tooling catalogue (attributed practitioner takes; not a bootstrap default)

## 2026-08-31

### Added

- Docs and wiki guidance for consumer projects (`blueprint/docs.md`): public vs private homes, human vs agent doors, optional wiki as a published view (ADR-0009)
- GitHub wiki as a published view of `docs/`: hand-written pages in `docs/wiki/`, ADRs copied at publish time, `scripts/publish-wiki.mjs` (ADR-0008)
- Dated pick-and-choose tooling catalogue under `blueprint/extras/` (chooser plus MCP, skills, and hooks companions) so bootstrapping agents can select by job, then re-verify live (ADR-0005)
- Public GitHub surface: MIT licence, contributing and collaborators files, code of conduct, security note, issue and pull-request templates, and a link-check workflow (ADR-0006)

### Changed

- Root `README.md` rewritten as a public-kit landing page: positioning, thirty-second start, what you get, and what it is not. `AGENTS.md` remains the agent map; Cursor-only paths are called out
- Default use is to point an agent at the live `blueprint/` on GitHub; a local copy is optional (ADR-0007)
- `docs/` slimmed to a short map plus ADRs; `docs/community.md` removed as a second copy of the root process files
- Shape `mcp-tooling.md` research steps and extras README now distinguish short proven modules from longer dated catalogues

## 2026-08-29

### Added

- Adoption guide for existing repos (`blueprint/adopt.md`) and a minimal tier for tiny repos with a per-stack Verify table (`blueprint/minimal.md`)
- Optional hooks enforcement recipe (`blueprint/reference/hooks.md`): fences instead of signs for never-push and never-commit-private-files
- `blueprint/extras/` shelf of optional modules, seeded with web design and workflow automation
- Upstream feedback loop: projects bootstrapped from the kit propose proven, general improvements back to it (ADR-0004)
- Markdown link check as the repo Verify command (`scripts/check-links.mjs`)

### Changed

- Shape folders tightened with researched practice: Verify treated as the highest-value line with per-stack examples, where-things-live map and security block in the sample `AGENTS.md`, git policy given one home, ADR index and supersession discipline, changelog scope defined per shape, MCP security and GitHub-CLI guidance, usage-based tool pruning
- Byte-identical reference files deduplicated into shared `blueprint/reference/` (ADR-0003)
- Kit validated by bootstrapping a scratch project from each shape plus an adoption dry-run; the stumbles found are fixed: intake answers now recorded per home, `.env` added to gitignore starters, branch shape asked at intake, `master` vs `main` addressed, `disable-model-invocation` guidance corrected, MCP-research deferral allowed in the self-check, and the per-shape `extras.md` renamed to `situational.md` to clear the clash with the new `extras/` shelf
- Blueprint restructured into three self-contained folders (`public/`, `private-solo/`, `private-team/`), each with the full tailored file set; `blueprint/README.md` is the chooser
- Kit policy: write ADRs as you go when a decision meets the bar, without waiting to be asked

## 2026-08-18

### Added

- Blueprint kit under `blueprint/`
- Public `AGENTS.md` map and ADR starter
- `.cursor/` gitignored (local Cursor files; not part of the published kit)

### Changed

- ADR template is nameless; fill Owner from intake when writing an ADR
