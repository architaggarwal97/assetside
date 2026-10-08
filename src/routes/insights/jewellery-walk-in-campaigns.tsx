import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import articleImage from "@/assets/jewellery-case.webp.asset.json";

const TITLE = "What Jewellery Brands Get Wrong About Store Walk-in Campaigns";
const DESCRIPTION = "Why jewellery walk-in campaigns need occasion-led audiences, distinct creative and retail follow-through. Lessons from three competing jewellery brands.";
const URL = "https://assetside.lovable.app/insights/jewellery-walk-in-campaigns";
const DATE = "2026-10-08";

export const Route = createFileRoute("/insights/jewellery-walk-in-campaigns")({
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
      headline: TITLE, description: DESCRIPTION, articleSection: "Retail & Jewellery",
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
            <span className="text-xs uppercase tracking-[0.3em] text-cream/70">Retail & Jewellery · 6 min read</span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">What Jewellery Brands Get Wrong About <span className="italic text-gold">Store Walk-in Campaigns</span></h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70"><time dateTime={DATE}>8 Oct 2026</time> · Archit Aggarwal</div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>
      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25"><img src={articleImage.url} alt="Fine jewellery displayed in a retail presentation case" width={1200} height={800} loading="lazy" decoding="async" className="h-full w-full object-cover" /></div>
          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">A jewellery campaign can reach a large audience and still send very few of the right people into a store. The problem is often not the photograph, the spend or the season. It is that the campaign treats everyone who might like jewellery as the same potential buyer.</p>
<p className="reveal">A bridal buyer comparing appointments is not making the same decision as someone choosing a Diwali gift. The timelines, questions and reasons to visit are different. When the message ignores those differences, a walk-in campaign becomes a product catalogue with a location attached.</p>
<p className="reveal">Managing competing brands through the same season makes the cost of that mistake more visible. You cannot simply give every brand the same audience, the same offer and the same creative calendar, then expect distinct growth.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Separate occasion intent before you buy reach</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">The Jewellery Vertical engagement covered Maharashtra Jewellers, SK Jewellers and Amraani Jewels. The brief was to generate qualified footfall for three competing businesses while keeping their positioning distinct. The campaign calendar included bridal season, Diwali, Dhanteras and gifting occasions.</p>
<p className="reveal">That calendar was a starting point, not a reason to send identical messages everywhere. Audience segmentation by occasion intent helped keep the brands from pulling from one another's pool. A shared seasonal opportunity still needed a separate reason to choose each store.</p>
<p className="reveal">For a retailer planning a similar campaign, write the buying situation into the brief. Is the customer planning a wedding purchase, marking a family occasion or looking for a gift? That is more useful creative guidance than a broad instruction to reach affluent jewellery shoppers.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Make the visit worth the journey</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">A beautiful image can create interest without giving someone a reason to leave home. The next layer of the message should make the store visit feel relevant: the collection they can explore, the appointment they can request, or the question a person in store can help resolve.</p>
<p className="reveal">Avoid inventing urgency or promising an experience the retail team cannot deliver. The handoff matters. Someone who asks about a piece should receive a clear answer about availability and the next step, not be pushed into a generic promotional conversation.</p>
<p className="reveal">Local relevance also matters. The existing engagement used geo-targeted Meta campaigns in Delhi NCR and Mumbai with store-traffic and local-awareness objectives. Geography should support a plausible visit, rather than merely add a bigger audience to the report.</p>
<p className="reveal text-sm">Read the <Link to="/case-studies" hash="jewellery-vertical" className="text-gold underline-offset-4 transition-colors hover:underline">Jewellery Vertical case study →</Link> for the strategy and reported results.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Distinct creative is a strategy, not a cosmetic change</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Changing a logo on the same photograph does not create three distinct brands. The creative should reflect what each buyer is choosing and what makes that retailer relevant to the occasion. A campaign calendar can be coordinated without making the customer-facing work interchangeable.</p>
<p className="reveal">This is where campaign planning and brand shoots belong together. The shoot brief needs the buying context before production begins. Otherwise the team may create attractive assets and only later discover that none of them answers the question the campaign needs to ask.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">What the jewellery engagement actually delivered</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Across the six-month engagement, the case study records 2.7× average ROAS, a 38% increase in store walk-ins and 1.8 million combined reach, with stable CAC across the brands. PR amplification ran alongside the paid campaigns.</p>
<p className="reveal">The reach number describes distribution. The walk-in and ROAS figures describe outcomes closer to the commercial brief. They should be read together, not treated as interchangeable proof. These are reported engagement results, not a controlled experiment isolating the effect of audience separation or PR.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Close the gap between the ad account and the store</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">For the next campaign, agree with the retail team on what counts as an enquiry, an appointment and an attended visit. Record the source where customers can reliably identify it, and keep unknown sources visible. Do not turn every store visitor into an attributed ad conversion just because a campaign was running.</p>
<p className="reveal">Review enquiry quality alongside the store's feedback. Are customers asking about the intended collection? Are appointments being honoured? Are the people arriving actually in the buying situation the campaign targeted? Those answers can tell you more than a rise in clicks.</p>
<p className="reveal">The goal is not to maximise footfall at any cost. It is to create enough of the right visits, for the right brand, with a retail experience that can turn interest into a considered purchase.</p>
<p className="reveal">For the way this approach is built into an engagement, explore <Link to="/services/campaign-brand-shoots" className="text-gold underline-offset-4 transition-colors hover:underline">Campaign & Brand Shoots →</Link>.</p>
            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 px-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">“The strategy is not to reach everyone who likes jewellery. It is to give the right buyer a specific reason to walk into your store.”</blockquote>
          </div>
          <div className="reveal mt-20"><AuthorBio /></div>
        </article>
      </main>
      <ContactBlock heading="Let's talk about your " accent="next quarter." intro="Selective engagements. Direct line, no gatekeepers." />
      <SiteFooter />
    </div>
  );
}
