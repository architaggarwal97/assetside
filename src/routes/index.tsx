import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { useReveal, useScrollSpy } from "@/hooks/use-reveal";
import architPortrait from "@/assets/archit-portrait.webp.asset.json";

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
  { pre: "₹0 → ₹", to: 65, decimals: 0, suf: "M", l: "ARR grown over 5 years" },
  { pre: "30 → ", to: 900, decimals: 0, suf: "+", l: "Qualified leads / month within a quarter" },
  { pre: "2.4× → ", to: 3.9, decimals: 1, suf: "×", l: "ROAS lift across paid channels" },
  { pre: "", to: 2.1, decimals: 1, suf: "×", l: "Order volume via WhatsApp-first D2C" },
  { pre: "34–", to: 38, decimals: 0, suf: "%", l: "Increase in qualified store walk-ins" },
  { pre: "−", to: 50, decimals: 0, suf: "%", l: "Reduction in cost per lead" },
];

const BRANDS = [
  "Wedding Asia", "Studio Prive", "La Polo", "Self Storage India",
  "Fur Ball Story", "Monture", "Adyaaye", "Maharashtra Jewellers",
  "Nike", "Crocs", "Kaya", "Geetanjali", "W for Women", "Indriya",
  "Studio Olive Cre", "Aurelia", "24Seven",
];

const SECTORS = [
  "D2C", "FMCG", "Luxury", "Exhibitions", "F&B", "NGO + Fundraising",
];

const TOOLS = [
  "Google Ads", "Meta Ads Manager", "Google Analytics 4", "SEMRush",
  "Ahrefs", "HubSpot CRM", "Zapier", "Figma", "Google Looker Studio", "Power BI",
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useScrollSpy(NAV.map((n) => n.id));

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
      <Nav scrolled={scrolled} onNav={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} active={active} />
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
  scrolled, onNav, menuOpen, setMenuOpen, active,
}: { scrolled: boolean; onNav: (id: string) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void; active: string }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-cream/90 backdrop-blur-md border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <button
          onClick={() => onNav("top")}
          aria-label="Archit Aggarwal — back to top"
          className={`font-display text-2xl tracking-[0.05em] transition-colors ${
            scrolled ? "text-navy" : "text-cream"
          }`}
        >
          AA<span className="text-gold">.</span>
        </button>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => {
            const isActive = active === n.id;
            const base = scrolled ? "text-charcoal" : "text-cream/85";
            return (
              <button
                key={n.id}
                onClick={() => onNav(n.id)}
                aria-current={isActive ? "true" : undefined}
                className={`relative text-xs uppercase tracking-[0.18em] transition-colors hover:text-gold ${
                  isActive ? "text-gold" : base
                }`}
              >
                {n.label}
                <span
                  className={`pointer-events-none absolute -bottom-1.5 left-0 h-px bg-gold transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
          <button
            onClick={() => onNav("contact")}
            className="border border-gold px-5 py-2 text-xs uppercase tracking-[0.18em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy-deep hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-8px_rgba(196,146,42,0.6)]"
          >
            Book a Call
          </button>
        </nav>
        <button
          className={`md:hidden text-xs uppercase tracking-[0.2em] ${scrolled ? "text-navy" : "text-cream"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      {menuOpen && (
        <div id="mobile-nav" className="md:hidden bg-cream border-t border-gold/20 px-6 py-6 space-y-4">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => onNav(n.id)}
                aria-current={isActive ? "true" : undefined}
                className={`block w-full text-left text-sm uppercase tracking-[0.18em] transition-colors ${
                  isActive ? "text-gold" : "text-charcoal hover:text-gold"
                }`}
              >
                {n.label}
              </button>
            );
          })}
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
    <section
      id="top"
      className="relative overflow-hidden text-cream"
      style={{ background: "linear-gradient(160deg, #0b2b1e 0%, #1d4a36 55%, #2F6B4F 100%)" }}
    >
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
            Dhanda-oriented, always. Built to be the asset on your balance sheet, not the liability.
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => onNav("contact")}
              className="group inline-flex items-center justify-center gap-3 bg-gold px-8 py-4 text-xs uppercase tracking-[0.22em] text-navy-deep transition-all duration-300 hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgba(196,146,42,0.7)]"
            >
              Book a Call
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <button
              onClick={() => onNav("results")}
              className="group inline-flex items-center justify-center gap-3 border border-cream/50 px-8 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
            >
              See the Work
              <span className="transition-transform group-hover:translate-y-1">↓</span>
            </button>
          </div>
        </div>

        <div className="reveal mt-24 flex items-end justify-between border-t border-gold/20 pt-6 text-xs uppercase tracking-[0.2em] text-cream/75">
          <span>Delhi · Working Worldwide</span>
          <span className="hidden md:inline">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ n, label, dark }: { n: string; label: string; dark?: boolean }) {
  return (
    <div className="reveal mb-14 flex items-center gap-4">
      <span className="font-display text-sm italic text-gold">{n}</span>
      <div className="h-px w-10 bg-gold" />
      <span className={`text-xs uppercase tracking-[0.3em] ${dark ? "text-cream/60" : "text-charcoal-soft"}`}>{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionLabel n="I." label="About" />
        <div className="grid gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <div className="relative mx-auto max-w-sm md:mx-0">
              <div className="absolute -inset-3 border border-gold/30" />
              <img
                src={architPortrait.url}
                alt="Archit Aggarwal"
                width={480}
                height={600}
                loading="lazy"
                decoding="async"
                className="relative aspect-[4/5] w-full object-cover grayscale"
              />
            </div>
          </div>
          <div className="reveal space-y-6 text-base leading-relaxed text-charcoal md:col-span-7 md:text-lg">
            <h2 className="font-display text-3xl leading-tight text-navy md:text-4xl">
              An <span className="italic text-gold">M-shaped</span> marketer working at the intersection of brand, performance, and growth.
            </h2>
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
            <div className="reveal flex flex-wrap gap-2 pt-2">
              {SECTORS.map((s) => (
                <span
                  key={s}
                  className="border border-gold/40 px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-charcoal-soft"
                >
                  {s}
                </span>
              ))}
            </div>
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
    <section
      id="services"
      className="py-28 text-cream md:py-40"
      style={{ background: "linear-gradient(180deg, #0b2b1e 0%, #1d4a36 100%)" }}
    >
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
          {SERVICES.map((s, i) => (
            <div
              key={s.n}
              data-reveal-index={i}
              className="reveal group relative p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] md:p-10"
              style={{ backgroundColor: "#0b2b1e" }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-xs italic text-gold">{s.n}</span>
                <span className="h-px w-8 bg-gold transition-all group-hover:w-14" />
              </div>
              <h3 className="font-display text-xl leading-snug text-cream md:text-2xl">{s.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/80 md:text-[15px]">{s.d}</p>
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
          {STATS.map((s, i) => (
            <div
              key={s.l}
              data-reveal-index={i}
              className="reveal group bg-cream p-10 transition-all duration-500 hover:bg-cream hover:shadow-[0_18px_40px_-24px_rgba(11,43,30,0.5)]"
            >
              <div className="font-display text-4xl leading-none text-navy-deep md:text-5xl">
                <CountUp prefix={s.pre} to={s.to} decimals={s.decimals} suffix={s.suf} />
              </div>
              <div className="mt-6 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
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
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-y border-gold/20 py-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {BRANDS.map((b, i) => (
            <div
              key={b}
              data-reveal-index={i}
              className="reveal text-center font-display text-lg tracking-wide text-navy-deep transition-all duration-300 hover:-translate-y-0.5 hover:text-gold md:text-xl"
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
    <section
      id="tools"
      className="py-28 text-cream md:py-40"
      style={{ background: "linear-gradient(180deg, #1d4a36 0%, #0b2b1e 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="font-display text-sm italic text-gold">V.</span>
          <div className="h-px w-10 bg-gold" />
          <span className="text-xs uppercase tracking-[0.3em] text-cream/60">Tools &amp; Expertise</span>
        </div>
        <h2 className="reveal mb-14 max-w-3xl font-display text-3xl leading-tight md:text-5xl">
          The stack behind the <span className="italic text-gold">work.</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {TOOLS.map((t, i) => (
            <span
              key={t}
              data-reveal-index={i}
              className="reveal border border-gold/50 px-5 py-3 text-sm tracking-wide text-cream/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-navy-deep hover:shadow-[0_10px_24px_-14px_rgba(196,146,42,0.7)]"
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
  return (
    <section
      id="contact"
      className="py-28 text-cream md:py-40"
      style={{ background: "linear-gradient(180deg, #0b2b1e 0%, #2F6B4F 100%)" }}
    >
      <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
        <SectionLabel n="VI." label="Contact" dark />
        <h2 className="reveal mx-auto max-w-3xl font-display text-3xl leading-tight text-cream md:text-5xl">
          Let's talk about your <span className="italic text-gold">next quarter.</span>
        </h2>
        <div className="reveal mx-auto mt-10 h-px w-16 bg-gold" />
        <p className="reveal mx-auto mt-10 max-w-xl font-display text-lg italic text-cream/85">
          Selective engagements. Direct line, no gatekeepers.
        </p>
        <div className="reveal mt-14 grid gap-8 sm:grid-cols-2">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-cream/80">+91 98186 61308</div>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+919818661308"
                aria-label="Call Archit Aggarwal on +91 98186 61308"
                className="inline-flex min-w-[140px] items-center justify-center gap-3 border border-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy-deep hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
              >
                Call
              </a>
              <a
                href="https://wa.me/919818661308"
                target="_blank"
                rel="noreferrer"
                aria-label="Message Archit Aggarwal on WhatsApp at +91 98186 61308"
                className="inline-flex min-w-[140px] items-center justify-center gap-3 bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-navy-deep transition-all duration-300 hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
              >
                WhatsApp
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-[0.2em] text-cream/80">+91 88004 46635</div>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+918800446635"
                aria-label="Call Archit Aggarwal on +91 88004 46635"
                className="inline-flex min-w-[140px] items-center justify-center gap-3 border border-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:bg-gold hover:text-navy-deep hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
              >
                Call
              </a>
              <a
                href="https://wa.me/918800446635"
                target="_blank"
                rel="noreferrer"
                aria-label="Message Archit Aggarwal on WhatsApp at +91 88004 46635"
                className="inline-flex min-w-[140px] items-center justify-center gap-3 bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-navy-deep transition-all duration-300 hover:bg-gold-soft hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="reveal mt-10">
          <a
            href="mailto:ArchitAggarwal97@gmail.com"
            aria-label="Email Archit Aggarwal at ArchitAggarwal97@gmail.com"
            className="inline-flex min-w-[180px] items-center justify-center gap-3 border border-cream/50 px-8 py-4 text-xs uppercase tracking-[0.22em] text-cream transition-all duration-300 hover:border-gold hover:text-gold hover:-translate-y-0.5"
          >
            Email
          </a>
        </div>
        <div className="reveal mt-12 text-xs uppercase tracking-[0.22em] text-cream/80">
          <div className="normal-case tracking-normal text-cream/85">ArchitAggarwal97@gmail.com</div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav }: { onNav: (id: string) => void }) {
  return (
    <footer className="bg-navy-deep py-12 text-cream/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-xs uppercase tracking-[0.2em] md:flex-row md:justify-between md:px-10">
        <div className="font-display text-sm normal-case tracking-normal text-cream">
          Archit <span className="text-gold">Aggarwal</span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:ArchitAggarwal97@gmail.com" aria-label="Email Archit Aggarwal" className="transition-colors hover:text-gold">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Archit Aggarwal on LinkedIn" className="transition-colors hover:text-gold">LinkedIn</a>
          <button onClick={() => onNav("top")} aria-label="Back to top of page" className="uppercase tracking-[0.2em] transition-colors hover:text-gold">Top ↑</button>
        </div>
        <div>© {new Date().getFullYear()} Archit Aggarwal</div>
      </div>
    </footer>
  );
}

function CountUp({
  to, decimals = 0, prefix = "", suffix = "", duration = 1400,
}: { to: number; decimals?: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    if (!("IntersectionObserver" in window)) {
      setValue(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setValue(to * eased);
              if (t < 1) requestAnimationFrame(tick);
              else setValue(to);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
