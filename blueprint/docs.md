# Docs and wiki

Up: [README.md](README.md). Shared by all repo shapes.

Trigger: writing project documentation, choosing what stays public, or considering a GitHub wiki.

A guidebook, not a four-folder docs site. Skip this file on a tiny repo until `README.md` would become a dump ([minimal.md](minimal.md)).

## Who it is for

Humans browse. Agents look up. The same page can serve both if it is short, has one job, and lives in git.

| Reader | Door | Do not |
|--------|------|--------|
| Human | `README.md` (what it is, how to start). Optional Wiki tab for long-form reading. | Hide the real instructions only on a Wiki tab or in chat |
| Agent | `AGENTS.md`: map, where-things-live, Verify, git, security. Open longer docs by trigger. | Paste the README into `AGENTS.md` (always-on cost). Auto-generate a repo dump |

If two files would say the same fact, keep one home and link. That is the kit's existing rule (the shape folder's `philosophy.md`).

## Public vs private

Put each artefact where the workflow that keeps it **true** already lives, and where it is **safe** to be.

| Kind | Public repo | Private repo |
|------|-------------|--------------|
| Product or kit truth (README, ADRs, changelog, how-to, reference) | Tracked. Must read cleanly on GitHub. | Tracked. |
| Working backlog, MCP inventory, session scratch, plans | **Gitignored** (`.cursor/…`). A tracked `docs/TODO.md` only if you want a public roadmap. | Tracked in the shape's usual homes (`docs/TODO.md`, and so on). |
| Personal preferences | Gitignored. Never a workspace fact. | Solo: may live on `AGENTS.md`. Team: gitignored per user. |
| Secrets | Never in git. `.env.example` carries names only. | Same. |

Test for a public repo: if it is not safe on GitHub, it is not tracked documentation. Private working notes in a public tree are the usual leak.

## One job per page

Do not mix a lesson, a task, a lookup, and a why in one file. Diátaxis names those four needs ([primer](https://diataxis.fr/start-here/)); GitHub recommends the same split. Use it as a **writing test**, not as a mandatory `docs/tutorials/` tree.

| Need | Write | Typical home |
|------|-------|----------------|
| Learn by doing | A tutorial that cannot fail the newcomer | Optional. Skip until someone is actually onboarding |
| Get a job done | A how-to for a competent reader | `docs/` or a package README |
| Look up a fact | Neutral reference | Code-shaped docs, API notes, `AGENTS.md` map |
| Understand why | Explanation | ADRs, a short architecture page |

GitHub's other three habits are enough for most pages: **clear** (plain language, define jargon), **concise** (only what most readers need), **structured** (important first, headings, lists, one topic per file).

A `docs/` folder earns its keep when `README.md` would become a dump. Then add `docs/README.md` as a topic → home table. Point at that table from `AGENTS.md`. Do not copy it there. Do not create empty `docs/`, `runbooks/`, or `standards/` folders.

## Optional wiki

Default: **off**. Markdown in the repo is enough. Agents clone the repo; they do not need a Wiki tab.

Turn a wiki on only if humans would actually browse that tab (public guidebook, or a team that already opens it). Then:

1. **The repository stays the source of truth.** Hand-written pages live under `docs/` (for example `docs/wiki/`). ADRs stay in `docs/adr/`.
2. **The Wiki tab is a published view.** Edit in git, then publish. Edits made only on the Wiki tab drift and may be overwritten.
3. **Pages are short doors.** Link to `README.md`, `AGENTS.md`, contributing, and the kit or product docs. Do not restate them.
4. **Keep GitHub's default access** (people with write access). Do not open a public wiki to anonymous edits unless you have a reason.
5. **Private repos:** a wiki is only visible to people who can see the repository. One maintainer rarely needs the tab.

This GitHub repository follows that pattern ([ADR-0008](../docs/adr/ADR-0008-wiki-published-view.md); publish with `node scripts/publish-wiki.mjs`). Copy the **idea**, not the script, unless you want the same publish step.

A Notion, Confluence, or Guru space is the same decision with a different host: name **one** source of truth. If engineers will update the page in pull requests, keep it in git. If non-engineers will update it in that other tool, keep it there and link from the repo. Do not run both as current.

Skip GitHub Pages and `llms.txt` until you have a docs site that web crawlers need. They are not part of bootstrap.

## Do not

- Authoritative docs that exist only on the Wiki tab
- Two current copies (git and wiki, or git and Notion)
- Private backlog, MCP inventory, or personal preferences in a public tree
- Empty ceremony folders
- Mixing tutorial and reference in one page "so it is all in one place"
- Putting the human README into always-on agent context
