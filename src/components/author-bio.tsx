import { Link } from "@tanstack/react-router";
import architPortrait from "@/assets/archit-portrait.webp.asset.json";

const CREDENTIALS = [
  "Google Ads Certified",
  "SEMRush SEO Toolkit Certified",
  "HubSpot Inbound Certified",
  "Applied Business Analytics, ISB",
];

export function AuthorBio() {
  return (
    <aside className="rounded-lg border border-gold/50 bg-cream p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8">
      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
        <div className="shrink-0">
          <img
            src={architPortrait.url}
            alt="Portrait of Archit Aggarwal"
            width={96}
            height={96}
            loading="lazy"
            className="h-24 w-24 rounded-full border border-gold/50 object-cover"
          />
        </div>
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div>
            <h3 className="font-display text-2xl text-navy-deep">Archit Aggarwal</h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-widest text-navy">
              Growth Marketing Consultant
            </p>
          </div>
          <p className="max-w-2xl text-charcoal-soft leading-relaxed">
            10+ years in growth marketing and brand strategy across luxury fashion, jewellery, and
            D2C brands. Currently leading performance marketing for a portfolio of 15+ labels.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {CREDENTIALS.map((credential) => (
              <span
                key={credential}
                className="inline-block rounded-full border border-gold/40 bg-navy/5 px-3 py-1 text-xs font-medium text-navy-deep"
              >
                {credential}
              </span>
            ))}
          </div>
          <Link
            to="/"
            hash="about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-soft"
            aria-label="Read more about Archit Aggarwal"
          >
            More about Archit
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
