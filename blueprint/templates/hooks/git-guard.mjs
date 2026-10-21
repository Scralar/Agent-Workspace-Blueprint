// Cursor beforeShellExecution hook: a fence for the few absolute git rules.
// Copy to .cursor/hooks/git-guard.mjs with hooks.json at .cursor/hooks.json.
// - push, PR and release commands ask the user first
// - force-push, --no-verify and pushes of never-push branches are denied
// - staging private .cursor files is denied (rules, skills, hooks and plans may be tracked)
// Never-push branches: one per line in .cursor/hooks/never-push.txt (for example local preview branches).
// Public repos: remove "plans" from TRACKED_CURSOR_DIRS because plans stay local there.
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const TRACKED_CURSOR_DIRS = ["rules", "skills", "hooks", "plans"];
const NEVER_PUSH_FILE = ".cursor/hooks/never-push.txt";

const ask = (user, agent) => ({ permission: "ask", user_message: user, agent_message: agent });
const deny = (agent) => ({ permission: "deny", agent_message: agent });
const allow = () => ({ permission: "allow" });

function pushTargets(command, currentBranch) {
  const args = command.split(/\s+/);
  const at = args.findIndex((a, i) => a === "push" && args[i - 1] === "git");
  const positional = args.slice(at + 1).filter((a) => a && !a.startsWith("-"));
  const refspecs = positional.slice(1).map((r) => r.replace(/^\+/, "").split(":").at(-1).replace(/^refs\/heads\//, ""));
  return refspecs.length ? refspecs : [currentBranch].filter(Boolean);
}

/** Pure decision for a shell command. context: { currentBranch, neverPush: string[] } */
export function decide(command, { currentBranch = "", neverPush = [] } = {}) {
  if (/--no-verify\b/.test(command) && /\bgit\s+(commit|push)\b/.test(command)) {
    return deny("Blocked: hooks are never skipped. Fix the failing hook instead.");
  }
  if (/\bgit\s+push\b/.test(command)) {
    if (/(\s|^)(-f|--force|--force-with-lease)(\s|=|$)/.test(command) || /\s\+\S/.test(command)) {
      return deny("Blocked: force-push needs the owner to run it themselves.");
    }
    const blocked = pushTargets(command, currentBranch).filter((b) => neverPush.includes(b));
    if (blocked.length) return deny(`Blocked: ${blocked.join(", ")} is local only and is never pushed.`);
    return ask("The agent wants to push. Approve only if you asked for it.", "Push needs an ask in the current message.");
  }
  if (/\bgh\s+(pr\s+(create|merge)|release\s+(create|delete))\b/.test(command)) {
    return ask("The agent wants to change a PR or release on GitHub. Approve only if you asked.", "PRs, merges and releases need an ask in the current message.");
  }
  if (/\bgit\s+(add|commit)\b/.test(command)) {
    const paths = command.match(/(?:^|[\s"'=])\.cursor[\\/][^\s"']*/g) ?? [];
    for (const raw of paths) {
      const path = raw.trim().replace(/^["'=]/, "").replace(/\\/g, "/");
      const dir = path.split("/")[1] ?? "";
      if (!TRACKED_CURSOR_DIRS.includes(dir) || path.startsWith(".cursor/hooks/state")) {
        return deny(`Blocked: ${path} is a private working file and is never staged.`);
      }
    }
    if (/\bgit\s+add\s+(-A|--all|\.)(\s|$)/.test(command) && !existsSync(".gitignore")) {
      return ask("The agent wants to stage everything with no .gitignore.", "Stage named paths only.");
    }
  }
  return allow();
}

function context() {
  let currentBranch = "";
  try {
    currentBranch = execFileSync("git", ["branch", "--show-current"], { encoding: "utf8" }).trim();
  } catch {}
  const neverPush = existsSync(NEVER_PUSH_FILE)
    ? readFileSync(NEVER_PUSH_FILE, "utf8").split(/\r?\n/).map((l) => l.trim()).filter((l) => l && !l.startsWith("#"))
    : [];
  return { currentBranch, neverPush };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  let raw = "";
  process.stdin.on("data", (c) => (raw += c));
  process.stdin.on("end", () => {
    let result;
    try {
      result = decide(JSON.parse(raw).command ?? "", context());
    } catch {
      // Fail closed: a crash must not let a push through.
      result = ask("The git guard could not read this command. Approve only if you expected it.", "Guard error; the user decides.");
    }
    console.log(JSON.stringify(result));
  });
}
