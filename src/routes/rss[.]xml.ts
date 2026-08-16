import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import {
  ARTICLES,
  INSIGHTS_DESCRIPTION,
  INSIGHTS_URL,
} from "@/data/insights";

const BASE_URL = "https://assetside.lovable.app";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toUTCString();
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async () => {
        const sorted = [...ARTICLES].sort(
          (a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished),
        );

        const items = sorted.map((a) => {
          const link = `${INSIGHTS_URL}#${a.slug}`;
          const image =
            a.header.kind === "photo"
              ? a.header.src.startsWith("http")
                ? a.header.src
                : `${BASE_URL}${a.header.src}`
              : null;
          return [
            `    <item>`,
            `      <title>${escapeXml(a.title)}</title>`,
            `      <link>${escapeXml(link)}</link>`,
            `      <guid isPermaLink="false">${escapeXml(link)}</guid>`,
            `      <description>${escapeXml(a.excerpt)}</description>`,
            `      <category>${escapeXml(a.category)}</category>`,
            `      <dc:creator>Archit Aggarwal</dc:creator>`,
            `      <pubDate>${rfc822(a.datePublished)}</pubDate>`,
            image
              ? `      <enclosure url="${escapeXml(image)}" type="image/jpeg" />`
              : null,
            `    </item>`,
          ]
            .filter(Boolean)
            .join("\n");
        });

        const lastBuild = sorted[0]
          ? rfc822(sorted[0].datePublished)
          : new Date().toUTCString();

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">`,
          `  <channel>`,
          `    <title>Asset Side Insights</title>`,
          `    <link>${INSIGHTS_URL}</link>`,
          `    <description>${escapeXml(INSIGHTS_DESCRIPTION)}</description>`,
          `    <language>en</language>`,
          `    <copyright>Asset Side — Archit Aggarwal</copyright>`,
          `    <lastBuildDate>${lastBuild}</lastBuildDate>`,
          `    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />`,
          `    <image>`,
          `      <url>${BASE_URL}/og-asset-side.jpg</url>`,
          `      <title>Asset Side Insights</title>`,
          `      <link>${INSIGHTS_URL}</link>`,
          `    </image>`,
          ...items,
          `  </channel>`,
          `</rss>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
