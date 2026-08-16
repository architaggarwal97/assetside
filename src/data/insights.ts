import type { ServicePath } from "@/data/services";
import phoneAsset from "@/assets/phone-texting.jpg.asset.json";
import jewelleryAsset from "@/assets/jewellery-case.jpg.asset.json";
import boutiqueAsset from "@/assets/boutique-storefront.jpg.asset.json";

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
  header: { kind: "photo"; src: string; alt: string } | { kind: "quote"; quote: string };
  contextLink?: ContextLink;
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
];

