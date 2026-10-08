import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";

const TITLE = "Dhanda-First: A Framework for Marketing That Pays for Itself";
const DESCRIPTION = "A revenue-first marketing framework: prove demand, measure qualified outcomes, and earn each budget increase. Lessons from Self Storage India.";
const URL = "https://assetside.lovable.app/insights/dhanda-first-framework";
const DATE = "2026-10-08";

export const Route = createFileRoute("/insights/dhanda-first-framework")({
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
      headline: TITLE, description: DESCRIPTION, articleSection: "Growth Philosophy",
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
            <span className="text-xs uppercase tracking-[0.3em] text-cream/70">Growth Philosophy · 5 min read</span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">Dhanda-First: A Framework for <span className="italic text-gold">Marketing That Pays for Itself</span></h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70"><time dateTime={DATE}>8 Oct 2026</time> · Archit Aggarwal</div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>
      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <blockquote className="reveal border-l-2 border-gold bg-gold/5 px-6 py-10 font-display text-2xl italic leading-relaxed text-navy-deep md:text-3xl">“What does this look like on the balance sheet in ninety days?”</blockquote>
          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">Marketing has a talent for making activity look like progress. The calendar fills up. The campaign goes live. The reporting deck gets longer. Somewhere underneath all of that, a business owner is still asking the only question that matters: is this helping the business make money?</p>
<p className="reveal">Dhanda-first is the filter I use to keep that question in the room. Start with the business, then work backwards to the marketing. Not the other way around. Before choosing a channel or approving creative, decide what commercial result the spend is meant to produce and how you will recognise it.</p>
<p className="reveal">The balance-sheet language is a discipline, not an accounting instruction. Advertising spend does not automatically become a capitalised asset because it produces leads. The point is to build something useful with the money: evidence of demand, a repeatable acquisition process, customer relationships, or knowledge that makes the next decision less speculative.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Start with the constraint, not the channel</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">A brand with empty appointment slots has a different problem from a brand with plenty of enquiries and no follow-up. Both might ask for more leads. Only one needs them first. When the bottleneck is conversion, buying more traffic can make the inefficiency more expensive rather than solve it.</p>
<p className="reveal">Ask what happens after a customer responds. Who answers? How quickly? What makes someone qualified? Where does an enquiry stop moving? These are not operational details to revisit after launch. They determine what an additional rupee of marketing can reasonably achieve.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Prove the model before you scale it</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">Self Storage India is a useful example because the initial challenge was not simply generating more leads. The service needed to establish demand for a category that was unfamiliar to the market. There was uncertainty inside the business as well as outside it.</p>
<p className="reveal">The starting ad budget was deliberately conservative: ₹10,000 per month. Early results built confidence before the next commitment. As evidence accumulated, monthly spend grew to ₹5,00,000 — a 50x increase. The case study records ₹45 lakh in monthly sales, three locations and 60,000 square feet of total area.</p>
<p className="reveal">Those figures describe the business outcome; they are not a claim that one ad platform independently created every sale. The important sequence is the one behind them. Budget followed proof. It did not arrive first with a promise that proof would catch up later.</p>
<p className="reveal text-sm">Read the <Link to="/case-studies" hash="self-storage-india" className="text-gold underline-offset-4 transition-colors hover:underline">Self Storage India case study →</Link> for the strategy and reported results.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Give every campaign a commercial job</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">An awareness campaign can have a legitimate place in a growth plan. But awareness of what, among whom, and in support of which next action? If the answer is only 'more visibility', the brief is incomplete. Define the audience and the reason that audience should move closer to buying.</p>
<p className="reveal">For acquisition, separate raw enquiries from qualified enquiries and collected revenue. For retention, look at repeat purchases and the cost of serving them. For a new category, track whether prospects understand the offer and whether the sales conversation becomes easier. The useful measure depends on the job.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Set a decision rule before the results arrive</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">A report should change a decision. Decide in advance what would justify continuing, what would require a change, and what would tell you to stop. Otherwise a good-looking number becomes a reason to keep spending, even when it has no clear connection to the business objective.</p>
<p className="reveal">Revenue alone is not the whole answer. Consider contribution after product costs, fulfilment, returns and acquisition. Be cautious about lifetime-value projections when repeat behaviour has not been demonstrated. A campaign that looks efficient in an ad account can still be difficult to fund in the real business.</p>
<h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">Build for the next ninety days</h2><div className="reveal h-px w-12 bg-gold" />
<p className="reveal">The ninety-day question is not a promise of instant payback. Some sales cycles are longer, and some positioning work takes time. It is a way of making the next review concrete: what evidence should we have, what should be more repeatable, and what uncertainty should be smaller?</p>
<p className="reveal">Dhanda-first does not mean refusing to invest in brand. It means refusing to separate brand investment from business reality. The aim is not to make every activity look like a direct-response ad. It is to know why each activity belongs in the plan.</p>
<p className="reveal">For the way this approach is built into an engagement, explore <Link to="/services/growth-lead-generation" className="text-gold underline-offset-4 transition-colors hover:underline">Growth & Lead Generation Systems →</Link>.</p>
            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 px-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">“Every budget increase should have a reason the business can defend, not just a campaign the marketing team can celebrate.”</blockquote>
          </div>
          <div className="reveal mt-20"><AuthorBio /></div>
        </article>
      </main>
      <ContactBlock heading="Let's talk about your " accent="next quarter." intro="Selective engagements. Direct line, no gatekeepers." />
      <SiteFooter />
    </div>
  );
}
