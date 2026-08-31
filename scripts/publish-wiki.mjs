// Publish docs/wiki/ plus docs/adr/ADR-*.md to the GitHub wiki.
// Run from the repo root: node scripts/publish-wiki.mjs
// Dry run (no push): node scripts/publish-wiki.mjs --dry-run
import { execFileSync } from "node:child_process";
import { mkdirSync, readdirSync, readFileSync, writeFileSync, rmSync, existsSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { tmpdir } from "node:os";

const ROOT = resolve(import.meta.dirname, "..");
const WIKI_SRC = join(ROOT, "docs", "wiki");
const ADR_SRC = join(ROOT, "docs", "adr");
const DRY = process.argv.includes("--dry-run");
const REPO = process.env.GITHUB_REPOSITORY || "Scralar/Agent-Workspace-Blueprint";
const WIKI_BASE = `https://github.com/${REPO}/wiki`;
const BLOB_BASE = `https://github.com/${REPO}/blob/main`;

function git(args, opts) {
  return execFileSync("git", args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    ...opts,
  });
}

function rewriteLinks(text, fromDir) {
  return text.replace(/\[([^\]]*)\]\(([^)\s]+)\)/g, (all, label, target) => {
    if (/^(https?:|mailto:|#)/.test(target)) return all;
    const [pathPart, hash] = target.split("#");
    const abs = resolve(fromDir, pathPart);
    const rel = relative(ROOT, abs).split("\\").join("/");
    const suffix = hash ? `#${hash}` : "";
    const adr = rel.match(/^docs\/adr\/(ADR-\d+-[^/]+)\.md$/);
    if (adr) return `[${label}](${WIKI_BASE}/${adr[1]}${suffix})`;
    const wiki = rel.match(/^docs\/wiki\/([^/]+)\.md$/);
    if (wiki && !wiki[1].startsWith("_")) {
      const page = wiki[1] === "Home" ? WIKI_BASE : `${WIKI_BASE}/${wiki[1]}`;
      return `[${label}](${page}${suffix})`;
    }
    return `[${label}](${BLOB_BASE}/${rel}${suffix})`;
  });
}

function build(dest) {
  mkdirSync(dest, { recursive: true });
  for (const name of readdirSync(WIKI_SRC)) {
    if (!name.endsWith(".md")) continue;
    writeFileSync(join(dest, name), readFileSync(join(WIKI_SRC, name), "utf8"));
  }
  for (const name of readdirSync(ADR_SRC)) {
    if (!/^ADR-\d+-/.test(name) || !name.endsWith(".md")) continue;
    const src = join(ADR_SRC, name);
    const body = rewriteLinks(readFileSync(src, "utf8"), ADR_SRC);
    const banner = `> Published from [\`docs/adr/${name}\`](${BLOB_BASE}/docs/adr/${name}). Edit the repository copy.\n\n`;
    writeFileSync(join(dest, name), banner + body);
  }
}

function token() {
  if (process.env.WIKI_TOKEN) return process.env.WIKI_TOKEN;
  try {
    return execFileSync("gh", ["auth", "token"], { encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

const dest = DRY
  ? join(ROOT, ".screenshots", "wiki-build")
  : join(tmpdir(), `awb-wiki-${process.pid}`);

if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
build(dest);

if (DRY) {
  const pages = readdirSync(dest).filter((n) => n.endsWith(".md"));
  console.log(`Dry run: ${pages.length} wiki pages in ${relative(ROOT, dest) || dest}`);
  process.exit(0);
}

const auth = token();
if (!auth) {
  console.error("Need WIKI_TOKEN or a logged-in gh to push the wiki.");
  process.exit(1);
}

const remote = `https://x-access-token:${auth}@github.com/${REPO}.wiki.git`;
const repoDir = join(tmpdir(), `awb-wiki-repo-${process.pid}`);
if (existsSync(repoDir)) rmSync(repoDir, { recursive: true, force: true });

function copyBuilt(into) {
  for (const name of readdirSync(into)) {
    if (name === ".git") continue;
    rmSync(join(into, name), { recursive: true, force: true });
  }
  for (const name of readdirSync(dest)) {
    writeFileSync(join(into, name), readFileSync(join(dest, name), "utf8"));
  }
}

try {
  try {
    git(["clone", "--depth", "1", remote, repoDir]);
  } catch {
    mkdirSync(repoDir, { recursive: true });
    git(["init", "-b", "master"], { cwd: repoDir });
    git(["remote", "add", "origin", remote], { cwd: repoDir });
  }

  copyBuilt(repoDir);
  let name = "wiki-publish";
  let email = "41898282+github-actions[bot]@users.noreply.github.com";
  try {
    name = git(["config", "user.name"], { cwd: ROOT }).trim() || name;
    email = git(["config", "user.email"], { cwd: ROOT }).trim() || email;
  } catch {
    // Temp clone only; fall back to the Actions bot identity.
  }
  git(["config", "user.name", name], { cwd: repoDir });
  git(["config", "user.email", email], { cwd: repoDir });
  git(["add", "-A"], { cwd: repoDir });
  try {
    git(["diff", "--cached", "--quiet"], { cwd: repoDir });
    console.log("Wiki already matches docs/. Nothing to publish.");
  } catch {
    git(["commit", "-m", "docs(wiki): publish from docs/"], { cwd: repoDir });
    try {
      git(["push", "-u", "origin", "HEAD:master"], { cwd: repoDir });
    } catch (err) {
      const detail = err && err.stderr ? String(err.stderr) : String(err);
      if (/not found/i.test(detail)) {
        console.error(
          `Wiki git remote is missing. Create the first page once at ${WIKI_BASE}/_new then re-run.`,
        );
      }
      throw err;
    }
    console.log(`Published wiki: ${WIKI_BASE}`);
  }
} finally {
  rmSync(dest, { recursive: true, force: true });
  rmSync(repoDir, { recursive: true, force: true });
}
