// Writes public/activity.json: the latest commit Gopi made on a project repo.
// With ACTIVITY_TOKEN (classic PAT, `repo` scope) it also sees private repos, reduced to a timestamp.
// Without it, uses GITHUB_TOKEN (Actions) or no auth: public repos only.
// Local run: node scripts/activity.mjs
import { writeFileSync } from "node:fs";

const USER = "GOPIVARDHAN1965";
const OUT = new URL("../public/activity.json", import.meta.url);
const token = process.env.ACTIVITY_TOKEN || process.env.GITHUB_TOKEN;
// the site's own repo and the profile README aren't "work"
const SKIP = new Set(["Portfoli0", USER]);

const gh = async (path) => {
  const r = await fetch(`https://api.github.com/${path}`, {
    headers: { Accept: "application/vnd.github+json", ...(token && { Authorization: `Bearer ${token}` }) },
  });
  if (!r.ok) throw new Error(`${r.status} ${path}`);
  return r.json();
};

// Repos by last push, not the events feed: the feed lags and misses pushes to brand-new repos.
const repos = (await gh(process.env.ACTIVITY_TOKEN ? "user/repos?affiliation=owner&sort=pushed&per_page=10" : `users/${USER}/repos?sort=pushed&per_page=10`))
  .filter((r) => !SKIP.has(r.name) && !r.fork).slice(0, 6);

// Newest human commit per repo: the pipelines' daily github-actions[bot] data commits don't count.
const human = (c) => c.author?.type !== "Bot" && !c.commit.author.name.endsWith("[bot]");
const candidates = await Promise.all(repos.map(async (r) => {
  const c = (await gh(`repos/${r.full_name}/commits?per_page=20`)).find(human);
  return c && { r, c, when: c.commit.committer.date };
}));
const best = candidates.filter(Boolean).sort((a, b) => b.when.localeCompare(a.when))[0];

let latest = null;
if (best && !best.r.private) {
  latest = { private: false, repo: best.r.name, url: best.r.html_url, msg: best.c.commit.message.split("\n")[0], when: best.when };
} else if (best) {
  latest = { private: true, when: best.when };
}

writeFileSync(OUT, JSON.stringify({ latest, updated: new Date().toISOString() }) + "\n");
console.log(`activity: latest ${latest?.private ? "private" : latest?.repo}`);
