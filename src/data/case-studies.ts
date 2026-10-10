import { Store, MessageCircle, Gem, Warehouse, PawPrint, Ticket, Pin, Users, Film, HandHeart, ShoppingBag, type LucideIcon } from "lucide-react";

export type Study = {
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

export const STUDIES: Study[] = [
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
    relatedService: { slug: "growth-lead-generation", label: "Growth & Lead Generation Systems" },
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
    relatedService: { slug: "performance-marketing", label: "Performance Marketing" },
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
    relatedService: { slug: "events", label: "Events" },
  },
  {
    slug: "bright-rose",
    brand: "Bright Rose",
    category: "Heritage Fashion · Social Media & Digital Authority",
    icon: Pin,
    headlineStat: "20K+",
    headlineLabel: "monthly Pinterest views",
    objective:
      "Build a storytelling-led digital presence that educated the audience on the heritage of Indian weaves and premium craftsmanship, turning casual scrollers into an engaged, curious community rather than relying on standard aesthetic posting alone.",
    strategy: [
      "Identified Pinterest as the strongest platform for the brand's visual storytelling and rebuilt the digital strategy around Pinterest SEO, aligned to how premium audiences actually search",
      "Built educational content around authentic Indian weaves and the overlooked details of heritage craftsmanship",
      "Executed keyword optimization to place the content in front of consumers actively searching for heritage fashion",
    ],
    results: [
      { value: "20K+", label: "monthly Pinterest views within 15 days" },
      { value: "Rapid", label: "organic discoverability surge" },
      { value: "Niche", label: "authority in heritage fashion search" },
      { value: "15 Days", label: "time to scale" },
    ],
    insight:
      "Educational storytelling outperformed standard aesthetic posting because it answered a question the audience was already searching for, not just something they might like if they happened to scroll past it.",
    relatedService: { slug: "social-media-marketing", label: "Social Media Marketing" },
  },
  {
    slug: "maharashtra-jewellers-organic",
    brand: "Maharashtra Jewellers: Organic Growth",
    category: "Fine Jewellery · Social Media & Digital Authority",
    icon: Users,
    headlineStat: "150%",
    headlineLabel: "organic audience growth",
    objective:
      "Build a formidable digital presence while staying rooted in the brand's traditional identity, cultivating authentic connection across bridal, everyday luxury, and festive collections through culturally relevant storytelling, rather than chasing generic trends.",
    strategy: [
      "Conducted audience behavior analysis and detailed hashtag research to understand exactly what high-intent consumers were engaging with",
      "Identified which specific jewellery categories performed best and built content pillars around them",
      "Crafted intentional product positioning and trend adaptation to stand out in a competitive fine jewellery market",
    ],
    results: [
      { value: "150%", label: "organic audience growth" },
      { value: "20K → 50K", label: "followers, entirely organic" },
      { value: "Deepened", label: "engagement across reels and static posts" },
      { value: "Elevated", label: "brand recall with tailored content" },
    ],
    insight:
      "The page didn't just grow in numbers, it became a community that engages daily. That only happens when content decisions come from what the audience actually responds to, not what looks good in a content calendar.",
  },
  {
    slug: "banjara-trail",
    brand: "Banjara Trail",
    category: "Fashion · PR & Global Positioning",
    icon: Film,
    headlineStat: "Cannes",
    headlineLabel: "international presence",
    objective:
      "Elevate a promising but still largely local fashion label onto the global stage, building the media credibility and strategic positioning needed to move from regional recognition toward international relevance.",
    strategy: [
      "Built a structured PR and visibility strategy layering domestic editorial credibility with international positioning opportunities",
      "Secured association with high-visibility cultural moments, including Miss India platforms, to build a media narrative before pursuing international placement",
      "Used that accumulated credibility to position the brand for presence at the Cannes Film Festival, turning a local success story into an internationally recognized one",
    ],
    results: [
      { value: "Local → Global", label: "positioning arc" },
      { value: "Miss India", label: "platform association secured" },
      { value: "Cannes Film Festival", label: "international presence achieved" },
      { value: "Media Narrative", label: "built before the international push, not after" },
    ],
    insight:
      "International visibility isn't something you buy with one big placement, it's something you build toward, one credible association at a time, so that by the time the bigger stage arrives, the brand has already earned the right to be taken seriously there.",
    relatedService: { slug: "pr", label: "PR & Brand Amplification" },
  },
  {
    slug: "ladli-foundation-trust",
    brand: "Ladli Foundation Trust",
    category: "NGO · Digital Fundraising",
    icon: HandHeart,
    headlineStat: "3.5x",
    headlineLabel: "overseas donation growth",
    objective:
      "Establish and scale a global digital presence from scratch for an impact-driven NGO, growing donations, international volunteering, and awareness across India, the US, and Africa.",
    strategy: [
      "Built the complete digital ecosystem from the ground up across seven properties, including the main site, US-specific and Africa-specific platforms, and a global internship platform, with donation funnels and CRM integration",
      "Used Reddit and blogging to drive organic, community-led traffic rather than relying solely on paid reach",
      "Scaled NRI-focused fundraising specifically through Meta, Google, and WhatsApp",
      "Launched a subscription-based donation model (₹11/month) to shift the economics from one-time gifts toward donor lifetime value and predictable funding",
      "Built structured post-donation journeys to strengthen trust and repeat giving",
    ],
    results: [
      { value: "3.5x", label: "overseas donation growth in 6 months" },
      { value: "1.5x", label: "MoM internship/fellowship participation growth" },
      { value: "12%", label: "MoM organic traffic growth" },
      { value: "7 Properties", label: "built and launched across 3 countries" },
    ],
    insight:
      "A 0.9 ROAS on new donor acquisition looks like a losing number in isolation. Paired with a subscription model built for donor lifetime value instead of one-time conversion, it wasn't the losing number, it was the honest starting point. The real fundraising asset was never the first donation, it was the second, third, and twentieth.",
  },
  {
    slug: "shasha-gaba",
    brand: "Shasha Gaba",
    category: "Fashion, Menswear · MBO Placement & Business Development",
    icon: ShoppingBag,
    headlineStat: "₹30L/mo",
    headlineLabel: "menswear MBO placement value",
    objective:
      "Expand a fashion label's retail footprint into menswear specifically, securing placement in multi-brand outlets worth pursuing seriously, not just adding SKUs to an existing account.",
    strategy: [
      "Ran a sustained business development push over two years, identifying and pitching the right MBO partners for a menswear expansion rather than a generic multi-category pitch",
      "Built the retail relationships and account management needed to sustain placement once secured, not just win the initial listing",
    ],
    results: [
      { value: "₹30L/mo", label: "menswear MBO placement value secured" },
      { value: "2 Years", label: "sustained BD push" },
      { value: "Menswear", label: "category expansion, new for the brand" },
      { value: "Retail Partners", label: "secured and actively managed" },
    ],
    insight:
      "Category expansion into menswear wasn't a quick pitch, it was a two-year relationship-building exercise that had to prove the category before any retailer would commit real shelf space to it.",
    relatedService: { slug: "mbo-placements", label: "MBO Placements" },
  },
];

