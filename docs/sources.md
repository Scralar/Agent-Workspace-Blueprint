# Sources

Public guidance the kit draws on, checked on 2026-10-21. One line each on what the kit adopted. Re-check before relying on a detail; vendor docs change.

| Source | Adopted |
|--------|---------|
| [Cursor docs: Rules](https://cursor.com/docs/rules) | Four rule types and the narrowest-type habit; `.mdc` only; mentioned files are not inlined; nested `AGENTS.md` scopes to its folder ([blueprint/reference/cursor.md](../blueprint/reference/cursor.md)) |
| [Cursor Learn: Customizing agents](https://cursor.com/learn/customizing-agents) | Rules short and specific, pointing at examples; linters over style guides; add a rule only after a repeated mistake |
| [Cursor blog: Best practices for coding with agents](https://cursor.com/blog/agent-best-practices) | Plan first for complex work, skip it for small changes; if the result misses, revert and re-plan instead of patching ([working rules, Plans](../blueprint/core/working-rules.md#plans)) |
| [Cursor Learn: Developing features](https://cursor.com/learn/creating-features) | Tests first: write the test, see it fail, make it pass without editing the test; verification is tests, types, lint and browser evidence |
| [Cursor docs: Hooks](https://cursor.com/docs/hooks) | `beforeShellExecution` allow, ask or deny; exit 2 blocks, other failures fail open, so the guard catches its own errors ([templates/hooks](../blueprint/templates/hooks/git-guard.mjs)) |
| [Cursor docs: Cloud agent best practices](https://cursor.com/docs/cloud-agent/best-practices) and [setup](https://cursor.com/docs/cloud-agent/setup) | Committed environment with an idempotent install; OIDC over long-lived keys; keep the repo testable locally |
| [AGENTS.md](https://agents.md/) | One predictable agent entry beside a human README; build and test commands first; nested files for packages; closest file wins, the user's prompt wins over all |
| [Evaluating AGENTS.md (arXiv 2602.11988, 2026)](https://arxiv.org/abs/2602.11988) | Generated context files did not help and raised cost by about a fifth; hand-written ones helped a little. Hence: hand-write `AGENTS.md`, keep it short, no repo dumps |
| [Claude Code docs: Best practices](https://code.claude.com/docs/en/best-practices) | Give the agent a pass or fail check and have it show evidence rather than assert success; explore, plan, code, commit ([done](../blueprint/core/done.md)) |
| [Anthropic: Effective context engineering for AI agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Smallest high-signal context; a small tool set; persist state in files and start a new chat rather than carry a long thread |
| [Simon Willison: Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/) | Start a session by running the existing tests; red then green |
| [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) | Tool output, issues, web pages and logs are untrusted data, not instructions; human approval for consequential actions |
| [GitHub docs: Secure use of Actions](https://docs.github.com/en/actions/reference/security/secure-use) | Least-privilege `permissions`; pin third-party actions to a full commit SHA |
| [GitHub docs: OIDC in AWS](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws) and [configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) | Deploy by assuming a role trusted only for this repository's `main`; `id-token: write` only on the deploy job |
| [Diataxis](https://diataxis.fr/) | One job per docs page: tutorial, how-to, reference or explanation |

Lessons from a private consumer project (a desktop app) are cited in the kit as short "Why" notes without identifiers.
