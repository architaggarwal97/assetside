export type ServicePath =
  | "/services/performance-marketing"
  | "/services/brand-positioning-gtm"
  | "/services/d2c-whatsapp-commerce"
  | "/services/growth-lead-generation"
  | "/services/seo-website-optimization"
  | "/services/marketing-analytics"
  | "/services/pr"
  | "/services/events"
  | "/services/mbo-placements"
  | "/services/social-media-marketing"
  | "/services/campaign-brand-shoots";

export type Service = {
  n: string;
  slug: string;
  path: ServicePath;
  title: string;
  /** One-line summary used on the listing grid. */
  blurb: string;
  /** Opening paragraph on the detail page. */
  lead: string;
  /** 1–2 extra paragraphs of context so the page reads complete on its own. */
  context: string[];
  included: string[];
  proof?: string;
  proofLink?: { hash: string; label: string };
  metaTitle: string;
  metaDescription: string;
};

export const SERVICES: Service[] = [
  {
    n: "01",
    slug: "performance-marketing",
    path: "/services/performance-marketing",
    title: "Performance Marketing",
    blurb: "Full-funnel paid media across Google and Meta, built around unit economics rather than reach.",
    lead: "Full-funnel paid media across Google and Meta, built around unit economics, what a rupee of spend actually returns, not impressions or reach for their own sake.",
    context: [
      "Most accounts don't underperform because the platforms are broken. They underperform because spend is spread evenly across audiences, creatives, and formats that are not returning evenly, and nobody is reallocating fast enough to notice.",
      "The work here is structural: clean tracking first, then a funnel where cold, warm, and returning audiences each get something built for them, then a weekly rhythm of shifting budget toward whatever is proving itself.",
    ],
    included: [
      "Google Ads (Search, Display, Shopping, Performance Max)",
      "Meta Ads Manager across Facebook and Instagram (Feed, Stories, Reels)",
      "Audience segmentation and ongoing creative testing",
      "CAC and ROAS tracking, with budget shifted toward what's actually working",
      "Conversion rate optimization: A/B testing, checkout funnel",
      "Advanced tracking and cross-channel attribution",
      "Funnel creation and optimization, from first touch to conversion",
    ],
    proof: "Portfolio-wide ROAS improvements from 2.4× up to 3.9×, CAC held steady even as spend scaled 35%+.",
    proofLink: { hash: "adyaaye", label: "See the Adyaaye case study →" },
    metaTitle: "Performance Marketing for Luxury & D2C Brands — Asset Side",
    metaDescription:
      "Full-funnel Google and Meta paid media built around CAC and ROAS, not impressions. Audience segmentation, creative testing, attribution, and conversion rate optimization.",
  },
  {
    n: "02",
    slug: "brand-positioning-gtm",
    path: "/services/brand-positioning-gtm",
    title: "Brand Positioning & GTM Strategy",
    blurb: "Getting the story, the audience, and the category entry right before a single ad runs.",
    lead: "Before a single ad runs, the story needs to be right — who the brand is for, what makes it different, and how it enters a category without getting lost in it.",
    context: [
      "Positioning is the cheapest lever in marketing and the one most often skipped. A brand that knows exactly who it is for spends less to be understood, and every campaign after that gets easier.",
      "Engagements usually start with an audit of how the brand is currently read, by customers, retail partners, and press, then move to a written positioning and a sequenced plan for how it goes to market.",
    ],
    included: [
      "Brand audits and positioning workshops",
      "Go-to-market strategy for new products, markets, or categories",
      "Pitch decks and brand narratives tailored to the audience — retail partner, press, or investor",
      "Category entry planning, including timelines and benchmarking for brands entering new markets",
      "Brand storytelling and narrative development",
      "Aspiration building that earns attention before it asks for a sale",
      "Category creation and market education for genuinely new offerings",
    ],
    proof: "Built a phased 12-month entry strategy for a US-based fragrance label entering India, covering positioning, channel sequencing, and import registration timelines.",
    metaTitle: "Brand Positioning & GTM Strategy — Asset Side",
    metaDescription:
      "Brand audits, positioning workshops, and go-to-market strategy for luxury, couture, and D2C labels entering new products, categories, or markets.",
  },
  {
    n: "03",
    slug: "d2c-whatsapp-commerce",
    path: "/services/d2c-whatsapp-commerce",
    title: "D2C & WhatsApp-First Commerce",
    blurb: "Conversation-led selling that closes warmer than a website checkout.",
    lead: "For brands selling direct, WhatsApp is often a faster, warmer path to a sale than a website checkout — when the conversation flow is actually built for it.",
    context: [
      "For considered purchases, jewellery, couture, anything where a customer wants to ask before they buy, a chat window removes the friction a checkout page adds. The catch is that most brands treat WhatsApp as an inbox rather than a channel with its own funnel.",
      "Built properly, it becomes a measurable system: click-to-WhatsApp campaigns feeding structured flows, engagement-based retargeting, and repeat-purchase prompts that lift order volume without discounting.",
    ],
    included: [
      "Click-to-WhatsApp ad campaigns",
      "Structured conversation flows for browsing, asking, and ordering without drop-off",
      "Retargeting based on engagement and DM activity",
      "Order volume and AOV tracking, without leaning on discounts to move the needle",
      "Customer lifetime value (LTV) tracking and optimization",
      "Retention marketing and repeat-purchase systems",
    ],
    proof: "2.1× order volume growth for a western wear label via WhatsApp-first selling, AOV held steady the entire time.",
    proofLink: { hash: "monture", label: "See the Monture case study →" },
    metaTitle: "D2C & WhatsApp-First Commerce — Asset Side",
    metaDescription:
      "Click-to-WhatsApp campaigns, structured conversation flows, and retention systems that grow order volume for direct-to-consumer fashion and jewellery brands.",
  },
  {
    n: "04",
    slug: "growth-lead-generation",
    path: "/services/growth-lead-generation",
    title: "Growth & Lead Generation Systems",
    blurb: "Predictable qualified demand, with the CRM handoff built in.",
    lead: "Predictable demand and lead generation, not a lucky month followed by three dry ones. Systems that connect creative, targeting, and CRM handoff so nothing leaks between interested and converted.",
    context: [
      "Most lead-gen problems are not top-of-funnel problems. Volume arrives, then sits in an inbox, gets contacted three days late, and is written off as a bad lead.",
      "So the system gets built end to end: channels that produce the right kind of lead, qualification logic that filters early, and automation that puts each lead in front of a human while it is still warm, with cost-per-SQL as the number that matters.",
      "Once it runs, the reporting is deliberately simple: how many leads, how many were genuinely qualified, what each one cost, and where in the sequence the drop-off happened this month.",
    ],
    included: [
      "Multi-channel lead generation across Meta, Google, and beyond",
      "CRM setup and funnel management (HubSpot, MS Dynamics 365)",
      "Marketing automation (Zapier)",
      "Sales-qualified-lead tracking and cost-per-SQL reduction",
      "Lead scoring and qualification logic so sales works the right list first",
      "Follow-up sequencing across email, WhatsApp, and calls",
    ],
    proof: "Scaled one business from 30 to over 900 qualified leads a month within a single quarter.",
    metaTitle: "Growth & Lead Generation Systems — Asset Side",
    metaDescription:
      "Multi-channel lead generation, CRM setup, and marketing automation built to raise qualified lead volume and cut cost per SQL.",
  },
  {
    n: "05",
    slug: "seo-website-optimization",
    path: "/services/seo-website-optimization",
    title: "SEO & Website Optimization",
    blurb: "Technical health, on-page structure, and UX that keeps organic compounding.",
    lead: "Technical health, on-page structure, and conversion-focused UX, so organic traffic keeps compounding instead of plateauing.",
    context: [
      "Organic is the only channel that keeps returning after the spend stops, which makes it worth fixing properly rather than patching with content nobody searches for.",
      "Work typically covers a technical audit, the site speed and mobile issues quietly costing conversions, and, for location-based businesses, the local listings that decide whether someone walks in at all.",
    ],
    included: [
      "Technical SEO audits (SEMRush, Ahrefs, Screaming Frog)",
      "On-page optimization and Core Web Vitals",
      "Mobile-first UX improvements and page speed work",
      "Platform builds and maintenance (WordPress, Shopify, WooCommerce)",
      "Local SEO and Google Business Profile optimization for location-based and multi-outlet businesses",
      "Global D2C infrastructure: multi-currency, international shipping integrations",
    ],
    proof: "Managed local SEO, digital presence, and online reputation for enterprise multi-location clients including Pizza Hut, Royal Enfield, and Kaya Skin Clinic.",
    metaTitle: "SEO & Website Optimization — Asset Side",
    metaDescription:
      "Technical SEO audits, Core Web Vitals, local SEO and Google Business Profile work, and conversion-focused website builds for D2C and multi-outlet brands.",
  },
  {
    n: "06",
    slug: "marketing-analytics",
    path: "/services/marketing-analytics",
    title: "Marketing Analytics & Reporting",
    blurb: "Dashboards that make the next decision obvious.",
    lead: "Clean dashboards that make the next decision obvious, not another spreadsheet nobody opens after the first week.",
    context: [
      "Reporting fails when it answers questions nobody asked. The useful version starts from the decisions a founder actually makes each month, budget, channel mix, inventory, and reports only against those.",
      "Setup covers clean GA4 tracking, a single dashboard everyone shares, and a fixed reporting cadence with a written read on what changed and what to do next.",
      "Where attribution is already tangled across platforms, that gets untangled first — one source of truth beats four dashboards that disagree with each other.",
    ],
    included: [
      "Google Analytics 4 setup and reporting",
      "Looker Studio and Power BI dashboards",
      "Recurring performance reporting with longitudinal tracking",
      "Clear read on what's working, what isn't, and what to do next",
      "Conversion and event tracking audits across web and ad platforms",
      "Cross-channel attribution reconciliation into a single source of truth",
    ],
    metaTitle: "Marketing Analytics & Reporting — Asset Side",
    metaDescription:
      "GA4 setup, Looker Studio and Power BI dashboards, and recurring performance reporting that turns marketing data into decisions.",
  },
  {
    n: "07",
    slug: "pr",
    path: "/services/pr",
    title: "PR",
    blurb: "Editorial presence and media placements running alongside paid, not instead of it.",
    lead: "Media placements, narrative architecture, and editorial storytelling — run alongside paid campaigns rather than instead of them, so a brand's story shows up somewhere other than its own ads.",
    context: [
      "An ad works harder when the brand has already been seen somewhere it didn't pay for. Editorial coverage, stylist pulls, and founder features do the credibility work that performance campaigns then convert.",
      "That is why PR here is planned on the same calendar as paid, timed to launches, bridal and festive peaks, and the moments when attention is already in the category.",
    ],
    included: [
      "Media placements and editorial pitching across lifestyle, fashion, and business publications",
      "Press release drafting and story angles tailored to each publication",
      "Celebrity and stylist association opportunities",
      "Celebrity sourcing and red carpet placements",
      "Founder interviews and press features",
      "Inter-brand collaborations for expanded reach",
      "PR amplification run in parallel with paid campaigns to build credibility and editorial presence",
    ],
    proof: "PR amplification built into a jewellery vertical campaign calendar, reinforcing paid reach with editorial presence during peak bridal and festive seasons.",
    proofLink: { hash: "jewellery-vertical", label: "See the jewellery vertical case study →" },
    metaTitle: "PR & Brand Amplification — Asset Side",
    metaDescription:
      "Media placements, editorial pitching, celebrity and stylist associations, and founder features planned alongside paid campaigns for luxury and fashion labels.",
  },
  {
    n: "08",
    slug: "events",
    path: "/services/events",
    title: "Events",
    blurb: "Exhibition and event management, from the right footfall to the on-ground experience.",
    lead: "End-to-end exhibition and event management, from getting the right visitors through the door to making the on-ground experience actually work.",
    context: [
      "Footfall is the wrong target on its own. An exhibition succeeds when the people walking in are the ones exhibitors want to meet, and when the door doesn't cost twenty minutes of queueing to get through.",
      "So the work spans both sides: attendee and exhibitor lead generation before the event, and ticketing, check-in, and data capture on the day, so the next edition starts with a cleaner list than the last one.",
      "Post-event, the captured data feeds straight back into retargeting and CRM, which is where most exhibitions leave the majority of their return on the table.",
    ],
    included: [
      "Exhibition and event management, covering both attendee and exhibitor-side lead generation",
      "On-ground experience improvements: ticketing, check-in, and data collection",
      "Co-branding and showroom walk-in campaigns tied to event promotions",
      "Influencer programs built to amplify event promotion and drive trust through user-generated content",
      "Post-event retargeting and CRM follow-up from captured visitor data",
    ],
    proof: "Raised net Sales Qualified Lead rate from 25% to 54% for a wedding shopping exhibition business, while cutting cost per SQL by 50%.",
    proofLink: { hash: "jewellery-vertical", label: "See the jewellery vertical case study →" },
    metaTitle: "Event & Exhibition Marketing — Asset Side",
    metaDescription:
      "Exhibition and event management covering attendee and exhibitor lead generation, ticketing and check-in experience, co-branding, and influencer amplification.",
  },
  {
    n: "09",
    slug: "mbo-placements",
    path: "/services/mbo-placements",
    title: "MBO Placements",
    blurb: "Getting a label onto the right multi-brand boutiques, in India and abroad.",
    lead: "Getting a brand's products into the right multi-brand boutiques, domestically and internationally — the kind of retail credibility that builds beyond a brand's own storefront.",
    context: [
      "Being stocked by the right boutique does something advertising can't: it borrows an existing audience's trust and puts the brand in front of buyers already in a purchasing mindset.",
      "The wrong placement does the opposite, so each outreach starts with a positioning audit to match the label to platforms whose customer actually overlaps, followed by ongoing partner management once the placement is live.",
      "Placement is the start, not the finish: pricing consistency, replenishment, and how the label is merchandised on-platform decide whether a boutique reorders.",
    ],
    included: [
      "MBO placement strategy and outreach across Indian and international platforms",
      "Partner relationship management once placements are secured",
      "Positioning audits to match each brand with the right retail partners",
      "Ongoing account management across a multi-brand roster",
      "Pricing and margin structuring for retail and marketplace partners",
      "Catalogue, lookbook, and on-platform merchandising support",
    ],
    proof: "Active placement experience across platforms including Pernia's Pop-Up Shop, Tata CLiQ Luxury, and Ensemble domestically, and Aashni+Co internationally.",
    metaTitle: "MBO Placements for Luxury & Couture Labels — Asset Side",
    metaDescription:
      "Multi-brand outlet placement strategy, outreach, and partner management across Pernia's Pop-Up Shop, Tata CLiQ Luxury, Ensemble, and Aashni+Co.",
  },
  {
    n: "10",
    slug: "social-media-marketing",
    path: "/services/social-media-marketing",
    title: "Social Media Marketing",
    blurb: "Consistent, on-brand presence that builds trust before the website ever loads.",
    lead: "Strategic content planning and consistent, on-brand execution across platforms, the kind of presence that builds trust before someone ever lands on a website.",
    context: [
      "For most luxury and D2C brands, the feed is the first showroom a customer walks into. If it looks inconsistent there, no amount of paid spend fixes the impression.",
      "Work runs on a planned calendar rather than a posting scramble: platform-specific strategy, production, community management, and a monthly read on what the audience actually responded to.",
      "Organic and paid share the same creative direction, so what performs in the feed can be pushed behind spend instead of being rebuilt from scratch.",
    ],
    included: [
      "Content calendars and platform-specific strategy",
      "Content production (photo, video, stories, graphics)",
      "Community management and engagement",
      "Monthly performance reporting and optimization",
      "Influencer and creator collaborations, from shortlisting to delivery",
      "Organic-to-paid creative handoff for high-performing posts",
    ],
    metaTitle: "Social Media Marketing for Luxury & D2C — Asset Side",
    metaDescription:
      "Content calendars, platform-specific strategy, production, and community management that build a consistent, on-brand social presence.",
  },
  {
    n: "11",
    slug: "campaign-brand-shoots",
    path: "/services/campaign-brand-shoots",
    title: "Campaign & Brand Shoots",
    blurb: "Moodboard to final delivery, production that looks like the brand it represents.",
    lead: "From moodboard to final delivery, coordinated production for campaign imagery and video that actually looks like the brand it's representing.",
    context: [
      "A campaign is only as strong as the assets it runs on. Most underperforming creative isn't a targeting problem, it's a shoot that was briefed loosely and delivered generically.",
      "Each production starts from the positioning and the channels the assets have to work in, then runs through casting, studio, and vendor coordination to a delivered set of usable campaign creative.",
      "Every shoot is briefed with formats in mind — campaign hero, feed, story, and paid cutdowns — so one production day supplies a season of creative rather than three images.",
    ],
    included: [
      "Moodboard and creative direction",
      "Studio, model, and vendor coordination",
      "Full production management, shoot day to final delivery",
      "Casting, styling, and location or set sourcing",
      "Shot lists planned around campaign, social, and paid formats",
      "Post-production oversight: retouching, edits, and final asset delivery",
    ],
    metaTitle: "Campaign & Brand Shoots — Asset Side",
    metaDescription:
      "Creative direction, moodboards, studio and vendor coordination, and full production management for campaign imagery and brand films.",
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
) as Record<string, Service>;

/** Editorially chosen sibling services shown at the bottom of each detail page. */
export const RELATED_SERVICES: Record<string, string[]> = {
  "performance-marketing": [
    "growth-lead-generation",
    "marketing-analytics",
    "d2c-whatsapp-commerce",
  ],
  "brand-positioning-gtm": ["pr", "social-media-marketing", "mbo-placements"],
  "d2c-whatsapp-commerce": [
    "performance-marketing",
    "growth-lead-generation",
    "seo-website-optimization",
  ],
  "growth-lead-generation": [
    "performance-marketing",
    "marketing-analytics",
    "seo-website-optimization",
  ],
  "seo-website-optimization": [
    "marketing-analytics",
    "performance-marketing",
    "d2c-whatsapp-commerce",
  ],
  "marketing-analytics": [
    "performance-marketing",
    "growth-lead-generation",
    "seo-website-optimization",
  ],
  pr: ["brand-positioning-gtm", "events", "campaign-brand-shoots"],
  events: ["pr", "mbo-placements", "brand-positioning-gtm"],
  "mbo-placements": ["brand-positioning-gtm", "events", "pr"],
  "social-media-marketing": [
    "campaign-brand-shoots",
    "performance-marketing",
    "brand-positioning-gtm",
  ],
  "campaign-brand-shoots": [
    "social-media-marketing",
    "brand-positioning-gtm",
    "performance-marketing",
  ],
};

export const TOOLS = [
  "Google Ads",
  "Meta Ads Manager",
  "Google Analytics 4",
  "SEMRush",
  "Ahrefs",
  "HubSpot CRM",
  "Zapier",
  "Figma",
  "Google Looker Studio",
  "Power BI",
];