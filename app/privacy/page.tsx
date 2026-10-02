import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <section className="section">
      <div className="container prose">
        <p className="eyebrow">Privacy</p>
        <h1 className="h-page">Privacy notice</h1>
        <p>Last updated: 2 October 2026</p>
        <p>
          This notice covers {site.url.replace("https://", "")}. HaskeHub and HaskeConsulting have their own privacy
          notices on their own sites.
        </p>
        <h2>What we collect</h2>
        <p>
          This site does not use accounts, tracking cookies or advertising. If you email us, we keep your message and
          email address so we can reply.
        </p>
        <h2>How we use it</h2>
        <p>Only to answer your enquiry. We do not sell or share your details.</p>
        <h2>Your rights</h2>
        <p>
          You can ask to see, correct or delete what we hold about you by writing to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
        <h2>Who we are</h2>
        <p>
          {site.name}, {site.address}.
        </p>
      </div>
    </section>
  );
}
