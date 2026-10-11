import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import articleImage from "@/assets/boutique-storefront.webp.asset.json";

const TITLE = "Dhanda-First: A Framework for Marketing That Pays for Itself";
const DESCRIPTION =
  "Every rupee of marketing spend should show up as an asset, not a liability. Here's the three-question filter used before any campaign gets a budget.";
const URL = "https://assetside.lovable.app/insights/dhanda-first-marketing-framework";
const DATE = "2026-10-11";

export const Route = createFileRoute("/insights/dhanda-first-marketing-framework")({
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
          articleSection: "Growth Philosophy",
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
              Growth Philosophy · 5 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            Dhanda-First: A Framework for Marketing That{" "}
            <span className="italic text-gold">Pays for Itself</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>11 Oct 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25">
            <img
              src={articleImage.url}
              alt="A boutique storefront at dusk, warm light in the windows"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              Every rupee of marketing spend ends up somewhere on a balance sheet. Either it shows
              up as an asset — revenue it generated, a customer it acquired at a cost that made
              sense, a channel that's now cheaper to scale than it was last quarter. Or it shows up
              as a liability — a cost that got explained away with reach numbers and
              brand-awareness language, because nobody wanted to say out loud that it didn't work.
            </p>
            <p className="reveal">
              That's the filter. Before a campaign gets a budget, it has to answer one question
              honestly: what does this look like on the balance sheet in ninety days?
            </p>
            <p className="reveal">
              This isn't a call to kill every top-of-funnel or brand campaign that doesn't have a
              same-day ROAS number attached. Brand work matters, PR matters, awareness matters —
              especially for luxury and considered-purchase categories where nobody buys on the
              first touch. The filter isn't "did this make money today." It's "can I trace,
              honestly, how this connects to something that eventually will."
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              What's the actual metric this moves, and who's it for?
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The first question
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Store walk-ins, WhatsApp conversations opened, qualified leads — whichever it is,
              name it before the campaign runs, not after, when it's tempting to just report
              whatever number happened to look good.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              What's the cost of getting that metric, and is it moving in the right direction?
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The second question
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Across a portfolio, this discipline is what takes ROAS from a 2.4x average toward
              3.9x on individual accounts — not by finding a magic channel, but by cutting the
              spend that wasn't earning its place and reinvesting in what was.
            </p>
            <p className="reveal text-sm">
              This is exactly how the{" "}
              <Link
                to="/services/performance-marketing"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Performance Marketing service →
              </Link>{" "}
              is run: unit economics first, creative second, scale only when the numbers hold.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              If this scales, does the cost per result stay stable, or does it creep?
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The third question
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              A campaign that only works at small budgets isn't a system, it's a fluke. The real
              test of a channel is whether CAC holds when spend goes up 30–40%, not whether it
              looked good in a pilot.
            </p>

            <p className="reveal">
              Dhanda-first isn't about being cold or purely transactional about marketing. It's
              about refusing to let a campaign hide on the liability side of the ledger just
              because it's uncomfortable to measure. Everything gets measured. It's just a matter
              of whether you're the one doing it, or waiting for someone else to ask.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to apply this filter to your own marketing? At Asset Side, every campaign gets
              evaluated on unit economics first, not just reach.”
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
