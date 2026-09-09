import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import standardLuxuryImg from "@/assets/insights-standard-luxury-agencies.jpg";

const TITLE = "Standard PR vs Boutique & Luxury PR: What's the Difference";
const DESCRIPTION =
  "Discover the distinct differences between standard, boutique, and luxury PR partners, and why premium brands choose specialized growth partners for lasting prestige.";
const URL = "https://assetside.lovable.app/insights/standard-vs-luxury-agencies";
const DATE = "2026-09-09";

export const Route = createFileRoute("/insights/standard-vs-luxury-agencies")({
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
          articleSection: "Brand Strategy",
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
              Brand Strategy · 7 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            Standard PR vs. Boutique & Luxury PR:{' '}
            <span className="italic text-gold">What's the Difference</span>
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
              src={standardLuxuryImg}
              alt="Elegant, minimal office meeting space with warm natural light"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              In today's hyper-connected, fast-paced digital landscape, brands are constantly fighting
              a relentless battle for consumer mindshare. For founders, designers, and creative
              directors, this presents a critical crossroads: are you chasing momentary, fleeting
              attention, or meticulously building a timeless, legacy-defining brand?
            </p>
            <p className="reveal">
              At Asset Side, this exact distinction shapes everything. Here's a breakdown of how
              standard PR agencies, boutique PR firms, and luxury PR partners operate differently,
              and why premium labels are shifting toward specialized growth partners.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Factory Floor
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The Standard PR Agency
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Operates on volume, velocity, and mass-market reach, handling dozens or hundreds of
              clients at once. Their primary metric is noise: pre-packaged content buckets, generic
              press releases, and "spray-and-pray" pitching to hundreds of journalists at once.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Bespoke Alternative
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The Boutique PR Agency
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Maintains a strictly limited client roster, allowing the core team to invest deeply in
              the select labels they partner with. No cookie-cutter campaigns — every strategy is built
              from scratch.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Apex Ecosystem
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                What Makes a Luxury PR Partner
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Defined by ecosystem, audience, and cultural authority rather than approach alone.
              Specializes exclusively in high-ticket, premium, and couture brands, and focuses entirely
              on securing influential visibility rather than mass reach: Tier-A editorial placements,
              strategic celebrity styling, experiential closed-door events, and premium retail
              expansion into top-tier MBOs.
            </p>

            <p className="reveal text-sm">
              <Link
                to="/services/pr"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Explore PR & brand amplification services →
              </Link>
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Pillar 1
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Mass-Market Noise vs. Influential Visibility
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Standard PR wants your brand to trend; a luxury partner curates visibility through
              selective Tier-A features and private HNI viewings.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Pillar 2
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Factory Execution vs. Bespoke Strategy
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Standard PR forces your brand into one-size-fits-all templates; a luxury partner builds
              every campaign as original strategic architecture around your specific artisan
              storytelling.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Pillar 3
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Basic Servicing vs. End-to-End Growth Partner
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Standard PR's scope starts and ends with media relations; a luxury partner is invested in
              the tangible scaling of your global revenue, from campaign shoots to retail margin
              negotiation.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Pillar 4
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Attention vs. Affection
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Standard PR exhausts a brand chasing 15 minutes of fame; a luxury partner cultivates deep,
              high-value brand affection that breeds loyalty and eliminates discount-seeking behavior.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Final Verdict
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              If you're creating art, not just inventory, a standard agency will never suffice. True
              luxury doesn't shout. It speaks quietly, confidently, and strictly to the right rooms.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's narrative? Connect with Asset Side today to discuss a
              bespoke PR, cultural positioning, and retail expansion strategy for your label.”
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
