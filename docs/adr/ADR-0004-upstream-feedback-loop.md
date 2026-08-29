# ADR-0004 — Upstream feedback loop

- **Status:** Accepted
- **Date:** 2026-08-29
- **Owner:** Scralar

## Context

Projects bootstrapped from this kit evolve their ways of working: new skills, hooks, rules, and conventions appear as the user's workflow changes. Today those improvements stay trapped in the project where they were born, and the kit only improves when its maintainer edits it directly. The kit's owner runs many sibling repos on the same machine as this one, so the marginal cost of feeding improvements back is low; cloned copies elsewhere could feed back through GitHub.

An unguarded loop has two failure modes: agents silently editing a repo the user did not point them at, and generalising one-session experiments into policy that every future project inherits.

## Decision

1. **Consumer projects carry an upstream check.** The session loop, wrap-up flow, and definition of done in every shape folder ask: did the way of working change durably, in a way other projects could use? If yes, the agent proposes upstreaming.

2. **Generality bar.** Upstream only what is general (useful beyond the repo), proven (survived real use), and publishable (no secrets, no personal preferences). Product policy and local naming choices never pass.

3. **Consent boundary.** Propose, never act silently. With the user's consent in the current message, the agent edits the blueprint repo directly (when it lives on the same machine) or drafts an issue or PR against its GitHub home. This matches the kit's existing ask-first rule for outbound actions and for editing foreign repos.

4. **Landing zones.** Use-case material lands in `blueprint/extras/` (a shelf of optional modules with a template and this bar in its README). Changes to core shape-folder behaviour need stronger evidence and a matching ADR here.

## Alternatives

| Option | Why not |
|--------|---------|
| Fully automatic upstreaming | One confused agent could pollute the kit every future project inherits; violates ask-first for foreign-repo edits |
| No loop; maintainer-only edits | Improvements rot in consumer repos; the kit stales as workflows evolve |
| Upstream everything to core folders | Core stays lean only if use-case material has a separate shelf |

## Consequences

- The kit gains a growth mechanism proportional to real use, with a human at the merge point.
- `blueprint/extras/` starts with two modules distilled from real projects (web design, workflow automation) and grows on evidence, not speculation.
- This repo's own constitution accepts incoming proposals under the same bar.
