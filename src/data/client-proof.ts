/**
 * Real client proof per service: which case study backs the service,
 * the headline outcome, and a short plain-language result.
 */
export type ClientProof = {
  brand: string;
  category: string;
  /** Anchor slug on /case-studies */
  caseSlug: string;
  stat: string;
  statLabel: string;
  /** What was done and what came out of it. */
  outcome: string;
  /** Three supporting numbers pulled from the case study. */
  results: { value: string; label: string }[];
};

export const CLIENT_PROOF: Record<string, ClientProof> = {
  "performance-marketing": {
    brand: "Adyaaye by Chandresh Ritessh",
    category: "Luxury Couture · Store Visits + Brand Engagement",
    caseSlug: "adyaaye",
    stat: "2.4×",
    statLabel: "ROAS",
    outcome:
      "Meta campaigns built around store visits and WhatsApp enquiries rather than reach. Tighter audience segmentation and sustained creative testing held CAC steady even as spend scaled 35%.",
    results: [
      { value: "2.4×", label: "ROAS" },
      { value: "+34%", label: "Store visits MoM" },
      { value: "−22%", label: "Cost per enquiry" },
    ],
  },
  "brand-positioning-gtm": {
    brand: "Self Storage India",
    category: "Category Creation · D2C Lead Generation",
    caseSlug: "self-storage-india",
    stat: "50x",
    statLabel: "Ad spend scaled",
    outcome:
      "Self-storage did not exist as a consumer category in India. Positioning had to create the category before it could sell the service — starting at ₹10,000/month and earning each budget increase with proof.",
    results: [
      { value: "₹10K → ₹5L", label: "Monthly ad spend" },
      { value: "₹45L", label: "Sales / month" },
      { value: "3", label: "Locations" },
    ],
  },
  "d2c-whatsapp-commerce": {
    brand: "Monture",
    category: "Contemporary Western Wear · D2C via WhatsApp",
    caseSlug: "monture",
    stat: "2.1×",
    statLabel: "Order volume in 4 months",
    outcome:
      "Click-to-WhatsApp ads and a structured conversation flow turned DMs into a reliable sales channel. AOV held flat through the whole scaling period — volume came from better audiences, not discounts.",
    results: [
      { value: "2.1×", label: "ROAS" },
      { value: "5.4%", label: "Engagement rate" },
      { value: "−18%", label: "Cost per conversation" },
    ],
  },
  "growth-lead-generation": {
    brand: "Ladli Foundation Trust",
    category: "NGO · Digital Fundraising",
    caseSlug: "ladli-foundation-trust",
    stat: "3.5×",
    statLabel: "Overseas donation growth",
    outcome:
      "Seven digital properties across three countries, donation funnels wired into CRM, and a ₹11/month subscription model that shifted the economics from one-time gifts to donor lifetime value.",
    results: [
      { value: "1.5x", label: "MoM participation growth" },
      { value: "12%", label: "MoM organic traffic" },
      { value: "7", label: "Properties launched" },
    ],
  },
  "seo-website-optimization": {
    brand: "Bright Rose",
    category: "Heritage Fashion · Search-Led Discovery",
    caseSlug: "bright-rose",
    stat: "20K+",
    statLabel: "Monthly Pinterest views",
    outcome:
      "Keyword and platform SEO rebuilt around how premium buyers actually search for heritage weaves, with educational content engineered to rank rather than simply look good.",
    results: [
      { value: "20K+", label: "Monthly views" },
      { value: "Pinterest SEO", label: "Primary discovery channel" },
      { value: "Editorial", label: "Content built to rank" },
    ],
  },
  "marketing-analytics": {
    brand: "Fur Ball Story",
    category: "Pet Wellness · D2C Growth & Operations",
    caseSlug: "fur-ball-story",
    stat: "2.4x → 3.9x",
    statLabel: "ROAS",
    outcome:
      "Measurement extended past the ad account into the gap between 'added to cart' and 'money collected' — recovered abandonments, failed-COD reduction, and payment-mix shift all tracked as revenue levers.",
    results: [
      { value: "−21%", label: "CAC" },
      { value: "+28%", label: "AOV in Q1" },
      { value: "18%", label: "Lost sales recovered / mo" },
    ],
  },
  pr: {
    brand: "Banjara Trail",
    category: "Fashion · PR & Global Positioning",
    caseSlug: "banjara-trail",
    stat: "Cannes",
    statLabel: "International presence",
    outcome:
      "Editorial and cultural placement built deliberately rather than by volume, taking an Indian label from domestic visibility to an international stage.",
    results: [
      { value: "Tier-A", label: "Editorial placements" },
      { value: "Global", label: "Positioning shift" },
      { value: "Curated", label: "Media network, not wire blasts" },
    ],
  },
  events: {
    brand: "Wedding Asia",
    category: "Events & Exhibitions · Lead Generation",
    caseSlug: "wedding-asia",
    stat: "25% → 54%",
    statLabel: "Net SQL rate",
    outcome:
      "Exhibition demand rebuilt across six lead channels, with QR ticketing generating a pass at the moment of enquiry — faster entry at the door and far cleaner attendee data.",
    results: [
      { value: "−50%", label: "Cost per SQL" },
      { value: "6", label: "Lead channels in 2 months" },
      { value: "Cross-sell", label: "Exhibitor retention" },
    ],
  },
  "mbo-placements": {
    brand: "Shasha Gaba",
    category: "Fashion, Menswear · MBO Placement & Business Development",
    caseSlug: "shasha-gaba",
    stat: "₹30L/mo",
    statLabel: "Menswear MBO placement value",
    outcome:
      "A two-year business development push into menswear, pitching the right retail partners for a new category rather than adding SKUs to existing accounts — then managing the accounts to keep the shelf space.",
    results: [
      { value: "2 Years", label: "Sustained BD push" },
      { value: "Menswear", label: "New category secured" },
      { value: "Active", label: "Account management" },
    ],
  },
  "social-media-marketing": {
    brand: "Maharashtra Jewellers",
    category: "Fine Jewellery · Social Media & Digital Authority",
    caseSlug: "maharashtra-jewellers-organic",
    stat: "150%",
    statLabel: "Organic audience growth",
    outcome:
      "Organic content built to earn attention on its own merit, growing the audience without paid support behind every post.",
    results: [
      { value: "150%", label: "Organic growth" },
      { value: "Zero", label: "Paid support on organic" },
      { value: "Owned", label: "Audience, not rented reach" },
    ],
  },
  "campaign-brand-shoots": {
    brand: "Jewellery Vertical",
    category: "Maharashtra Jewellers · SK Jewellers · Amraani Jewels",
    caseSlug: "jewellery-vertical",
    stat: "2.7×",
    statLabel: "Avg ROAS over 6 months",
    outcome:
      "A single occasion-led campaign calendar — bridal, Diwali, Dhanteras, gifting — with creative built distinctly for three competing jewellery brands so none of them cannibalised the others.",
    results: [
      { value: "+38%", label: "Store walk-ins" },
      { value: "1.8M", label: "Combined reach" },
      { value: "Stable", label: "CAC across brands" },
    ],
  },
};
