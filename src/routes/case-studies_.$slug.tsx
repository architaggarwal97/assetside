import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { AuthorBio } from "@/components/author-bio";
import { ContactBlock } from "@/components/contact-block";
import { breadcrumbScript } from "@/data/breadcrumbs";
import { STUDIES } from "@/data/case-studies";
import { CASE_STUDY_PAGES } from "@/data/case-study-pages";
import { SERVICE_BY_SLUG } from "@/data/services";

const SITE = "https://assetside.lovable.app";

export const Route = createFileRoute("/case-studies_/$slug")({
  loader: ({ params }) => {
    const page = CASE_STUDY_PAGES[params.slug];
    const study = STUDIES.find((s) => s.slug === params.slug);
    if (!page || !study) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const page = loaderData ? CASE_STUDY_PAGES[loaderData.slug] : undefined;
    if (!page) return { meta: [{ title: "Case study not found" }, { name: "robots", content: "noindex" }] };
    const url = `${SITE}/case-studies/${page.slug}`;
    return {
      meta: [
        { title: page.title },
        { name: "description", content: page.description },
        { property: "og:title", content: page.title },
        { property: "og:description", content: page.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: page.title },
        { name: "twitter:description", content: page.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        breadcrumbScript([
          { name: "Case Studies", path: "/case-studies" },
          { name: page.title, path: `/case-studies/${page.slug}` },
        ]),
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "@id": `${url}#article`,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            headline: page.title,
            description: page.description,
            articleSection: "Case Study",
            datePublished: page.datePublished,
            dateModified: page.datePublished,
            inLanguage: "en",
            author: { "@id": `${SITE}/#person` },
            publisher: { "@id": `${SITE}/#organization` },
          }),
        },
      ],
    };
  },
  notFoundComponent: CaseStudyNotFound,
  component: CaseStudyPage,
});

function CaseStudyNotFound() {
  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />
      <main className="mx-auto max-w-3xl px-6 pt-48 pb-32 text-center">
        <h1 className="font-display text-4xl text-navy-deep">This case study isn't here.</h1>
        <Link to="/case-studies" className="mt-8 inline-block text-gold underline-offset-4 hover:underline">
          See all case studies →
        </Link>
      </main>
      <SiteFooter />
    </div>
  );
}

function CaseStudyPage() {
  useReveal();
  const { slug } = Route.useLoaderData();
  const page = CASE_STUDY_PAGES[slug]!;
  const study = STUDIES.find((s) => s.slug === slug)!;
  const service = study.relatedService ? SERVICE_BY_SLUG[study.relatedService.slug] : undefined;
  const date = new Date(page.datePublished).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />
      <section className="editorial-hero relative overflow-hidden pt-40 pb-24 text-cream md:pt-52 md:pb-32">
        <div className="relative mx-auto max-w-3xl px-6 md:px-10">
          <div className="reveal flex items-center gap-4">
            <span className="font-display text-sm italic text-gold">§</span>
            <div className="h-px w-10 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-cream/70">Case Study · {study.category}</span>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            {study.brand}
            <span className="mt-3 block italic text-gold">
              {study.headlineStat} {study.headlineLabel}
            </span>
          </h1>
          <p className="reveal mt-8 font-display text-xl italic text-cream/85 md:text-2xl">{page.lede}</p>
          <div className="reveal mt-8 text-xs uppercase tracking-[0.22em] text-cream/70">
            <time dateTime={page.datePublished}>{date}</time> · Archit Aggarwal
          </div>
          <div className="reveal mt-12 gold-divider" />
        </div>
      </section>

      <main className="bg-cream py-20 md:py-28">
        <article className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="grid grid-cols-2 border-t border-l border-gold/20 md:grid-cols-4">
            {study.results.map((r, i) => (
              <div key={i} className="reveal border-r border-b border-gold/20 px-5 py-8" data-reveal-index={String(i + 1)}>
                <div className="font-display text-2xl leading-none text-navy-deep md:text-3xl">{r.value}</div>
                <div className="mt-3 text-[10px] uppercase tracking-[0.24em] text-charcoal-soft">{r.label}</div>
              </div>
            ))}
          </div>

          <div className="prose-asset mt-14 space-y-8 text-base leading-relaxed md:text-lg">
            {page.sections.map((sec) => (
              <div key={sec.heading} className="space-y-8">
                <h2 className="reveal pt-6 font-display text-2xl text-navy-deep md:text-3xl">{sec.heading}</h2>
                <div className="reveal h-px w-12 bg-gold" />
                {sec.paragraphs.map((p, i) => (
                  <p key={i} className="reveal">{p}</p>
                ))}
              </div>
            ))}

            <blockquote className="reveal mt-14 border-l-2 border-gold bg-gold/5 py-6 px-6 font-display text-xl italic leading-relaxed text-navy-deep md:text-2xl">
              “{study.insight}”
            </blockquote>

            <div className="reveal pt-6">
              <div className="text-[11px] uppercase tracking-[0.28em] text-gold">Written about in Insights</div>
              <ul className="mt-4 space-y-3">
                {page.articles.map((a) => (
                  <li key={a.path}>
                    <a href={a.path} className="text-navy-deep underline-offset-4 transition-colors hover:text-gold hover:underline">
                      {a.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em]">
              {service && (
                <Link to={service.path} className="text-gold underline-offset-4 hover:underline">
                  Related service: {study.relatedService!.label} →
                </Link>
              )}
              <Link to="/case-studies" className="text-gold underline-offset-4 hover:underline">
                All case studies →
              </Link>
            </div>
          </div>
          <div className="mt-20">
            <AuthorBio />
          </div>
        </article>
      </main>
      <ContactBlock heading="Let's talk about your " accent="next quarter." intro="Selective engagements. Direct line, no gatekeepers." />
      <SiteFooter />
    </div>
  );
}
