# Changelog

## 2026-08-31

### Added

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
