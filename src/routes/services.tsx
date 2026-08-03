import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav, SERVICE_SECTIONS } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const TITLE = "Services — Asset Side";
const DESCRIPTION =
  "Nine ways to plug into growth — performance marketing, brand positioning, D2C & WhatsApp commerce, lead generation, SEO, analytics, PR, events, and MBO placements.";
const CANONICAL_URL = "https://assetside.lovable.app/services";

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are you open to a full-time role, or only freelance work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both, depending on the right fit. I currently balance a full-time role with a small number of independent engagements, so an in-house opportunity or a project-based collaboration are equally worth a conversation.",
      },
    },
    {
      "@type": "Question",
      name: "What does a typical engagement look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A short discovery call first, then a focused audit of what's already working and what isn't, followed by a strategy and execution plan. Ongoing work usually settles into a monthly cadence: campaigns running, reporting on a fixed schedule, adjustments based on what the data actually says.",
      },
    },
    {
      "@type": "Question",
      name: "How long do engagements usually run?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depends on scope. Some are single projects, a campaign shoot, a GTM strategy for a launch, others are ongoing monthly retainers for performance marketing or growth systems. I'll tell you honestly which one your situation calls for rather than defaulting to the longer option.",
      },
    },
    {
      "@type": "Question",
      name: "What size or type of brands do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mostly luxury fashion, couture, jewellery, and D2C, though the same growth systems apply to FMCG, F&B, exhibitions, and NGO or fundraising work. If you're unsure whether it's a fit, the fastest way to find out is asking.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with brands outside India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Past work has included brands with US, UK, Canadian, and Gulf or Southeast Asian audiences.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle execution, or just strategy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both, by design. Strategy without execution is a deck nobody acts on. Execution without strategy is just spend without direction.",
      },
    },
    {
      "@type": "Question",
      name: "Can we keep things confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, happy to sign an NDA before any strategy discussion if that's needed on your end.",
      },
    },
    {
      "@type": "Question",
      name: "How do we get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reach out through Call, WhatsApp, or Email. A short call is usually enough to tell if there's a real fit before anything formal gets discussed.",
      },
    },
  ],
};

export const Route = createFileRoute("/services")({
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
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_SCHEMA),
      },
    ],
  }),
  component: ServicesPage,
});

type Service = {
  n: string;
  slug: string;
  title: string;
  lead: string;
  included: string[];
  proof?: string;
};

const SERVICES: Service[] = [
  {
    n: "01",
    slug: "performance-marketing",
    title: "Performance Marketing",
    lead: "Full-funnel paid media across Google and Meta, built around what a rupee of spend actually returns, not impressions or reach for their own sake.",
    included: [
      "Google Ads (Search, Display, Shopping, Performance Max)",
      "Meta Ads Manager across Facebook and Instagram (Feed, Stories, Reels)",
      "Audience segmentation and ongoing creative testing",
      "CAC and ROAS tracking, with budget shifted toward what's actually working",
    ],
    proof: "Portfolio-wide ROAS improvements from 2.4× up to 3.9×, CAC held steady even as spend scaled 35%+.",
  },
  {
    n: "02",
    slug: "brand-positioning-gtm",
    title: "Brand Positioning & GTM Strategy",
    lead: "Before a single ad runs, the story needs to be right — who the brand is for, what makes it different, and how it enters a category without getting lost in it.",
    included: [
      "Brand audits and positioning workshops",
      "Go-to-market strategy for new products, markets, or categories",
      "Pitch decks and brand narratives tailored to the audience — retail partner, press, or investor",
      "Category entry planning, including timelines and benchmarking for brands entering new markets",
    ],
    proof: "Built a phased 12-month entry strategy for a US-based fragrance label entering India, covering positioning, channel sequencing, and import registration timelines.",
  },
  {
    n: "03",
    slug: "d2c-whatsapp-commerce",
    title: "D2C & WhatsApp-First Commerce",
    lead: "For brands selling direct, WhatsApp is often a faster, warmer path to a sale than a website checkout — when the conversation flow is actually built for it.",
    included: [
      "Click-to-WhatsApp ad campaigns",
      "Structured conversation flows for browsing, asking, and ordering without drop-off",
      "Retargeting based on engagement and DM activity",
      "Order volume and AOV tracking, without leaning on discounts to move the needle",
    ],
    proof: "2.1× order volume growth for a western wear label via WhatsApp-first selling, AOV held steady the entire time.",
  },
  {
    n: "04",
    slug: "growth-lead-generation",
    title: "Growth & Lead Generation Systems",
    lead: "Predictable lead flow, not a lucky month followed by three dry ones. Systems that connect creative, targeting, and CRM handoff so nothing leaks between interested and converted.",
    included: [
      "Multi-channel lead generation across Meta, Google, and beyond",
      "CRM setup and funnel management (HubSpot, MS Dynamics 365)",
      "Marketing automation (Zapier)",
      "Sales-qualified-lead tracking and cost-per-SQL reduction",
    ],
    proof: "Scaled one business from 30 to over 900 qualified leads a month within a single quarter.",
  },
  {
    n: "05",
    slug: "seo-website-optimization",
    title: "SEO & Website Optimization",
    lead: "Technical health, on-page structure, and conversion-focused UX, so organic traffic keeps compounding instead of plateauing.",
    included: [
      "Technical SEO audits (SEMRush, Ahrefs, Screaming Frog)",
      "On-page optimization and Core Web Vitals",
      "Mobile-first UX improvements and page speed work",
      "Platform builds and maintenance (WordPress, Shopify, WooCommerce)",
    ],
  },
  {
    n: "06",
    slug: "marketing-analytics",
    title: "Marketing Analytics & Reporting",
    lead: "Clean dashboards that make the next decision obvious, not another spreadsheet nobody opens after the first week.",
    included: [
      "Google Analytics 4 setup and reporting",
      "Looker Studio and Power BI dashboards",
      "Recurring performance reporting with longitudinal tracking",
      "Clear read on what's working, what isn't, and what to do next",
    ],
  },
  {
    n: "07",
    slug: "pr",
    title: "PR",
    lead: "Media placements and editorial credibility, run alongside paid campaigns rather than instead of them, so a brand's story shows up somewhere other than its own ads.",
    included: [
      "Media placements and editorial pitching across lifestyle, fashion, and business publications",
      "Press release drafting and story angles tailored to each publication",
      "Celebrity and stylist association opportunities",
      "PR amplification run in parallel with paid campaigns to build credibility and editorial presence",
    ],
    proof: "PR amplification built into a jewellery vertical campaign calendar, reinforcing paid reach with editorial presence during peak bridal and festive seasons.",
  },
  {
    n: "08",
    slug: "events",
    title: "Events",
    lead: "End-to-end exhibition and event management, from getting the right visitors through the door to making the on-ground experience actually work.",
    included: [
      "Exhibition and event management, covering both attendee and exhibitor-side lead generation",
      "On-ground experience improvements: ticketing, check-in, and data collection",
      "Co-branding and showroom walk-in campaigns tied to event promotions",
      "Influencer programs built to amplify event promotion and drive trust through user-generated content",
    ],
    proof: "Raised net Sales Qualified Lead rate from 25% to 54% for a wedding shopping exhibition business, while cutting cost per SQL by 50%.",
  },
  {
    n: "09",
    slug: "mbo-placements",
    title: "MBO Placements",
    lead: "Getting a brand's products into the right multi-brand boutiques, domestically and internationally — the kind of retail credibility that builds beyond a brand's own storefront.",
    included: [
      "MBO placement strategy and outreach across Indian and international platforms",
      "Partner relationship management once placements are secured",
      "Positioning audits to match each brand with the right retail partners",
      "Ongoing account management across a multi-brand roster",
    ],
    proof: "Active placement experience across platforms including Pernia's Pop-Up Shop, Tata CLiQ Luxury, and Ensemble domestically, and Aashni+Co internationally.",
  },
];

function ServicesPage() {
  useReveal();

  // Smooth-scroll to hash on initial load and hash changes.
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
      }
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />
      <PageHeader />
      <main>
        {SERVICES.map((s, i) => (
          <ServiceSection key={s.slug} service={s} dark={i % 2 === 1} />
        ))}
      </main>
      <FAQSection />
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
        <h1 className="reveal mt-8 font-display text-5xl leading-[1.05] md:text-7xl">
          Services
        </h1>
        <p className="reveal mt-8 max-w-2xl font-display text-xl italic text-cream/85 md:text-2xl">
          Six ways to plug into growth, each one built around what it actually returns.
        </p>
        <div className="reveal mt-16 gold-divider max-w-md" />
        <ul className="reveal mt-10 grid gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-cream/75 sm:grid-cols-2 md:grid-cols-3">
          {SERVICE_SECTIONS.map((s) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="transition-colors hover:text-gold">
                <span className="text-gold">{s.n}</span>
                <span className="ml-3">{s.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceSection({ service, dark }: { service: Service; dark: boolean }) {
  const bg = dark
    ? { style: { background: "linear-gradient(180deg, #0b2b1e 0%, #1d4a36 100%)" }, className: "text-cream" }
    : { style: {}, className: "bg-cream text-charcoal" };
  const labelColor = dark ? "text-cream/60" : "text-charcoal-soft";
  const titleColor = dark ? "text-cream" : "text-navy-deep";
  const leadColor = dark ? "text-cream/85" : "text-charcoal";
  const bodyColor = dark ? "text-cream/80" : "text-charcoal-soft";
  const bulletDot = dark ? "bg-gold" : "bg-gold";

  return (
    <section
      id={service.slug}
      className={`py-24 md:py-32 ${bg.className}`}
      style={bg.style}
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="reveal flex items-center gap-4">
          <span className="font-display text-sm italic text-gold">{service.n}</span>
          <div className="h-px w-10 bg-gold" />
          <span className={`text-xs uppercase tracking-[0.3em] ${labelColor}`}>Service</span>
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className={`reveal font-display text-3xl leading-tight md:text-5xl ${titleColor}`}>
              {service.title}
            </h2>
            <p className={`reveal mt-6 max-w-xl text-base leading-relaxed md:text-lg ${leadColor}`}>
              {service.lead}
            </p>
          </div>

          <div className="md:col-span-6">
            <div
              className="reveal text-[11px] uppercase tracking-[0.28em]"
              data-reveal-index="0"
            >
              <span className={dark ? "text-gold" : "text-gold"}>What's included</span>
            </div>
            <ul className="mt-6 space-y-4">
              {service.included.map((item, i) => (
                <li
                  key={i}
                  className="reveal flex gap-4"
                  data-reveal-index={String(i + 1)}
                >
                  <span className={`mt-2 h-px w-6 flex-shrink-0 ${bulletDot}`} />
                  <span className={`text-sm leading-relaxed md:text-base ${bodyColor}`}>{item}</span>
                </li>
              ))}
            </ul>

            {service.proof && (
              <div
                className={`reveal mt-10 border-l-2 border-gold py-3 pl-5 ${
                  dark ? "bg-cream/[0.04]" : "bg-gold/5"
                }`}
              >
                <div className={`text-[10px] uppercase tracking-[0.3em] text-gold`}>
                  Proof point
                </div>
                <p className={`mt-2 font-display text-base italic leading-relaxed md:text-lg ${
                  dark ? "text-cream" : "text-navy-deep"
                }`}>
                  {service.proof}
                </p>
              </div>
            )}
          </div>
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
];

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
