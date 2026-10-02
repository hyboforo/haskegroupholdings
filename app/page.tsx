import Link from "next/link";
import { companies, site } from "@/lib/site";
import { Arrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container" style={{ paddingTop: 24 }}>
          <p className="eyebrow">Haske · light</p>
          <h1 className="h-display">We build the businesses that help Ghana work better online.</h1>
          <p className="lead">
            {site.name} is the parent company of HaskeHub and HaskeConsulting. {/* TODO: one more sentence on your mission, founding year or where you operate. */}
          </p>
          <div className="btn-row">
            <a href="#companies" className="btn btn--solid">
              Meet our companies
            </a>
            <Link href="/contact/" className="btn btn--ghost">
              Contact the group
            </Link>
          </div>
        </div>
      </section>

      <section id="companies" className="section section--ink">
        <div className="container">
          <h2 className="h-section">Our companies</h2>
          <p className="lead" style={{ marginTop: 12, marginBottom: 48 }}>
            Two businesses, each with its own customers and its own team.
          </p>
          <div className="grid">
            {companies.map((c) => (
              <article key={c.name} className="company">
                <div className="company__kind">
                  <span className="company__dot" style={{ background: c.color }} />
                  {c.kind}
                </div>
                <h3>{c.name}</h3>
                <p>{c.summary}</p>
                <a href={c.url} className="company__link">
                  Visit {c.domain} <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid--wide">
          <div>
            <h2 className="h-section">One group, separate brands</h2>
          </div>
          <div>
            <p className="muted" style={{ marginTop: 0 }}>
              Each Haske company runs under its own name, with its own team and customers. The group provides the
              shared foundations: leadership, finance, hiring and the engineering practices our companies build on.
            </p>
            <Link href="/about/" className="btn btn--ghost" style={{ marginTop: 16 }}>
              About the group
            </Link>
          </div>
        </div>
      </section>

      <section className="section--accent">
        <div className="container section--tight" style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 640 }}>
            <h2 className="h-section">Work with us</h2>
            <p style={{ margin: "12px 0 0", fontSize: 18 }}>
              One careers page for every Haske company. See open roles at HaskeHub and HaskeConsulting.
            </p>
          </div>
          <Link href="/careers/" className="btn btn--solid">
            See open roles
          </Link>
        </div>
      </section>
    </>
  );
}
