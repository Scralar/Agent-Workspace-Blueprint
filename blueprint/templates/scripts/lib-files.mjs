// Shared helper for the check scripts: list text files to scan.
// Uses `git ls-files` inside a git repo (tracked and untracked, not ignored), else walks the tree.
import { execFileSync } from "node:child_process";
import { readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

const SKIP_DIRS = new Set([".git", "node_modules", "dist", "build", "target", ".screenshots"]);

export function listFiles(root, extensions) {
  let files;
  try {
    const out = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    files = out.split("\n").filter(Boolean);
  } catch {
    files = walk(root).map((f) => relative(root, f).split(sep).join("/"));
  }
  return files.filter((f) => extensions.some((ext) => f.endsWith(ext)));
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if (e.isDirectory()) return SKIP_DIRS.has(e.name) ? [] : walk(join(dir, e.name));
    return [join(dir, e.name)];
  });
}
