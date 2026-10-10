import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import phoneAsset from "@/assets/phone-texting.webp.asset.json";

const TITLE = "Why WhatsApp-First Commerce Is Winning in Indian D2C";
const DESCRIPTION =
  "A website checkout is a wall. A WhatsApp chat is a conversation. Here's why the second one is closing more sales for Indian D2C brands right now.";
const URL = "https://assetside.lovable.app/insights/whatsapp-first-commerce-india";
const DATE = "2026-09-30";

export const Route = createFileRoute("/insights/whatsapp-first-commerce-india")({
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
          articleSection: "D2C & Commerce",
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
              D2C &amp; Commerce · 4 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            Why WhatsApp-First Commerce Is{" "}
            <span className="italic text-gold">Winning in Indian D2C</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>30 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25">
            <img
              src={phoneAsset.url}
              alt="Close-up of hands typing a message on a smartphone"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              A website checkout is a wall. It asks a stranger to trust a form, enter card details,
              and hope the size chart was accurate, all before anyone has answered a single
              question. A WhatsApp chat is a conversation. It's the same trust mechanism people
              already use with their tailor, their local shopkeeper, their sister's friend who sells
              kurtas on the side.
            </p>
            <p className="reveal">
              For most Indian D2C brands, especially anything with a strong visual or fit-dependent
              product like fashion or jewellery, the chat wins, and it's not close.
            </p>
            <p className="reveal">
              On one western wear label, the shift wasn't just adding a WhatsApp button, it was
              rebuilding the funnel around it. Organic content was rewritten to prompt DMs rather
              than passive scrolling — fewer posts, sharper copy, visuals that made someone want to
              ask a question rather than just like and move on. Click-to-WhatsApp ads then moved
              warm audiences and lookalikes directly into that conversation instead of dropping them
              on a landing page. And the conversation itself was structured — a flow that let
              customers browse, ask, and order without the friction of typing everything from
              scratch.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              What It Moved
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The results, four months in
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              The result: order volume grew 2.1x over four months, engagement sat at 5.4% against a
              1.5–2% category average, and cost per conversation dropped 18%, all while average
              order value held completely steady. That last part matters more than the growth
              number. It means the lift wasn't discounting or volume-chasing — it was more of the
              right people finding an easier way to say yes.
            </p>
            <p className="reveal text-sm">
              The full breakdown of this label's funnel lives in the{" "}
              <Link
                to="/case-studies/$slug"
                params={{ slug: "monture" }}
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Monture case study →
              </Link>
              , and the{" "}
              <Link
                to="/services/d2c-whatsapp-commerce"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                D2C &amp; WhatsApp-First Commerce service →
              </Link>{" "}
              covers how the same structure is built for other brands.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Content Built for DM Intent, Not Likes
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The first shift
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              If a post's job is to get a comment or a share, it will get comments and shares. If
              its job is to get someone to open a chat, the copy and visual need to invite a
              question, not just admiration.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              A Conversation Structure, Not a Script
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The second shift
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Nobody wants to feel like they're talking to a bot reading a menu. The flow needs to
              let people jump straight to sizing, or straight to price, without wading through
              pleasantries first.
            </p>

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              Retargeting on Intent Signals, Not Just Visits
              <span className="mt-2 block text-sm uppercase tracking-[0.22em] text-gold">
                The third shift
              </span>
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Someone who engaged with a DM but didn't convert is a warmer lead than someone who
              visited the website and bounced. Treat them differently.
            </p>

            <p className="reveal">
              None of this replaces a website. It replaces the assumption that a website is always
              the fastest path to a sale. For a lot of Indian D2C brands right now, it isn't.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to build this for your brand? At Asset Side, I help D2C and fashion labels
              rebuild their funnels around the channels their actual customers already trust.”
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
