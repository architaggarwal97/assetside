import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Work — Asset Side";
const DESCRIPTION =
  "A broader look at the brands and results behind the case studies — luxury, D2C, jewellery, events, and category creation.";
const URL = "https://assetside.lovable.app/work";

type FeaturedResult = {
  brand: string;
  category: string;
  stat: string;
  link?: { to: "/case-studies"; hash: string };
};

const FEATURED_RESULTS: FeaturedResult[] = [
  {
    brand: "Adyaaye",
    category: "Luxury Couture",
    stat: "2.4x ROAS, +34% store walk-ins",
    link: { to: "/case-studies", hash: "adyaaye" },
  },
  {
    brand: "Monture",
    category: "Western Wear, D2C",
    stat: "2.1x order volume via WhatsApp-first commerce",
    link: { to: "/case-studies", hash: "monture" },
  },
  {
    brand: "Jewellery Vertical",
    category: "Fine Jewellery",
    stat: "2.7x avg ROAS, +38% walk-ins",
    link: { to: "/case-studies", hash: "jewellery-vertical" },
  },
  {
    brand: "Self Storage India",
    category: "Category Creation",
    stat: "Ad spend scaled 50x, ₹45L/month in sales",
    link: { to: "/case-studies", hash: "self-storage-india" },
  },
  {
    brand: "Fur Ball Story",
    category: "Pet Wellness, D2C",
    stat: "ROAS 2.4x to 3.9x, AOV up 28%",
  },
  {
    brand: "Wedding Asia",
    category: "Events & Exhibitions",
    stat: "SQL rate 25% to 54%, cost per SQL down 50%",
  },
  {
    brand: "Ladli Foundation Trust",
    category: "NGO, Digital Fundraising",
    stat: "3.5x growth in overseas donations",
  },
];

type AlsoWorkedWith = {
  brand: string;
  category: string;
};

const ALSO_WORKED_WITH: AlsoWorkedWith[] = [
  { brand: "Nike", category: "Retail" },
  { brand: "Crocs", category: "Retail" },
  { brand: "Kaya", category: "Skin Clinic" },
  { brand: "Geetanjali", category: "Salon" },
  { brand: "W for Women", category: "Fashion" },
  { brand: "Indriya", category: "Retail" },
  { brand: "Studio Olive Cre", category: "Fashion" },
  { brand: "Aurelia", category: "Fashion" },
  { brand: "24Seven", category: "Retail" },
  { brand: "Studio Prive", category: "Luxury Retail" },
  { brand: "Bright Rose", category: "Heritage Fashion" },
  { brand: "Banjara Trail", category: "Fashion" },
  { brand: "Shasha Gaba", category: "Fashion, Menswear MBO" },
];

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: WorkPage,
});

function WorkPage() {
  useReveal();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal">
      <SiteNav variant="dark" />

      <header
        className="relative pt-40 pb-24 md:pt-52 md:pb-32 text-cream"
        style={{ background: "linear-gradient(180deg, #0b2b1e 0%, #2F6B4F 100%)" }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="reveal flex items-center gap-4">
            <span className="font-display text-sm italic text-gold">§</span>
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-cream/60">Selected Work</span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.1] md:text-6xl lg:text-7xl">
            Work
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg leading-relaxed text-cream/85 md:text-xl">
            A broader look at the brands and results behind the case studies.
          </p>
        </div>
      </header>

      <main>
        <section id="featured-results" className="py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="reveal flex items-center gap-4">
              <span className="font-display text-sm italic text-gold">01</span>
              <div className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal-soft">Featured Results</span>
            </div>
            <h2 className="reveal mt-6 font-display text-3xl text-navy-deep md:text-4xl">
              Brands and results that moved the needle.
            </h2>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_RESULTS.map((item, idx) => (
                <FeaturedResultCard key={item.brand} item={item} index={idx} />
              ))}
            </div>
          </div>
        </section>

        <section id="also-worked-with" className="border-t border-gold/15 bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="reveal flex items-center gap-4">
              <span className="font-display text-sm italic text-gold">02</span>
              <div className="h-px w-10 bg-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-charcoal-soft">Also Worked With</span>
            </div>
            <h2 className="reveal mt-6 font-display text-3xl text-navy-deep md:text-4xl">
              A wider roster of brands.
            </h2>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {ALSO_WORKED_WITH.map((item, idx) => (
                <div
                  key={item.brand}
                  className="reveal group border border-gold/20 bg-cream p-6 transition-all duration-300 hover:border-gold hover:bg-gold/5"
                  data-reveal-index={idx}
                >
                  <div className="font-display text-xl text-navy-deep transition-colors group-hover:text-gold">
                    {item.brand}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-charcoal-soft">
                    {item.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactBlock />
      </main>

      <SiteFooter />
    </div>
  );
}

function FeaturedResultCard({ item, index }: { item: FeaturedResult; index: number }) {
  const contents = (
    <>
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.16em] text-gold">{item.category}</span>
        {item.link && (
          <span className="text-xs uppercase tracking-[0.16em] text-gold/70 transition-colors group-hover:text-gold">
            View case →
          </span>
        )}
      </div>
      <div className="mt-5 font-display text-2xl text-navy-deep transition-colors group-hover:text-gold">
        {item.brand}
      </div>
      <div className="mt-3 text-sm leading-relaxed text-charcoal-soft">{item.stat}</div>
    </>
  );

  const className =
    "reveal group block border border-gold/30 bg-cream p-6 transition-all duration-300 hover:border-gold hover:bg-gold/5 hover:shadow-[0_12px_30px_-20px_rgba(11,43,30,0.25)]";

  return item.link ? (
    <Link
      to={item.link.to}
      hash={item.link.hash}
      className={className}
      data-reveal-index={index}
    >
      {contents}
    </Link>
  ) : (
    <div className={className} data-reveal-index={index}>
      {contents}
    </div>
  );
}

function ContactBlock() {
  return (
    <section
      id="contact"
      className="py-28 text-cream md:py-40"
      style={{ background: "linear-gradient(180deg, #0b2b1e 0%, #2F6B4F 100%)" }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <div className="reveal flex items-center justify-center gap-4">
          <span className="font-display text-sm italic text-gold">§</span>
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-cream/60">Contact</span>
        </div>
        <h2 className="reveal mx-auto mt-8 max-w-3xl font-display text-3xl leading-tight text-cream md:text-5xl">
          Let's talk about your <span className="italic text-gold">next quarter.</span>
        </h2>
        <div className="reveal mx-auto mt-10 h-px w-16 bg-gold" />
        <p className="reveal mx-auto mt-10 max-w-xl font-display text-lg italic text-cream/85">
          Selective engagements. Direct line, no gatekeepers.
        </p>
        <div className="reveal mt-14 grid gap-8 sm:grid-cols-2">
          <PhoneBlock label="+91 98186 61308" tel="+919818661308" wa="919818661308" />
          <PhoneBlock label="+91 88004 46635" tel="+918800446635" wa="918800446635" />
        </div>
        <div className="reveal mt-10">
          <a
            href="mailto:ArchitAggarwal97@gmail.com"
            aria-label="Email Archit Aggarwal at ArchitAggarwal97@gmail.com"
            className="inline-flex min-w-[180px] items-center justify-center gap-3 border border-cream/50 px-8 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
          >
            Email
          </a>
        </div>
        <div className="reveal mt-12 text-xs uppercase tracking-[0.22em] text-cream/80">
          <div className="normal-case tracking-normal text-cream/85">ArchitAggarwal97@gmail.com</div>
        </div>
      </div>
    </section>
  );
}

function PhoneBlock({ label, tel, wa }: { label: string; tel: string; wa: string }) {
  return (
    <div className="space-y-4">
      <div className="text-xs uppercase tracking-[0.2em] text-cream/80">{label}</div>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={`tel:${tel}`}
          aria-label={`Call Archit Aggarwal on ${label}`}
          className="inline-flex min-w-[140px] items-center justify-center gap-3 border border-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy-deep hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
        >
          Call
        </a>
        <a
          href={`https://wa.me/${wa}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Message Archit Aggarwal on WhatsApp at ${label}`}
          className="inline-flex min-w-[140px] items-center justify-center gap-3 bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-navy-deep transition-all duration-300 hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
