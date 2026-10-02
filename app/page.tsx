import Link from "next/link";
import { companies, principles, site } from "@/lib/site";
import { Arrow } from "@/components/Icons";

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container hero">
          <div>
            <p className="eyebrow">Haske · light</p>
            <h1 className="h-display">We build the businesses that help Ghana work better online.</h1>
            <p className="lead">
              {site.name} is the Accra-based parent company of HaskeHub and HaskeConsulting. We start, own and support
              technology businesses built for how Ghana works.
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

          <dl className="glance" aria-label="The group at a glance">
            <div>
              <dt>Companies</dt>
              <dd>HaskeHub · HaskeConsulting</dd>
            </div>
            <div>
              <dt>Sectors</dt>
              <dd>Creator marketing · Technology services</dd>
            </div>
            <div>
              <dt>Products</dt>
              <dd>HaskeHub · Taskers Ghana</dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{site.address}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="companies" className="section section--ink">
        <div className="container">
          <p className="eyebrow">Our companies</p>
          <h2 className="h-section">Two businesses, each with its own customers and team.</h2>
          <div className="grid" style={{ marginTop: 48 }}>
            {companies.map((c) => (
              <article key={c.name} className="company">
                <div className="company__kind">
                  <span className="company__dot" style={{ background: c.color }} />
                  {c.kind}
                </div>
                <h3>{c.name}</h3>
                <p>{c.summary}</p>
                <ul className="company__focus">
                  {c.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                {c.note && <p className="company__note">{c.note}</p>}
                <a href={c.url} className="company__link">
                  Visit {c.domain} <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">How the group works</p>
          <h2 className="h-section" style={{ maxWidth: 720 }}>One group, separate brands.</h2>
          <div className="principles">
            {principles.map((p, i) => (
              <div key={p.title}>
                <span className="principles__num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
          <Link href="/about/" className="btn btn--ghost" style={{ marginTop: 40 }}>
            About the group
          </Link>
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
