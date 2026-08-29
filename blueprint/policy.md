# 1. Working agreements (policy)

Up: [README.md](README.md)

Treat as policy unless you argue otherwise and the user agrees. Record intake choices in the constitution (commit policy, locale, owner, verify command).

| Topic | Default |
|-------|---------|
| **Commits** | After each coherent, verified logical unit, unless intake chose ask-first. Do not wait to be asked under commit-as-you-go. The constitution is **standing authorisation** to commit locally ([reference-git-guardrail.md](reference-git-guardrail.md)). |
| **Push / PR** | Never until the user asks in the **current** message. |
| **CHANGELOG** | Root `CHANGELOG.md`; daily `## YYYY-MM-DD` only (newest first). No `## Unreleased`. Notable changes only; not a dump of commit subjects. |
| **Backlog** | Persistent TODO with priority sections. |
| **Tooling inventory** | Living, **project-specific** MCP note (home per variant: `docs/agent-mcp.md` on private repos, `.cursor/agent-mcp.md` on public). Do not copy another repo’s list. Recommend missing plugins; do not assume they are installed. Record **skill precedence** when plugins clash with repo rules. |
| **Rule size** | Lean. Exceed for safety (production, multi-agent, legal). |
| **Commit messages** | `type(scope): summary` (Conventional Commits). |
| **Branches** | `dev` (or topics off `dev`) → PR → `main` when `main` is production. Simpler repos may work on `main`; agree first. |
| **Parallel agents** | Leave enough instruction that two agents do not collide. |
| **Precedence** | Repo constitution (`AGENTS.md` + project rules) wins over Settings User Rules **and** Cursor plugin skills. Cursor also injects product git/PR blocks labelled `<user_rules>` that are **not** in Settings and **cannot be deleted** ([reference-git-guardrail.md](reference-git-guardrail.md)). Session overrides (“don’t commit”, “push now”) still win. |
| **Decisions** | Recommendation + options + short why. Challenge weak defaults. |
| **Language** | British English (en-GB) in **chat replies** and in **work** (docs, commits, UI strings, comments) wherever possible, unless intake set another locale. Follow the product locale where the product is not en-GB by design. |
| **Punctuation** | No em dashes (—). No en dashes used as clause breaks. Use a comma, colon, parentheses, or a full stop. Hyphens in compounds (`git-config`) and markdown `---` separators are fine. Completed backlog rows: `- [x] YYYY-MM-DD: …` |
| **Owner** | The user's name from intake. Use for ADRs and decision ownership unless they name someone else. |

## Always / Ask first / Never

| | |
|--|--|
| **Always** | Follow the recorded commit policy. Update the one home that changed. Run the Verify command for the touched area (or the smallest scoped equivalent). Leave notes another agent can use. |
| **Ask first** | Push, open a PR, merge, or deploy to production. Send email, share Drive, create a Notion page. Install plugins or enable write/pay MCP scopes. Invent product policy. |
| **Never** | Commit secrets. Force-push shared branches. Skip hooks. Edit git config. Revert others’ WIP. Kill foreign processes. Steal Imminent work. |
