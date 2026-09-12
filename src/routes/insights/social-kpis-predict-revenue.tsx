import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import socialKpisImg from "@/assets/insights-social-kpis.jpg";

const TITLE = "The Social KPIs That Predict Revenue for Luxury Brands";
const DESCRIPTION =
  "Stop tracking vanity metrics. Discover the social KPIs that actually drive high-ticket conversions and revenue for luxury, couture, and premium lifestyle brands.";
const URL = "https://assetside.lovable.app/insights/social-kpis-predict-revenue";
const DATE = "2026-09-11";

export const Route = createFileRoute("/insights/social-kpis-predict-revenue")({
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
            The Social KPIs That Actually{" "}
            <span className="italic text-gold">Predict Revenue</span> for Luxury Brands
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
              src={socialKpisImg}
              alt="Phone screen showing a clean, minimal social media analytics view"
              width={1536}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              At Asset Side, one belief holds firm: for luxury, couture, and premium lifestyle
              brands, yelling for attention actually dilutes brand prestige. Standard social metrics
              — Likes, Views, Reach — represent passive observation. Here are the four true social
              KPIs that predict actual revenue for a premium brand.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              1. Saves and Shares, The Digital Mood Board
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              A Save means your brand has moved into the client's actual purchasing pipeline; a
              Share, especially via DM, means they're validating a future purchase with their inner
              circle.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              2. High-Intent Direct Messages, The Digital Concierge
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              A shift from public comments asking for "price please" to private, specific,
              logistical DMs is the ultimate indicator that a social presence has become a genuine
              concierge channel.
            </p>

            <p className="reveal text-sm">
              <Link
                to="/services/social-media-marketing"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Explore social media marketing services →
              </Link>
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              3. Dark Social and Off-Platform Advocacy
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Much of luxury revenue is driven by private sharing you can't directly measure, but you
              can see its halo effect in unprompted in-store mentions and traffic spikes after a
              strong PR moment.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              4. The Absolute Elimination of Price Friction
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              The ultimate KPI: when a brand has true cultural authority, clients stop cross-shopping
              and stop asking for discounts, and waitlists grow instead.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Final Verdict
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              If your brand relies on the volume of Likes to feel successful, you're playing an
              exhausting game that rarely translates to the bottom line. True luxury speaks quietly,
              confidently, and strictly to the right rooms.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's narrative? At Asset Side, I act as an end-to-end
              growth partner for premium fashion, jewellery, and lifestyle brands, keeping a
              strictly limited client roster. Connect with me today.”
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
