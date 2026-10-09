import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  FORMSPREE_ID, profile, stats, impact, experience, projects,
  achievements, skills, certifications, education,
} from "@/content";

const RESUME = `${import.meta.env.BASE_URL}resume.pdf`;

const SCRIPT = [
  { cmd: "whoami", out: profile.name },
  { cmd: "cat role.txt", out: `${profile.title} · ${profile.location}` },
];

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

const Section = ({ id, n, title, children }: { id: string; n: string; title: string; children: ReactNode }) => (
  <section id={id} className="pt-section">
    <h2 className="pt-h2"><span className="pt-num">{n}</span>{title}</h2>
    {children}
  </section>
);

const CODE = "def reconcile(payments, ledger): return [p for p in payments if match(p, ledger)] ".repeat(12);

const Nav = ({ paused, setPaused }: { paused: boolean; setPaused: (p: boolean) => void }) => (
  <nav className="pt-nav">
    <div className="pt-wrap flex items-center justify-between gap-4 py-3">
      <a href="#top" className="pt-mono font-bold text-sm md:text-base">~/{profile.handle}</a>
      <div className="flex items-center gap-3 md:gap-5 text-sm">
        <span className="hidden md:flex gap-5 pt-mono">
          <a href="#impact">impact</a><a href="#experience">experience</a>
          <a href="#projects">projects</a><a href="#contact">contact</a>
        </span>
        <a href={RESUME} target="_blank" rel="noopener noreferrer" className="pt-btn">résumé.pdf</a>
        <button onClick={() => setPaused(!paused)} className="pt-mono pt-faint" aria-pressed={paused}
          title={paused ? "Play motion" : "Pause motion"}>{paused ? "▶" : "❚❚"}</button>
        <ThemeToggle />
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
    <Section id="contact" n="07" title="Contact">
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
          {state === "sent" && <p className="pt-mono text-sm pt-holo">✓ sent — I'll reply soon.</p>}
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

  useEffect(() => { document.documentElement.classList.toggle("pt-paused", paused); }, [paused]);

  return (
    <div className="pt-page">
      <Nav paused={paused} setPaused={setPaused} />
      <main className="pt-wrap" id="top">
        {/* Hero */}
        <header className="pt-hero">
          <div className="pt-term" aria-label={`${profile.name}, ${profile.title}`}>
            <div className="pt-term-bar"><span /><span /><span />
              <button onClick={() => setRun(run + 1)} className="ml-auto pt-faint" title="Replay">↻ replay</button>
            </div>
            {lines.map((l, i) => (l.cmd || i === 0) && (
              <div key={i} className="pt-mono">
                <div><span className="pt-faint">$ </span>{l.cmd}{l.out === null && <span className="pt-cursor" />}</div>
                {l.out && <div className={i === 0 ? "pt-name" : "pt-soft"}>{l.out}</div>}
              </div>
            ))}
            {done && <div className="pt-mono"><span className="pt-faint">$ </span><span className="pt-cursor" /></div>}
          </div>
          <p className="pt-lede">{profile.summary}</p>
          <dl className="pt-stats">
            {stats.map((s) => (
              <div key={s.label}><dt className="pt-stat">{s.value}</dt><dd className="pt-label">{s.label}</dd></div>
            ))}
          </dl>
        </header>

        <Section id="impact" n="01" title="Impact">
          <p className="pt-soft mb-2">Before → after, from my résumé. Gray bar = before, colored bar = after.</p>
          {impact.map((m) => (
            <div key={m.label} className="pt-metric">
              <div><b className="pt-stat">{m.metric}</b><span className="pt-label">{m.label}</span></div>
              <div>
                <div className="pt-bar pt-b0" style={{ "--w": `${m.before}%` } as React.CSSProperties}><s>{CODE}</s><em>{m.beforeText}</em></div>
                <div className="pt-bar pt-b2" style={{ "--w": `${m.after}%` } as React.CSSProperties}><s>{CODE}</s><em>{m.afterText}</em></div>
              </div>
            </div>
          ))}
        </Section>

        <Section id="experience" n="02" title="Experience">
          {experience.map((job, j) => (
            <details key={job.company} className="pt-job" open={j < 2}>
              <summary>
                <span className="font-semibold">{job.company}</span>
                <span className="pt-label">{job.location}</span>
              </summary>
              {job.roles.map((r) => (
                <div key={r.title} className="pt-role">
                  <div className="flex flex-wrap justify-between gap-2 pt-mono text-sm">
                    <span className="pt-holo font-bold">{r.title}</span><span className="pt-faint">{r.period}</span>
                  </div>
                  <ul>{r.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                </div>
              ))}
            </details>
          ))}
        </Section>

        <Section id="projects" n="03" title="Projects">
          <div className="grid gap-4">
            {projects.map((p) => (
              <article key={p.name} className="pt-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold">{p.name}{p.tag && <span className="pt-tag ml-2">{p.tag}</span>}</h3>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="pt-mono text-sm">github ↗</a>
                </div>
                <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                <div className="flex flex-wrap gap-2 mt-3">{p.stack.map((s) => <span key={s} className="pt-tag">{s}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" n="04" title="Skills">
          <dl className="grid gap-4">
            {Object.entries(skills).map(([group, list]) => (
              <div key={group} className="pt-skill">
                <dt className="pt-label">{group}</dt>
                <dd className="flex flex-wrap gap-2">{list.map((s) => <span key={s} className="pt-tag">{s}</span>)}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="achievements" n="05" title="Achievements">
          <ul className="grid gap-2 pt-mono">
            {achievements.map((a) => <li key={a.text}><span className="pt-holo font-bold">{a.rank}</span> <span className="pt-soft">— {a.text}</span></li>)}
          </ul>
        </Section>

        <Section id="credentials" n="06" title="Education & Certifications">
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
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">source on github</a>
        </footer>
      </main>
    </div>
  );
};

export default Index;
