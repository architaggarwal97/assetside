import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://assetside.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const servicePaths = [
          "/services/performance-marketing",
          "/services/brand-positioning-gtm",
          "/services/d2c-whatsapp-commerce",
          "/services/growth-lead-generation",
          "/services/seo-website-optimization",
          "/services/marketing-analytics",
          "/services/pr",
          "/services/events",
          "/services/mbo-placements",
          "/services/social-media-marketing",
          "/services/campaign-brand-shoots",
        ];

        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "monthly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/work", changefreq: "monthly", priority: "0.8" },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
          { path: "/insights", changefreq: "monthly", priority: "0.6" },
          ...servicePaths.map((path) => ({
            path,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          { path: "/privacy-policy", changefreq: "yearly", priority: "0.2" },
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
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