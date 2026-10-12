import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import articleImage from "@/assets/jewellery-case.webp.asset.json";

const TITLE = "What Jewellery Brands Get Wrong About Store Walk-in Campaigns";
const DESCRIPTION =
  "The biggest mistake in jewellery marketing isn't the creative or the budget. Here's why occasion-based segmentation is the real strategy.";
const URL = "https://assetside.lovable.app/insights/jewellery-store-walk-in-campaigns";
const DATE = "2026-10-12";

export const Route = createFileRoute("/insights/jewellery-store-walk-in-campaigns")({
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
          articleSection: "Retail & Jewellery",
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
              Retail & Jewellery · 6 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            What Jewellery Brands Get Wrong About{" "}
            <span className="italic text-gold">Store Walk-in Campaigns</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>12 Oct 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25">
            <img
              src={articleImage.url}
              alt="Fine jewellery displayed in a retail presentation case"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              Running three competing fine jewellery brands through the same bridal season, on the
              same paid budget cycle, at the same time, teaches you one thing fast: the biggest
              mistake in jewellery marketing isn't the creative, or the targeting radius, or even
              the budget. It's treating "jewellery buyers" as a single audience.
            </p>
            <p className="reveal">
              They aren't. A bridal trousseau buyer, a Diwali gifting shopper, and someone buying
              an everyday gold chain are three different people with three different timelines,
              price sensitivities, and reasons for walking into a store. Run them through the same
              campaign, and the brand ends up either overspending to reach people who were never
              going to convert this month, or worse, the message gets so generic that it stops
              mattering to anyone.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Segment by occasion, not by demographic
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The first fix
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Age and income data tell you who can afford the piece. Occasion intent tells you when
              they're actually going to buy it. Bridal trousseau shopping starts months out and
              follows a completely different research pattern than a last-week-before-Diwali gifting
              purchase.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Map the calendar to the occasion, not the other way around
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The second fix
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Bridal season, Diwali, Dhanteras, and everyday gifting windows each got their own
              creative direction and their own campaign timing, rather than one generic "jewellery
              ad" running year-round with the budget just turned up during festive months.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Geo-target the catchment, not the city
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The third fix
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Store traffic and local-awareness campaigns geo-targeted around actual store
              locations and high-affluence catchment zones outperform city-wide reach every time. A
              walk-in campaign is a local campaign, even in a market as big as Delhi NCR or Mumbai.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Give each brand its own creative lane, even if they share a budget owner
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The fourth fix
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              When three brands are managed simultaneously, the temptation is to let audiences and
              creative blur together for efficiency. Resist it. Distinct positioning and distinct
              creative briefs are what let each brand grow its own pool of customers instead of
              quietly stealing from the others.
            </p>

            <p className="reveal">
              The result across all three brands: a 2.7x average ROAS over six months and a 38%
              increase in qualified store walk-ins, with CAC holding steady despite growing
              budgets. None of that came from a cleverer ad. It came from refusing to treat three
              different customers as one.
            </p>
            <p className="reveal text-sm">
              The full numbers are in the{" "}
              <Link
                to="/case-studies"
                hash="jewellery-vertical"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Jewellery Vertical case study →
              </Link>
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Managing multiple brands or locations and want this kind of segmentation applied to
              your own campaigns? At Asset Side, distinct creative lanes come standard, not as an
              upsell.”
            </blockquote>
          </div>

          <div className="reveal mt-20">
            <AuthorBio />
          </div>
        </article>
      </main>

      <ContactBlock
        heading="Let's talk about your "
        accent="next quarter."
        intro="Selective engagements. Direct line, no gatekeepers."
      />
      <SiteFooter />
    </div>
  );
}
