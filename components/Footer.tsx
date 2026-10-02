import Link from "next/link";
import { companies, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__col">
          <strong style={{ fontFamily: "var(--display)", fontSize: 20 }}>{site.name}</strong>
          <span>{site.address}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          {site.phone && <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>}
        </div>
        <div className="site-footer__col">
          <strong>Companies</strong>
          {companies.map((c) => (
            <a key={c.name} href={c.url}>
              {c.name}
            </a>
          ))}
        </div>
        <div className="site-footer__col">
          <strong>Group</strong>
          <Link href="/about/">About</Link>
          <Link href="/careers/">Careers</Link>
          <Link href="/contact/">Contact</Link>
          <Link href="/privacy/">Privacy</Link>
        </div>
      </div>
      <div className="container site-footer__bottom">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
