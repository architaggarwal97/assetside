import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import privateEventsImg from "@/assets/insights-private-events.jpg";

const TITLE = "How to Execute Private PR Events for Luxury Brands";
const DESCRIPTION =
  "Learn how to execute invite-only, private PR events that command cultural authority. Discover luxury PR strategies for guest curation, content, and brand prestige.";
const URL = "https://assetside.lovable.app/insights/private-pr-events-luxury-brands";
const DATE = "2026-09-11";

const STEPS = [
  {
    name: "The Strategy of Scarcity",
    text: "Pre-event buildup should be discreet — teaser content focused strictly on craftsmanship, macro shots of embroidery or the drape of a fabric — signaling that something is happening but access is highly restricted.",
  },
  {
    name: "Curating the Room",
    text: "An intimate crowd of around 70-80 people: Tier-A fashion commentators and editors, celebrity stylists, mid-to-micro luxury influencers whose aesthetic matches the brand, and HNIs sourced from a private database.",
  },
  {
    name: "Securing Strategic Luxury Venue Partnerships",
    text: "Approach aesthetic venues for collaborative barters, offering content access and premium social visibility in exchange for hosting the event, without burning through the marketing budget.",
  },
  {
    name: "Controlling the Narrative with Brand-Produced Content",
    text: "Orchestrate premium campaign-style production on the ground so the outside world sees the event exactly as intended — a cinematic launch video ready for social media the next day.",
  },
  {
    name: "Post-Event Leverage, MBO Placements and Editorial Authority",
    text: "The momentum and visual assets from the event become leverage for editorial placements and Premium Retail Expansion pitches into top-tier MBOs.",
  },
];

export const Route = createFileRoute("/insights/private-pr-events-luxury-brands")({
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
          name: "How to Master the Invite-Only, Private PR Event",
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
              Brand Strategy · 6 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            The Architecture of Exclusivity: How to Master the{" "}
            <span className="italic text-gold">Invite-Only, Private PR Event</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>11 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25">
            <img
              src={privateEventsImg}
              alt="Elegant, intimate event space with candlelit tables before guests arrive"
              width={1536}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              At Asset Side, one belief shapes every event strategy: for luxury, couture, and
              premium lifestyle brands, yelling for attention actually dilutes brand prestige. When
              executing a private PR event, the goal isn't to be seen by absolutely everyone — it's
              to be revered by the absolute elite.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 1
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The Strategy of Scarcity
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[0]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 2
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Curating the Room
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[1]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 3
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Securing Strategic Luxury Venue Partnerships
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[2]!.text}</p>
            <p className="reveal text-sm">
              <Link
                to="/services/events"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Explore events &amp; experiences services →
              </Link>
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 4
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Controlling the Narrative with Brand-Produced Content
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[3]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 5
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Post-Event Leverage, MBO Placements and Editorial Authority
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[4]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Ultimate Metric
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Affection over Attention
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Measure success through DMs for bespoke customization, increases in private viewing
              appointments, and the absolute elimination of price friction — not passive Likes.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Building Your Legacy
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Ready to command digital authority and shape your global narrative? Connect with
              Asset Side today to discuss a bespoke PR, cultural positioning, and experiential event
              strategy for your label.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's narrative? At Asset Side, I keep a strictly limited
              client roster to invest deeply in the select labels I partner with. Connect with me
              today to discuss a bespoke PR and experiential event strategy for your label.”
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
