import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "results", label: "Results" },
  { id: "brands", label: "Brands" },
  { id: "tools", label: "Tools" },
  { id: "contact", label: "Contact" },
];

const SERVICES = [
  { n: "01", t: "Performance Marketing", d: "Google & Meta Ads, full-funnel strategy engineered around revenue, not vanity metrics." },
  { n: "02", t: "Brand Positioning & GTM", d: "Sharpen the story, define the wedge, and take new categories to market with intent." },
  { n: "03", t: "D2C & WhatsApp-First Commerce", d: "Conversational funnels that turn scroll-stoppers into orders and loyal repeats." },
  { n: "04", t: "Growth & Lead Generation", d: "Predictable systems for qualified leads — from creative to CRM handoff." },
  { n: "05", t: "SEO & Website Optimization", d: "Technical, on-page, and CRO work that compounds every quarter." },
  { n: "06", t: "Analytics & Reporting", d: "GA4, Looker Studio and clean dashboards that make the next decision obvious." },
];

const STATS = [
  { v: "₹0 → ₹65M", l: "ARR grown over 5 years" },
  { v: "30 → 900+", l: "Qualified leads / month within a quarter" },
  { v: "2.4× → 3.9×", l: "ROAS lift across paid channels" },
  { v: "2.1×", l: "Order volume via WhatsApp-first D2C" },
  { v: "34–38%", l: "Increase in qualified store walk-ins" },
  { v: "−50%", l: "Reduction in cost per lead" },
];

const BRANDS = [
  "Wedding Asia", "Studio Prive", "La Polo", "Self Storage India",
  "Fur Ball Story", "Monture", "Adyaaye", "Maharashtra Jewellers",
  "Nike", "Crocs", "Kaya", "Geetanjali", "W for Women", "Indriya",
];

const TOOLS = [
  "Google Ads", "Meta Ads Manager", "Google Analytics 4", "SEMRush",
  "Ahrefs", "HubSpot CRM", "Zapier", "Figma", "Google Looker Studio", "Power BI",
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <Nav scrolled={scrolled} onNav={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero onNav={scrollTo} />
      <About />
      <Services />
      <TrackRecord />
      <Brands />
      <Tools />
      <Contact />
      <Footer onNav={scrollTo} />
    </div>
  );
}

function Nav({
  scrolled, onNav, menuOpen, setMenuOpen,
}: { scrolled: boolean; onNav: (id: string) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <button
          onClick={() => onNav("top")}
          className={`font-display text-lg tracking-wide transition-colors ${
            scrolled ? "text-navy" : "text-cream"
          }`}
        >
          Archit <span className="text-gold">Aggarwal</span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className={`text-xs uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-charcoal hover:text-gold" : "text-cream/80 hover:text-gold"
              }`}
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => onNav("contact")}
            className="border border-gold px-5 py-2 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-navy"
          >
            Book a Call
          </button>
        </nav>
        <button
          className={`md:hidden text-xs uppercase tracking-[0.2em] ${scrolled ? "text-navy" : "text-cream"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-gold/20 px-6 py-6 space-y-4">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onNav(n.id)}
              className="block w-full text-left text-sm uppercase tracking-[0.18em] text-charcoal hover:text-gold"
            >
              {n.label}
            </button>
          ))}
          <button
            onClick={() => onNav("contact")}
            className="mt-2 w-full border border-gold px-5 py-3 text-xs uppercase tracking-[0.18em] text-gold"
          >
            Book a Call
          </button>
        </div>
      )}
    </header>
  );
}

function Hero({ onNav }: { onNav: (id: string) => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-cream">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C4922A 0, transparent 40%), radial-gradient(circle at 80% 80%, #C4922A 0, transparent 40%)",
        }}
      />
      <div className="pointer-events-none absolute right-10 top-32 hidden h-64 w-64 rounded-full border border-gold/30 md:block" />
      <div className="pointer-events-none absolute right-40 top-56 hidden h-32 w-32 rounded-full border border-gold/20 md:block" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-24 md:px-10">
        <div className="reveal max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">Independent Consultant · Since 2014</span>
          </div>
          <p className="font-display text-lg italic text-cream/70 mb-4">Archit Aggarwal</p>
          <h1 className="font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Growth Marketing<br />
            Consultant for<br />
            <span className="italic text-gold">Luxury &amp; D2C</span> Brands.
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
            10+ years turning ad spend into store walk-ins, WhatsApp orders, and repeat
            customers for fashion, jewellery, and lifestyle brands.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => onNav("contact")}
              className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-navy transition-all hover:bg-gold-soft"
            >
              Book a Call
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => onNav("results")}
              className="group inline-flex items-center justify-center gap-3 border border-cream/40 px-8 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-all hover:border-gold hover:text-gold"
            >
              See the Work
              <span className="transition-transform group-hover:translate-y-1">↓</span>
            </button>
          </div>
        </div>

        <div className="reveal mt-24 flex items-end justify-between border-t border-gold/20 pt-6 text-xs uppercase tracking-[0.2em] text-cream/50">
          <span>Delhi · Working Worldwide</span>
          <span className="hidden md:inline">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="reveal mb-14 flex items-center gap-4">
      <span className="font-display text-sm italic text-gold">{n}</span>
      <div className="h-px w-10 bg-gold" />
      <span className="text-xs uppercase tracking-[0.3em] text-charcoal-soft">{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel n="I." label="About" />
        <div className="grid gap-12 md:grid-cols-12">
          <h2 className="reveal font-display text-3xl leading-tight text-navy md:col-span-5 md:text-4xl">
            An <span className="italic text-gold">M-shaped</span> marketer working at the intersection of brand, performance, and growth.
          </h2>
          <div className="reveal space-y-6 text-base leading-relaxed text-charcoal md:col-span-7 md:text-lg">
            <p>
              For over a decade, I've operated across D2C, FMCG, luxury, exhibitions, F&amp;B, and
              the non-profit world — spanning performance marketing, brand strategy, and growth
              systems, rather than sitting in a single lane.
            </p>
            <p>
              Today I lead brand positioning and performance marketing for a portfolio of
              <span className="text-gold"> 15+ luxury fashion, couture, and jewellery labels </span>
              at a leading PR and brand management agency — with a small, focused independent
              practice on the side for founders who want a senior operator, not a deck.
            </p>
            <blockquote className="reveal my-12 border-l border-gold pl-8">
              <p className="font-display text-2xl italic leading-snug text-navy md:text-3xl">
                "At heart, I'm Dhanda-first (business-first). I'm not here to be a line on the liability side of your balance sheet. I'd rather be the asset, the ROI you can point to."
              </p>
            </blockquote>
            <div className="hairline mt-10" />
            <div className="grid grid-cols-3 gap-6 pt-6 text-center">
              {[
                { v: "10+", l: "Years" },
                { v: "15+", l: "Luxury Brands" },
                { v: "6", l: "Industries" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-navy">{s.v}</div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-navy py-28 text-cream md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="font-display text-sm italic text-gold">II.</span>
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-cream/60">Services</span>
        </div>
        <h2 className="reveal font-display text-3xl leading-tight md:text-5xl max-w-3xl mb-16">
          Six ways I plug into <span className="italic text-gold">your growth engine.</span>
        </h2>
        <div className="grid gap-px bg-gold/20 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="reveal group bg-navy p-8 transition-colors hover:bg-navy-deep md:p-10"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-xs italic text-gold">{s.n}</span>
                <span className="h-px w-8 bg-gold transition-all group-hover:w-14" />
              </div>
              <h3 className="font-display text-xl leading-snug text-cream md:text-2xl">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/60 md:text-[15px]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrackRecord() {
  return (
    <section id="results" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel n="III." label="Track Record" />
        <h2 className="reveal mb-20 max-w-3xl font-display text-3xl leading-tight text-navy md:text-5xl">
          Numbers that closed the <span className="italic text-gold">quarter.</span>
        </h2>
        <div className="grid gap-px bg-gold/25 sm:grid-cols-2 lg:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.l} className="reveal bg-cream p-10">
              <div className="font-display text-4xl leading-none text-navy md:text-5xl">
                {s.v}
              </div>
              <div className="mt-6 h-px w-10 bg-gold" />
              <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brands() {
  return (
    <section id="brands" className="bg-cream pb-28 md:pb-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="gold-divider mb-20" />
        <SectionLabel n="IV." label="Brands Worked With" />
        <div className="reveal grid grid-cols-2 gap-x-8 gap-y-10 border-y border-gold/20 py-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="text-center font-display text-lg tracking-wide text-navy transition-colors hover:text-gold md:text-xl"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="tools" className="bg-navy py-28 text-cream md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="font-display text-sm italic text-gold">V.</span>
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-cream/60">Tools &amp; Expertise</span>
        </div>
        <h2 className="reveal mb-14 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
          The stack behind the <span className="italic text-gold">work.</span>
        </h2>
        <div className="reveal flex flex-wrap gap-3">
          {TOOLS.map((t) => (
            <span
              key={t}
              className="border border-gold/40 px-5 py-3 text-sm tracking-wide text-cream/85 transition-all hover:border-gold hover:bg-gold hover:text-navy"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <section id="contact" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel n="VI." label="Contact" />
        <h2 className="reveal max-w-3xl font-display text-3xl leading-tight text-navy md:text-5xl">
          Let's talk about your <span className="italic text-gold">next quarter.</span>
        </h2>
        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <div className="reveal space-y-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal-soft">Email</div>
              <a href="mailto:ArchitAggarwal97@gmail.com" className="mt-2 block font-display text-xl text-navy hover:text-gold">
                ArchitAggarwal97@gmail.com
              </a>
            </div>
            <div className="hairline" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal-soft">Phone</div>
              <div className="mt-2 flex flex-col gap-1">
                <a href="tel:+919818661308" className="block font-display text-xl text-navy hover:text-gold">
                  +91 9818661308
                </a>
                <a href="tel:+918800446635" className="block font-display text-xl text-navy hover:text-gold">
                  +91 8800446635
                </a>
              </div>
            </div>
            <div className="hairline" />
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-charcoal-soft">LinkedIn</div>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="mt-2 block font-display text-xl text-navy hover:text-gold">
                /in/architaggarwal
              </a>
            </div>
            <div className="hairline" />
            <p className="pt-4 font-display text-sm italic text-charcoal-soft">
              Selective engagements. Currently accepting a small number of Q1 projects.
            </p>
          </div>

          <form onSubmit={onSubmit} className="reveal space-y-6 border border-gold/30 bg-cream p-8 md:p-10">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Message" name="message" required textarea />
            <button
              type="submit"
              className="w-full bg-navy px-6 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold hover:text-navy"
            >
              {sent ? "Message Sent ✓" : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", required, textarea,
}: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls =
    "w-full border-b border-gold/40 bg-transparent py-3 text-charcoal placeholder-charcoal-soft/50 focus:border-gold focus:outline-none transition-colors";
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-charcoal-soft">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={cls} />
      ) : (
        <input type={type} name={name} required={required} className={cls} />
      )}
    </label>
  );
}

function Footer({ onNav }: { onNav: (id: string) => void }) {
  return (
    <footer className="bg-navy-deep py-12 text-cream/60">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-xs uppercase tracking-[0.2em] md:flex-row md:justify-between md:px-10">
        <div className="font-display text-sm normal-case tracking-normal text-cream">
          Archit <span className="text-gold">Aggarwal</span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:ArchitAggarwal97@gmail.com" className="hover:text-gold">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gold">LinkedIn</a>
          <button onClick={() => onNav("top")} className="hover:text-gold uppercase tracking-[0.2em]">Top ↑</button>
        </div>
        <div>© {new Date().getFullYear()} Archit Aggarwal</div>
      </div>
    </footer>
  );
}
