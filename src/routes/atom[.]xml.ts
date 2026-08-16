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

function isoDateTime(iso: string) {
  return `${iso}T00:00:00Z`;
}

export const Route = createFileRoute("/atom.xml")({
  server: {
    handlers: {
      GET: async () => {
        const sorted = [...ARTICLES].sort(
          (a, b) => Date.parse(b.datePublished) - Date.parse(a.datePublished),
        );

        const updated = sorted[0]?.datePublished ?? new Date().toISOString().slice(0, 10);

        const entries = sorted.map((a) => {
          const link = `${INSIGHTS_URL}#${a.slug}`;
          const image =
            a.header.kind === "photo"
              ? a.header.src.startsWith("http")
                ? a.header.src
                : `${BASE_URL}${a.header.src}`
              : null;
          return [
            `  <entry>`,
            `    <title>${escapeXml(a.title)}</title>`,
            `    <link href="${escapeXml(link)}" />`,
            `    <id>${escapeXml(link)}</id>`,
            `    <updated>${isoDateTime(a.datePublished)}</updated>`,
            `    <published>${isoDateTime(a.datePublished)}</published>`,
            `    <summary>${escapeXml(a.excerpt)}</summary>`,
            `    <category term="${escapeXml(a.category)}" />`,
            `    <author>`,
            `      <name>Archit Aggarwal</name>`,
            `      <uri>https://assetside.lovable.app/#about</uri>`,
            `    </author>`,
            image
              ? `    <link rel="enclosure" href="${escapeXml(image)}" type="image/jpeg" />`
              : null,
            `  </entry>`,
          ]
            .filter(Boolean)
            .join("\n");
        });

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<feed xmlns="http://www.w3.org/2005/Atom">`,
          `  <title>Asset Side Insights</title>`,
          `  <subtitle>${escapeXml(INSIGHTS_DESCRIPTION)}</subtitle>`,
          `  <link href="${INSIGHTS_URL}" />`,
          `  <link href="${BASE_URL}/atom.xml" rel="self" />`,
          `  <updated>${isoDateTime(updated)}</updated>`,
          `  <id>${INSIGHTS_URL}</id>`,
          `  <icon>${BASE_URL}/og-asset-side.jpg</icon>`,
          `  <logo>${BASE_URL}/og-asset-side.jpg</logo>`,
          `  <author>`,
          `    <name>Archit Aggarwal</name>`,
          `    <uri>https://assetside.lovable.app/#about</uri>`,
          `  </author>`,
          `  <rights>© ${new Date().getFullYear()} Asset Side — Archit Aggarwal</rights>`,
          ...entries,
          `</feed>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/atom+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
