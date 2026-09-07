import { createFileRoute, Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import craftsmanshipImg from "@/assets/insights-craftsmanship.jpg";

const TITLE = "How to Communicate True Craftsmanship Without Greenwashing";
const DESCRIPTION =
  "Learn how premium luxury brands can communicate true local craftsmanship and sustainability without greenwashing through influential visibility and bespoke PR.";
const URL = "https://assetside.lovable.app/insights/beyond-the-buzzword-craftsmanship";
const DATE = "2026-09-07";

const STEPS: { name: string; text: string }[] = [
  {
    name: "Show the Process, Don't Shout the Promise",
    text: "Instead of writing a generic post about ethical labor, focus on the tactile reality of the craftsmanship. Capture extreme macro shots of a needle piercing fabric, the meticulous rhythm of an Aari hand-chain stitch, or the slow-motion drape of a pure Kashmiri cashmere shawl. When you visibly showcase the mastery and dignity of the local artisan, the sustainability of the piece goes unquestioned.",
  },
  {
    name: "Highlight the Origin of Rare Materials",
    text: "Affluent buyers are not looking for generic organic cotton, they are looking for the hyper-specific story behind the fiber. By highlighting the specific geographical origins of your materials and the generational heritage of the local weavers who handle them, you transform your product from a mere garment into a highly coveted collectible.",
  },
  {
    name: 'Embrace the Prestige of "Made-to-Order" Scarcity',
    text: "Communicate your sustainable ethos through your operational boundaries: limited drops, numbered pieces, and a strict made-to-order philosophy. When you tell your audience that you do not mass-produce and that their piece is crafted exclusively for them upon order, you are making a profound statement about waste reduction without ever having to use the word sustainable.",
  },
  {
    name: "Elevate the Unboxing Experience with Zero-Waste Packaging",
    text: "Move away from single-use plastics and high-gloss laminates, and instead invest in heritage packaging: heavy, textured recycled papers, organic soy-based inks, and reusable heirloom dust bags woven by local artisans.",
  },
  {
    name: "Host Experiential PR Events Over Wasteful Spectacles",
    text: "Instead of a large venue with disposable branding, host a curated atelier viewing for a smaller, top-tier group of HNIs, stylists, and industry voices. This highly curated, low-waste approach proves that your brand values substance and connection over fleeting spectacle.",
  },
  {
    name: "Cultivate Deep Brand Affection, Not Fleeting Attention",
    text: 'Educate your audience on how to care for their pieces using natural methods. Offer bespoke repair or restoration services. Shift the consumer mindset from "buying an outfit" to "investing in an archive."',
  },
];

export const Route = createFileRoute("/insights/beyond-the-buzzword-craftsmanship")({
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
          headline:
            "Beyond the Buzzword: How to Communicate True Local Craftsmanship Without Greenwashing",
          description: DESCRIPTION,
          articleSection: "Sustainability & Craft",
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
          name: "How to Communicate True Local Craftsmanship Without Greenwashing",
          description: DESCRIPTION,
          inLanguage: "en",
          totalTime: "PT6M",
          step: STEPS.map((s, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: s.name,
            text: s.text,
            url: `${URL}#step-${i + 1}`,
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
              Sustainability & Craft · 6 min read
            </span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            Beyond the Buzzword: How to Communicate True Local Craftsmanship{" "}
            <span className="italic text-gold">Without Greenwashing</span>
          </h1>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={DATE}>7 Sep 2026</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal overflow-hidden border border-gold/25">
            <img
              src={craftsmanshipImg}
              alt="Close-up of an artisan's hands doing intricate gold-thread embroidery on silk"
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            <p className="reveal">
              In today's hyper-saturated digital landscape, "sustainability" has unfortunately been
              reduced to a mass-market marketing gimmick. Fast-fashion conglomerates toss around
              phrases like "eco-friendly," "conscious," and "green" to sell cheaply made,
              high-volume inventory, ultimately diluting the very essence of the word.
            </p>
            <p className="reveal">
              But for luxury, couture, and premium lifestyle brands, yelling about sustainability is
              not just redundant, it actually dilutes brand prestige.
            </p>
            <p className="reveal">
              True luxury is inherently sustainable. When you are creating art rather than
              inventory, your pieces are designed to last a lifetime. They are crafted by skilled
              local artisans, made from ethically sourced materials, and produced in deliberately
              limited quantities. Your label does not need to justify its existence with a generic
              "100% Sustainable" tag.
            </p>
            <p className="reveal">
              High-Net-Worth Individuals and modern luxury consumers are highly educated and
              fiercely skeptical of hollow claims. Here is how premium labels can effectively
              communicate their commitment to heritage craftsmanship and ethical production.
            </p>

            <p className="reveal text-sm">
              <Link
                to="/services/brand-positioning-gtm"
                className="text-gold underline-offset-4 transition-colors hover:underline"
              >
                Explore brand positioning & go-to-market services →
              </Link>
            </p>

            {STEPS.map((s, i) => (
              <div key={s.name} className="space-y-8">
                <h2
                  id={`step-${i + 1}`}
                  className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl"
                >
                  <span className="mr-3 text-gold">{String(i + 1).padStart(2, "0")}</span>
                  {s.name}
                </h2>
                <div className="reveal h-px w-12 bg-gold" />
                <p className="reveal">{s.text}</p>
              </div>
            ))}

            <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">
              The Final Verdict
            </h2>
            <div className="reveal h-px w-12 bg-gold" />
            <p className="reveal">
              Communicating true local craftsmanship requires a delicate, sophisticated architecture
              that balances modern digital reach with the brand's traditional soul. You do not need
              to sound like an environmental NGO to prove you are ethical, you simply need to
              proudly showcase the uncompromising quality and intention behind your art.
            </p>

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 pl-6 pr-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “Ready to elevate your brand's narrative? At Asset Side, I operate as an end-to-end
              growth partner for premium fashion, jewellery, and lifestyle brands, keeping a
              strictly limited client roster to invest deeply in the select labels I partner with.”
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
        intro="Selective engagements for premium fashion, jewellery, and lifestyle brands."
      />
      <SiteFooter />
    </div>
  );
}
