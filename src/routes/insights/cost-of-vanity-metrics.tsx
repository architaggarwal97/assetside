import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import articleImage from "@/assets/boutique-storefront.webp.asset.json";

const TITLE = "The Real Cost of Chasing Vanity Metrics in Luxury Marketing";
const DESCRIPTION = "Reach is not revenue. Learn how luxury marketing can prioritise qualified enquiries, appointments and store visits, with results from Adyaaye.";
const URL = "https://assetside.lovable.app/insights/cost-of-vanity-metrics";
const DATE = "2026-10-08";

export const Route = createFileRoute("/insights/cost-of-vanity-metrics")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "Article", "@id": `${URL}#article`,
      mainEntityOfPage: { "@type": "WebPage", "@id": URL },
      headline: TITLE, description: DESCRIPTION, articleSection: "Performance Marketing",
      datePublished: DATE, dateModified: DATE, inLanguage: "en",
      author: { "@id": "https://assetside.lovable.app/#person" },
      publisher: { "@id": "https://assetside.lovable.app/#organization" },
    }) }],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  useReveal();
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />
      <section className="editorial-hero relative overflow-hidden pt-40 pb-24 text-cream md:pt-52 md:pb-32">
        <div className="relative mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal flex items-center gap-4">
            <span className="font-display text-sm italic text-gold">§</span><div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-cream/70">Performance Marketing · 5 min read</span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">The Real Cost of Chasing <span className="italic text-gold">Vanity Metrics in Luxury Marketing</span></h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70"><time dateTime={DATE}>8 Oct 2026</time> · Archit Aggarwal</div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>
      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25"><img src={articleImage.url} alt="Interior of a contemporary fashion boutique with curated clothing rails" width={1200} height={801} loading="lazy" decoding="async" className="h-full w-full object-cover" /></div>
          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">The most expensive number in a marketing report is not always the cost per click. Sometimes it is the impressive number that persuades everyone to keep funding the wrong thing. Reach goes up. The team celebrates. The store still has the same empty appointment slots.</p>
<p className="reveal">Luxury makes this harder to spot because admiration is easy to mistake for buying intent. A beautiful campaign can attract an audience that enjoys looking at the product without being ready, able or likely to purchase it. That attention is not worthless. It just has a different job from an enquiry.</p>
<p className="reveal">The real cost of vanity metrics is the decision they distort. If passive attention becomes the definition of success, the team begins optimising for more passive attention. Budget, creative time and reporting effort move away from the customer behaviour the business actually needs.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">A metric becomes vanity when it loses its purpose</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Reach, impressions and likes are not inherently bad measures. Reach can help diagnose whether a campaign reached enough of the intended audience. Engagement can show whether a creative direction earned interest. The mistake is using either as a substitute for a commercial outcome.</p>
<p className="reveal">Ask what the number will change. If more impressions would not alter the next decision about the audience, creative or budget, they probably do not deserve the headline of the report. A useful metric earns its place by making a decision clearer.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Move the brief closer to the buying decision</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Adyaaye by Chandresh Ritessh had a specific objective: qualified in-store walk-ins and appointment enquiries, alongside brand awareness on Instagram and WhatsApp, without inflating acquisition cost. That is a different brief from simply making the brand more visible.</p>
<p className="reveal">The work combined Meta placements across Feed, Stories and Reels, WhatsApp click-to-chat, retargeting on engagement and site activity, and creative testing between lifestyle-editorial and product-forward directions. The enquiry path was part of the campaign, not an afterthought.</p>
<p className="reveal">The reported results were 2.4× ROAS, a 34% month-on-month increase in store visits and a 22% reduction in cost per enquiry. CAC was maintained while ad spend scaled by 35%. The case study also records 3.8 lakh unique reach, but reach is not the strongest explanation of why this work mattered to the business.</p>
<p className="reveal text-sm">Read the <Link to="/case-studies/$slug" params={{ slug: "adyaaye" }} className="text-gold underline-offset-4 transition-colors hover:underline">Adyaaye case study →</Link> for the strategy and reported results.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Test creative against its intended job</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">A lifestyle-editorial visual may build desire. A product-forward visual may answer a more immediate shopping question. Neither is automatically better. Judge the direction against the audience and the action you need, rather than against which image earns the most applause.</p>
<p className="reveal">That means reviewing the quality of the resulting conversations, not only their volume. Enquiries about appointments, availability or a specific collection can be more commercially useful than a large number of reactions. But intent still needs follow-through; an unanswered qualified enquiry is not a sale.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Build a report that admits the gaps</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Separate enquiries, qualified enquiries, appointments, attended visits and purchases where the business can record them reliably. Include the spend beside them. This makes the gap between one stage and the next visible instead of letting a single conversion total hide it.</p>
<p className="reveal">Be honest about attribution. Offline purchases and long consideration cycles rarely fit neatly inside one platform's reporting window. Use the available evidence to guide decisions, but do not claim that every movement in sales was caused by the ad that received the last click.</p>
<p className="reveal">The Adyaaye results are engagement outcomes, not a universal benchmark for luxury brands. The useful lesson is the measurement discipline: place the business objective beside the platform numbers and keep asking whether both tell a coherent story.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Protect the brand without hiding from performance</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Revenue-focused measurement does not require turning luxury into a discount-led feed. It requires clarity about how the brand experience supports buying. A considered visual language, a useful conversation and a credible store experience can all contribute without sounding like a clearance sale.</p>
<p className="reveal">At the next review, keep one question on the table: if the reach number disappeared from this slide, what evidence would still show that the campaign helped the business? If the answer is thin, the solution is not a better-looking report. It is a better-defined campaign.</p>
<p className="reveal">For the way this approach is built into an engagement, explore <Link to="/services/performance-marketing" className="text-gold underline-offset-4 transition-colors hover:underline">Performance Marketing →</Link>.</p>
            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 px-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">“Attention belongs in the report. It should not be allowed to impersonate the result.”</blockquote>
          </div>
          <div className="reveal mt-20"><AuthorBio /></div>
        </article>
      </main>
      <ContactBlock heading="Let's talk about your " accent="next quarter." intro="Selective engagements. Direct line, no gatekeepers." />
      <SiteFooter />
    </div>
  );
}
