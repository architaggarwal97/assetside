import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";

const TITLE = "Why NGO Fundraising Needs Subscription Thinking";
const DESCRIPTION =
  "A 0.9 ROAS on donor acquisition looks like a losing number. Paired with subscription-based giving, it's the honest starting point for real fundraising growth.";
const URL = "https://assetside.lovable.app/insights/ngo-fundraising-subscription-thinking";
const DATE = "2026-09-12";

export const Route = createFileRoute("/insights/ngo-fundraising-subscription-thinking")({
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
              Growth Philosophy · 6 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            Why NGO Fundraising Needs <span className="italic text-gold">Subscription Thinking</span>,
            Not Just Donation Drives
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
              Most NGO fundraising runs on donation drives. A campaign launches, it spikes, it
              crashes, and the organization spends the next quarter waiting for the next occasion to
              ask again. It's an exhausting way to fund anything, and it makes long-term planning
              nearly impossible.
            </p>
            <p className="reveal">
              Working on the digital fundraising strategy for an NGO scaling its presence across
              India, the US, and Africa, the number that mattered most wasn't the one that looked
              good in a monthly report. It was 0.9 — the ROAS on new donor acquisition.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              A 0.9 ROAS Isn't a Failure, It's a Starting Point
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              On a standard commercial dashboard, a ROAS under 1 looks like a losing campaign. In
              fundraising, especially first-time donor acquisition, it's often just the honest cost
              of finding someone new. The mistake is treating that number as the whole story, when
              it's really just the entry cost into a much longer relationship.
            </p>
            <p className="reveal text-sm">
              <Link
                to="/case-studies"
                hash="ladli-foundation-trust"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                See the Ladli Foundation Trust case study →
              </Link>
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Subscription Pivot
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Rather than optimizing acquisition spend to chase a better first-touch ROAS, the shift
              was toward a subscription-based donation model, priced deliberately low, at ₹11 a
              month. The low price point removed the friction of a one-time "big ask" and replaced
              it with a small, repeatable commitment. That single change moved the entire economics
              of the program from one-time conversion toward donor lifetime value.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Second Gift Matters More Than the First
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              A structured post-donation journey, built specifically to strengthen trust and
              transparency after the first gift, was what actually made the subscription model work.
              Donors who feel informed about where their money goes are the ones who stay subscribed
              past month one. The real fundraising asset was never the first donation — it was the
              second, third, and twentieth.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              What This Unlocked for Overseas Giving
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              NRI-focused fundraising, run specifically through Meta, Google, and WhatsApp, saw 3.5x
              growth in overseas contributions within six months. That growth wasn't from a cleverer
              ad. It came from a funding model that gave overseas donors a low-friction, recurring
              way to stay connected to work happening back home, rather than asking for one large
              gift a year.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Broader Point
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Predictable funding doesn't come from bigger asks. It comes from lower-friction ones
              that people are willing to repeat. Any organization still measuring fundraising
              success by the size of a single campaign is optimizing for the wrong number.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's or organization's narrative? At Asset Side, I work
              across sectors, including NGO and fundraising strategy, bringing the same
              growth-systems thinking used for D2C and luxury brands.”
            </blockquote>
          </div>

          <div className="reveal mt-20">
            <AuthorBio />
          </div>
        </article>
      </main>

      <ContactBlock
        heading="Let's talk about your "
        accent="organization's growth."
        intro="Growth-systems thinking for D2C, luxury, and mission-driven organizations."
      />
      <SiteFooter />
    </div>
  );
}
