import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Store, MessageCircle, Gem, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Archit Aggarwal" },
      {
        name: "description",
        content:
          "Three brands, three growth problems, one consistent approach — inside the strategy behind Adyaaye, Monture, and the Jewellery Vertical.",
      },
      { property: "og:title", content: "Case Studies — Archit Aggarwal" },
      {
        property: "og:description",
        content:
          "A closer look at the strategy behind the numbers across luxury couture, D2C western wear, and a competing jewellery vertical.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

type Study = {
  slug: string;
  brand: string;
  category: string;
  icon: LucideIcon;
  headlineStat: string;
  headlineLabel: string;
  objective: string;
  strategy: string[];
  results: { value: string; label: string }[];
  insight: string;
};

const STUDIES: Study[] = [
  {
    slug: "adyaaye",
    brand: "Adyaaye by Chandresh Ritessh",
    category: "Luxury Couture · Store Visits + Brand Engagement",
    icon: Store,
    headlineStat: "2.4×",
    headlineLabel: "ROAS",
    objective:
      "Drive qualified in-store walk-ins and appointment enquiries, and grow brand awareness on Instagram and WhatsApp without inflating acquisition cost.",
    strategy: [
      "Meta Ads across Feed, Stories, and Reels targeting high-affinity luxury audiences",
      "WhatsApp Click-to-Chat to shorten the enquiry path from ad to conversation",
      "Retargeting layered on content engagement and site activity",
      "Creative testing between lifestyle-editorial and product-forward directions",
    ],
    results: [
      { value: "2.4×", label: "ROAS" },
      { value: "+34%", label: "Store visits MoM" },
      { value: "−22%", label: "Cost per enquiry" },
      { value: "3.8L", label: "Unique reach" },
    ],
    insight:
      "CAC was maintained even as ad spend scaled by 35%, the result of tighter audience segmentation and creative iteration that reduced waste, not just increased budget.",
  },
  {
    slug: "monture",
    brand: "Monture",
    category: "Contemporary Western Wear · D2C via WhatsApp",
    icon: MessageCircle,
    headlineStat: "2.1×",
    headlineLabel: "ROAS",
    objective:
      "Build a reliable D2C revenue stream via WhatsApp-led selling, growing order volume while holding AOV and CAC steady.",
    strategy: [
      "Organic content built specifically for DM intent, not just reach",
      "Click-to-WhatsApp ads pulling warm audiences into a live conversation",
      "Structured WhatsApp conversation flow for browsing, asking, and ordering",
      "Retargeting on engagement and DM activity to close open loops",
    ],
    results: [
      { value: "2.1×", label: "ROAS" },
      { value: "2.1×", label: "Order volume (4 mo)" },
      { value: "5.4%", label: "Engagement rate" },
      { value: "−18%", label: "Cost per conversation" },
    ],
    insight:
      "AOV held consistent throughout the entire scaling period. Order volume and reach grew because audience and content quality improved, not because discounts drove volume.",
  },
  {
    slug: "jewellery-vertical",
    brand: "Jewellery Vertical",
    category: "Maharashtra Jewellers · SK Jewellers · Amraani Jewels",
    icon: Gem,
    headlineStat: "2.7×",
    headlineLabel: "Avg ROAS (6 mo)",
    objective:
      "Generate qualified footfall for three competing jewellery brands, positioning each one distinctly while managing a single collective campaign calendar.",
    strategy: [
      "Meta Ads with store-traffic and local-awareness objectives, geo-targeted to Delhi NCR and Mumbai",
      "Campaign calendar built around bridal season, Diwali, Dhanteras, and gifting occasions",
      "PR amplification running in parallel with paid campaigns",
      "Audience segmentation by occasion intent to keep the three brands from cannibalising each other",
    ],
    results: [
      { value: "2.7×", label: "Avg ROAS" },
      { value: "+38%", label: "Store walk-ins" },
      { value: "1.8M", label: "Combined reach" },
      { value: "Stable", label: "CAC across brands" },
    ],
    insight:
      "Managing three competing jewellery brands simultaneously required disciplined audience separation. Each brand grew without pulling from the other's pool.",
  },
];

function CaseStudiesPage() {
  useReveal();

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
        {STUDIES.map((s, i) => (
          <StudySection key={s.slug} study={s} dark={i % 2 === 1} mirrored={i % 2 === 1} />
        ))}
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
          <span className="text-xs uppercase tracking-[0.3em] text-cream/70">Case Studies</span>
        </div>
        <h1 className="reveal mt-8 font-display text-5xl leading-[1.05] md:text-7xl">Case Studies</h1>
        <p className="reveal mt-8 max-w-2xl font-display text-xl italic text-cream/85 md:text-2xl">
          A closer look at the strategy behind the numbers — three brands, three different growth
          problems, one consistent approach.
        </p>
        <div className="reveal mt-16 gold-divider max-w-md" />
        <ul className="reveal mt-10 grid gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-cream/75 sm:grid-cols-3">
          {STUDIES.map((s, i) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="transition-colors hover:text-gold">
                <span className="text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="ml-3">
                  {s.slug === "jewellery-vertical" ? "Jewellery Vertical" : s.brand.split(" ")[0]}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StudySection({ study, dark, mirrored }: { study: Study; dark: boolean; mirrored: boolean }) {
  const bg = dark
    ? { style: { background: "linear-gradient(180deg, #0b2b1e 0%, #1d4a36 100%)" }, className: "text-cream" }
    : { style: {}, className: "bg-cream text-charcoal" };
  const labelColor = dark ? "text-cream/60" : "text-charcoal-soft";
  const titleColor = dark ? "text-cream" : "text-navy-deep";
  const bodyColor = dark ? "text-cream/85" : "text-charcoal";
  const softColor = dark ? "text-cream/75" : "text-charcoal-soft";
  const cellBorder = dark ? "border-cream/15" : "border-gold/20";
  const Icon = study.icon;

  const identity = (
    <div className="space-y-10">
      {/* PLACEHOLDER: swap this bordered box for the uploaded client logo image later */}
      <div
        className={`reveal flex aspect-[4/1] w-full items-center justify-center border border-gold/60 ${
          dark ? "bg-cream/[0.04]" : "bg-gold/5"
        }`}
        role="img"
        aria-label={`${study.brand} logo placeholder`}
      >
        <span className={`text-[11px] uppercase tracking-[0.28em] ${softColor}`}>{study.brand}</span>
      </div>
      <div className="reveal flex items-center gap-3">
        <span className={`inline-flex h-9 w-9 items-center justify-center border border-gold/60 text-gold`}>
          <Icon size={16} strokeWidth={1.75} aria-hidden />
        </span>
        <span className={`text-[11px] uppercase tracking-[0.24em] ${labelColor}`}>{study.category}</span>
      </div>
      <div className="reveal">
        <div className={`font-display text-6xl leading-none md:text-7xl ${dark ? "text-gold" : "text-navy-deep"}`}>
          {study.headlineStat}
        </div>
        <div className={`mt-3 text-[11px] uppercase tracking-[0.28em] ${labelColor}`}>{study.headlineLabel}</div>
      </div>
    </div>
  );

  const narrative = (
    <div>
      <h2 className={`reveal font-display text-3xl leading-tight md:text-5xl ${titleColor}`}>{study.brand}</h2>

      <div className="reveal mt-10">
        <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Objective</div>
        <p className={`mt-4 max-w-xl text-base leading-relaxed md:text-lg ${bodyColor}`}>{study.objective}</p>
      </div>

      <div className="mt-12">
        <div className="reveal text-[11px] uppercase tracking-[0.28em] text-gold">Strategy</div>
        <ul className="mt-6 space-y-4">
          {study.strategy.map((item, i) => (
            <li key={i} className="reveal flex gap-4" data-reveal-index={String(i + 1)}>
              <span className="mt-2 h-px w-6 flex-shrink-0 bg-gold" />
              <span className={`text-sm leading-relaxed md:text-base ${bodyColor}`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <div className="reveal text-[11px] uppercase tracking-[0.28em] text-gold">Results</div>
        <div className={`mt-6 grid grid-cols-2 border-t border-l ${cellBorder}`}>
          {study.results.map((r, i) => (
            <div
              key={i}
              className={`reveal border-r border-b ${cellBorder} px-5 py-8`}
              data-reveal-index={String(i + 1)}
            >
              <div
                className={`font-display text-3xl leading-none md:text-4xl ${
                  dark ? "text-cream" : "text-navy-deep"
                }`}
              >
                {r.value}
              </div>
              <div className={`mt-3 text-[10px] uppercase tracking-[0.24em] ${labelColor}`}>{r.label}</div>
            </div>
          ))}
        </div>
      </div>

      <blockquote
        className={`reveal mt-14 border-l-2 border-gold py-4 pl-6 font-display text-xl italic leading-relaxed md:text-2xl ${
          dark ? "text-cream" : "text-navy-deep"
        }`}
      >
        <div className={`mb-3 text-[10px] not-italic uppercase tracking-[0.3em] text-gold`}>Insight</div>
        “{study.insight}”
      </blockquote>
    </div>
  );

  return (
    <section id={study.slug} className={`py-24 md:py-32 ${bg.className}`} style={bg.style}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="reveal flex items-center gap-4">
          <span className="font-display text-sm italic text-gold">
            {String(STUDIES.findIndex((s) => s.slug === study.slug) + 1).padStart(2, "0")}
          </span>
          <div className="h-px w-10 bg-gold" />
          <span className={`text-xs uppercase tracking-[0.3em] ${labelColor}`}>Case Study</span>
        </div>

        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
          <div className={`md:col-span-5 ${mirrored ? "md:order-2" : ""}`}>{identity}</div>
          <div className={`md:col-span-7 ${mirrored ? "md:order-1" : ""}`}>{narrative}</div>
        </div>
      </div>
    </section>
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

function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-12 text-cream/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-xs uppercase tracking-[0.2em] md:flex-row md:justify-between md:px-10">
        <div className="font-display text-sm normal-case tracking-normal text-cream">
          Archit <span className="text-gold">Aggarwal</span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:ArchitAggarwal97@gmail.com" aria-label="Email Archit Aggarwal" className="transition-colors hover:text-gold">
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Archit Aggarwal on LinkedIn"
            className="transition-colors hover:text-gold"
          >
            LinkedIn
          </a>
          <a href="#top" aria-label="Back to top of page" className="uppercase tracking-[0.2em] transition-colors hover:text-gold">
            Top ↑
          </a>
        </div>
        <div>© {new Date().getFullYear()} Archit Aggarwal</div>
      </div>
    </footer>
  );
}