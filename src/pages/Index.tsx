import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  FORMSPREE_ID, profile, work, systems, experience, projects,
  achievements, skills, certifications, education,
} from "@/content";

const RESUME = `${import.meta.env.BASE_URL}resume.pdf`;

const SCRIPT = [
  { cmd: "whoami", out: profile.name },
  { cmd: "cat role.txt", out: `${profile.title} · ${profile.location}` },
  { cmd: "echo $LIGHT_MODE", out: "undefined (on purpose)" },
];

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Written by scripts/activity.mjs at deploy time (every ~30 min via GitHub Actions).
type Activity = {
  latest: { private: false; repo: string; url: string; msg: string; when: string } | { private: true; when: string } | null;
  updated: string;
};
function useActivity() {
  const [a, setA] = useState<Activity | null>(null);
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}activity.json`).then((r) => (r.ok ? r.json() : null)).then(setA).catch(() => {});
  }, []);
  return a;
}

// Text that keeps "decrypting" and never gets there.
const NOISE = "abcdefghijkmnpqrstuvwxyz0123456789#$%&@!?*";
const noise = (n: number) => Array.from({ length: n }, () => NOISE[Math.floor(Math.random() * NOISE.length)]).join("");
function Scramble({ paused, length = 18 }: { paused: boolean; length?: number }) {
  const [text, setText] = useState(() => noise(length));
  useEffect(() => {
    if (paused || reducedMotion()) return;
    const t = setInterval(() => setText(noise(length)), 90);
    return () => clearInterval(t);
  }, [paused, length]);
  return <span className="pt-scramble" aria-label="private">▓▒░{text}░▒▓</span>;
}

const clockFmt = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "2-digit", timeZoneName: "short" });
function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 15_000);
    return () => clearInterval(t);
  }, []);
  return clockFmt.format(now);
}

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
const UNITS: [Intl.RelativeTimeFormatUnit, number][] = [["year", 31536e3], ["month", 2592e3], ["day", 86400], ["hour", 3600], ["minute", 60]];
function ago(iso: string) {
  const s = (Date.parse(iso) - Date.now()) / 1000;
  const [unit, size] = UNITS.find(([, n]) => Math.abs(s) >= n) ?? ["second", 1];
  return unit === "second" ? "just now" : rtf.format(Math.round(s / size), unit);
}

// Types SCRIPT char by char; `n` = chars shown. Commands type, outputs appear whole.
function useTyping(paused: boolean, run: number) {
  const total = SCRIPT.reduce((t, l) => t + l.cmd.length, 0);
  const [n, setN] = useState(0);
  useEffect(() => setN(paused || reducedMotion() ? total : 0), [run, paused, total]);
  useEffect(() => {
    if (n >= total) return;
    const t = setTimeout(() => setN(n + 1), 55);
    return () => clearTimeout(t);
  }, [n, total]);
  let left = n;
  return SCRIPT.map((l) => {
    const shown = Math.min(left, l.cmd.length);
    left -= shown;
    return { cmd: l.cmd.slice(0, shown), out: shown === l.cmd.length ? l.out : null };
  });
}

// Falling-code background. Blank when paused or reduced motion.
const GLYPHS = "01{}[]()<>=;SELECTFROMJOINdefλアイウエオカキクケコサシスセソ";
function Rain({ paused }: { paused: boolean }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!, size = 15;
    let drops: number[] = [];
    const resize = () => {
      c.width = innerWidth; c.height = innerHeight;
      drops = Array.from({ length: Math.ceil(c.width / size) }, () => Math.floor((Math.random() * c.height) / size));
    };
    resize();
    addEventListener("resize", resize);
    let id = 0, last = 0;
    const draw = (t: number) => {
      id = requestAnimationFrame(draw);
      if (t - last < 70) return; // ~14fps is plenty for rain
      last = t;
      ctx.fillStyle = "rgba(7,6,6,0.14)";
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = "#39ff88";
      ctx.font = `${size}px "JetBrains Mono", monospace`;
      drops.forEach((y, i) => {
        ctx.fillText(GLYPHS[Math.floor(Math.random() * GLYPHS.length)], i * size, y * size);
        drops[i] = y * size > c.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };
    if (!paused && !reducedMotion()) id = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(id); removeEventListener("resize", resize); };
  }, [paused]);
  return <canvas ref={ref} className="pt-rain" aria-hidden="true" />;
}

// The "light mode" button. It never turns light mode on.
const QUIPS = [
  "Light mode? In this economy?",
  "Bugs are attracted to light. Request denied.",
  "sudo: light-mode: permission denied",
  "Your retinas filed a complaint. Blocked.",
  "404: light not found",
  "My dashboards are dark. My pipelines are dark. Consistency.",
];
function LightSwitch() {
  const [clicks, setClicks] = useState(0);
  const msg = clicks ? QUIPS[(clicks - 1) % QUIPS.length] : "";
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!clicks) return;
    setShown(true);
    const t = setTimeout(() => setShown(false), 3500);
    return () => clearTimeout(t);
  }, [clicks]);
  return (
    <span className="pt-switch">
      <button onClick={() => setClicks(clicks + 1)} className="pt-icon" aria-label="Switch to light mode">☀</button>
      {shown && <span className="pt-bubble" role="status">{msg}</span>}
    </span>
  );
}

const Section = ({ id, n, title, cmd, children }: { id: string; n: string; title: string; cmd: string; children: ReactNode }) => (
  <section id={id} className="pt-section">
    <p className="pt-mono text-sm pt-faint mb-2"><span className="pt-neon">$</span> {cmd}</p>
    <h2 className="pt-h2"><span className="pt-num">{n}</span>{title}</h2>
    {children}
  </section>
);

const Nav = ({ paused, setPaused }: { paused: boolean; setPaused: (p: boolean) => void }) => (
  <nav className="pt-nav">
    <div className="pt-wrap flex items-center justify-between gap-4 py-3">
      <a href="#top" className="pt-mono font-bold text-sm md:text-base"><span className="pt-neon">~/</span>{profile.handle}</a>
      <div className="flex items-center gap-3 md:gap-5 text-sm">
        <span className="hidden md:flex gap-5 pt-mono">
          <a href="#work">work</a><a href="#systems">systems</a><a href="#experience">experience</a>
          <a href="#projects">projects</a><a href="#contact">contact</a>
        </span>
        <a href={RESUME} target="_blank" rel="noopener noreferrer" className="pt-btn">résumé.pdf</a>
        <button onClick={() => setPaused(!paused)} className="pt-icon" aria-pressed={paused}
          aria-label={paused ? "Play motion" : "Pause motion"}>{paused ? "▶" : "❚❚"}</button>
        <LightSwitch />
      </div>
    </div>
  </nav>
);

function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setState("sending");
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST", body: new FormData(form), headers: { Accept: "application/json" },
    }).catch(() => null);
    setState(res?.ok ? "sent" : "error");
    if (res?.ok) form.reset();
  };
  return (
    <Section id="contact" n="08" title="Contact" cmd="ping gopi">
      <p className="pt-soft mb-6">Get in touch.</p>
      <div className="flex flex-wrap gap-3 mb-8 pt-mono text-sm">
        <a className="pt-btn" href={`mailto:${profile.email}`}>{profile.email}</a>
        <a className="pt-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
        <a className="pt-btn" href={profile.github} target="_blank" rel="noopener noreferrer">github</a>
      </div>
      {FORMSPREE_ID && (
        <form onSubmit={submit} className="pt-term grid gap-3 max-w-xl">
          <label className="pt-label">name<input name="name" required className="pt-input" /></label>
          <label className="pt-label">email<input name="email" type="email" required className="pt-input" /></label>
          <label className="pt-label">message<textarea name="message" rows={5} required className="pt-input" /></label>
          <button className="pt-btn justify-self-start" disabled={state === "sending"}>
            {state === "sending" ? "sending…" : "$ send"}
          </button>
          {state === "sent" && <p className="pt-mono text-sm pt-neon">✓ sent — I'll reply soon.</p>}
          {state === "error" && <p className="pt-mono text-sm pt-faint">✗ didn't send. Email me directly instead.</p>}
        </form>
      )}
    </Section>
  );
}

const Index = () => {
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  const lines = useTyping(paused, run);
  const done = lines[lines.length - 1].out !== null;
  const activity = useActivity();
  const clock = useClock();
  const latest = activity?.latest;

  useEffect(() => { document.documentElement.classList.toggle("pt-paused", paused); }, [paused]);

  return (
    <div className="pt-page">
      <Rain paused={paused} />
      <Nav paused={paused} setPaused={setPaused} />
      <main className="pt-wrap" id="top">
        <header className="pt-hero">
          <div className="pt-term" aria-label={`${profile.name}, ${profile.title}`}>
            <div className="pt-term-bar"><span /><span /><span />
              <button onClick={() => setRun(run + 1)} className="ml-auto pt-faint">↻ replay</button>
            </div>
            {lines.map((l, i) => (l.cmd || i === 0) && (
              <div key={i} className="pt-mono">
                <div><span className="pt-neon">$ </span>{l.cmd}{l.out === null && <span className="pt-cursor" />}</div>
                {l.out && <div className={i === 0 ? "pt-name" : i === 1 ? "pt-soft" : "pt-faint"}>{l.out}</div>}
              </div>
            ))}
            {done && (
              <div className="pt-mono">
                <div><span className="pt-neon">$ </span>systemctl status gopi</div>
                <div className="pt-status">
                  <div><span className="pt-live" aria-hidden="true" /> <span className="pt-soft">gopi.service</span> — {profile.title}</div>
                  <dl>
                    <dt>Active</dt><dd><span className="pt-neon">active (running)</span> since 2021</dd>
                    <dt>Local</dt><dd>{clock} · {profile.location}</dd>
                    {latest && (
                      <>
                        <dt>Last push</dt>
                        <dd className="pt-commit">
                          {"repo" in latest ? (
                            <>
                              <a href={latest.url} target="_blank" rel="noopener noreferrer" className="pt-soft">{latest.repo}</a>
                              <span className="pt-commit-msg">· {latest.msg}</span>
                            </>
                          ) : (
                            <>
                              <span className="pt-redact" aria-hidden="true">████████</span>
                              <span className="pt-commit-msg"><Scramble paused={paused} /></span>
                            </>
                          )}
                          <span>· {ago(latest.when)}</span>
                        </dd>
                      </>
                    )}
                  </dl>
                </div>
              </div>
            )}
            {done && <div className="pt-mono"><span className="pt-neon">$ </span><span className="pt-cursor" /></div>}
          </div>
          <p className="pt-lede">{profile.summary}</p>
        </header>

        <Section id="work" n="01" title="What I do" cmd="ls ~/work">
          <div className="grid md:grid-cols-2 gap-4">
            {work.map((w) => (
              <article key={w.dir} className="pt-card">
                <p className="pt-mono text-sm pt-neon">{w.dir}</p>
                <h3 className="font-semibold mt-1">{w.title}</h3>
                <p className="pt-soft text-[0.95rem] mt-2">{w.text}</p>
                <div className="flex flex-wrap gap-2 mt-3">{w.tools.map((t) => <span key={t} className="pt-tag">{t}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="systems" n="02" title="Internal systems" cmd="ls ~/work/internal">
          <p className="pt-soft mb-6">Client and government work. No links, no screenshots — but here's what it does.</p>
          <div className="grid gap-3">
            {systems.map((x, i) => (
              <details key={x.name} className="pt-case">
                <summary>
                  <span className="pt-case-num">{String(i + 1).padStart(2, "0")}/{String(systems.length).padStart(2, "0")}</span>
                  <span className="pt-case-main">
                    <span className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="font-semibold">{x.name}</span>
                      <span className="pt-internal">▣ internal</span>
                    </span>
                    <span className="pt-case-result">{x.result}</span>
                    <span className="flex flex-wrap gap-2 mt-2">
                      <span className="pt-tag pt-tag-kind">{x.kind}</span>
                      {x.stack.map((t) => <span key={t} className="pt-tag">{t}</span>)}
                    </span>
                  </span>
                  <span className="pt-case-toggle" aria-hidden="true" />
                </summary>
                <ul>{x.details.map((d) => <li key={d}>{d}</li>)}</ul>
              </details>
            ))}
          </div>
        </Section>

        <Section id="experience" n="03" title="Experience" cmd="git log --oneline career/">
          {experience.map((job, j) => (
            <details key={job.company} className="pt-job" open={j < 2}>
              <summary>
                <span className="pt-company">{job.company}</span>
                <span className="pt-label">{job.location}</span>
              </summary>
              <div className="pt-timeline">
                {job.roles.map((r) => (
                  <div key={r.title} className={`pt-role${r.period.includes("Present") ? " pt-now" : ""}`}>
                    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1">
                      <span className="pt-role-title">{r.title}</span>
                      <span className="pt-mono text-sm pt-faint">{r.period}</span>
                    </div>
                    <ul>{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </Section>

        <Section id="projects" n="04" title="Projects" cmd="ls ~/side-quests">
          <div className="grid gap-4">
            {projects.map((p) => (
              <article key={p.name} className="pt-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{p.name}{p.tag && <span className="pt-tag ml-2">{p.tag}</span>}</h3>
                  <span className="pt-mono text-sm flex gap-3">
                    {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">live ↗</a>}
                    <a href={p.url} target="_blank" rel="noopener noreferrer">github ↗</a>
                  </span>
                </div>
                <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <div className="flex flex-wrap gap-2 mt-3">{p.stack.map((s) => <span key={s} className="pt-tag">{s}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" n="05" title="Skills" cmd="cat requirements.txt">
          <dl className="grid gap-4">
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className="pt-skill">
                <dt className="pt-label">{group}</dt>
                <dd className="flex flex-wrap gap-2">{list.map((s) => <span key={s} className="pt-tag">{s}</span>)}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="achievements" n="06" title="Achievements" cmd="cat trophies.txt">
          <ul className="grid gap-2 pt-mono">
            {achievements.map((a) => <li key={a.text}><span className="pt-neon font-bold">{a.rank}</span> <span className="pt-soft">— {a.text}</span></li>)}
          </ul>
        </Section>

        <Section id="credentials" n="07" title="Education & Certifications" cmd="cat credentials.json">
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((e) => (
              <div key={e.school} className="pt-card">
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="pt-soft">{e.school}, {e.place}</p>
                <p className="pt-label mt-2">{e.date} · GPA {e.gpa}</p>
              </div>
            ))}
            {certifications.map((c) => (
              <div key={c.name} className="pt-card">
                <h3 className="font-semibold">{c.name}</h3>
                <p className="pt-soft">{c.issuer}</p>
                <p className="pt-label mt-2">{c.date}{c.url && <> · <a href={c.url} target="_blank" rel="noopener noreferrer">verify ↗</a></>}</p>
              </div>
            ))}
          </div>
        </Section>

        <Contact />

        <footer className="pt-footer pt-mono">
          <span>© {new Date().getFullYear()} {profile.name} · no light mode was harmed in the making of this site</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">source on github</a>
        </footer>
      </main>
    </div>
  );
};

export default Index;
