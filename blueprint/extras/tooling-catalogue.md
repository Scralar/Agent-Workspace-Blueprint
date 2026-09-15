# Tooling catalogue

Up: [README.md](README.md). Companions: [tooling-mcp.md](tooling-mcp.md) · [tooling-skills.md](tooling-skills.md) · [tooling-hooks.md](tooling-hooks.md).

**Last researched:** 2026-08-31. This is a **picker**, not a default stack and not a substitute for live research. Re-verify on [Marketplace](https://cursor.com/marketplace), [Cursor docs](https://cursor.com/docs), and the vendor page before recommending an install. Decision: [ADR-0005](../../docs/adr/ADR-0005-dated-tooling-catalogue.md).

Do not install unasked. Do not enable write, pay, or production scopes by default. Keep the set **tight**: each idle server still costs schema tokens and widens the audit surface. Dynamic discovery lowers the token cost of unused tools; it does not fix selection accuracy or security.

## How to use this catalogue

1. Identify the **job** (search the web, drive a browser, talk to the database, fence a never-rule).
2. Check **what the harness already gives** (below). Prefer native tools and well-known CLIs before adding MCP.
3. Open the matching companion file. Pick **one** official option per job.
4. Search live. If the named plugin has moved, been archived, or the vendor now ships a better first-party server, use that.
5. Recommend with why / why not. Record the choice on the project's MCP note.

## What Cursor already gives you (do not duplicate)

| Primitive | What it is | Prefer this when | Docs |
|-----------|------------|------------------|------|
| Native file / code tools | Read, edit, grep, glob, terminal | Almost all repo work | Built in |
| Native GitHub integration | Dashboard → Integrations | Cloud Agents, Bugbot, PR comments | [Cloud Agents](https://cursor.com/docs/cloud-agent) |
| `gh` CLI | Issues, PRs, Actions, checks | One-shot GitHub text ops (far cheaper than GitHub MCP) | GitHub CLI |
| IDE browser | Cursor-owned tab + CDP | Verify UI, click through flows | Agent browser tools |
| Chrome DevTools MCP | User's Chrome | Only if that Chrome is already in play | Marketplace: Chrome DevTools |
| Plan / Ask / Debug / Agent modes | Built-in interaction modes | Planning, read-only Q&A, runtime bugs | [Agent overview](https://cursor.com/docs/agent/overview) |
| Built-in skills | `/review`, `/babysit`, `/create-skill`, … | General Cursor workflows | [Skills](https://cursor.com/docs/skills) |
| Built-in subagents | `explore`, `bash`/`shell`, `browser` | Isolate noisy search, logs, or DOM | [Subagents](https://cursor.com/docs/subagents) |
| Cloud Agents | Isolated VM, desktop, MCP, hooks | Long or parallel work off the laptop | [Cloud agent](https://cursor.com/docs/cloud-agent) |
| Automations | Scheduled or event-driven cloud agents | Recurring review, Slack triage, nightly digests | [Automations](https://cursor.com/docs/cloud-agent/automations) |
| Bugbot / Security Agents | PR review automations | Repo is connected; user asked for review bots | [Bugbot](https://cursor.com/docs/bugbot) |
| Customize page | One place for plugins, MCP, skills, hooks, rules | Install and toggle | [Customize](https://cursor.com/docs/customize-cursor) |
| `@cursor/sdk` | Script the same agent from TypeScript | Headless / productised agent loops | [SDK](https://cursor.com/docs/sdk/typescript) |

Filesystem MCP, Memory MCP, and Sequential Thinking MCP are usually **redundant** in Cursor: the host already reads the repo, and Plan mode plus skills cover structured reasoning.

## Decision tree

| You need… | First try | Then consider | Avoid |
|-----------|-----------|---------------|--------|
| Edit this repo | Native tools | — | Filesystem MCP |
| GitHub issue / PR / Action | `gh` | GitHub MCP (read-only) for batch structured work | Anthropic's archived GitHub reference server |
| Current library docs | Context7 (Marketplace) | Vendor docs MCP; fetch a known URL | Training-data guesses |
| Live web facts | One search MCP (Exa **or** Context.dev **or** Tavily) | Fetch/scrape only the chosen URL | Two search servers plus Firecrawl plus Bright Data at once |
| Click a real page | IDE browser | Browser Use ([Marketplace](https://cursor.com/marketplace/browser-use)) for the user's Chrome or their cloud Chrome; Playwright or Browserbase for scripted/CI | Installing three browser servers for the same click |
| This product's database | Official vendor plugin (Supabase, Neon, Prisma, MongoDB, …) | Read-only role | Community Postgres wrappers; write on prod |
| Tickets / wiki | Official Linear / Notion / Atlassian plugin | `gh` for GitHub Issues | Both Jira *and* Linear unless the org truly has both |
| Attributed practitioner takes | SuperMe ([Marketplace](https://cursor.com/marketplace/superme)) after a live check | — | Using it as web search, or committing network transcripts |
| Design-to-code | Figma plugin | Mobbin / Superdesign for references | Copying foreign runtimes wholesale |
| Hard never-rule (no push, no secrets) | Hook ([tooling-hooks.md](tooling-hooks.md), [../reference/hooks.md](../reference/hooks.md)) | — | Another always-on rule that the model can ignore |
| Repeatable workflow | Repo or plugin **skill** | Command (`disable-model-invocation`) | Pasting the same prompt every chat |
| Isolated parallel research | Built-in `explore` subagent | Custom `.cursor/agents/` | A subagent for "format this file" |

## Pick by project type

Install only the rows that match. Everything else stays deferred on the MCP note.

| Project | Usually enough | Add when the work appears | Leave off unless asked |
|---------|----------------|---------------------------|------------------------|
| Public docs / kit (this shape) | Exa or Context.dev; `gh`; IDE browser | GitHub MCP for structured PR batches; SuperMe only if maintainers want ADR-time expert takes | n8n, Unity, Remotion, Stripe, Playwright |
| Marketing / brochure site | Context7; Figma; IDE browser; [web-design.md](web-design.md) | Vercel / Netlify / Cloudflare; Resend | Production DB write; CRM write |
| App with a database | Context7; official DB plugin (read-only first); Sentry | Prisma / Drizzle skills; PostHog | Filesystem MCP; Sequential Thinking |
| Design-heavy UI | Figma; Mobbin or Superdesign; shadcn; IDE browser | Playwright for E2E; BrowserStack for devices | Random community UI MCPs |
| Team product (Linear/Jira) | Linear **or** Atlassian; Sentry | Datadog / PagerDuty; Slack (read first) | Every SaaS the company owns |
| Payments | Stripe plugin (restricted key) | RevenueCat if mobile IAP | Refund / payout scopes on day one |
| Infra / platform | Official cloud plugin (AWS, Cloudflare, Vercel, Railway) | Datadog; Kubernetes (read-only) | Write access to prod clusters |
| Data / analytics | Official warehouse plugin (Snowflake, BigQuery via vendor, Hex, Omni) | dbt; PostHog; Amplitude | Unscoped org-wide tokens |
| Game / 3D | Unity or Meta Reality Labs plugin | NVIDIA / AMD skills if that hardware is the product | Frontend-design as the default aesthetic |
| Video / motion | Remotion; Higgsfield or HeyGen if generative | — | Treating video MCP as a substitute for the render CLI |
| Workflow automation | Platform is the artefact ([workflow-automation.md](workflow-automation.md)) | n8n / Zapier MCP only if the *assistant* should operate the graph | Duplicating the destination API as assistant MCP |
| Enterprise many-SaaS | One gateway (Composio, Merge, or Zapier), not fifteen servers | Runlayer / Semgrep hooks | Co-loading email send + untrusted web fetch |

## Live discovery (always re-check)

| Source | Use for | Notes |
|--------|---------|--------|
| [cursor.com/marketplace](https://cursor.com/marketplace) | Official plugins (MCP + skills + hooks + rules) | Manually reviewed. First place to look. |
| Customize → leaderboard | What the team and community actually invoke | Usage beat blog-post popularity |
| [cursor.com/docs](https://cursor.com/docs) | Skills, hooks, rules, MCP, plugins, subagents | Canonical harness behaviour |
| [cursor.com/guides/coding-agent-mcp](https://cursor.com/guides/coding-agent-mcp) | Cursor's own "connect these first" grouping | Dated 2026-08-12 at last fetch |
| [cursor.directory](https://cursor.directory) | Community plugins and MCP | Not Marketplace-reviewed |
| [registry.modelcontextprotocol.io](https://registry.modelcontextprotocol.io) | Canonical server metadata | Confirm a name is real before installing a fork |
| [smithery.ai](https://smithery.ai) | Hosted remote servers, install commands | Convenient; you still trust their host |
| [pulsemcp.com](https://www.pulsemcp.com/servers/) | Broader index, freshness | Counts are huge; curate hard |
| [agentskills.io](https://agentskills.io/specification) | Portable `SKILL.md` format | Cursor, Claude Code, Codex, and others |
| [skills.sh](https://skills.sh) | Install portable skills into the right agent dir | `npx skills add owner/repo` |
| [agent-plugins.org](https://agent-plugins.org) | Portable plugin bundles (skills + MCP) | Cursor also has a richer Cursor Plugin format |
| Vendor `/mcp` or `/docs/mcp` | First-party server URL and OAuth | Prefer this over a community wrapper |
| [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers) | Remaining Anthropic reference servers | Many 2024 names are now in `servers-archived` |

## Security (catalogue-level)

Repeated from shape `mcp-tooling.md` because catalogue readers land here first:

- Tool descriptions and **outputs** are untrusted. Prompt injection via pages, issues, and search hits is documented.
- Do not co-load exfiltration tools (email send, HTTP POST, file upload) with untrusted-content readers while handling secrets.
- Read-only first. Staging over production. One credential per server. `${env:NAME}` or `envFile`, never inline secrets.
- Prefer vendor-hosted OAuth over community stdio wrappers. Pin versions. Skip "curl \| bash" installers.
- Anthropic archived GitHub, Slack, Postgres, Drive, Brave Search, Sentry, SQLite, Puppeteer, GitLab, and others in 2025. Old blog install lines are wrong. Use the vendor server.
- Community scans through 2026 keep finding high rates of weak auth and SSRF in random directory listings. Treat unknown servers like unknown CLIs.

## Do not

Copy this catalogue into a project's always-on rules · install the whole Marketplace category · treat a named row as a guarantee it still exists · put this repo's private MCP inventory into tracked files · enable Marketplace Continual Learning when the repo already has an `update-memory` skill (it writes public `AGENTS.md`).
