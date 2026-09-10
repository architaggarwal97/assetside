import type { ServicePath } from "@/data/services";
import phoneAsset from "@/assets/phone-texting.jpg.asset.json";
import jewelleryAsset from "@/assets/jewellery-case.jpg.asset.json";
import boutiqueAsset from "@/assets/boutique-storefront.jpg.asset.json";
import googleAdsImg from "@/assets/insights-google-ads.jpg";
import craftsmanshipImg from "@/assets/insights-craftsmanship.jpg";
import standardLuxuryImg from "@/assets/insights-standard-luxury-agencies.jpg";
import luxuryPrCacImg from "@/assets/insights-luxury-pr-cac.jpg";

export const INSIGHTS_TITLE = "Insights | Asset Side — Growth & Brand Notes";
export const INSIGHTS_DESCRIPTION =
  "Notes on growth, brand, and what actually moves the needle — written from live campaigns across luxury, D2C, and jewellery, not from theory.";
export const INSIGHTS_URL = "https://assetside.lovable.app/insights";

export type ContextLink =
  | { label: string; to: "/case-studies"; hash: string }
  | { label: string; to: ServicePath; hash?: undefined };

export type Article = {
  slug: string;
  category: string;
  readTime: string;
  datePublished: string;
  title: string;
  excerpt: string;
  header:
    | { kind: "photo"; src: string; alt: string }
    | { kind: "quote"; quote: string; variant?: "gold" };
  contextLink?: ContextLink;
  /** When set, the card's "Read More" is an active link to the full article. */
  articlePath?: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "whatsapp-first-commerce",
    category: "D2C & Commerce",
    readTime: "4 min read",
    datePublished: "2026-02-11",
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
    datePublished: "2026-03-04",
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
    datePublished: "2026-04-15",
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
    datePublished: "2026-05-20",
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
    datePublished: "2026-06-09",
    title: "Why Performance Marketing Needs PR Sitting Right Next to It",
    excerpt:
      "An ad works harder when it's not the only place a customer sees the brand. The campaigns that scaled cleanest were always the ones running alongside a parallel PR push, not after one.",
    header: {
      kind: "quote",
      quote: "Reach without credibility is just noise at a higher volume.",
    },
    contextLink: { label: "PR & Brand Amplification", to: "/services/pr" },
  },
  {
    slug: "everyone-says-google-ads-is-dead",
    category: "Performance Marketing",
    readTime: "5 min read",
    datePublished: "2026-09-03",
    title: "Everyone Says Google Ads Is Dead",
    excerpt:
      "Everyone says Google Ads is dead. Rising costs, more automation, more competition. All of that is true. None of it means the platform stopped working.",
    header: {
      kind: "photo",
      src: googleAdsImg,
      alt: "Person reviewing analytics and ad performance data on a laptop screen",
    },
    articlePath: "/insights/everyone-says-google-ads-is-dead",
  },
  {
    slug: "boutique-vs-conglomerate-pr-agency",
    category: "Brand Strategy",
    readTime: "6 min read",
    datePublished: "2026-09-05",
    title: "Boutique vs. Conglomerate PR Agency for Personalized Growth",
    excerpt:
      "Once your brand is creating art, not just inventory, the standard industry PR model completely breaks down. Here's why a limited client roster beats a factory approach.",
    header: {
      kind: "quote",
      quote: "Standard PR is about being seen by everyone. Boutique PR is about being revered by the elite.",
    },
    articlePath: "/insights/boutique-vs-conglomerate-pr-agency",
  },
  {
    slug: "beyond-the-buzzword-craftsmanship",
    category: "Sustainability & Craft",
    readTime: "6 min read",
    datePublished: "2026-09-07",
    title: "Beyond the Buzzword: How to Communicate True Local Craftsmanship Without Greenwashing",
    excerpt:
      "True luxury is inherently sustainable. The problem is proving it without sounding like every other brand's generic 'eco-friendly' tag.",
    header: {
      kind: "photo",
      src: craftsmanshipImg,
      alt: "Close-up of an artisan's hands doing intricate gold-thread embroidery on silk",
    },
    articlePath: "/insights/beyond-the-buzzword-craftsmanship",
  },
  {
    slug: "measuring-true-roi-luxury-pr",
    category: "Performance Marketing",
    readTime: "7 min read",
    datePublished: "2026-09-08",
    title: "The Comprehensive Guide to Measuring the True ROI of Luxury PR",
    excerpt:
      "Standard industry ROI metrics don't apply once you're creating art, not just inventory. Here's what to track instead.",
    header: {
      kind: "quote",
      quote: "What does this look like on the balance sheet in ninety days?",
      variant: "gold",
    },
    articlePath: "/insights/measuring-true-roi-luxury-pr",
  },
  {
    slug: "standard-vs-luxury-agencies",
    category: "Brand Strategy",
    readTime: "7 min read",
    datePublished: "2026-09-09",
    title: "Standard PR vs. Boutique & Luxury PR: What's the Difference",
    excerpt:
      "There isn't just a two-way split between standard and boutique. Here's the full three-tier breakdown, and why the top tier isn't defined by size.",
    header: {
      kind: "photo",
      src: standardLuxuryImg,
      alt: "Elegant, minimal office meeting space with warm natural light",
    },
    articlePath: "/insights/standard-vs-luxury-agencies",
  },
  {
    slug: "how-luxury-pr-lowers-cac",
    category: "Performance Marketing",
    readTime: "6 min read",
    datePublished: "2026-09-09",
    title: "How Luxury PR Drives Down Customer Acquisition Costs",
    excerpt:
      "Executing performance marketing without brand prestige behind it is a race to the bottom. Here's how PR actually lowers your CAC.",
    header: {
      kind: "photo",
      src: luxuryPrCacImg,
      alt: "Close-up of a gold and diamond ring resting on cream linen fabric",
    },
    articlePath: "/insights/how-luxury-pr-lowers-cac",
  },
  {
    slug: "firm-generated-content-authority",
    category: "Brand Strategy",
    readTime: "7 min read",
    datePublished: "2026-09-10",
    title: "How to Leverage Firm-Generated Content (FGC) to Command Brand Authority",
    excerpt:
      "User-generated content works for mass-market brands. For luxury, the content that builds real authority has to come from the brand itself.",
    header: {
      kind: "quote",
      quote: "Your grid should be a digital concierge, not a catalog.",
    },
    articlePath: "/insights/firm-generated-content-authority",
  },
];

