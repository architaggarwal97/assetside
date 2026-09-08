import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";

const TITLE = "How to Measure the True ROI of Luxury PR";
const DESCRIPTION =
  "Discover how to measure the true ROI of luxury PR. Learn why brand affection, retail expansion, and pricing power matter more than vanity metrics.";
const URL = "https://assetside.lovable.app/insights/measuring-true-roi-luxury-pr";
const DATE = "2026-09-08";

export const Route = createFileRoute("/insights/measuring-true-roi-luxury-pr")({
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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${URL}#article`,
          mainEntityOfPage: { "@type": "WebPage", "@id": URL },
          headline: "The Comprehensive Guide to Measuring the True ROI of Luxury PR",
          description: DESCRIPTION,
          articleSection: "Performance Marketing",
          datePublished: DATE,
          dateModified: DATE,
          inLanguage: "en",
          author: { "@id": "https://assetside.lovable.app/#person" },
          publisher: { "@id": "https://assetside.lovable.app/#organization" },
        }),
      },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  useReveal();

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />

      <section
        className="relative overflow-hidden pt-40 pb-24 text-cream md:pt-52 md:pb-32"
        style={{ background: "linear-gradient(160deg, #0b2b1e 0%, #1d4a36 55%, #2F6B4F 100%)" }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, rgba(196,146,42,0.18), transparent 45%), radial-gradient(circle at 80% 70%, rgba(196,146,42,0.12), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal flex items-center gap-4">
            <span className="font-display text-sm italic text-gold">§</span>
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-cream/70">
              Performance Marketing · 7 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            The Comprehensive Guide to Measuring the{" "}
            <span className="italic text-gold">True ROI of Luxury PR</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>8 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              In today's hyper-saturated digital landscape, it's incredibly easy for premium labels
              to fall into the mass-market trap, chasing cheap clicks, fleeting viral trends, and
              momentary attention. But for luxury, couture, and premium lifestyle brands, yelling
              for attention actually dilutes brand prestige.
            </p>
            <p className="reveal">
              When you're creating art, not just inventory, and your pieces command a premium price
              tag without relying on discounts, standard industry ROI metrics simply don't apply.
              Here's exactly how to measure the true ROI of luxury marketing and PR.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Myth of Vanity Metrics vs. The Metrics of Affection
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Instead of tracking Likes, a successful luxury campaign looks at Saves and Shares,
              indicating content is aspirational enough to serve as mood-board inspiration, Digital
              Concierge conversions, a surge in private DM inquiries for bespoke customization or
              store appointments, and time spent on your digital flagship.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Premium Retail Expansion
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              ROI is measured by commercial placement in top-tier MBOs, and by whether brand
              authority is strong enough to negotiate consignment margins down from the standard
              50-55% toward 30-35%, or to move from consignment to outright purchase orders.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Influential Visibility and Cultural Relevance
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              ROI is measured by the quality and context of editorial placements, Tier-A features in
              publications like Vogue, Harper's Bazaar, or GQ, not the quantity, plus the cultural
              resonance of strategic celebrity styling.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Driving Experiential Footfall
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              For physical stores, ROI means tracking how many high-value individuals walk through
              the doors for exclusive viewings following a campaign or closed-door event.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Content as an ROI Engine
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              The ROI of high-end, brand-produced content is measured by its ability to act as a
              filter, reducing low-quality inquiries while increasing high-ticket appointment
              requests.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Unshakeable Pricing Power
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              The final and most vital metric: can you raise prices without pushback? Does your
              waitlist grow instead of your discount codes? When a brand has true cultural
              authority, its pricing goes unquestioned.
            </p>
            <p className="reveal text-sm">
              <Link
                to="/case-studies"
                hash="adyaaye"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                See how this played out in the Adyaaye case study →
              </Link>
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Final Verdict
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              If you're looking to stop chasing the masses and start commanding true digital and
              cultural authority, a standard numbers game will never suffice. True luxury doesn't
              shout. It speaks quietly, confidently, and strictly to the right rooms.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's narrative? At Asset Side, I keep a strictly limited
              client roster to invest deeply in the select labels I partner with. Every strategy is
              built from scratch.”
            </blockquote>
          </div>

          <div className="reveal mt-20">
            <AuthorBio />
          </div>
        </article>
      </main>

      <ContactBlock
        heading="Let's talk about your "
        accent="brand's narrative."
        intro="Selective engagements for premium fashion, jewellery, beauty, and lifestyle brands."
      />
      <SiteFooter />
    </div>
  );
}
