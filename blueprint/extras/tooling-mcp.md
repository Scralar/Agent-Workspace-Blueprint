# Tooling catalogue — MCP

Up: [tooling-catalogue.md](tooling-catalogue.md). Last researched: 2026-08-31. Executor subsection: 2026-09-22 ([ADR-0011](../../docs/adr/ADR-0011-executor-optional-gateway.md)).

MCP is the adapter layer: one server, any MCP client (Cursor, Claude Code, Codex, VS Code). In Cursor, prefer a **Marketplace plugin** (one-click + OAuth, often with skills and rules) over a hand-written `mcp.json` entry. Custom or self-hosted servers still go in `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (user).

Transports: `stdio` (local command), Streamable HTTP (remote, OAuth), SSE (older remote). Cursor also supports MCP Apps (interactive UI in tool results), resources, prompts, roots, and elicitation.

Config interpolation: `${env:NAME}`, `${userHome}`, `${workspaceFolder}`, `${workspaceFolderBasename}`, `${pathSeparator}`. STDIO may use `envFile`. Remote servers use headers or an `auth` object for static OAuth client IDs. Redirect URIs: `https://www.cursor.com/agents/mcp/oauth/callback` (web/cloud) and `http://localhost:8787/callback` (desktop).

Team / Cloud: Dashboard → Integrations & MCP for Cloud Agents; "Add to Team Marketplace" to offer the same servers in the IDE. Linking is not auto-install. Docs: [cursor.com/docs/mcp](https://cursor.com/docs/mcp), [coding-agent-mcp guide](https://cursor.com/guides/coding-agent-mcp) (2026-08-12).

**CLI vs MCP.** A Scalekit-cited comparison (repeated in 2026 round-ups) put one GitHub query at tens of thousands of tokens via MCP versus about a thousand via `gh`. Use MCP for multi-step stateful work and live structured data; use the CLI the model already knows for one-shot text.

## Documentation and library APIs

| Option | Pick when | Do not | How |
|--------|-----------|--------|-----|
| **Context7** (Upstash) | Almost any app stack: version-specific docs and examples | Docs-only kits with no libraries | [Marketplace](https://cursor.com/marketplace) |
| Vendor docs MCP (Prisma, Svelte, Elastic, Stripe, …) | You live in that vendor | As a generic web search | That vendor's plugin |
| GitMCP | A specific GitHub repo or GitHub Pages site is the doc home | As a general search engine | Community; confirm the listing |
| Fetch a known URL | You already have the page | Instead of a search MCP | Exa `web_fetch_exa`, Context.dev scrape, or built-in fetch |

## Web search, scrape, enrich

Pick **one** search stack. Pair search with a fetch of the chosen URL, not a second search brand.

| Option | Pick when | Do not | How |
|--------|-----------|--------|-----|
| **Exa** | Semantic / research search and clean fetch | Plus Context.dev plus Tavily in the same session | Marketplace: Exa (`web_search_exa`, `web_fetch_exa`) |
| **Context.dev** | Search, scrape, crawl, extract, parse, monitor, batches | Unauthenticated retries that burn credits | Marketplace: Context.dev |
| **Tavily** | Agent-oriented search + crawl via `tvly` CLI | A third search brand | Marketplace: Tavily |
| **Firecrawl** | Site → clean markdown, crawl, schema extract | Everyday search | Marketplace / Firecrawl CLI |
| **Bright Data** | Hard scrape, anti-bot, structured web data | Casual lookup | Marketplace (Cursor guide lists it) |
| **Apify** | Actor-based scrapes you already pay for | Generic search | Marketplace |
| **Parallel** | Deep research / enrichment CLI | Default search | Marketplace |
| **treg** | Metered catalog of SEO, SERP, ads, enrichment APIs | Free-form browsing (it bills per call) | Marketplace: Treg. Say the price before calling |
| Brave Search | Cheap independent index | Niche queries without a follow-up fetch | Vendor MCP; old Anthropic Brave server is archived |

## Browser and UI verification

| Option | Pick when | Do not |
|--------|-----------|--------|
| **IDE browser** (built in) | Default path for verify-in-browser | Hijacking the user's Chrome tabs |
| **Chrome DevTools for Agents** | The user's Chrome is already the target | Default path |
| **Playwright** MCP | Scripted E2E, accessibility snapshots, CI-like flows | Plus Browserbase plus Browser Use for the same click |
| **Browserbase** | Cloud browser, agent-controlled | Local verify of a localhost app you already have in the IDE browser |
| **Browser Use** | User's Chrome via CDP, or Browser Use Cloud ([Marketplace](https://cursor.com/marketplace/browser-use)). First nav is `new_tab`; then `browser_exec` / `browser_screenshot`. **Local Chrome does not work until remote debugging is on:** open `chrome://inspect/#remote-debugging`, tick Allow remote debugging for this browser instance, click Allow on the popup if Chrome 144+ shows one ([install.md](https://github.com/browser-use/browser-harness/blob/main/install.md)). Cloud browsers skip that step. | Secrets in the page; plus IDE browser plus Playwright for the same click; simple `curl`/fetch of a public URL |
| **BrowserStack** | Real devices, browsers you do not own | Localhost-only checks |
| **Meticulous** | Visual regression of an existing suite | Inventing a visual suite on a docs repo |

## Source control and CI

| Option | Pick when | Do not |
|--------|-----------|--------|
| Cursor GitHub integration + **`gh`** | Default for GitHub | Treating MCP outage as "GitHub is deprecated" |
| **GitHub MCP** (official `github/github-mcp-server`) | Batch / structured PR and issue work; prefer read-only | Anthropic reference GitHub (archived 2025); write/merge scopes unasked |
| **GitLab** plugin | GitLab is the host | Also installing a community GitLab fork |
| **Atlassian Teamwork Graph** / Bitbucket | Atlassian-hosted git + Jira/Confluence in one graph | Browser Atlassian Rovo MCP if you are in the desktop IDE (docs distinguish them) |
| **Buildkite**, **Harness**, **Render** hooks | That CI/CD is the product's | Adding three CI MCPs |

## Project tracking and knowledge

| Option | Pick when | Do not |
|--------|-----------|--------|
| **Linear** | Engineering already lives in Linear | Installing Jira as well "just in case" |
| **Atlassian** (Jira, Confluence, triage skills) | Jira/Confluence is the system of record | Write scopes on day one |
| **Notion** | Team wiki / specs the assistant should search | A second backlog beside the repo TODO |
| **Glean** | Company-wide search (docs, Slack, mail, experts) | Personal notes |
| **SuperMe** | Attributed practitioner takes ([Marketplace](https://cursor.com/marketplace/superme)) | Web search; a second memory home; dumping transcripts into git |
| **Guru**, **Slite**, **GitBook**, **Mintlify**, **Coda**, **Craft** | That tool *is* the wiki | All of them |
| **Airtable** | Ops data lives in bases | Using it as a secret store |
| **ChatPRD** | PRDs from code, implement-from-spec | Replacing the repo's ADR home |
| **Asana**, **ClickUp**, **Monday**, **Wrike**, **Todoist** | That tracker is already mandated | Inventing a parallel board |

## Databases and backends

Prefer the **official** plugin. Give a read-only role until someone asks for migrations.

| Option | Pick when |
|--------|-----------|
| **Supabase**, **Neon**, **Prisma**, **PlanetScale**, **Convex**, **Firebase**, **Appwrite**, **Encore** | That is the app backend |
| **MongoDB** / **MongoDB Atlas** | Mongo is the store (two plugins: self-managed vs Atlas) |
| **Snowflake**, **ClickHouse**, **CockroachDB**, **ScyllaDB**, **Redis**, **Pinecone**, **ParadeDB**, **Azure Cosmos DB** | That engine is in the stack |
| **Microsoft Dataverse** | Dataverse / Power Platform |
| Postgres via vendor (Neon, Supabase, Prisma) | Default SQL path |
| Community "Postgres MCP" / SQLite reference | Only if no vendor server exists; check it is not the 2025-archived Anthropic one |

## Observability, errors, on-call

| Option | Pick when | Do not |
|--------|-----------|--------|
| **Sentry** | App errors and traces in session | Org-wide token |
| **Datadog** (preview plugin) | Logs, metrics, dashboards | Plus Dynatrace plus Coralogix without a reason |
| **Dynatrace**, **Grafana Cloud**, **Elastic**, **Coralogix**, **New Relic**-class vendors | That is the observability home | — |
| **PagerDuty**, **Resolve AI**, **Antimetal**, **TierZero** | Incident / SWE-on-call workflows | Letting the agent page people unasked |
| **PostHog**, **Amplitude**, **Mixpanel**, **Pendo**, **Hex**, **Omni**, **ThoughtSpot** | Product analytics the assistant should query | Write to production flags on day one |

## Cloud, hosting, edge

| Option | Pick when |
|--------|-----------|
| **Vercel**, **Netlify**, **Cloudflare** (skills + Code Mode MCP for 2,500+ APIs in a small token budget), **Railway**, **Render**, **Hostinger**, **here.now** | That is where the app deploys |
| **AWS** family (Core, Amplify, Serverless, Databases, Deployments, SageMaker, Agents, Data Analytics) | AWS is the platform; pick the *one* plugin that matches the workload |
| **Azure** | Azure is the platform |
| **Twilio**, **WorkOS**, **Clerk**, **Auth0**, **LaunchDarkly**, **Confidence (Spotify)** | That product is in the app |
| **Temporal**, **Dagster**, **Astronomer** | Workflows / orchestration *are* the product |
| Kubernetes MCP (several community servers) | Cluster ops; **read-only** and an actively maintained build only |

## Design, frontend, CMS

| Option | Pick when | Do not |
|--------|-----------|--------|
| **Figma** | Design-to-code from a real file (paid Dev seat) | Guessing spacing from a screenshot when the file exists |
| **Mobbin** | Real-app UI/UX reference screens | Importing foreign runtimes |
| **Superdesign**, **MagicPath**, **Paper**, **tldraw**, **Lucid**, **IcePanel**, **Miro**, **Canva** | Canvas / diagram / marketing graphics | Replacing the product design system |
| **shadcn/ui** | Component registry install and audit | Mixing two component kits |
| **21st.dev / Magic** | Generating marketing UI components | Docs kits |
| **Sanity**, **Webflow**, **Wix**, **Shopify** | That CMS / store is the product | — |
| **Svelte**, **GSAP**, **Modern Web Guidance** (Chrome team) | Those APIs are in the stack | — |

## Payments, finance, commerce

Read-only or restricted keys first. Refund, payout, and live-trading scopes are ask-first.

| Option | Pick when |
|--------|-----------|
| **Stripe** | Cards and subscriptions |
| **RevenueCat**, **Chargebee** | Mobile IAP / billing |
| **Xero**, **Ramp**, **Brex**, **Mercury**, **Airwallex**, **Aleph** | Books, spend, treasury the *assistant* should operate |
| **Shopify**, **Whop**, **Circle**, **Link** | That commerce stack |
| **Kraken**, **Revolut X**, **Phantom**, **1inch**, **eToro** | Trading / wallets; paper or read-only until asked |

## Mail, calendar, files, comms

Outbound send / share is ask-first in this kit.

| Option | Pick when |
|--------|-----------|
| **Gmail**, **Google Calendar**, **Google Drive** | Those Google surfaces |
| **Slack** (vendor MCP; Anthropic Slack is archived) | Search and draft; posting off until asked |
| **Superhuman Mail**, **Resend**, **Mailgun**, **AgentMail**, **Inkbox** | That mail stack |
| **Dropbox**, **Box** | Those file stores |
| **Granola**, **Otter**, **Fireflies**, **Fathom**, **Zoom**, **Gong**, **Circleback** | Meetings / call notes |

## Sales, support, recruiting

| Option | Pick when |
|--------|-----------|
| **HubSpot**, **Salesforce**, **Apollo**, **Outreach**, **Amplemarket**, **Clay**, **ZoomInfo** | GTM systems the assistant should query |
| **Intercom**, **Plain** | Support threads |
| **Ashby**, **Workable**, **Juicebox** | Hiring |

## Security tooling (assistant operates the scanner)

Hooks that *fence* the agent are in [tooling-hooks.md](tooling-hooks.md). These are MCP/plugins the agent calls.

| Option | Pick when |
|--------|-----------|
| **Snyk**, **Snyk API & Web**, **Semgrep**, **Checkmarx**, **SonarQube**, **Aikido**, **Endor Labs**, **Sonatype**, **Chainguard**, **Corridor** | That scanner is already the org standard |
| **1Password** | Secrets mount + MCP for Environments (macOS/Linux Labs; not Windows at last fetch) |
| **Snyk Evo Agent Guard**, **Oasis**, **Runlayer**, **JFrog Agent Guard**, **Zenity** | Governance of *other* MCP servers |

## Agent orchestration and meta-MCP

| Option | Pick when | Do not |
|--------|-----------|--------|
| **Composio**, **Merge**, **Zapier**, **Kody** | Many SaaS, one connection | Plus fifteen official servers for the same apps; plus Executor for those same apps |
| **Executor** | See the subsection below | As the default MCP path |

### Executor (optional, not the default)

Last researched: 2026-09-22. Verdict: [ADR-0011](../../docs/adr/ADR-0011-executor-optional-gateway.md).

[Executor](https://executor.sh) ([source](https://github.com/UsefulSoftwareCo/executor), MIT) sits in front of MCP, OpenAPI, GraphQL, and other schema-described tools. One catalogue, shared by any MCP client, with per-tool allow, approve, or block. The agent writes TypeScript that runs in a JavaScript sandbox (code mode) instead of receiving one tool per API method. Local CLI or desktop app (Node.js 20+), Executor Cloud, or self-hosted Docker or Cloudflare.

| Pick when | Do not | How |
|-----------|--------|-----|
| Several agents should share one catalogue and one policy layer, and you will not also install the official servers for those same apps | The default on a normal Cursor project. Marketplace plugins ship the skills and OAuth this kit already prefers, and code mode hides those tools. The sandbox still runs with the secrets you store there. Cloud sends tool traffic off the machine. Public since February 2026. Do not stack it with Composio, Merge, Zapier, or the official servers for the same apps | Local: `npm install -g executor`, then `executor install`. Connect with `npx add-mcp http://127.0.0.1:4788/mcp --transport http --name executor`, or `npx add-mcp "executor mcp" --name executor`. Restart the client before the tools appear. Docs: [executor.sh/docs](https://executor.sh/docs) |
| **Sourcegraph**, **Tabnine Context Engine**, **Port**, **Atlan** | Org-wide code or catalog context | Personal repos |
| **Langfuse**, **Braintrust**, **Arize** | You are building LLM apps and need traces/evals | Docs kits |
| **Create Plugin**, **Manufact**, **Cursor SDK** | You are authoring plugins or headless agents | — |
| **Mem0** | Productised user memory in an *app you ship* | Replacing repo `update-memory` / `AGENTS.md` |
| **Continual Learning** | Only if you *want* it writing `AGENTS.md` | This kit's public shape (use repo `update-memory`) |
| **Superpowers**, **Cursor Team Kit**, **Compound Engineering**, **pstack**, **Thermos** | Process skills; see [tooling-skills.md](tooling-skills.md) | Enabling every clash (push/PR, TDD-on-docs) blindly |

## Long-tail Marketplace categories

Do not pre-install. When the product matches, search Marketplace for that heading and prefer the official vendor row:

Infrastructure · Data & Analytics · Productivity · Payments · Inbox and Collaboration · Scheduling · Documents and Files · Sales · Customer Support · Finance and Legal · Research · Design · Canvas (Docs Canvas, PR Review Canvas) · Automations (Bugbot-class templates: Slack bug fix, Sentry/Datadog investigate, Linear triage, daily digest, flag cleanup).

Also seen on Marketplace at last fetch and worth a live search if the domain matches: CrowdStrike Falcon, Unity / Meta Quest, Remotion, Higgsfield, HeyGen, Cartesia, NVIDIA / AMD, Roboflow, Lovable, Databricks, OneSignal, Cloudinary, Cisco ThousandEyes, Docusign, Semrush / Ahrefs / Similarweb, Customer.io / Klaviyo / Brevo, Calendly, Todoist, Typeform.

## Archived or usually redundant

| Name | Status |
|------|--------|
| Anthropic reference GitHub, Slack, Postgres, Drive, Brave Search, Sentry, SQLite, Puppeteer, GitLab, Redis, Google Maps, EverArt, AWS-KB | Archived 2025; use the vendor server |
| Filesystem / Memory / Sequential Thinking reference | Usually redundant in Cursor |
| Random `npx` community forks of the above | Assume untrusted |
