import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import luxuryPrCacImg from "@/assets/insights-luxury-pr-cac.jpg";

const TITLE = "How Luxury PR Lowers CAC for Premium Brands";
const DESCRIPTION =
  "Learn how luxury PR builds brand prestige, eliminates price friction, and systematically lowers Customer Acquisition Costs (CAC) for premium labels.";
const URL = "https://assetside.lovable.app/insights/how-luxury-pr-lowers-cac";
const DATE = "2026-09-09";

export const Route = createFileRoute("/insights/how-luxury-pr-lowers-cac")({
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
          headline: TITLE,
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
              Performance Marketing · 6 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            How Luxury PR Drives Down{" "}
            <span className="italic text-gold">Customer Acquisition Costs</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>9 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25">
            <img
              src={luxuryPrCacImg}
              alt="Close-up of a gold and diamond ring resting on cream linen fabric"
              width={1536}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              Fashion, jewellery, and lifestyle brands exhaust themselves — and their marketing
              budgets — chasing cheap clicks and fleeting viral trends, only to watch their Customer
              Acquisition Costs (CAC) skyrocket year after year.
            </p>
            <p className="reveal">
              At Asset Side, the core belief is simple: executing performance marketing without a
              foundation of unshakeable brand prestige is a race to the bottom. If you want to
              systematically lower CAC, you must first build cultural relevance.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              1. The Absolute Elimination of Price Friction
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Tier-A editorial placements and exclusive events build unshakeable trust before an ad
              ever reaches the buyer, drastically lowering the spend required to convert them.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              2. High-Impact Editorial Placements as SEO Goldmines
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Premium backlinks build domain authority, which compounds into organic traffic for
              high-value keywords, decreasing reliance on expensive paid search.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              3. Strategic Celebrity Styling as a Trust Catalyst
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              When a retargeting ad shows a label a customer's favorite celebrity already wore,
              click-through and conversion both improve, lowering blended CAC.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              4. Influential Visibility Over Vanity Metrics
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              When PR has already positioned a brand as desirable, subsequent ad campaigns targeted
              at the right audience achieve meaningfully higher ROAS.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              5. Elevating the Digital Flagship with Brand-Produced Content
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              When PR narrative and on-site content stay consistent and cohesive, high-intent
              conversions cost a fraction to acquire.
            </p>

            <p className="reveal text-sm">
              <Link
                to="/services/performance-marketing"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Explore performance marketing services →
              </Link>
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Measuring the True ROI of Boutique PR
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Instead of tracking Likes, track Saves and Shares, high-intent DMs, and brand search
              volume — the searches for your brand name specifically rather than generic product
              terms.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              FAQ
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                How does PR help if I'm already running successful Meta and Google Ads?
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Performance marketing captures existing demand; PR creates it. As ad fatigue sets in
              and CAC naturally rises, PR continuously feeds fresh, educated, trusting audiences
              into the funnel.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              FAQ
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Can PR help with physical retail expansion?
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Yes. A robust PR strategy directly influences the ability to secure premium shelf
              space in Tier-A MBOs — strong media authority makes B2B pitching significantly easier.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Final Verdict
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Strategic PR doesn't just build awareness — it acts as the ultimate catalyst for
              commercial scaling, turning cold audiences into loyal clientele and systematically
              driving down acquisition costs.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's narrative? At Asset Side, I keep a strictly limited
              client roster to invest deeply in the select labels I partner with. Connect with me
              today to discuss a bespoke PR and cultural positioning strategy for your label.”
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
