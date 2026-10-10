/**
 * Long-form case study pages for clients cited in Insights articles.
 * Facts come only from the case study summaries in `case-studies.ts`.
 */
export type CaseStudyPage = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  lede: string;
  sections: { heading: string; paragraphs: string[] }[];
  /** Insights articles that cite this client. */
  articles: { label: string; path: string }[];
};

const DATE = "2026-10-10";

export const CASE_STUDY_PAGES: Record<string, CaseStudyPage> = {
  adyaaye: {
    slug: "adyaaye",
    title: "Adyaaye Case Study: 2.4× ROAS From Store Visits, Not Reach",
    description:
      "How Meta campaigns and WhatsApp click-to-chat drove 2.4× ROAS, 34% more store visits and 22% lower cost per enquiry for Adyaaye by Chandresh Ritessh.",
    datePublished: DATE,
    lede: "A luxury couture label needed people walking into the store and asking for appointments, not just more people seeing the brand.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "Adyaaye by Chandresh Ritessh came with a clear commercial objective: drive qualified in-store walk-ins and appointment enquiries, and grow brand awareness on Instagram and WhatsApp, without inflating acquisition cost.",
          "That last condition shaped everything. Luxury couture can easily attract admiration that never becomes a visit. The campaign had to be judged on enquiries and footfall, with reach treated as a supporting number rather than the headline.",
        ],
      },
      {
        heading: "Shortening the path from ad to conversation",
        paragraphs: [
          "Meta Ads ran across Feed, Stories and Reels, aimed at high-affinity luxury audiences. Instead of sending people to browse, WhatsApp click-to-chat took them straight into a conversation with the brand, where an appointment could actually be arranged.",
          "Retargeting was layered on content engagement and site activity, so people who had already shown interest saw the brand again at the moment they were closer to deciding.",
        ],
      },
      {
        heading: "Testing creative against its job",
        paragraphs: [
          "Creative was tested between two directions: lifestyle-editorial imagery that builds desire, and product-forward imagery that answers a more immediate shopping question. Each was judged on the enquiries it produced, not on how much applause it earned.",
        ],
      },
      {
        heading: "What came out of it",
        paragraphs: [
          "The campaigns delivered 2.4× ROAS, a 34% month-on-month increase in store visits and a 22% reduction in cost per enquiry, with 3.8 lakh unique reach along the way.",
          "Most importantly, CAC was maintained even as ad spend scaled by 35%. That came from tighter audience segmentation and creative iteration that reduced waste, not simply from spending more.",
        ],
      },
    ],
    articles: [
      { label: "The Real Cost of Chasing Vanity Metrics in Luxury Marketing", path: "/insights/cost-of-vanity-metrics" },
      { label: "The Comprehensive Guide to Measuring the True ROI of Luxury PR", path: "/insights/measuring-true-roi-luxury-pr" },
    ],
  },
  monture: {
    slug: "monture",
    title: "Monture Case Study: 2.1× Orders Through WhatsApp Commerce",
    description:
      "How Monture doubled order volume in four months by rebuilding its D2C funnel around WhatsApp, with 5.4% engagement, 18% lower cost per conversation and steady AOV.",
    datePublished: DATE,
    lede: "A contemporary western wear label turned DMs into a dependable sales channel, and grew without leaning on discounts.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "Monture wanted a reliable D2C revenue stream built on WhatsApp-led selling. The goal was to grow order volume while holding average order value and acquisition cost steady.",
          "A website checkout asks a customer to do all the work alone. A WhatsApp chat lets them ask about fit, fabric or delivery before they commit, which is how many Indian shoppers prefer to buy.",
        ],
      },
      {
        heading: "Content built for DM intent, not likes",
        paragraphs: [
          "Organic content was made specifically to start conversations, prompting people to message rather than simply react. Click-to-WhatsApp ads then pulled warm audiences straight into a live chat.",
        ],
      },
      {
        heading: "A conversation structure, not a script",
        paragraphs: [
          "Inside WhatsApp, a structured conversation flow guided people through browsing, asking and ordering. It gave the team a consistent path to follow without making every reply feel automated.",
          "Retargeting was built on engagement and DM activity, closing open conversations rather than chasing everyone who had merely visited.",
        ],
      },
      {
        heading: "What came out of it",
        paragraphs: [
          "Order volume grew 2.1× over four months, alongside 2.1× ROAS, a 5.4% engagement rate and an 18% lower cost per conversation.",
          "AOV held consistent through the whole scaling period. The growth came from better audiences and better content, not from discounts pushing volume.",
        ],
      },
    ],
    articles: [
      { label: "Why WhatsApp-First Commerce Is Winning in Indian D2C", path: "/insights/whatsapp-first-commerce-india" },
    ],
  },
  "jewellery-vertical": {
    slug: "jewellery-vertical",
    title: "Jewellery Vertical Case Study: 2.7× ROAS Across Three Brands",
    description:
      "How one occasion-led campaign calendar drove 2.7× average ROAS and 38% more store walk-ins for Maharashtra Jewellers, SK Jewellers and Amraani Jewels.",
    datePublished: DATE,
    lede: "Three competing jewellery brands, one campaign calendar, and the discipline to keep each brand from eating into the others.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "Maharashtra Jewellers, SK Jewellers and Amraani Jewels each needed qualified footfall. Each also needed its own distinct position, while all three were run through a single collective campaign calendar.",
          "The obvious risk was cannibalisation: three brands chasing the same bridal and festive shoppers in the same cities, bidding against one another.",
        ],
      },
      {
        heading: "An occasion-led calendar",
        paragraphs: [
          "The calendar was built around the moments jewellery is actually bought: bridal season, Diwali, Dhanteras and gifting occasions. Meta Ads used store-traffic and local-awareness objectives, geo-targeted to Delhi NCR and Mumbai.",
        ],
      },
      {
        heading: "Audience separation as the strategy",
        paragraphs: [
          "Audiences were segmented by occasion intent so that each brand spoke to a different pool of shoppers. This separation was not a detail of the plan, it was the plan.",
          "PR amplification ran in parallel with the paid campaigns, so the ads were not the only place customers met each brand.",
        ],
      },
      {
        heading: "What came out of it",
        paragraphs: [
          "Over six months the vertical averaged 2.7× ROAS, with a 38% increase in store walk-ins and 1.8M combined reach. CAC stayed stable across all three brands.",
          "Each brand grew without pulling from another brand's pool, which is the result that made the whole arrangement work.",
        ],
      },
    ],
    articles: [
      { label: "What Jewellery Brands Get Wrong About Store Walk-in Campaigns", path: "/insights/jewellery-walk-in-campaigns" },
      { label: "Why Performance Marketing Needs PR Sitting Right Next to It", path: "/insights/performance-marketing-needs-pr" },
    ],
  },
  "self-storage-india": {
    slug: "self-storage-india",
    title: "Self Storage India Case Study: Building a Category From ₹10K a Month",
    description:
      "How Self Storage India scaled ad spend 50x, from ₹10,000 to ₹5,00,000 a month, reaching ₹45L monthly sales across three locations in a category that didn't exist.",
    datePublished: DATE,
    lede: "The first self-storage business of its kind in India had to prove the category was real before it could sell a single unit.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "Self-storage as a consumer service simply did not exist as a known category in India. Even the owners were not fully confident it would work.",
          "So the real first mandate was not lead generation. It was proving the model could work at all, starting cautiously rather than betting big on something unproven.",
        ],
      },
      {
        heading: "Every rupee earned the next one",
        paragraphs: [
          "The work began with a deliberately conservative ₹10,000 a month in ad spend. Early results were used to build internal confidence before investment grew, and each budget increase had to be earned by the stage before it.",
          "As proof accumulated, spend scaled to ₹5,00,000 a month, a 50x increase that never felt like a leap of faith.",
        ],
      },
      {
        heading: "Beyond one channel",
        paragraphs: [
          "Within two months, acquisition was diversified beyond Google to six channels. An on-page SEO foundation was built to rank for 900+ search terms, and retargeting was layered in with continuous creative testing.",
        ],
      },
      {
        heading: "What came out of it",
        paragraphs: [
          "The business reached ₹45L in monthly sales across three locations and 60,000 sq ft of total area.",
          "The hardest conversion was never a customer. It was convincing the people signing off on the budget that the category itself was real.",
        ],
      },
    ],
    articles: [
      { label: "Dhanda-First: A Framework for Marketing That Pays for Itself", path: "/insights/dhanda-first-framework" },
      { label: "Everyone Says Google Ads Is Dead", path: "/insights/everyone-says-google-ads-is-dead" },
    ],
  },
  "banjara-trail": {
    slug: "banjara-trail",
    title: "Banjara Trail Case Study: From Local Label to Cannes",
    description:
      "How a structured PR strategy took Banjara Trail from regional recognition to Miss India platforms and an international presence at the Cannes Film Festival.",
    datePublished: DATE,
    lede: "International visibility was built one credible association at a time, so the brand had earned its place by the time the bigger stage arrived.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "Banjara Trail was a promising but still largely local fashion label. The goal was to move it onto the global stage, building the media credibility and positioning needed to go from regional recognition to international relevance.",
        ],
      },
      {
        heading: "Domestic credibility first",
        paragraphs: [
          "The PR and visibility strategy layered domestic editorial credibility with international positioning opportunities. Association with high-visibility cultural moments, including Miss India platforms, built a media narrative before any international placement was pursued.",
        ],
      },
      {
        heading: "Then the international stage",
        paragraphs: [
          "That accumulated credibility was used to position the brand for presence at the Cannes Film Festival, turning a local success story into an internationally recognised one.",
        ],
      },
      {
        heading: "What came out of it",
        paragraphs: [
          "A complete local-to-global positioning arc: Miss India platform association secured, presence at the Cannes Film Festival achieved, and a media narrative built before the international push rather than after it.",
          "International visibility is not something bought with one big placement. It is built toward, so that by the time the bigger stage arrives, the brand is already taken seriously there.",
        ],
      },
    ],
    articles: [
      { label: "Why Performance Marketing Needs PR Sitting Right Next to It", path: "/insights/performance-marketing-needs-pr" },
    ],
  },
  "ladli-foundation-trust": {
    slug: "ladli-foundation-trust",
    title: "Ladli Foundation Trust Case Study: 3.5× Overseas Donations",
    description:
      "How seven digital properties across three countries and a ₹11/month subscription model grew Ladli Foundation Trust's overseas donations 3.5× in six months.",
    datePublished: DATE,
    lede: "An impact-driven NGO built a global digital presence from scratch, and shifted from one-time gifts to donors who stay.",
    sections: [
      {
        heading: "The brief",
        paragraphs: [
          "Ladli Foundation Trust needed to establish and scale a global digital presence from scratch, growing donations, international volunteering and awareness across India, the US and Africa.",
        ],
      },
      {
        heading: "Seven properties, three countries",
        paragraphs: [
          "The complete digital ecosystem was built from the ground up across seven properties: the main site, US-specific and Africa-specific platforms, and a global internship platform, all with donation funnels and CRM integration.",
          "Reddit and blogging drove organic, community-led traffic, so growth did not depend on paid reach alone. NRI-focused fundraising was scaled through Meta, Google and WhatsApp.",
        ],
      },
      {
        heading: "Subscription thinking, not donation drives",
        paragraphs: [
          "A subscription-based donation model at ₹11 a month shifted the economics from one-time gifts toward donor lifetime value and predictable funding. Structured post-donation journeys strengthened trust and repeat giving.",
          "A 0.9 ROAS on new donor acquisition looks like a losing number on its own. Paired with a model built for lifetime value, it was the honest starting point.",
        ],
      },
      {
        heading: "What came out of it",
        paragraphs: [
          "Overseas donations grew 3.5× in six months. Internship and fellowship participation grew 1.5× month on month, organic traffic grew 12% month on month, and seven properties launched across three countries.",
          "The real fundraising asset was never the first donation. It was the second, third and twentieth.",
        ],
      },
    ],
    articles: [
      { label: "Why NGO Fundraising Needs Subscription Thinking, Not Just Donation Drives", path: "/insights/ngo-fundraising-subscription-thinking" },
    ],
  },
};
