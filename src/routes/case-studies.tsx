import { breadcrumbScript } from "@/data/breadcrumbs";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { Store, MessageCircle, Gem, Warehouse, PawPrint, Ticket, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SERVICE_BY_SLUG } from "@/data/services";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Archit Aggarwal" },
      {
        name: "description",
        content:
          "Six brands, six growth problems, one consistent approach — inside the strategy behind Adyaaye, Monture, the Jewellery Vertical, Self Storage India, Fur Ball Story, and Wedding Asia.",
      },
      { property: "og:title", content: "Case Studies — Archit Aggarwal" },
      {
        property: "og:description",
        content:
          "A closer look at the strategy behind the numbers across luxury couture, D2C western wear, jewellery retail, a new self-storage category, pet wellness, and events.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://assetside.lovable.app/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://assetside.lovable.app/case-studies" }],
    scripts: [breadcrumbScript([{ name: "Case Studies", path: "/case-studies" }])],
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
  relatedService?: { slug: string; label: string };
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
    relatedService: { slug: "performance-marketing", label: "Performance Marketing" },
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
    relatedService: { slug: "d2c-whatsapp-commerce", label: "D2C & WhatsApp-First Commerce" },
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
    relatedService: { slug: "pr", label: "PR & Brand Amplification" },
  },
  {
    slug: "self-storage-india",
    brand: "Self Storage India",
    category: "Category Creation · D2C Lead Generation",
    icon: Warehouse,
    headlineStat: "50x",
    headlineLabel: "Ad spend scaled",
    objective:
      "This was the first business of its kind entering the Indian market, self-storage as a consumer service simply didn't exist as a known category. Even the owners weren't fully confident it would work. The real first mandate wasn't lead generation, it was proving the model could work at all, starting cautiously rather than betting big on an unproven category.",
    strategy: [
      "Began with a deliberately conservative ₹10,000/month ad spend rather than pushing for a large upfront commitment on an unproven category",
      "Used early results to build internal confidence before scaling investment further, treating each stage of budget increase as something that had to be earned by the last one",
      "As proof accumulated, spend scaled up to ₹5,00,000/month",
      "Diversified beyond Google to six channels within two months, built the on-page SEO foundation to rank for 900+ search terms, and layered in retargeting with continuous creative testing",
    ],
    results: [
      { value: "₹10K → ₹5L", label: "Ad spend scaled / month" },
      { value: "₹45L", label: "Sales / month" },
      { value: "3", label: "Locations" },
      { value: "60,000", label: "Sq ft total area" },
    ],
    insight:
      "The hardest conversion in this one wasn't a customer, it was convincing the people signing off on the budget that the category itself was real. Every early rupee had to justify the next one. That discipline is what let spend scale 50x without it ever feeling like a leap of faith.",
  },
  {
    slug: "fur-ball-story",
    brand: "Fur Ball Story",
    category: "Pet Wellness · D2C Growth & Operations",
    icon: PawPrint,
    headlineStat: "3.9x",
    headlineLabel: "Peak ROAS",
    objective:
      "Scale the D2C channel for a homegrown ayurvedic pet nutrition and grooming brand, in a category where consumer trust in \u201cayurvedic\u201d pet care still needed building.",
    strategy: [
      "Increased average order value through high-margin bundles and upsell prompts, including live upsells during abandoned-cart recovery calls",
      "Restructured Meta and Google campaigns with sharper audience segmentation, creative testing, and employee-generated content",
      "Introduced a dedicated Purchase Help Centre, a calling team focused specifically on cart and checkout abandonment",
      "Tightened address verification to cut failed COD deliveries, and used prepaid discounts to shift payment mix",
    ],
    results: [
      { value: "+28%", label: "AOV in first quarter" },
      { value: "−21%", label: "CAC (ROAS 2.4x → 3.9x)" },
      { value: "18%", label: "Lost sales recovered monthly" },
      { value: "1.7x", label: "Returning customer rate (11 mo)" },
    ],
    insight:
      "Growth in a trust-building D2C category isn't only an acquisition problem. As much value came from closing the gaps between 'added to cart' and 'money actually collected,' recovered abandonments, fewer failed deliveries, more prepaid orders, as came from the ad account itself.",
  },
  {
    slug: "wedding-asia",
    brand: "Wedding Asia",
    category: "Events & Exhibitions · Lead Generation",
    icon: Ticket,
    headlineStat: "54%",
    headlineLabel: "Net SQL rate",
    objective:
      "Grow the right kind of attendees and exhibitors for high-end wedding shopping exhibitions across India, the Gulf, and Southeast Asia, not just more footfall, but footfall worth having.",
    strategy: [
      "Diversified from a single Meta-dependent channel to six lead channels within two months",
      "Revamped the website with a QR ticketing feature that generated a ticket at the point of lead submission, speeding up entry and improving attendee data capture at the door",
      "Built co-branding and showroom walk-in campaigns to drive exhibitor cross-sell and retention",
      "Launched an influencer program to build trust through user-generated content",
      "Also moved early into Answer Engine and Generative Engine Optimisation, positioning visibility for AI-powered search platforms rather than only traditional search",
    ],
    results: [
      { value: "25% → 54%", label: "Net SQL rate" },
      { value: "−50%", label: "Cost per SQL" },
      { value: "QR Ticketing", label: "Faster entry and cleaner data capture" },
      { value: "Cross-Sell", label: "Improved exhibitor retention" },
    ],
    insight:
      "Being early on AEO and GEO wasn't about chasing a trend, it was about not waiting until AI-powered search became the obvious place to be found before showing up there.",
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
          A closer look at the strategy behind the numbers — six brands, six different growth
          problems, one consistent approach.
        </p>
        <div className="reveal mt-16 gold-divider max-w-md" />
        <ul className="reveal mt-10 grid gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-cream/75 sm:grid-cols-3 lg:grid-cols-5">
          {STUDIES.map((s, i) => (
            <li key={s.slug}>
              <a href={`#${s.slug}`} className="transition-colors hover:text-gold">
                <span className="text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="ml-3">
                {s.slug === "jewellery-vertical"
                    ? "Jewellery Vertical"
                    : s.slug === "self-storage-india"
                    ? "Self Storage India"
                    : s.slug === "fur-ball-story"
                    ? "Fur Ball Story"
                    : s.slug === "wedding-asia"
                    ? "Wedding Asia"
                    : s.brand.split(" ")[0]}
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

      {study.relatedService && (
        <div className="reveal mt-10 text-xs uppercase tracking-[0.2em]">
          <span className={labelColor}>Related service: </span>
          <Link
            to={SERVICE_BY_SLUG[study.relatedService.slug]!.path}
            className="text-gold underline-offset-4 transition-colors hover:underline"
          >
            {study.relatedService.label} →
          </Link>
        </div>
      )}
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
