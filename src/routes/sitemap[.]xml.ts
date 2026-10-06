import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE_PAGES, canonicalUrl } from "@/data/site-pages";

// Canonical pages only. AMP copies (/amp/...) are discovered through each page's
// rel="amphtml" link, per Google's guidance, so they are intentionally not listed.
// noindex pages (e.g. /privacy-policy) are excluded.
export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = SITE_PAGES.map((e) =>
          [
            `  <url>`,
            `    <loc>${canonicalUrl(e.path)}</loc>`,
            `    <changefreq>${e.changefreq}</changefreq>`,
            `    <priority>${e.priority}</priority>`,
            `  </url>`,
          ].join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
