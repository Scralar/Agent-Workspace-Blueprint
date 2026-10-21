# Agent entry: {project}

{One line: what this repo is and who uses it.}

Set up from Agent-Workspace-Blueprint at {commit}. This file is the authority now; do not re-read the blueprint.

Read this every session. Open other files only when their trigger matches.

## Read when

| File | When |
|------|------|
| `docs/TODO.md` | Start of a session: Imminent and Discuss |
| `docs/README.md` | Finding the home for a topic |
| `docs/debug.md` | Anything fails at runtime |
| `docs/adr/` | Changing an area an ADR governs |
| {domain doc} | {trigger} |

## Where things live

{Short table: entry points, config, tests, docs. Editing the wrong file is the commonest agent mistake.}

## Verify

`{exact command with flags}` (typecheck, tests, lint, docs checks). Run the smallest scoped part for the area you touched. Report failures, not pages of passing output.

## Git

Branches: {model from core/branches.md}. Commit each verified unit without being asked (standing authorisation from the owner). Never push, open a PR or merge unless asked in the current message. Never push: {local-only branches}. Conventional Commits.

## Security

Secrets live in {gitignored `.env`}; `.env.example` holds names only. Nothing secret is baked into a build. Protected paths: {list}.

## Always / Ask first / Never

- Always: definition of done (`{link to done list}`); one home per fact; British English; no em dashes.
- Ask first: push, PR, merge, deploy, sending anything to people, paid or write scopes, launching cloud agents, product policy.
- Never: secrets or personal data in git; force-push shared branches; skip hooks; revert other people's work.

## Blueprint feedback

Lessons that would help other projects go to Ethan as a short note in your reply or handoff. Do not edit the blueprint.

## Learned workspace facts

{At most about 12 bullets that would cause mistakes if forgotten. Prune anything an agent would rediscover by reading the repo.}
