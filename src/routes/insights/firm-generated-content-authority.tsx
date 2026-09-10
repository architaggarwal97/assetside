import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";

const TITLE = "How Luxury Brands Use Firm-Generated Content for Authority";
const DESCRIPTION =
  "Discover how premium labels leverage Firm-Generated Content (FGC) to build unshakeable brand authority and attract HNI clientele.";
const URL = "https://assetside.lovable.app/insights/firm-generated-content-authority";
const DATE = "2026-09-10";

const STEPS = [
  {
    name: "Treat Your Grid as a Digital Concierge, Not a Catalog",
    text: "Move away from static product photos toward slow-motion, cinematic pans over intricate craftsmanship, minimal high-end instrumental audio, and content that reads as an exclusive preview rather than a sales push.",
  },
  {
    name: "Elevate the Founder to an Industry Authority",
    text: "Direct-to-camera, talking-head content on themes like \"What is Quiet Luxury?\" or the philosophy behind refusing seasonal markdowns builds trust and cultural authority around the person behind the brand.",
  },
  {
    name: "The Art of Craftsmanship and \"Behind the Closed Doors\"",
    text: "Show the making of a collection — hands at work, artisans in their element, shallow depth of field on raw materials — shifting the conversation from price to heritage.",
  },
  {
    name: "Precision Copywriting, the \"No-Desperation\" Stance",
    text: "Eradicate words like Discount, Cheap, Fast, or Sale from your vocabulary. Use a refined lexicon instead: Exclusive Clientele Privileges, Curated Edits, Bespoke Fittings, Private Viewings.",
  },
  {
    name: "The SEO Power of Educational FGC",
    text: "A content-led blog or brand journal — detailed guides relevant to your product category — captures high-intent search traffic before a purchase decision is even made.",
  },
  {
    name: "Measuring Success, Metrics of Affection",
    text: "Track Saves and Shares, private DMs, and time spent on site, not raw reach or likes.",
  },
];

export const Route = createFileRoute("/insights/firm-generated-content-authority")({
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
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "@id": `${URL}#howto`,
          name: "How to Leverage Firm-Generated Content (FGC) to Command Brand Authority",
          description: DESCRIPTION,
          inLanguage: "en",
          step: STEPS.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
          })),
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
            How to Leverage Firm-Generated Content (FGC) to{" "}
            <span className="italic text-gold">Command Brand Authority</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>10 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="prose-asset space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              At Asset Side, the core philosophy rests on one pivot: moving brands away from chasing
              momentary attention and toward cultivating deep, high-value brand affection. To build
              unshakeable brand authority, the most powerful tool is Firm-Generated Content —
              content engineered, produced, and published directly by the brand itself, as opposed
              to User-Generated Content from customers or influencers.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 1
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Treat Your Grid as a Digital Concierge, Not a Catalog
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[0]!.text}</p>
            <p className="reveal text-sm">
              <Link
                to="/services/social-media-marketing"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Explore social media marketing services →
              </Link>
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 2
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Elevate the Founder to an Industry Authority
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[1]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 3
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The Art of Craftsmanship and "Behind the Closed Doors"
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[2]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 4
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Precision Copywriting, the "No-Desperation" Stance
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[3]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 5
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The SEO Power of Educational FGC
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[4]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 6
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Measuring Success, Metrics of Affection
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[5]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Final Verdict
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              FGC is not about posting every day to appease an algorithm — it's about precision
              execution. If you want to stop chasing the masses and start commanding true digital
              and cultural authority, you need a bespoke narrative.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's narrative? At Asset Side, I specialize in taking luxury
              labels into their next phase of growth. Connect with me today to discuss a bespoke PR
              and digital authority strategy for your label.”
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
