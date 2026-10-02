import type { Metadata } from "next";
import { companies, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Haske Group Holdings, HaskeHub or HaskeConsulting.",
};

export default function Contact() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="h-page">Who would you like to reach?</h1>
          <p className="lead">Each company handles its own customers. Pick the right team and you'll get an answer faster.</p>
        </div>
      </section>

      <section className="section section--line">
        <div className="container grid">
          <div className="card">
            <p className="eyebrow" style={{ marginBottom: 4 }}>The group</p>
            <h3>{site.name}</h3>
            <p>Partnerships, investment, press and anything about the group as a whole.</p>
            <a href={`mailto:${site.email}`} className="btn btn--solid" style={{ marginTop: 12, alignSelf: "flex-start" }}>
              Email {site.email}
            </a>
            <p style={{ fontSize: 15, marginTop: 8 }}>{site.address}</p>
          </div>
          {companies.map((c) => (
            <div key={c.name} className="card">
              <p className="eyebrow" style={{ marginBottom: 4 }}>{c.kind}</p>
              <h3>{c.name}</h3>
              <p>{c.summary}</p>
              <a href={c.url} className="btn btn--ghost" style={{ marginTop: 12, alignSelf: "flex-start" }}>
                Go to {c.domain}
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
