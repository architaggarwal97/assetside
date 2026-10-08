import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";

const TITLE = "Why Performance Marketing Needs PR Sitting Right Next to It";
const DESCRIPTION = "Paid campaigns create reach; PR can build credibility. How to coordinate both without overstating attribution, with jewellery and Banjara Trail examples.";
const URL = "https://assetside.lovable.app/insights/performance-marketing-needs-pr";
const DATE = "2026-10-08";

export const Route = createFileRoute("/insights/performance-marketing-needs-pr")({
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
      headline: TITLE, description: DESCRIPTION, articleSection: "Brand Strategy",
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
            <span className="text-xs uppercase tracking-[0.3em] text-cream/70">Brand Strategy · 4 min read</span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">Why Performance Marketing Needs <span className="italic text-gold">PR Sitting Right Next to It</span></h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70"><time dateTime={DATE}>8 Oct 2026</time> · Archit Aggarwal</div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>
      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <blockquote className="reveal border-l-2 border-gold bg-gold/5 px-6 py-10 font-display text-2xl italic leading-relaxed text-navy-deep md:text-3xl">“Reach without credibility is just noise at a higher volume.”</blockquote>
          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">An ad asks a customer to believe the brand's own account of itself. That is a necessary part of selling, but it is not the only source of trust a customer looks for. They may search the name, look for editorial coverage, or ask whether the brand belongs in the category it claims to occupy.</p>
<p className="reveal">Performance marketing and PR answer different parts of that decision. Paid campaigns can put the offer in front of the right audience and create a measurable next step. PR can provide context and independent recognition that the brand cannot simply declare for itself.</p>
<p className="reveal">Running them as separate projects misses that connection. The more useful approach is to plan what a customer should encounter across both, without pretending that every editorial placement can be translated into a guaranteed acquisition-cost saving.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">One narrative, different jobs</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Paid creative needs a clear action. Editorial outreach needs a story that is genuinely relevant to the publication and its readers. The shared narrative should make those two activities consistent, not force a press pitch to read like an advertisement.</p>
<p className="reveal">For a jewellery brand, the narrative might centre on a collection or occasion. The ad can invite a visit or enquiry. Editorial coverage can place the brand in a wider context. They support the same buying journey while respecting the different reasons people encounter each channel.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">The jewellery campaigns ran in parallel</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">The Jewellery Vertical engagement combined paid campaigns for Maharashtra Jewellers, SK Jewellers and Amraani Jewels with PR amplification. The campaign calendar covered bridal season, Diwali, Dhanteras and gifting, with audience separation by occasion intent.</p>
<p className="reveal">Over six months, the engagement recorded 2.7× average ROAS and a 38% increase in store walk-ins, with stable CAC across the brands. Those are combined engagement results. The case study does not isolate how much of the lift came from PR, so it would be misleading to attribute a precise share to it.</p>
<p className="reveal">The practical lesson is about coordination: credibility-building work was not postponed until after the paid campaign. Both were part of the plan, with distinct brand positioning and a common commercial context.</p>
<p className="reveal text-sm">Read the <Link to="/case-studies" hash="jewellery-vertical" className="text-gold underline-offset-4 transition-colors hover:underline">Jewellery Vertical case study →</Link> for the strategy and reported results.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Build the credibility before the bigger stage</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Banjara Trail shows the sequencing from another angle. The PR strategy layered domestic editorial credibility with international positioning opportunities. Miss India platform associations helped build a media narrative before the push toward presence at the Cannes Film Festival.</p>
<p className="reveal">That case is evidence of a positioning arc, not evidence that Cannes directly improved an ad account. The brand built toward an international stage through credible associations rather than treating one large placement as a substitute for the work that came before it.</p>
<p className="reveal">For a performance team, this matters because the destination after the click should support the promise in the ad. A brand cannot rely on paid creative to manufacture a reputation the customer cannot find anywhere else.</p>
<p className="reveal text-sm">See the full positioning story in the <Link to="/case-studies" hash="banjara-trail" className="text-gold underline-offset-4 transition-colors hover:underline">Banjara Trail case study →</Link>.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Coordinate the calendar without manufacturing proof</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Bring the two teams into the same planning conversation. What story is ready? What product or collection can the customer actually buy? What coverage has been secured, rather than merely pitched? Which audience will the paid campaign address, and what will they see when they investigate the brand?</p>
<p className="reveal">Use coverage accurately. Do not imply an endorsement where a publication only mentioned the brand, and do not reuse logos or excerpts without the appropriate permission. Credibility disappears quickly when the evidence is presented more generously than it deserves.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Measure the relationship, not a convenient fiction</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Review paid outcomes alongside available signals such as branded search, referral traffic and the quality of enquiries. Look at timing and customer feedback, but remember that parallel changes do not prove causation. A campaign calendar is not a controlled experiment.</p>
<p className="reveal">PR should have its own quality standards: relevant publications, a coherent story and meaningful audience fit. Performance should retain its commercial standards: qualified demand and a conversion path that works. Neither team should borrow the other's impressive numbers to avoid explaining its own work.</p>
<p className="reveal">The goal is not to make PR behave like an ad platform. It is to stop asking an ad platform to carry the entire burden of brand trust.</p>
<p className="reveal">For the way this approach is built into an engagement, explore <Link to="/services/pr" className="text-gold underline-offset-4 transition-colors hover:underline">PR & Brand Amplification →</Link>.</p>
            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 px-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">“Let paid media create the next conversation. Give the customer something credible to find when they check who is speaking.”</blockquote>
          </div>
          <div className="reveal mt-20"><AuthorBio /></div>
        </article>
      </main>
      <ContactBlock heading="Let's talk about your " accent="next quarter." intro="Selective engagements. Direct line, no gatekeepers." />
      <SiteFooter />
    </div>
  );
}
