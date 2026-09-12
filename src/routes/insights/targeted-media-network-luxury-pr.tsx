import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";

const TITLE = "How to Build a Targeted Media Network for Luxury Brands";
const DESCRIPTION =
  "Discover why premium labels should avoid mass wire services and learn how to build a bespoke, targeted media network to command true luxury brand authority.";
const URL = "https://assetside.lovable.app/insights/targeted-media-network-luxury-pr";
const DATE = "2026-09-12";

const STEPS = [
  {
    name: "Ditch the Factory Approach",
    text: "Mass syndication equals cheap visibility. A placement on a generic aggregator cheapens the perceived value of your craftsmanship — the audience reading wire feeds was never going to buy a bespoke piece in the first place.",
  },
  {
    name: "Curate Your \"Right Rooms\"",
    text: "Target 5-10 placements that actually move the needle: Tier-A publications like Architectural Digest, Vogue, GQ, Lifestyle Asia, or Elle, and the niche commentators who speak directly to your HNI clientele.",
  },
  {
    name: "The Art of the Bespoke PR Pitch",
    text: "Every pitch is built from scratch: understand what a journalist actually writes about before reaching out, and lead with a story angle, not just product specs.",
  },
  {
    name: "Human Media Networks",
    text: "Strategic celebrity and KOL styling, plus closed-door barter collaborations, creates instant prestige transfer that a mass influencer blast never could.",
  },
  {
    name: "Experiential PR, Turning Retail Events into Media Assets",
    text: "A culturally relevant flagship opening or store launch generates its own press when the guest list and the experience are curated correctly.",
  },
  {
    name: "Leverage Brand-Produced Content as Your Media Magnet",
    text: "High-quality, brand-produced content naturally attracts the gaze of editors, journalists, and MBO buyers browsing your grid or website.",
  },
  {
    name: "Measure Metrics of Affection, Not Just Reach",
    text: "Track private inquiries, high-intent footfall, and the elimination of price friction — not impression counts.",
  },
];

export const Route = createFileRoute("/insights/targeted-media-network-luxury-pr")({
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
          name: "How to Build a Targeted Media Network Without Mass Wire Services",
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
            How to Build a <span className="italic text-gold">Targeted Media Network</span> Without
            Mass Wire Services
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>12 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="prose-asset space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              At Asset Side, one belief holds firm: standard PR measures success by volume, noise,
              and passive impressions. Boutique luxury PR measures success by exclusivity, cultural
              authority, and tangible commercial scaling. Your HNI consumer doesn't scour syndicated
              wire feeds to find their next bespoke bridal lehenga or handcrafted cashmere shawl.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 1
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Ditch the Factory Approach
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[0]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 2
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Curate Your "Right Rooms"
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Target 5-10 placements that actually move the needle — Tier-A publications like
              Architectural Digest, Vogue, GQ, Lifestyle Asia, or Elle — and the niche commentators
              who speak directly to your HNI clientele.
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
              Step 3
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The Art of the Bespoke PR Pitch
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[2]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 4
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Human Media Networks
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[3]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 5
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Experiential PR, Turning Retail Events into Media Assets
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[4]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 6
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Leverage Brand-Produced Content as Your Media Magnet
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[5]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Step 7
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                Measure Metrics of Affection, Not Just Reach
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">{STEPS[6]!.text}</p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Final Verdict
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Building a targeted media network takes rigorous market positioning, continuous
              follow-ups, and genuine relationships. Standard PR is about being seen by everyone.
              Boutique, targeted PR is about being revered by the elite.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's narrative? At Asset Side, I act as an end-to-end growth
              partner for premium fashion, jewellery, and lifestyle brands. Connect with me today to
              discuss a bespoke PR and retail expansion strategy for your label.”
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
