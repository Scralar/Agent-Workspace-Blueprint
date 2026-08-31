# Skills

Up: [README.md](README.md)

Trigger: adding workflows the agent should load on demand.

Repo skills: `.cursor/skills/<name>/SKILL.md` (`name` + `description`). This blueprint is for Cursor. Other harnesses use different skill directories; adapt if you copy the idea.

Keep `SKILL.md` short. Write the description in the third person, starting “Use when…”, naming **trigger conditions only**: do not summarise the workflow, or the model may skip reading the skill. Keyword-rich, under ~500 characters. Set `disable-model-invocation: true` only on skills the **user** should trigger with `/name`; it hides the skill from the model entirely, so never set it on a skill another skill's flow invokes (wrap-up invokes update-memory). Extra checklists go in sibling files the skill tells the agent to read. Don’t restate the constitution.

## wrap-up

Triggers: wrap up, tidy, commit all, close a chunk.

Flow: prune diff → one-home docs (including MCP note if tools/scope changed) → Verify → **correction** → **upstream check** ([../extras/README.md](../extras/README.md)) → commit (if commit-as-you-go) → report hash → **do not push** → suggest a new chat if the slice is done.

**Correction:** if the user corrected a durable preference this slice, update the Learned sections via the one memory writer ([file-recipes.md](file-recipes.md)), or the constitution if it is policy. If the same class of error happened twice, add a glob/description rule or a linter, not a longer always-on file. Do not hand-edit Learned sections when the plugin owns them. Do not revive `docs/agent-notes.md`.

## update-memory

Triggers: wrap-up, or the user says remember this / update memory. In session, no subagent.

Writes Learned User Preferences and Learned Workspace Facts on `AGENTS.md`. Skip this skill if the Continual Learning plugin owns those sections; never run both writers.

## write-plan

Triggers: implementation plan, roadmap, large multi-phase. Zero session context; phases + gates; exact paths; YAGNI; link don’t duplicate. Scope with recommendation + options first. Fetch **current** vendor docs (Exa) and link. Name missing plugins the executor should recommend. User approves before large execution unless they said to run with it.

**Prefer this repo skill** over Superpowers `writing-plans` (`docs/superpowers/plans/`) unless the project explicitly chose that tree.

Picker for built-in, plugin, and vendor skills: [../extras/tooling-skills.md](../extras/tooling-skills.md).

## Plugin skills

Do **not** copy plugin `SKILL.md` into the repo. Invoke by name. The Marketplace `continual-learning` plugin is acceptable on this shape as the **sole** memory writer; keep it off when the repo `update-memory` skill is in use ([file-recipes.md](file-recipes.md)). Clash table: [../reference/plugin-clashes.md](../reference/plugin-clashes.md), and only if those plugins are installed or recommended.

## UI / marketing (when the project is visual)

See [../extras/web-design.md](../extras/web-design.md). The skills named there (`frontend-design`, `web-design-guidelines`, `design-inspiration`) are Marketplace plugin skills: invoke if installed, recommend otherwise, never copy into the repo.
