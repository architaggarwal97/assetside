import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";

const TITLE = "Boutique vs. Conglomerate PR Agency: The Luxury Brand Guide";
const DESCRIPTION =
  "Discover why premium designer labels choose a boutique PR partner over conglomerate PR for personalized attention, brand prestige, and commercial scaling.";
const URL = "https://assetside.lovable.app/insights/boutique-vs-conglomerate-pr-agency";
const DATE = "2026-09-05";

export const Route = createFileRoute("/insights/boutique-vs-conglomerate-pr-agency")({
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
              Brand Strategy · 6 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            Boutique vs. Conglomerate PR Agency for{" "}
            <span className="italic text-gold">Personalized Growth</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>5 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              In today's hyper-saturated, algorithm-driven digital landscape, it is incredibly easy
              for premium designer labels to fall into the mass-market trap. Brands often exhaust
              themselves, and their marketing budgets, chasing cheap clicks, fleeting viral trends,
              and momentary attention. When deciding who will shape your brand's cultural narrative,
              founders are constantly faced with a critical choice: partnering with a massive
              conglomerate PR agency or aligning with a specialized boutique PR agency.
            </p>
            <p className="reveal">
              If your ultimate goal is sheer volume and you are selling mass-market, fast-fashion
              inventory, a standard conglomerate might suffice. However, if you are creating art,
              commanding a premium price tag, and looking for deeply personalized PR attention to
              build a timeless legacy, the standard industry model completely breaks down.
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
              The Factory Approach vs. The Limited Roster
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Large conglomerate agencies operate like corporate factories, once the contract is
              signed, your brand gets handed to junior account executives running pre-packaged
              content buckets and templated press releases. A boutique agency maintains a strictly
              limited client roster on purpose, so the founders and senior strategists stay
              directly involved, and every strategy is built from scratch around your brand's
              actual DNA.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Mass Syndication vs. Targeted Media Networks
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Conglomerates lean on mass wire services, blasting a generic release to hundreds of
              irrelevant sites to pad impression numbers. A boutique partner hand-picks Tier-A
              placements in publications like Vogue, Harper's Bazaar, or Architectural Digest, and
              builds real one-on-one relationships with the editors who matter.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Isolated PR vs. End-to-End Commercial Scaling
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              A conglomerate's job ends when the article publishes, regardless of whether it moved
              the business. A boutique partner ties cultural positioning directly to commercial
              scaling, using PR prestige as leverage to negotiate MBO placements and consignment
              margins.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Vanity Metrics vs. The Metrics of Affection
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Large agencies report on likes and impressions that rarely convert. A boutique
              partner measures success by high-intent WhatsApp inquiries, private viewing
              appointments, and pricing power, whether clients treat your work as an investment
              rather than an expense.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Strategic Agility in Cultural Moments
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              A conglomerate needs layers of approval to move fast; a boutique partner, run by the
              people actually in your day-to-day, can react in real time to a sudden celebrity
              styling opportunity or cultural moment.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Final Verdict
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              The choice between a standard PR factory and a customized boutique firm ultimately
              dictates how the world perceives the value of what you create. Standard PR is about
              being seen by absolutely everyone. Boutique PR is about being revered by the absolute
              elite.
            </p>

            <blockquote
              className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl"
            >
              “Ready to elevate your brand's narrative? At Asset Side, I operate as a boutique growth
              and communications consultancy based in Delhi, acting as an end-to-end growth partner
              for premium fashion, jewellery, beauty, and lifestyle brands. No mass-market noise, just
              influential visibility.”
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
