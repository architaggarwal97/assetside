import { breadcrumbScript } from "@/data/breadcrumbs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import type { ServicePath } from "@/data/services";
import phoneAsset from "@/assets/phone-texting.jpg.asset.json";
import jewelleryAsset from "@/assets/jewellery-case.jpg.asset.json";
import boutiqueAsset from "@/assets/boutique-storefront.jpg.asset.json";

const TITLE = "Insights | Asset Side — Growth & Brand Notes";
const DESCRIPTION =
  "Notes on growth, brand, and what actually moves the needle — written from live campaigns across luxury, D2C, and jewellery, not from theory.";
const URL = "https://assetside.lovable.app/insights";

export const Route = createFileRoute("/insights")({
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
    scripts: [breadcrumbScript([{ name: "Insights", path: "/insights" }])],
  }),
  component: InsightsPage,
});

type ContextLink =
  | { label: string; to: "/case-studies"; hash: string }
  | { label: string; to: ServicePath; hash?: undefined };

type Article = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  header: { kind: "photo"; src: string; alt: string } | { kind: "quote"; quote: string };
  contextLink?: ContextLink;
};

const ARTICLES: Article[] = [
  {
    slug: "whatsapp-first-commerce",
    category: "D2C & Commerce",
    readTime: "4 min read",
    title: "Why WhatsApp-First Commerce Is Winning in Indian D2C",
    excerpt:
      "A website checkout is a wall. A WhatsApp chat is a conversation. For most Indian D2C brands, the second one closes more sales — and it's not close.",
    header: {
      kind: "photo",
      src: phoneAsset.url,
      alt: "Close-up of hands typing a message on a smartphone",
    },
    contextLink: {
      label: "D2C & WhatsApp-First Commerce",
      to: "/services/d2c-whatsapp-commerce",
    },
  },
  {
    slug: "dhanda-first-framework",
    category: "Growth Philosophy",
    readTime: "5 min read",
    title: "Dhanda-First: A Framework for Marketing That Pays for Itself",
    excerpt:
      "Every rupee of marketing spend should show up somewhere on the balance sheet, as an asset, not a liability. This is the filter I run every campaign through before it gets a budget.",
    header: {
      kind: "quote",
      quote: "What does this look like on the balance sheet in ninety days?",
    },
  },
  {
    slug: "jewellery-walk-in-campaigns",
    category: "Retail & Jewellery",
    readTime: "6 min read",
    title: "What Jewellery Brands Get Wrong About Store Walk-in Campaigns",
    excerpt:
      "Running three competing jewellery brands through the same bridal season taught me the one thing most retail campaigns get backwards: audience separation isn't a nice-to-have, it's the entire strategy.",
    header: {
      kind: "photo",
      src: jewelleryAsset.url,
      alt: "Fine jewellery displayed in a retail presentation case",
    },
    contextLink: {
      label: "Jewellery Vertical case study",
      to: "/case-studies",
      hash: "jewellery-vertical",
    },
  },
  {
    slug: "cost-of-vanity-metrics",
    category: "Performance Marketing",
    readTime: "5 min read",
    title: "The Real Cost of Chasing Vanity Metrics in Luxury Marketing",
    excerpt:
      "Reach and impressions look great in a slide deck. They don't pay rent. Here's how to tell the difference between a number that means something and a number that just looks like it does.",
    header: {
      kind: "photo",
      src: boutiqueAsset.url,
      alt: "Interior of a contemporary fashion boutique with curated clothing rails",
    },
    contextLink: {
      label: "Adyaaye case study",
      to: "/case-studies",
      hash: "adyaaye",
    },
  },
  {
    slug: "performance-marketing-needs-pr",
    category: "Brand Strategy",
    readTime: "4 min read",
    title: "Why Performance Marketing Needs PR Sitting Right Next to It",
    excerpt:
      "An ad works harder when it's not the only place a customer sees the brand. The campaigns that scaled cleanest were always the ones running alongside a parallel PR push, not after one.",
    header: {
      kind: "quote",
      quote: "Reach without credibility is just noise at a higher volume.",
    },
    contextLink: { label: "PR & Brand Amplification", to: "/services/pr" },
  },
];

function InsightsPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />
      <PageHeader />
      <main>
        <section className="bg-cream py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((a, i) => (
                <ArticleCard key={a.slug} article={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <ContactBlock />
      <SiteFooter />
    </div>
  );
}

function PageHeader() {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-28 text-cream md:pt-52 md:pb-40"
      style={{ background: "linear-gradient(160deg, #0b2b1e 0%, #1d4a36 55%, #2F6B4F 100%)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(196,146,42,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(196,146,42,0.12), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="reveal flex items-center gap-4">
          <span className="font-display text-sm italic text-gold">§</span>
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-cream/70">Insights</span>
        </div>
        <h1 className="reveal mt-8 font-display text-5xl leading-[1.05] md:text-7xl">Insights</h1>
        <p className="reveal mt-8 max-w-2xl font-display text-xl italic text-cream/85 md:text-2xl">
          Notes on growth, brand, and what actually moves the needle — from the campaigns, not the
          theory.
        </p>
        <div className="reveal mt-16 gold-divider max-w-md" />
      </div>
    </section>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <article
      className="reveal group flex h-full flex-col border border-gold/25 bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_18px_40px_-28px_rgba(11,43,30,0.6)]"
      data-reveal-index={String(index + 1)}
    >
      {article.header.kind === "photo" ? (
        <div className="aspect-[16/10] w-full overflow-hidden border-b border-gold/25 bg-navy-deep/10">
          <img
            src={article.header.src}
            alt={article.header.alt}
            width={1200}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div
          className="flex aspect-[16/10] w-full items-center border-b border-gold/25 px-7 py-8"
          style={{ background: "linear-gradient(150deg, #0b2b1e 0%, #2F6B4F 100%)" }}
        >
          <blockquote className="border-l-2 border-gold pl-5 font-display text-lg italic leading-snug text-cream md:text-xl">
            “{article.header.quote}”
          </blockquote>
        </div>
      )}

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase tracking-[0.24em]">
          <span className="text-gold">{article.category}</span>
          <span className="h-px w-5 bg-gold/50" aria-hidden />
          <span className="text-charcoal-soft">{article.readTime}</span>
        </div>

        <h2 className="mt-5 font-display text-xl leading-snug text-navy-deep md:text-2xl">
          {article.title}
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-charcoal">{article.excerpt}</p>

        {article.contextLink && (
          <div className="mt-5 text-[11px] uppercase tracking-[0.2em]">
            <Link
              to={article.contextLink.to}
              hash={article.contextLink.hash}
              className="text-gold underline-offset-4 transition-colors hover:underline"
            >
              {article.contextLink.label} →
            </Link>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-4 pt-8">
          <span
            aria-disabled="true"
            className="cursor-not-allowed select-none border border-charcoal-soft/30 px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-charcoal-soft/60"
          >
            Read More
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-charcoal-soft/70">
            Coming soon
          </span>
        </div>
      </div>
    </article>
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
