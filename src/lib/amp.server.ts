import { parse, HTMLElement } from "node-html-parser";

const SITE = "https://assetside.lovable.app";

const REMOVE = "script:not([type='application/ld+json']), style, noscript, header, footer, button, iframe, form, input, select, textarea, link";
const KEEP_ATTRS = new Set(["id", "href", "src", "alt", "width", "height", "datetime", "aria-label", "target", "rel", "title", "lang", "viewbox", "fill", "stroke", "d"]);

const NON_PAGE = /^\/(rss\.xml|atom\.xml|sitemap\.xml|llms|robots|favicon|__l5e|amp)/;

export function ampPathFor(path: string) {
  return path === "/" ? "/amp" : `/amp${path}`;
}

function rewriteHref(href: string) {
  if (!href.startsWith("/") || href.startsWith("//") || NON_PAGE.test(href)) return href;
  const [p, hash] = href.split("#");
  return ampPathFor(p || "/") + (hash ? `#${hash}` : "");
}

function clean(el: HTMLElement) {
  for (const child of el.querySelectorAll("*")) {
    const tag = child.rawTagName?.toLowerCase();
    for (const name of Object.keys(child.attributes)) {
      if (!KEEP_ATTRS.has(name.toLowerCase())) child.removeAttribute(name);
    }
    if (tag === "a") {
      const href = child.getAttribute("href");
      if (href) child.setAttribute("href", rewriteHref(href));
    }
    if (tag === "img") {
      const w = Number(child.getAttribute("width")) || 1200;
      const h = Number(child.getAttribute("height")) || 800;
      const layout = w <= 200 ? "fixed" : "responsive";
      const src = child.getAttribute("src") ?? "";
      const alt = (child.getAttribute("alt") ?? "").replace(/"/g, "&quot;");
      child.replaceWith(
        `<amp-img src="${src}" alt="${alt}" width="${w}" height="${h}" layout="${layout}"></amp-img>`,
      );
    }
  }
}

const NAV = [
  ["Home", "/amp"],
  ["Work", "/amp/work"],
  ["Case Studies", "/amp/case-studies"],
  ["Services", "/amp/services"],
  ["Insights", "/amp/insights"],
];

const CSS = `
:root{--g:#c4922a;--d:#0b2b1e;--c:#f9f6ef;--t:#2b2b2b}
*{box-sizing:border-box}
body{margin:0;background:var(--c);color:var(--t);font-family:Inter,system-ui,sans-serif;font-size:17px;line-height:1.7}
a{color:var(--g)}
.top{background:var(--d);color:var(--c);padding:18px 20px;border-bottom:1px solid var(--g)}
.brand{font-family:'Playfair Display',Georgia,serif;font-size:24px;color:var(--c);text-decoration:none}
.nav{margin-top:10px;display:flex;flex-wrap:wrap;gap:6px 18px}
.nav a{color:var(--c);text-decoration:none;font-size:11px;letter-spacing:.2em;text-transform:uppercase}
main{max-width:760px;margin:0 auto;padding:32px 20px 48px}
h1,h2,h3,h4,blockquote{font-family:'Playfair Display',Georgia,serif;color:var(--d);font-weight:500;line-height:1.2}
h1{font-size:38px;margin:24px 0 16px}
h2{font-size:28px;margin:44px 0 12px;padding-top:24px;border-top:1px solid rgba(196,146,42,.35)}
h3{font-size:21px;margin:28px 0 8px}
blockquote{font-style:italic;font-size:21px;border-left:2px solid var(--g);margin:28px 0;padding-left:18px}
amp-img{margin:24px 0;border:1px solid rgba(196,146,42,.3)}
ul,ol{padding-left:22px}
svg{width:20px;height:20px}
table{width:100%;border-collapse:collapse}td,th{border-bottom:1px solid rgba(196,146,42,.3);padding:8px;text-align:left}
.cta{background:var(--d);color:var(--c);text-align:center;padding:40px 20px}
.cta h2{color:var(--c);border:0;margin-top:0}
.cta a{display:inline-block;margin:6px;padding:12px 22px;border:1px solid var(--g);text-decoration:none;font-size:12px;letter-spacing:.2em;text-transform:uppercase}
.cta a.s{background:var(--g);color:var(--d)}
.foot{padding:20px;text-align:center;font-size:12px;color:#555}
.full{display:block;text-align:center;font-size:12px;letter-spacing:.2em;text-transform:uppercase;margin-top:32px}
`;

const BOILERPLATE = `<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>`;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Convert a fully server-rendered canonical page into a valid AMP document. */
export function toAmp(html: string, path: string) {
  const doc = parse(html, { comment: false });
  const title = doc.querySelector("title")?.text ?? "Asset Side";
  const desc = doc.querySelector('meta[name="description"]')?.getAttribute("content") ?? "";
  const robots = doc.querySelector('meta[name="robots"]')?.getAttribute("content");
  const ld = doc
    .querySelectorAll('script[type="application/ld+json"]')
    .map((s) => `<script type="application/ld+json">${s.innerHTML}</script>`)
    .join("");

  const body = doc.querySelector("body") ?? doc;
  body.querySelectorAll(REMOVE).forEach((n) => n.remove());
  body.querySelectorAll("#contact").forEach((n) => n.remove());
  clean(body);
  // flatten the page wrapper to its sections
  const content = body.innerHTML.replace(/<(\/?)(main|section|article|aside)\b[^>]*>/g, "<$1div>");

  const canonical = `${SITE}${path === "/" ? "/" : path}`;
  return `<!doctype html><html ⚡ lang="en"><head><meta charset="utf-8"><title>${esc(title)}</title><link rel="canonical" href="${canonical}"><meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"><meta name="description" content="${esc(desc)}">${robots ? `<meta name="robots" content="${esc(robots)}">` : ""}<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500&display=swap"><script async src="https://cdn.ampproject.org/v0.js"></script>${BOILERPLATE}<style amp-custom>${CSS}</style>${ld}</head><body><div class="top"><a class="brand" href="/amp">Asset Side</a><div class="nav">${NAV.map(([l, h]) => `<a href="${h}">${l}</a>`).join("")}</div></div><main>${content}<a class="full" href="${canonical}">View full page →</a></main><div class="cta"><h2>Let's talk about your next quarter.</h2><a href="tel:+919818661308">Call</a><a class="s" href="https://wa.me/919818661308">WhatsApp</a><a href="mailto:ArchitAggarwal97@gmail.com">Email</a></div><div class="foot">© ${new Date().getFullYear()} Archit Aggarwal · <a href="/amp/privacy-policy">Privacy Policy</a></div></body></html>`;
}

type Entry = { fetch: (r: Request, env?: unknown, ctx?: unknown) => Promise<Response> | Response };

/** Server-render the canonical page for `path`; null when it isn't a 200 HTML page. */
export async function renderPageHtml(request: Request, path: string) {
  const mod = await import("@tanstack/react-start/server-entry");
  const entry = ((mod as { default?: Entry }).default ?? mod) as Entry;
  const url = new URL(path, request.url);
  const res = await entry.fetch(new Request(url, { headers: { accept: "text/html" } }));
  if (res.status !== 200 || !(res.headers.get("content-type") ?? "").includes("text/html")) return null;
  return res.text();
}

/** Readable body text of an HTML page (no nav, footer, scripts). */
export function pageText(html: string) {
  const doc = parse(html, { comment: false });
  const body = doc.querySelector("body") ?? doc;
  body.querySelectorAll("script, style, noscript, header, footer, nav, svg").forEach((n) => n.remove());
  body.querySelectorAll("p, h1, h2, h3, h4, li, blockquote, div, br").forEach((n) => n.insertAdjacentHTML("afterend", "\n"));
  return body.text.replace(/[ \t]+/g, " ").replace(/\n\s*\n+/g, "\n").trim();
}

/** Server-render the canonical page for `path` and convert it to AMP. */
export async function renderAmp(request: Request, path: string) {
  const html = await renderPageHtml(request, path);
  if (!html) return new Response("Not found", { status: 404 });
  return new Response(toAmp(html, path), {
    headers: { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=300" },
  });
}
