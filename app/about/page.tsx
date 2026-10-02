import type { Metadata } from "next";
import { companies, leaders, site } from "@/lib/site";
import { Arrow } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are, what we stand for, and the people behind Haske Group Holdings.",
};

const values = [
  { title: "Built for here", body: "We design for how people in Ghana actually buy, pay and talk: mobile money, WhatsApp and SMS first." },
  { title: "Earn trust", body: "Privacy and honesty come before growth. HaskeHub shares no one's contact details without their say-so." },
  { title: "Own the outcome", body: "We run our own products, so we build the way owners do and stay after launch." },
];

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1 className="h-page">Haske means light. We build things that make business clearer.</h1>
          <p className="lead">
            {site.name} owns and supports a small group of Ghanaian technology businesses. Each one runs under its own name
            and serves its own customers. The group gives them shared leadership, finance and engineering standards.
          </p>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <p className="eyebrow">What we stand for</p>
          <h2 className="h-section" style={{ marginBottom: 40 }}>Our values</h2>
          <div className="grid">
            {values.map((v) => (
              <div key={v.title} className="card">
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--line" aria-labelledby="leadership">
        <div className="container">
          <p className="eyebrow">The people behind Haske</p>
          <h2 id="leadership" className="h-section" style={{ marginBottom: 40 }}>Leadership</h2>
          <div className="leaders">
            {leaders.map((p) => (
              <article key={p.name} className="leader">
                {p.photo ? (
                  <img src={p.photo} alt={p.name} className="leader__avatar" />
                ) : (
                  <div className="leader__avatar" aria-hidden="true">{p.initials}</div>
                )}
                <h3>{p.name}</h3>
                <p className="leader__role">{p.role}</p>
                <p className="muted">{p.short}</p>
                {p.linkedin && (
                  <a href={p.linkedin} className="leader__link" rel="noopener" aria-label={`${p.name} on LinkedIn`}>
                    LinkedIn <Arrow />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <p className="eyebrow">Our companies</p>
          <h2 className="h-section" style={{ marginBottom: 32 }}>Part of the group</h2>
          <div className="grid">
            {companies.map((c) => (
              <a key={c.name} href={c.url} className="company" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="company__kind">
                  <span className="company__dot" style={{ background: c.color }} />
                  {c.kind}
                </div>
                <h3 style={{ fontSize: 28 }}>{c.name}</h3>
                <p>{c.summary}</p>
                <span className="company__link">
                  Visit {c.domain} <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
