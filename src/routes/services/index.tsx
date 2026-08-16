import { breadcrumbScript } from "@/data/breadcrumbs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactBlock } from "@/components/contact-block";
import { SERVICES, TOOLS } from "@/data/services";

const TITLE = "Services — Asset Side";
const DESCRIPTION =
  "Eleven ways to plug into growth — performance marketing, brand positioning, D2C & WhatsApp commerce, lead generation, SEO, analytics, PR, events, MBO placements, social media marketing, and campaign & brand shoots.";
const CANONICAL_URL = "https://assetside.lovable.app/services";

const FAQ_ITEMS = [
  {
    question: "Are you open to a full-time role, or only freelance work?",
    answer:
      "Both, depending on the right fit. I currently balance a full-time role with a small number of independent engagements, so an in-house opportunity or a project-based collaboration are equally worth a conversation.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "A short discovery call first, then a focused audit of what's already working and what isn't, followed by a strategy and execution plan. Ongoing work usually settles into a monthly cadence: campaigns running, reporting on a fixed schedule, adjustments based on what the data actually says.",
  },
  {
    question: "How long do engagements usually run?",
    answer:
      "Depends on scope. Some are single projects, a campaign shoot, a GTM strategy for a launch, others are ongoing monthly retainers for performance marketing or growth systems. I'll tell you honestly which one your situation calls for rather than defaulting to the longer option.",
  },
  {
    question: "What size or type of brands do you work with?",
    answer:
      "Mostly luxury fashion, couture, jewellery, and D2C, though the same growth systems apply to FMCG, F&B, exhibitions, and NGO or fundraising work. If you're unsure whether it's a fit, the fastest way to find out is asking.",
  },
  {
    question: "Do you work with brands outside India?",
    answer:
      "Yes. Past work has included brands with US, UK, Canadian, and Gulf or Southeast Asian audiences.",
  },
  {
    question: "Do you handle execution, or just strategy?",
    answer:
      "Both, by design. Strategy without execution is a deck nobody acts on. Execution without strategy is just spend without direction.",
  },
  {
    question: "Can we keep things confidential?",
    answer:
      "Yes, happy to sign an NDA before any strategy discussion if that's needed on your end.",
  },
  {
    question: "How do we get started?",
    answer:
      "Reach out through Call, WhatsApp, or Email. A short call is usually enough to tell if there's a real fit before anything formal gets discussed.",
  },
  {
    question: "Do you handle campaign shoots?",
    answer:
      "Yes, from moodboard and creative direction through to studio coordination and final delivery. If a strategy calls for it, I'll either run it directly or bring in the right production partners.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      breadcrumbScript([{ name: "Services", path: "/services" }]),
      { type: "application/ld+json", children: JSON.stringify(FAQ_SCHEMA) },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />
      <PageHeader />
      <main>
        <ServiceGrid />
        <Tools />
        <FAQSection />
      </main>
      <ContactBlock />
      <SiteFooter />
    </div>
  );
}

function PageHeader() {
  return (
    <section
      id="top"
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
          <span className="text-xs uppercase tracking-[0.3em] text-cream/70">Services</span>
        </div>
        <h1 className="reveal mt-8 font-display text-5xl leading-[1.05] md:text-7xl">Services</h1>
        <p className="reveal mt-8 max-w-2xl font-display text-xl italic text-cream/85 md:text-2xl">
          Eleven ways to plug into growth, each one built around what it actually returns.
        </p>
        <div className="reveal mt-16 gold-divider max-w-md" />
      </div>
    </section>
  );
}

function ServiceGrid() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-px bg-gold/25 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              to={s.path}
              data-reveal-index={String(i)}
              className="reveal group flex flex-col bg-cream p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(11,43,30,0.45)] md:p-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-xs italic text-gold">{s.n}</span>
                <span className="h-px w-8 bg-gold transition-all group-hover:w-14" />
              </div>
              <h2 className="font-display text-xl leading-snug text-navy-deep transition-colors group-hover:text-gold md:text-2xl">
                {s.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-charcoal-soft md:text-[15px]">
                {s.blurb}
              </p>
              <span className="mt-8 text-[11px] uppercase tracking-[0.22em] text-gold">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section
      id="tools"
      className="py-28 text-cream md:py-40"
      style={{ background: "linear-gradient(180deg, #1d4a36 0%, #0b2b1e 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="font-display text-sm italic text-gold">§</span>
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-cream/60">Tools &amp; Expertise</span>
        </div>
        <h2 className="reveal mb-14 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
          The stack behind the <span className="italic text-gold">work.</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((t, i) => (
            <span
              key={t}
              data-reveal-index={i}
              className="reveal border border-gold/50 px-5 py-3 text-sm tracking-wide text-cream/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy-deep hover:shadow-[0_10px_24px_-14px_rgba(196,146,42,0.7)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section id="faq" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10">
        <div className="reveal mb-16 flex items-center gap-4">
          <span className="font-display text-sm italic text-gold">§</span>
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-charcoal-soft">Questions</span>
        </div>
        <h2 className="reveal mb-16 font-display text-3xl leading-tight text-navy-deep md:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-0">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="reveal border-b border-gold/30 py-8 first:border-t"
              data-reveal-index={String(i)}
            >
              <h3 className="font-display text-lg italic leading-snug text-navy-deep md:text-xl">
                {item.question}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-soft md:text-base">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}