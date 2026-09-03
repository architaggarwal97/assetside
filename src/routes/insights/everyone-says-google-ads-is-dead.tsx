import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import headerImg from "@/assets/insights-google-ads.jpg";

const TITLE = "Everyone Says Google Ads Is Dead";
const DESCRIPTION =
  "Google Ads didn't stop working. Here's how one account went from 30 leads a month to 900+ Sales Qualified Leads a month on the same 'dead' platform.";
const URL = "https://assetside.lovable.app/insights/everyone-says-google-ads-is-dead";
const DATE = "2026-09-03";

export const Route = createFileRoute("/insights/everyone-says-google-ads-is-dead")({
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
              Performance Marketing · 5 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            Everyone Says Google Ads Is <span className="italic text-gold">Dead</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>3 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25">
            <img
              src={headerImg}
              alt="Person reviewing analytics and ad performance data on a laptop screen"
              width={1200}
              height={800}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              Everyone says Google Ads is dead. Rising costs, more automation, more competition,
              harder to get a clean lead than it was five years ago. All of that is true. None of it
              means the platform stopped working. It means most accounts running on it are set up
              badly, and a badly set up account will lose money on any platform, in any year.
            </p>
            <p className="reveal">
              There's a real difference between "Google Ads doesn't work" and "this particular
              account isn't working." The second one is fixable. Here's what fixing it actually
              looks like, using a real result: taking one business from 30 leads a month to over 900
              Sales Qualified Leads a month, within a single quarter, on the same channel everyone
              claims is dead.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The category problem, not just the campaign problem
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Self-storage was, and largely still is, a low-awareness category in India. Most people
              simply didn't know it existed as a service. That's a harder problem than "our ads
              underperform," it's "there's barely any existing search demand to capture in the first
              place." The instinct in that situation is usually to throw more budget at broad match
              and hope volume fixes it. It doesn't. It just burns budget faster on the wrong
              searches.
            </p>
            <p className="reveal">
              What actually worked: starting with Google as the only channel to get clean signal,
              then deliberately expanding to six channels within two months once that signal was
              strong enough to act on, rather than staying dependent on one platform and calling it
              "diversification."
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Where the real leverage was
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              <strong>Tightening what the ads were actually targeting.</strong> Sharper keyword and
              audience segmentation, splitting business-side and household-side intent instead of
              lumping every searcher into one generic campaign, drove a 25% uptick in
              click-through rate and a 15% improvement in conversions on their own, before any
              budget increase.
            </p>
            <p className="reveal">
              <strong>Fixing the technical foundation.</strong> On-page SEO and structural fixes
              took the site from limited visibility to ranking for more than 900 search terms.
              That's compounding, unpaid traffic doing work that would otherwise cost real money in
              Search.
            </p>
            <p className="reveal">
              <strong>Retargeting the people who almost said yes.</strong> A 30% lift in conversions
              came from remarketing to visitors who'd already shown intent but hadn't converted yet,
              paired with ongoing A/B testing on ad copy and keywords that cut cost per acquisition
              by 20%.
            </p>
            <p className="reveal">
              None of this is a secret technique. It's tracking that's actually set up correctly,
              targeting that's actually specific, and creative that's actually tested, the three
              things a "dead" account is almost always missing.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The result
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Thirty leads a month became more than 900 Sales Qualified Leads a month inside the
              first quarter, at a ROAS above 9x. Annual Recurring Revenue grew from ₹0 to ₹65
              million over five years. A cross-channel social layer added a further ₹1.45 crore in
              annual revenue on top of that.
            </p>
            <p className="reveal text-sm">
              <Link
                to="/case-studies"
                hash="self-storage-india"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Read the full Self Storage India case study →
              </Link>
            </p>
            <p className="reveal">
              Google Ads didn't get easier to make that happen. It got treated like what it actually
              is, a precision targeting system, not a traffic faucet you turn on and walk away from.
              That's the whole difference between an account that's "dead" and one that's just been
              left running on autopilot.
            </p>
          </div>

          <div className="reveal mt-20">
            <AuthorBio />
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
