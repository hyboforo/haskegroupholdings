import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description: "Open roles across Haske Group Holdings, HaskeHub and HaskeConsulting.",
};

// TODO: add roles here. Leave the array empty to show the "no open roles" message.
const roles: { title: string; company: string; location: string; type: string; applyUrl: string }[] = [];

export default function Careers() {
  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">Careers</p>
          <h1 className="h-page">Help us build useful things for Ghana.</h1>
          <p className="lead">
            One place for jobs across every Haske company. Small teams, real ownership, and products people use every day.
          </p>
        </div>
      </section>

      <section className="section section--line">
        <div className="container">
          <h2 className="h-section" style={{ marginBottom: 32 }}>Open roles</h2>
          {roles.length === 0 ? (
            <div className="card">
              <h3>No open roles right now</h3>
              <p>
                We still like hearing from good people. Send your CV and a short note to{" "}
                <a href={`mailto:${site.email}?subject=Careers`}>{site.email}</a>.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {roles.map((r) => (
                <a key={r.title} href={r.applyUrl} className="card" style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.company} · {r.location} · {r.type}</p>
                  </div>
                  <span style={{ fontWeight: 600 }}>Apply →</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
