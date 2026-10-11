// Single list of indexable public pages. Drives the sitemap, the AMP content
// check and the AMP indexing dashboard. Every path here is its own canonical URL.
export const SITE_URL = "https://assetside.lovable.app";

export type SitePage = {
  path: string;
  label: string;
  changefreq: "monthly" | "weekly" | "yearly";
  priority: string;
};

const services: [string, string][] = [
  ["performance-marketing", "Performance Marketing"],
  ["brand-positioning-gtm", "Brand Positioning & GTM"],
  ["d2c-whatsapp-commerce", "D2C & WhatsApp Commerce"],
  ["growth-lead-generation", "Growth & Lead Generation"],
  ["seo-website-optimization", "SEO & Website Optimization"],
  ["marketing-analytics", "Marketing Analytics"],
  ["pr", "PR"],
  ["events", "Events"],
  ["mbo-placements", "MBO Placements"],
  ["social-media-marketing", "Social Media Marketing"],
  ["campaign-brand-shoots", "Campaign & Brand Shoots"],
];

const insights: [string, string][] = [
  ["dhanda-first-marketing-framework", "Dhanda-First Marketing Framework"],
  ["jewellery-walk-in-campaigns", "Jewellery Store Walk-in Campaigns"],
  ["cost-of-vanity-metrics", "The Cost of Vanity Metrics"],
  ["performance-marketing-needs-pr", "Why Performance Marketing Needs PR"],
  ["measuring-true-roi-luxury-pr", "Measuring the True ROI of Luxury PR"],
  ["how-luxury-pr-lowers-cac", "How Luxury PR Lowers CAC"],
  ["standard-vs-luxury-agencies", "Standard vs Luxury PR"],
  ["boutique-vs-conglomerate-pr-agency", "Boutique vs Conglomerate PR"],
  ["firm-generated-content-authority", "Firm-Generated Content"],
  ["private-pr-events-luxury-brands", "Private PR Events"],
  ["targeted-media-network-luxury-pr", "Targeted Media Network"],
  ["beyond-the-buzzword-craftsmanship", "Beyond the Buzzword"],
  ["everyone-says-google-ads-is-dead", "Google Ads Is Dead?"],
  ["ngo-fundraising-subscription-thinking", "NGO Subscription Thinking"],
  ["social-kpis-predict-revenue", "Social KPIs That Predict Revenue"],
  ["whatsapp-first-commerce-india", "WhatsApp-First Commerce"],
];

const caseStudies: [string, string][] = [
  ["adyaaye", "Adyaaye"],
  ["monture", "Monture"],
  ["jewellery-vertical", "Jewellery Vertical"],
  ["self-storage-india", "Self Storage India"],
  ["banjara-trail", "Banjara Trail"],
  ["ladli-foundation-trust", "Ladli Foundation Trust"],
];

export const SITE_PAGES: SitePage[] = [
  { path: "/", label: "Home", changefreq: "monthly", priority: "1.0" },
  { path: "/services", label: "Services", changefreq: "monthly", priority: "0.9" },
  { path: "/work", label: "Work", changefreq: "monthly", priority: "0.8" },
  { path: "/case-studies", label: "Case Studies", changefreq: "monthly", priority: "0.8" },
  { path: "/insights", label: "Insights", changefreq: "weekly", priority: "0.6" },
  ...services.map(([slug, label]) => ({
    path: `/services/${slug}`,
    label: `Service: ${label}`,
    changefreq: "monthly" as const,
    priority: "0.7",
  })),
  ...caseStudies.map(([slug, label]) => ({
    path: `/case-studies/${slug}`,
    label: `Case Study: ${label}`,
    changefreq: "yearly" as const,
    priority: "0.7",
  })),
  ...insights.map(([slug, label]) => ({
    path: `/insights/${slug}`,
    label: `Insight: ${label}`,
    changefreq: "yearly" as const,
    priority: "0.6",
  })),
];

export const SITE_PATHS = new Set(SITE_PAGES.map((p) => p.path));

export const canonicalUrl = (path: string) => `${SITE_URL}${path}`;
export const ampUrl = (path: string) => `${SITE_URL}${path === "/" ? "/amp" : `/amp${path}`}`;
