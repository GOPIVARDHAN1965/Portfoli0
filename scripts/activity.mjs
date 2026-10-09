// Writes public/activity.json: latest push + last-7-days commit counts.
// Needs ACTIVITY_TOKEN (classic PAT, `repo` scope) to see private pushes.
// Private repos are reduced to a timestamp — no names, no messages leave this script.
// Local run: ACTIVITY_TOKEN=$(gh auth token) node scripts/activity.mjs
import { writeFileSync } from "node:fs";

const USER = "GOPIVARDHAN1965";
const OUT = new URL("../public/activity.json", import.meta.url);
const token = process.env.ACTIVITY_TOKEN;
if (!token) {
  console.log("activity: no ACTIVITY_TOKEN, skipping");
  process.exit(0);
}

const gh = async (path) => {
  const r = await fetch(`https://api.github.com/${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" },
  });
  if (!r.ok) throw new Error(`${r.status} ${path}`);
  return r.json();
};

// Authenticated as the user, this includes private + org events (last 90 days, max 300).
const events = [];
for (let page = 1; page <= 3; page++) {
  const batch = await gh(`users/${USER}/events?per_page=100&page=${page}`);
  events.push(...batch);
  if (batch.length < 100) break;
}
const pushes = events.filter((e) => e.type === "PushEvent" && e.payload.ref !== "refs/heads/gh-pages");

// Push events no longer carry commits, so count via compare. New branches (before = 000…) count as 1.
const countCommits = async (e) => {
  if (/^0+$/.test(e.payload.before)) return 1;
  try {
    return (await gh(`repos/${e.repo.name}/compare/${e.payload.before}...${e.payload.head}`)).total_commits;
  } catch {
    return 1; // force-push / deleted repo: count the push itself
  }
};

const weekAgo = Date.now() - 7 * 864e5;
const recent = pushes.filter((e) => Date.parse(e.created_at) > weekAgo);
let commits = 0, privateCommits = 0;
for (const e of recent) {
  const n = await countCommits(e);
  commits += n;
  if (!e.public) privateCommits += n;
}

let latest = null;
const last = pushes[0];
if (last?.public) {
  const c = await gh(`repos/${last.repo.name}/commits/${last.payload.head}`);
  latest = {
    private: false,
    repo: last.repo.name.split("/")[1],
    url: `https://github.com/${last.repo.name}`,
    msg: c.commit.message.split("\n")[0],
    when: last.created_at,
  };
} else if (last) {
  latest = { private: true, when: last.created_at };
}

writeFileSync(OUT, JSON.stringify({ latest, week: { commits, private: privateCommits }, updated: new Date().toISOString() }) + "\n");
console.log(`activity: ${commits} commits this week (${privateCommits} private), latest ${latest?.private ? "private" : latest?.repo}`);
