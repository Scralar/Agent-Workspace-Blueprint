# Working agreements (policy)

Up: [README.md](README.md)

Treat as policy unless you argue otherwise and the user agrees. Record intake choices in their homes: git/commit policy, branch shape, and the Verify command on `AGENTS.md`; owner and locale in the constitution.

| Topic | Default |
|-------|---------|
| **Commits** | **Commit as you go** is the very strong default. After each coherent, verified logical unit, commit locally unless intake recorded **ask-first**. Do not wait for “please commit”. Do not stop with verified tracked work uncommitted. The constitution must state **continuous standing authorisation** to commit locally ([../reference/git-guardrail.md](../reference/git-guardrail.md)). |
| **Push / PR** | Never until the user asks in the **current** message. |
| **CHANGELOG** | Root `CHANGELOG.md`; daily `## YYYY-MM-DD` only (newest first). No `## Unreleased`. Notable changes only; not a dump of commit subjects. **Scope: includes agent-harness changes** (rules, skills, memory homes); the harness is shared team machinery on this shape. |
| **Backlog** | Persistent TODO with priority sections, tracked at `docs/TODO.md`. |
| **Tooling inventory** | Living, **project-specific** MCP note at `docs/agent-mcp.md` (tracked). Do not copy another repo’s list. Recommend missing plugins; do not assume they are installed. Record **skill precedence** when plugins clash with repo rules. |
| **Rule size** | Lean. Exceed for safety (production, multi-agent, legal). |
| **Code changes** | Smallest correct diff for the task; no unrelated refactors. Match repo conventions; linters/formatters in Verify win over agent taste ([../reference/coding-practices.md](../reference/coding-practices.md)). |
| **Source file size** | Hand-written application source: soft ~500 / hard ~800 lines; split by cohesive responsibility when painful ([../reference/coding-practices.md](../reference/coding-practices.md)). |
| **Commit messages** | `type(scope): summary` (Conventional Commits). |
| **Branches** | `dev` (or topics off `dev`) → PR → `main` is the likely shape; agree at intake. Work directly on `main` only if the team explicitly chooses it. Agree PR conventions at intake too: branch naming, review expectations, description shape. |
| **Parallel agents** | Expected on this shape. Collaboration rule is **required**; leave enough instruction that two agents do not collide. Name an owner per plan. |
| **Precedence** | Repo constitution (`AGENTS.md` + project rules) wins over Settings User Rules **and** Cursor plugin skills. Cursor also injects product git/PR blocks labelled `<user_rules>` that are **not** in Settings and **cannot be deleted** ([../reference/git-guardrail.md](../reference/git-guardrail.md)). Session overrides (“don’t commit”, “push now”) still win. |
| **Decisions** | Recommendation + options + short why. Challenge weak defaults. |
| **ADRs** | Write them **as you go**: when a decision meets the bar ([file-recipes.md](file-recipes.md)), record the ADR in the same slice, without being asked. |
| **Language** | British English (en-GB) in **chat replies** and in **work** (docs, commits, UI strings, comments) wherever possible, unless intake set another locale. Follow the product locale where the product is not en-GB by design. |
| **Punctuation** | No em dashes (—). No en dashes used as clause breaks. Use a comma, colon, parentheses, or a full stop. Hyphens in compounds (`git-config`) and markdown `---` separators are fine. Completed backlog rows: `- [x] YYYY-MM-DD: …` |
| **Owner** | Record the accountable owner in the constitution. Name plan and ADR owners as people join. |

## Always / Ask first / Never

| | |
|--|--|
| **Always** | **Commit as you go** after each verified unit unless intake recorded ask-first. Update the one home that changed. Run the Verify command for the touched area (or the smallest scoped equivalent). Leave notes another agent can use. |
| **Ask first** | Push, open a PR, merge, or deploy to production. Send email, share Drive, create a Notion page. Install plugins or enable write/pay MCP scopes. Invent product policy. |
| **Never** | Commit secrets. Put personal preferences in tracked files. Force-push shared branches. Skip hooks. Edit git config. Revert others’ WIP. Kill foreign processes. Steal Imminent work. End a slice with verified tracked work uncommitted when commit-as-you-go applies. |
