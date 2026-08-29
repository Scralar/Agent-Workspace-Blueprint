# 6. Skills

Up: [README.md](README.md)

Trigger: adding workflows the agent should load on demand.

Repo skills: `.cursor/skills/<name>/SKILL.md` (`name` + `description`). This blueprint is for Cursor. Other harnesses use different skill directories; adapt if you copy the idea.

Keep `SKILL.md` short. Description includes “use when…” with **sharp triggers**. Extra checklists go in sibling files the skill tells the agent to read. Don’t restate the constitution.

## wrap-up

Triggers: wrap up, tidy, commit all, close a chunk.

Flow: prune diff → one-home docs (including MCP note if tools/scope changed) → Verify → **correction** → commit (if commit-as-you-go) → report hash → **do not push** → suggest a new chat if the slice is done.

**Correction:** if the user corrected a durable preference this slice, update the memory homes via `update-memory` ([file-recipes.md](file-recipes.md)), or the constitution if it is policy. If the same class of error happened twice, add a glob/description rule or a linter, not a longer always-on file. Do not revive `docs/agent-notes.md`.

## update-memory

Triggers: wrap-up, or the user says remember this / update memory. In session, no subagent.

Writes personal preferences to gitignored `.cursor/user-preferences.md` and publishable facts to `AGENTS.md` under **Workspace facts**. Never private chatter in tracked files.

## write-plan

Triggers: implementation plan, roadmap, large multi-phase. Zero session context; phases + gates; exact paths; YAGNI; link don’t duplicate. Scope with recommendation + options first. Fetch **current** vendor docs (Exa) and link. Name missing plugins the executor should recommend. User approves before large execution unless they said to run with it.

**Prefer this repo skill** over Superpowers `writing-plans` (`docs/superpowers/plans/`) unless the project explicitly chose that tree.

## Plugin skills

Do **not** copy plugin `SKILL.md` into the repo. Invoke by name. Keep the Marketplace `continual-learning` plugin **off** on this shape; the repo `update-memory` skill owns memory ([file-recipes.md](file-recipes.md)). Clash table: [reference-plugin-clashes.md](reference-plugin-clashes.md), and only if those plugins are installed or recommended.

## UI / marketing (when the project is visual)

- `frontend-design`: distinctive UI; existing design systems win
- `web-design-guidelines`: Vercel Web Interface Guidelines
- `design-inspiration`: adapt patterns; don’t drop foreign runtimes wholesale
