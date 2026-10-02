import type { Metadata } from "next";
import { companies } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "The story, values and leadership behind Haske Group Holdings.",
};

// TODO: replace with real people. Add a photo to /public/team and set `photo`.
const leaders = [
  { name: "[Name]", role: "Founder & CEO", photo: "" },
  { name: "[Name]", role: "[Role]", photo: "" },
];

const values = [
  { title: "Built for here", body: "We design for how people in Ghana actually buy, pay and talk: mobile money, WhatsApp and local delivery first." },
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
            [Your story: why Haske was founded, when, and the problem you set out to solve. Two or three sentences.]
          </p>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 40 }}>What we stand for</h2>
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

      <section className="section section--line">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 40 }}>Leadership</h2>
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
            {leaders.map((p, i) => (
              <div key={i} className="person">
                {p.photo ? (
                  <img src={p.photo} alt={p.name} className="person__photo" style={{ objectFit: "cover" }} />
                ) : (
                  <div className="person__photo">[Photo]</div>
                )}
                <strong>{p.name}</strong>
                <span className="muted" style={{ fontSize: 15 }}>{p.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 32 }}>Our companies</h2>
          <div className="grid">
            {companies.map((c) => (
              <a key={c.name} href={c.url} className="company" style={{ textDecoration: "none", color: "inherit" }}>
                <h3 style={{ fontSize: 28 }}>{c.name}</h3>
                <p>{c.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
