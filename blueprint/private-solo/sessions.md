# Sessions, git, parallel work

Up: [README.md](README.md)

Trigger: day-to-day work after bootstrap; also read once during bootstrap when writing the constitution's session loop.

## Session loop

1. Entry + constitution → Imminent / Discuss
2. Collaboration scan. **Full scan** (git, terminals, browser, backlog and plans) before any edit, commit, or other mutating action. An explain-only turn still checks foreign dirty files and in-flight plans before suggesting commands.
3. **Tooling freshness:** MCP note missing, last-reviewed older than **~30 days**, *or* the project’s nature / a major aspect has **shifted** (see [mcp-tooling.md](mcp-tooling.md))
4. Architectural decision landed? → write the ADR **now**, in the same unit, without being asked ([file-recipes.md](file-recipes.md))
5. Multi-phase? → write-plan (user approves unless they said run with it)
6. Smallest correct diff ([../reference/coding-practices.md](../reference/coding-practices.md)) → **Verify**
7. Update the one homes that changed → **commit the unit** (default: commit-as-you-go; skip only if intake recorded ask-first or the user said not to commit this turn)
8. Repeat; wrap-up at end of slice
9. Way of working changed durably, in a way other projects could use? → propose upstreaming to the blueprint ([../extras/README.md](../extras/README.md)); never act on it silently
10. **Stop.** No push/PR unless asked
11. **Suggest a new chat** when the slice is done, the next task is a different concern, the thread is long, or you are repeating mistakes. Be relatively persistent (remind rather than nag once and drop). The user decides.

Ask: context → recommendation → options → why. Challenge weak requests.

**Autonomous** (“run with it”): proceed unless secrets, production merge, destructive git, or legal. Still follow the recorded commit policy; still no push unasked.

## Git

```
feat/* ──► dev ──PR──► main (production)
```

That diagram is for repos where `main` is production. Simpler repos may work on `main` alone; use the branch shape agreed at intake.

| Action | Default |
|--------|---------|
| Commit | **Commit as you go** (very strong default). Ask-first only if recorded at intake. |
| Push / open PR | Only when asked |
| Merge / push production | Only when owner asks in the current message |
| Force-push | Never unless they explicitly demand and understand |

PowerShell:

```powershell
git commit -m "type(scope): summary" -m "Optional body."
```

Types: `feat` `fix` `docs` `chore` `refactor` `test`. Use `!` for breaking. One concern per commit. Never commit secrets.

If `main` auto-deploys: do not merge production PRs unless asked now. “Deploy” without “merge” → describe or open a PR, do not merge.

Injected Cursor git guardrail: [../reference/git-guardrail.md](../reference/git-guardrail.md).

## Parallel agents

Own your files; don’t revert others’ WIP; don’t kill foreign servers; don’t steal Imminent work. Browser: own tab only (IDE browser first). Stage your paths; mention foreign dirt. No force-push of shared branches.
