import { Link } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ContactBlock } from "@/components/contact-block";
import { SERVICES, SERVICE_BY_SLUG, RELATED_SERVICES, type Service } from "@/data/services";
import { SERVICE_FAQS } from "@/data/service-schema";
import { CLIENT_PROOF } from "@/data/client-proof";

export function ServiceDetailPage({ service }: { service: Service }) {
  useReveal();

  const index = SERVICES.findIndex((s) => s.slug === service.slug);
  const next = SERVICES[(index + 1) % SERVICES.length];
  const related = (RELATED_SERVICES[service.slug] ?? [])
    .map((slug) => SERVICE_BY_SLUG[slug])
    .filter((s): s is Service => Boolean(s) && s.slug !== service.slug);
  const faqs = SERVICE_FAQS[service.slug] ?? [];
  const client = CLIENT_PROOF[service.slug];

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />

      <section
        id="top"
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
        <div className="relative mx-auto max-w-5xl px-6 md:px-10">
          <div className="reveal flex items-center gap-4">
            <span className="font-display text-sm italic text-gold">{service.n}</span>
            <div className="h-px w-10 bg-gold" />
            <Link
              to="/services"
              className="text-xs uppercase tracking-[0.3em] text-cream/70 transition-colors hover:text-gold"
            >
              Services
            </Link>
          </div>
          <h1 className="reveal mt-8 font-display text-4xl leading-[1.08] md:text-6xl">
            {service.title}
          </h1>
          <p className="reveal mt-8 max-w-2xl font-display text-lg italic text-cream/85 md:text-2xl">
            {service.lead}
          </p>
          <div className="reveal mt-14 gold-divider max-w-md" />
        </div>
      </section>

      <main>
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-12 md:px-10">
            <div className="md:col-span-6">
              <div className="reveal text-[11px] uppercase tracking-[0.28em] text-gold">
                The approach
              </div>
              <div className="mt-6 space-y-6">
                {service.context.map((p, i) => (
                  <p
                    key={i}
                    className="reveal text-base leading-relaxed text-charcoal md:text-lg"
                    data-reveal-index={String(i)}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {service.proof && (
                <div className="reveal mt-12 border-l-2 border-gold bg-gold/5 py-4 pl-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Proof point</div>
                  <p className="mt-2 font-display text-base italic leading-relaxed text-navy-deep md:text-lg">
                    {service.proof}{" "}
                    {service.proofLink && (
                      <Link
                        to="/case-studies"
                        hash={service.proofLink.hash}
                        className="ml-1 inline text-gold underline decoration-gold/50 underline-offset-4 transition-colors hover:decoration-gold"
                      >
                        {service.proofLink.label}
                      </Link>
                    )}
                  </p>
                </div>
              )}
            </div>

            <div className="md:col-span-6">
              <div className="reveal text-[11px] uppercase tracking-[0.28em] text-gold">
                What&apos;s included
              </div>
              <ul className="mt-6 space-y-4">
                {service.included.map((item, i) => (
                  <li key={i} className="reveal flex gap-4" data-reveal-index={String(i + 1)}>
                    <span className="mt-2 h-px w-6 flex-shrink-0 bg-gold" />
                    <span className="text-sm leading-relaxed text-charcoal-soft md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {client && (
          <section
            id="client"
            className="border-t border-gold/20 py-20 md:py-28"
            style={{ background: "linear-gradient(180deg, #FBF8F1 0%, #F4EDE0 100%)" }}
          >
            <div className="mx-auto max-w-6xl px-6 md:px-10">
              <div className="reveal text-[11px] uppercase tracking-[0.28em] text-gold">
                A real client
              </div>
              <div className="mt-8 grid gap-12 md:grid-cols-12">
                <div className="md:col-span-5">
                  <h2 className="reveal font-display text-3xl leading-tight text-navy-deep md:text-4xl">
                    {client.brand}
                  </h2>
                  <p className="reveal mt-4 text-xs uppercase tracking-[0.2em] text-charcoal-soft">
                    {client.category}
                  </p>
                  <div className="reveal mt-10 gold-divider max-w-[9rem]" />
                  <div className="reveal mt-8 font-display text-5xl text-navy-deep md:text-6xl">
                    {client.stat}
                  </div>
                  <div className="reveal mt-3 text-[11px] uppercase tracking-[0.28em] text-gold">
                    {client.statLabel}
                  </div>
                </div>
                <div className="md:col-span-7">
                  <p className="reveal text-base leading-relaxed text-charcoal md:text-lg">
                    {client.outcome}
                  </p>
                  <div className="mt-10 grid grid-cols-1 gap-px bg-gold/25 sm:grid-cols-3">
                    {client.results.map((r, i) => (
                      <div
                        key={i}
                        data-reveal-index={String(i)}
                        className="reveal bg-cream p-5 md:p-6"
                      >
                        <div className="font-display text-2xl text-navy-deep md:text-3xl">
                          {r.value}
                        </div>
                        <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-charcoal-soft">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/case-studies"
                    hash={client.caseSlug}
                    className="reveal mt-10 inline-block border-b border-gold pb-1 text-xs uppercase tracking-[0.22em] text-navy-deep transition-colors hover:text-gold"
                  >
                    Read the {client.brand} case study →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {faqs.length > 0 && (
          <section id="faq" className="border-t border-gold/20 bg-cream py-20 md:py-28">
            <div className="mx-auto max-w-4xl px-6 md:px-10">
              <div className="reveal text-[11px] uppercase tracking-[0.28em] text-gold">
                Common questions
              </div>
              <h2 className="reveal mt-5 font-display text-3xl leading-tight text-navy-deep md:text-4xl">
                {service.title}, answered
              </h2>
              <dl className="mt-12 divide-y divide-gold/25 border-y border-gold/25">
                {faqs.map((f, i) => (
                  <div key={i} className="reveal py-7" data-reveal-index={String(i)}>
                    <dt className="font-display text-lg text-navy-deep md:text-xl">{f.question}</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-charcoal-soft md:text-base">
                      {f.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        <section
          className="py-16 text-cream md:py-20"
          style={{ background: "linear-gradient(180deg, #0b2b1e 0%, #1d4a36 100%)" }}
        >
          {related.length > 0 && (
            <div className="mx-auto mb-14 max-w-6xl px-6 md:px-10">
              <div className="reveal text-[11px] uppercase tracking-[0.28em] text-gold">
                Related services
              </div>
              <div className="mt-8 grid gap-px bg-cream/15 md:grid-cols-3">
                {related.map((r, i) => (
                  <Link
                    key={r.slug}
                    to={r.path}
                    data-reveal-index={String(i)}
                    className="reveal group block bg-[#0b2b1e] p-6 transition-colors hover:bg-[#123626] md:p-8"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-xs italic text-gold">{r.n}</span>
                      <span className="h-px w-8 bg-gold transition-all group-hover:w-14" />
                    </div>
                    <h3 className="mt-5 font-display text-lg leading-snug text-cream transition-colors group-hover:text-gold md:text-xl">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cream/75">{r.blurb}</p>
                    <span className="mt-5 inline-block text-[11px] uppercase tracking-[0.2em] text-gold">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-10">
            <Link
              to="/services"
              className="reveal text-xs uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-gold"
            >
              ← All services
            </Link>
            <Link
              to={next.path}
              className="reveal text-xs uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-gold"
            >
              Next: <span className="text-gold">{next.title}</span> →
            </Link>
          </div>
        </section>
      </main>

      <ContactBlock
        heading="Let's talk about "
        accent={`${service.title.toLowerCase()}.`}
      />
      <SiteFooter />
    </div>
  );
}