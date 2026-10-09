// Writes public/activity.json: latest push.
// With ACTIVITY_TOKEN (classic PAT, `repo` scope) it also sees private pushes, reduced to a timestamp.
// Without it, uses GITHUB_TOKEN (Actions) or no auth: public activity only.
// Local run: node scripts/activity.mjs
import { writeFileSync } from "node:fs";

const USER = "GOPIVARDHAN1965";
const OUT = new URL("../public/activity.json", import.meta.url);
const token = process.env.ACTIVITY_TOKEN || process.env.GITHUB_TOKEN;

const gh = async (path) => {
  const r = await fetch(`https://api.github.com/${path}`, {
    headers: { Accept: "application/vnd.github+json", ...(token && { Authorization: `Bearer ${token}` }) },
  });
  if (!r.ok) throw new Error(`${r.status} ${path}`);
  return r.json();
};

// Includes private + org events only when authenticated as the user.
const events = await gh(`users/${USER}/events?per_page=100`);
const pushes = events.filter((e) => e.type === "PushEvent" && e.payload.ref !== "refs/heads/gh-pages");

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

writeFileSync(OUT, JSON.stringify({ latest, updated: new Date().toISOString() }) + "\n");
console.log(`activity: latest ${latest?.private ? "private" : latest?.repo}`);
