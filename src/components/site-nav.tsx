import { Link } from "@tanstack/react-router";
import { MessageCircle, Rss } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SERVICES } from "@/data/services";

export type NavLink =
  | { kind: "link"; label: string; href: string }
  | { kind: "menu"; label: string; href: string; items: { label: string; slug: string; to: string }[] };

export const SERVICE_SECTIONS: { n: string; slug: string; title: string; path: string }[] =
  SERVICES.map((s) => ({ n: s.n, slug: s.slug, title: s.title, path: s.path }));

export const NAV_LINKS: NavLink[] = [
  { kind: "link", label: "Home", href: "/" },
  { kind: "link", label: "About", href: "/#about" },
  { kind: "link", label: "Work", href: "/work" },
  { kind: "link", label: "Case Studies", href: "/case-studies" },
  {
    kind: "menu",
    label: "Services",
    href: "/services",
    items: SERVICES.map((s) => ({ label: s.title, slug: s.slug, to: s.path })),
  },
  { kind: "link", label: "Insights", href: "/insights" },
];

function LogoLockup({ logoColor }: { logoColor: string }) {
  return (
    <Link
      to="/"
      aria-label="Asset Side — home"
      className="flex items-center gap-2.5 transition-opacity hover:opacity-90"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="#0b2b1e"
          stroke="#C4922A"
          strokeWidth="1.5"
        />
        <text
          x="20"
          y="17"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-display"
          fontSize="16"
          fontWeight="600"
          fill="#C4922A"
        >
          AS
        </text>
        <line
          x1="12"
          y1="26"
          x2="28"
          y2="26"
          stroke="#C4922A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="28" cy="26" r="1.5" fill="#C4922A" />
      </svg>
      <span
        className={`font-display text-2xl tracking-[0.05em] transition-colors ${logoColor}`}
      >
        Asset Side
      </span>
    </Link>
  );
}

export function SiteNav({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || variant === "light";
  const linkColor = solid ? "text-charcoal" : "text-cream/85";
  const logoColor = solid ? "text-navy" : "text-cream";

  const openServices = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-cream/95 backdrop-blur-md border-b border-gold/20" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <LogoLockup logoColor={logoColor} />

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((item) => {
            if (item.kind === "menu") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    to={item.href}
                    onFocus={openServices}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    className={`text-xs uppercase tracking-[0.18em] transition-colors hover:text-gold ${linkColor}`}
                  >
                    {item.label}
                    <span aria-hidden className="ml-1 text-gold">▾</span>
                  </Link>
                  {servicesOpen && (
                    <div
                      role="menu"
                      onMouseEnter={openServices}
                      onMouseLeave={scheduleClose}
                      className="absolute right-0 top-full mt-4 w-80 border border-gold/30 bg-cream shadow-[0_20px_50px_-20px_rgba(11,43,30,0.4)]"
                    >
                      <div className="py-2">
                        {item.items.map((s) => (
                          <Link
                            key={s.slug}
                            to={s.to}
                            role="menuitem"
                            onClick={() => setServicesOpen(false)}
                            className="block px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-gold/10 hover:text-gold"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            const isInternal = item.href.startsWith("/") && !item.href.includes("#");
            const cls = `text-xs uppercase tracking-[0.18em] transition-colors hover:text-gold ${linkColor}`;
            return isInternal ? (
              <Link key={item.label} to={item.href} className={cls}>
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} className={cls}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
        <a
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          title="Subscribe to the Insights RSS feed"
          aria-label="Subscribe to the Insights RSS feed"
          className={`transition-colors hover:text-gold ${linkColor}`}
        >
          <Rss size={16} strokeWidth={2} aria-hidden="true" />
        </a>
        <a
          href="https://wa.me/919818661308"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 border border-gold px-4 py-2 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-navy-deep"
        >
          <MessageCircle size={14} strokeWidth={2} aria-hidden="true" />
          <span>Let&apos;s Talk</span>
        </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className={`md:hidden text-xs uppercase tracking-[0.2em] transition-colors ${linkColor}`}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gold/20 bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
            <ul className="flex flex-col divide-y divide-gold/15">
              {NAV_LINKS.map((item) => (
                <li key={item.label} className="py-3">
                  {item.kind === "menu" ? (
                    <div>
                      <div className="flex w-full items-center justify-between">
                        <Link
                          to={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex-1 text-xs uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-gold"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setServicesOpen((v) => !v)}
                          aria-expanded={servicesOpen}
                          aria-label={servicesOpen ? `Collapse ${item.label} submenu` : `Expand ${item.label} submenu`}
                          className="ml-4 flex h-8 w-8 items-center justify-center text-gold"
                        >
                          <span aria-hidden>{servicesOpen ? "−" : "+"}</span>
                        </button>
                      </div>
                      {servicesOpen && (
                        <ul className="mt-4 space-y-3 border-l border-gold/30 pl-4">
                          {item.items.map((s) => (
                            <li key={s.slug}>
                              <Link
                                to={s.to}
                                onClick={() => setMenuOpen(false)}
                                className="block text-[11px] uppercase tracking-[0.18em] text-charcoal-soft transition-colors hover:text-gold"
                              >
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-xs uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-gold"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-xs uppercase tracking-[0.2em] text-charcoal transition-colors hover:text-gold"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/919818661308"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex w-full items-center justify-center gap-2 border border-gold px-4 py-3 text-xs uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-navy-deep"
            >
              <MessageCircle size={15} strokeWidth={2} aria-hidden="true" />
              <span>Let&apos;s Talk</span>
            </a>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex w-full items-center justify-center gap-2 border border-gold/40 px-4 py-3 text-xs uppercase tracking-[0.18em] text-charcoal transition-colors hover:border-gold hover:text-gold"
            >
              <Rss size={14} strokeWidth={2} aria-hidden="true" />
              <span>Subscribe via RSS</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}