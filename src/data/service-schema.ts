import { SERVICES, type Service } from "@/data/services";

export const SITE_URL = "https://assetside.lovable.app";

export type Faq = { question: string; answer: string };

/** Per-service FAQs. Rendered visibly on the page and mirrored into FAQPage JSON-LD. */
export const SERVICE_FAQS: Record<string, Faq[]> = {
  "performance-marketing": [
    {
      question: "What ad budget do you typically work with?",
      answer:
        "Engagements have run from ₹10K a month up to multi-lakh monthly spends. What matters more than the number is whether the unit economics leave room to scale — I'll say so upfront if they don't.",
    },
    {
      question: "Do you run both Google and Meta, or one platform?",
      answer:
        "Both, and usually together. Search captures existing intent, Meta creates it, and budget moves between them based on what blended CAC and ROAS are actually doing week to week.",
    },
    {
      question: "How quickly do results show?",
      answer:
        "Tracking and structure fixes show inside two to three weeks. Meaningful ROAS movement typically needs six to eight weeks of testing and reallocation to be real rather than noise.",
    },
  ],
  "brand-positioning-gtm": [
    {
      question: "Is this useful for a brand that already launched?",
      answer:
        "Often more useful. Repositioning an existing brand with real sales data is faster than positioning a hypothetical one, because the market has already told you something.",
    },
    {
      question: "What do I actually receive?",
      answer:
        "A positioning and messaging framework, audience and category definition, and a go-to-market plan tied to channels and timelines — not a deck that stops at adjectives.",
    },
  ],
  "d2c-whatsapp-commerce": [
    {
      question: "Does WhatsApp selling work for premium price points?",
      answer:
        "Yes, and often better. High-consideration purchases close on conversation and reassurance, which a static checkout page cannot provide.",
    },
    {
      question: "Do you set up the tooling as well?",
      answer:
        "Yes — catalogue, broadcast flows, templates, and CRM handoff are all part of the build, not a separate project.",
    },
  ],
  "growth-lead-generation": [
    {
      question: "How do you qualify leads?",
      answer:
        "Qualification is built into the funnel — form structure, intent signals, and follow-up sequencing — so sales spends time on people who can actually buy.",
    },
    {
      question: "Do you integrate with our CRM?",
      answer:
        "Yes. The handoff between campaign and CRM is where most lead-gen leaks, so it's wired in and monitored rather than assumed.",
    },
  ],
  "seo-website-optimization": [
    {
      question: "How long does SEO take to compound?",
      answer:
        "Technical and on-page fixes can move rankings within weeks; sustained organic growth is a three to six month arc. It runs alongside paid rather than replacing it.",
    },
    {
      question: "Do you handle local SEO?",
      answer:
        "Yes — Google Business Profile optimization, local landing structure, and review signals for brands with physical locations.",
    },
  ],
  "marketing-analytics": [
    {
      question: "What reporting cadence do you work to?",
      answer:
        "A fixed monthly report with a live dashboard in between, so nobody waits until month end to find out something broke.",
    },
    {
      question: "Can you fix attribution that's already a mess?",
      answer:
        "That's usually where the work starts — clean tracking and a single source of truth before any dashboard is worth reading.",
    },
  ],
  pr: [
    {
      question: "Do you guarantee coverage?",
      answer:
        "No one credible does. What I run is a consistent outreach and story pipeline; placements follow when the narrative is genuinely worth publishing.",
    },
    {
      question: "Does PR replace paid media?",
      answer:
        "No — it runs alongside it. Editorial presence makes paid convert better because the brand is already familiar when the ad appears.",
    },
  ],
  events: [
    {
      question: "What kinds of events do you manage?",
      answer:
        "Exhibitions, trade showcases, and brand activations — with the focus on the right footfall rather than the largest footfall.",
    },
    {
      question: "Do you handle on-ground execution?",
      answer:
        "Yes, from pre-event demand generation through to on-ground coordination and post-event follow-up.",
    },
  ],
  "mbo-placements": [
    {
      question: "Which markets do you place into?",
      answer:
        "Multi-brand boutiques across India, with selective international placements in the Gulf, UK, and US.",
    },
    {
      question: "What does a label need before approaching MBOs?",
      answer:
        "Coherent pricing, consistent production capacity, and a lookbook that reads at retail standard. I'll flag gaps before outreach rather than after a rejection.",
    },
  ],
  "social-media-marketing": [
    {
      question: "Do you create the content or only plan it?",
      answer:
        "Both — content calendar, creative direction, and production coordination, so the feed stays on-brand rather than filled to a schedule.",
    },
    {
      question: "How is this different from paid social?",
      answer:
        "Organic builds familiarity and trust; paid buys attention. They work best when the same creative direction runs through both.",
    },
  ],
  "campaign-brand-shoots": [
    {
      question: "Do you handle campaign shoots end to end?",
      answer:
        "Yes — moodboard and creative direction through to studio coordination, casting, styling support, and final delivery.",
    },
    {
      question: "Can shoot output be reused for ads?",
      answer:
        "It's planned that way. Shoots are briefed with performance formats in mind so assets work across campaign, feed, and paid placements.",
    },
  ],
};

export function serviceCanonical(service: Service) {
  return `${SITE_URL}${service.path}`;
}

/** Absolute social share image used across all service pages. */
const OG_IMAGE = `${SITE_URL}/og-asset-side.jpg`;

/** Shared head() config for every service detail route. */
export function buildServiceHead(service: Service) {
  const url = serviceCanonical(service);
  const faqs = SERVICE_FAQS[service.slug] ?? [];
  const position = SERVICES.findIndex((s) => s.slug === service.slug) + 1;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.metaDescription,
    url,
    serviceType: service.title,
    category: "Marketing",
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "Asset Side",
      url: SITE_URL,
    },
    areaServed: ["IN", "AE", "GB", "US"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} — what's included`,
      itemListElement: service.included.map((item, i) => ({
        "@type": "Offer",
        position: i + 1,
        itemOffered: { "@type": "Service", name: item },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: url },
    ],
  };

  const scripts: { type: string; children: string }[] = [
    { type: "application/ld+json", children: JSON.stringify(serviceSchema) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
  ];

  if (faqs.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }),
    });
  }

  return {
    meta: [
      { title: service.metaTitle },
      { name: "description", content: service.metaDescription },
      { property: "og:title", content: service.metaTitle },
      { property: "og:description", content: service.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: "Asset Side" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:alt", content: `Asset Side — ${service.title}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: service.metaTitle },
      { name: "twitter:description", content: service.metaDescription },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: `Asset Side — ${service.title}` },
      { name: "article:section", content: `Service ${position}` },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts,
  };
}
