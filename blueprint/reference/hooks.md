# Reference D — Hooks: fences instead of signs (optional)

Shared by all repo shapes. Up: [../README.md](../README.md). Event list and other recipes: [../extras/tooling-hooks.md](../extras/tooling-hooks.md).

Trigger: the user wants hard enforcement, or a never-rule keeps being broken.

Written rules are advisory, and adherence measurably decays late in long sessions. Cursor hooks intercept actions **before they run**, turning the two most important never-rules into guarantees: no push unasked, no committing private harness files. This is optional; the markdown-only kit works without it. Add it when the stakes justify a fence.

## Recipe

`.cursor/hooks.json` (project-level, reloads on save):

```json
{
  "version": 1,
  "hooks": {
    "beforeShellExecution": [
      {
        "command": "node .cursor/hooks/git-guard.mjs",
        "matcher": "git\\s+(push|add|commit)",
        "failClosed": true
      }
    ]
  }
}
```

`.cursor/hooks/git-guard.mjs`:

```js
let raw = "";
process.stdin.on("data", (c) => (raw += c));
process.stdin.on("end", () => {
  const cmd = (JSON.parse(raw).command || "");
  const staging = /git\s+(add|commit)/.test(cmd);
  const underCursor = /(?:^|[\s"'])\.cursor(?:[\/\\]|\b)/.test(cmd);
  // Private shapes also track plans/. Public shape: remove "plans" (plans are gitignored).
  const allowed = /(?:^|[\s"'])\.cursor[\/\\](?:hooks|rules|skills|plans)(?:[\/\\]|\b)/.test(cmd);
  const hookState = /(?:^|[\s"'])\.cursor[\/\\]hooks[\/\\]state(?:[\/\\]|\b)/.test(cmd);
  if (/git\s+push/.test(cmd)) {
    console.log(JSON.stringify({
      permission: "ask",
      user_message: "The agent wants to push. Approve only if you asked for it.",
      agent_message: "Push is gated by a hook. Only proceed if the user asked in the current message.",
    }));
  } else if (staging && underCursor && (hookState || !allowed)) {
    console.log(JSON.stringify({
      permission: "deny",
      agent_message: "Blocked: this repo never stages private .cursor/ working files.",
    }));
  } else {
    console.log(JSON.stringify({ permission: "allow" }));
  }
});
```

Adapt the allowed prefixes to the repo's shape. Private-solo and private-team track `.cursor/plans/` as well as hooks, rules, and skills, so leave `plans` in the allow list (lifecycle: that shape's file-recipes, Cursor plans). The public shape gitignores plans: remove `plans`. Always deny preferences, the TODO, the MCP note, `tmp/`, and `hooks/state/` (scratch under an otherwise allowed folder). On a repo that gitignores all of `.cursor/`, gitignore already does most of the work and the hook is belt and braces.

Notes: requires Node on PATH; `failClosed: true` blocks the action if the script crashes; exit code 2 also blocks. Verify in Cursor's Hooks settings tab after saving. Do not pile more policy into hooks; they are for the few absolute rules, not for style.
