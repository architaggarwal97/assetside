import { Link } from "@tanstack/react-router";
import { Rss } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep py-12 text-cream/80">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 text-xs uppercase tracking-[0.2em] md:flex-row md:justify-between md:px-10">
        <div className="font-display text-sm normal-case tracking-normal text-cream">
          Archit <span className="text-gold">Aggarwal</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/privacy-policy"
            aria-label="Privacy Policy"
            className="transition-colors hover:text-gold"
          >
            Privacy Policy
          </Link>
          <a
            href="mailto:ArchitAggarwal97@gmail.com"
            aria-label="Email Archit Aggarwal"
            className="transition-colors hover:text-gold"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Archit Aggarwal on LinkedIn"
            className="transition-colors hover:text-gold"
          >
            LinkedIn
          </a>
          <a
            href="#top"
            aria-label="Back to top of page"
            className="uppercase tracking-[0.2em] transition-colors hover:text-gold"
          >
            Top ↑
          </a>
        </div>
        <div>© {new Date().getFullYear()} Archit Aggarwal</div>
      </div>
    </footer>
  );
}
