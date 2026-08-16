import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

// Replace these with Archit's actual social profile URLs when available.
const SOCIAL_PROFILE_URLS = [
  "https://www.linkedin.com/in/archit-aggarwal",
  "https://www.instagram.com/architaggarwal",
];

function NotFoundComponent() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center px-6 text-cream"
      style={{ background: "linear-gradient(180deg, #0b2b1e 0%, #2F6B4F 100%)" }}
    >
      <div className="max-w-2xl text-center">
        <div className="mx-auto mb-8 flex items-center justify-center gap-4">
          <span className="font-display text-sm italic text-gold">§</span>
          <div className="h-px w-12 bg-gold" />
        </div>
        <div
          className="font-display text-[8rem] font-medium leading-none text-gold md:text-[12rem]"
          aria-hidden="true"
        >
          404
        </div>
        <h1 className="mt-8 font-display text-3xl md:text-5xl">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-base text-cream/80 md:text-lg">
          This page isn't on the balance sheet. Let's get you back to the assets.
        </p>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/"
            className="inline-flex min-w-[140px] items-center justify-center gap-3 border border-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-navy-deep hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="inline-flex min-w-[140px] items-center justify-center gap-3 border border-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-navy-deep hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
          >
            Services
          </Link>
          <Link
            to="/work"
            className="inline-flex min-w-[140px] items-center justify-center gap-3 border border-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-navy-deep hover:shadow-[0_10px_24px_-12px_rgba(196,146,42,0.7)]"
          >
            Work
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Asset Side | Growth Marketing for Luxury & D2C Brands" },
      { name: "description", content: "Asset Side is Archit Aggarwal's growth marketing practice, turning ad spend into measurable ROI for luxury and D2C brands, not overhead" },
      { name: "author", content: "Archit Aggarwal" },
      { property: "og:title", content: "Asset Side | Growth Marketing for Luxury & D2C Brands" },
      { property: "og:description", content: "Asset Side is Archit Aggarwal's growth marketing practice, turning ad spend into measurable ROI for luxury and D2C brands, not overhead" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://assetside.lovable.app/" },
      { property: "og:site_name", content: "Asset Side" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Asset Side | Growth Marketing for Luxury & D2C Brands" },
      { name: "twitter:description", content: "Asset Side is Archit Aggarwal's growth marketing practice, turning ad spend into measurable ROI for luxury and D2C brands, not overhead" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "alternate",
        type: "application/rss+xml",
        title: "Asset Side Insights RSS Feed",
        href: "https://assetside.lovable.app/rss.xml",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://assetside.lovable.app/#person",
              name: "Archit Aggarwal",
              jobTitle: "Founder & Growth Marketing Consultant",
              description:
                "Independent growth and performance marketing consultant for luxury, fashion, jewellery, and lifestyle brands.",
              url: "https://assetside.lovable.app/#about",
              email: "mailto:ArchitAggarwal97@gmail.com",
              telephone: ["+91-9818661308", "+91-8800446635"],
              sameAs: SOCIAL_PROFILE_URLS,
              address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
              worksFor: { "@id": "https://assetside.lovable.app/#organization" },
              knowsAbout: [
                "Performance Marketing",
                "Brand Positioning",
                "Go-to-Market Strategy",
                "D2C Commerce",
                "WhatsApp Commerce",
                "Lead Generation",
                "SEO",
                "Marketing Analytics",
                "D2C Growth Strategy",
                "Luxury Marketing",
                "Public Relations",
              ],
              hasCredential: [
                { "@type": "EducationalOccupationalCredential", name: "Google Ads Certification" },
                { "@type": "EducationalOccupationalCredential", name: "SEMRush SEO Toolkit Certification" },
                { "@type": "EducationalOccupationalCredential", name: "HubSpot Inbound Certification" },
                { "@type": "EducationalOccupationalCredential", name: "Applied Business Analytics, Indian School of Business" },
              ],
            },
            {
              "@type": "Organization",
              "@id": "https://assetside.lovable.app/#organization",
              name: "Asset Side",
              alternateName: "Asset Side — Archit Aggarwal",
              url: "https://assetside.lovable.app",
              logo: {
                "@type": "ImageObject",
                url: "https://assetside.lovable.app/og-asset-side.jpg",
                width: 1200,
                height: 630,
              },
              image: "https://assetside.lovable.app/og-asset-side.jpg",
              description: "Growth marketing consultancy for luxury fashion, jewellery, and D2C brands, led by Archit Aggarwal.",
              founder: { "@id": "https://assetside.lovable.app/#person" },
              employee: { "@id": "https://assetside.lovable.app/#person" },
              sameAs: SOCIAL_PROFILE_URLS,
              email: "ArchitAggarwal97@gmail.com",
              telephone: "+91-9818661308",
              knowsLanguage: ["en", "hi"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Vasant Kunj, New Delhi",
                addressRegion: "Delhi",
                postalCode: "110070",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9818661308",
                email: "ArchitAggarwal97@gmail.com",
                contactType: "sales",
                availableLanguage: ["English", "Hindi"],
              },
              areaServed: ["Vasant Kunj, New Delhi", "Sarojini Nagar, New Delhi", "IN"],
            },
            {
              "@type": "WebSite",
              "@id": "https://assetside.lovable.app/#website",
              name: "Asset Side",
              url: "https://assetside.lovable.app",
              publisher: { "@id": "https://assetside.lovable.app/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://assetside.lovable.app/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "ProfessionalService",
              name: "Archit Aggarwal — Growth Marketing Consulting",
              provider: { "@id": "https://assetside.lovable.app/#person" },
              areaServed: "Worldwide",
              serviceType: [
                "Performance Marketing",
                "Brand Positioning & GTM Strategy",
                "D2C & WhatsApp-First Commerce",
                "Growth & Lead Generation Systems",
                "SEO & Website Optimization",
                "Marketing Analytics & Reporting",
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
