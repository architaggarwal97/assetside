import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { SITE_PATHS, SITE_URL, ampUrl, canonicalUrl } from "@/data/site-pages";

const GATEWAY = "https://connector-gateway.lovable.dev/google_search_console";

function headers() {
  const lovable = process.env.LOVABLE_API_KEY;
  const conn = process.env.GOOGLE_SEARCH_CONSOLE_API_KEY;
  if (!lovable || !conn) throw new Error("Google Search Console is not connected.");
  return { Authorization: `Bearer ${lovable}`, "X-Connection-Api-Key": conn };
}

type SiteEntry = { siteUrl: string; permissionLevel?: string };

function covers(siteUrl: string, target: URL) {
  if (siteUrl.startsWith("sc-domain:")) {
    const d = siteUrl.slice(10).toLowerCase();
    const h = target.hostname.toLowerCase();
    return h === d || h.endsWith(`.${d}`);
  }
  try {
    return target.href.startsWith(new URL(siteUrl).href);
  } catch {
    return false;
  }
}

async function gscError(res: Response) {
  const body = await res.text();
  console.error(`Search Console request failed [${res.status}]: ${body}`);
  if (res.status === 403) return "The connected Google account can't access this Search Console property.";
  if (res.status === 429) return "Google is rate-limiting requests. Try again in a few minutes.";
  return `Search Console request failed (${res.status}).`;
}

type Resolution =
  | { status: "selected"; siteUrl: string }
  | { status: "selection_required"; candidates: string[] }
  | { status: "error"; message: string };

async function resolveSite(selected?: string): Promise<Resolution> {
  const res = await fetch(`${GATEWAY}/webmasters/v3/sites`, { headers: headers() });
  if (!res.ok) return { status: "error", message: await gscError(res) };
  const { siteEntry = [] } = (await res.json()) as { siteEntry?: SiteEntry[] };
  const target = new URL(`${SITE_URL}/`);
  const matches = siteEntry.filter(
    (e) => e.permissionLevel !== "siteUnverifiedUser" && covers(e.siteUrl, target),
  );
  if (selected) {
    const hit = matches.find((m) => m.siteUrl === selected);
    return hit
      ? { status: "selected", siteUrl: hit.siteUrl }
      : { status: "error", message: "That property is no longer verified for this site." };
  }
  if (matches.length === 0) return { status: "error", message: "No verified Search Console property covers this site." };
  if (matches.length === 1) return { status: "selected", siteUrl: matches[0].siteUrl };
  return { status: "selection_required", candidates: matches.map((m) => m.siteUrl) };
}

const SiteInput = z.object({ siteUrl: z.string().max(300).optional() });

/** Property + sitemap status (errors/warnings are counts reported by Google). */
export const getGscOverview = createServerFn({ method: "GET" })
  .inputValidator((d: unknown) => SiteInput.parse(d ?? {}))
  .handler(async ({ data }) => {
    const r = await resolveSite(data.siteUrl);
    if (r.status !== "selected") return r;
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    const res = await fetch(
      `${GATEWAY}/webmasters/v3/sites/${encodeURIComponent(r.siteUrl)}/sitemaps/${encodeURIComponent(sitemapUrl)}`,
      { headers: headers() },
    );
    if (!res.ok) return { status: "selected" as const, siteUrl: r.siteUrl, sitemap: null, sitemapError: await gscError(res) };
    const s = (await res.json()) as {
      lastSubmitted?: string;
      lastDownloaded?: string;
      isPending?: boolean;
      errors?: string;
      warnings?: string;
      contents?: { type: string; submitted?: string }[];
    };
    return {
      status: "selected" as const,
      siteUrl: r.siteUrl,
      sitemap: {
        lastSubmitted: s.lastSubmitted ?? null,
        lastDownloaded: s.lastDownloaded ?? null,
        isPending: !!s.isPending,
        errors: Number(s.errors ?? 0),
        warnings: Number(s.warnings ?? 0),
        submitted: Number(s.contents?.[0]?.submitted ?? 0),
      },
      sitemapError: null,
    };
  });

const InspectInput = z.object({ siteUrl: z.string().max(300), path: z.string().max(200) });

type Inspection = {
  inspectionResult?: {
    indexStatusResult?: {
      verdict?: string;
      coverageState?: string;
      lastCrawlTime?: string;
      googleCanonical?: string;
      userCanonical?: string;
    };
    ampResult?: {
      verdict?: string;
      ampIndexStatusVerdict?: string;
      indexingState?: string;
      issues?: { issueMessage?: string; severity?: string }[];
    };
  };
};

/** Read Google's indexed state for one page's AMP copy (user-triggered, per URL). */
export const inspectAmpPage = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => InspectInput.parse(d))
  .handler(async ({ data }) => {
    if (!SITE_PATHS.has(data.path)) throw new Error("Unknown page.");
    const r = await resolveSite(data.siteUrl);
    if (r.status !== "selected") return { ok: false as const, message: "message" in r ? r.message : "Pick a property first." };
    const res = await fetch(`${GATEWAY}/v1/urlInspection/index:inspect`, {
      method: "POST",
      headers: { ...headers(), "Content-Type": "application/json" },
      body: JSON.stringify({ inspectionUrl: ampUrl(data.path), siteUrl: r.siteUrl }),
    });
    if (!res.ok) return { ok: false as const, status: res.status, message: await gscError(res) };
    const j = (await res.json()) as Inspection;
    const idx = j.inspectionResult?.indexStatusResult;
    const amp = j.inspectionResult?.ampResult;
    return {
      ok: true as const,
      ampUrl: ampUrl(data.path),
      canonical: canonicalUrl(data.path),
      coverageState: idx?.coverageState ?? "Unknown to Google",
      indexVerdict: idx?.verdict ?? null,
      lastCrawlTime: idx?.lastCrawlTime ?? null,
      googleCanonical: idx?.googleCanonical ?? null,
      ampVerdict: amp?.verdict ?? null,
      ampIndexingState: amp?.indexingState ?? null,
      issues: (amp?.issues ?? []).map((i) => ({ message: i.issueMessage ?? "", severity: i.severity ?? "" })),
      checkedAt: new Date().toISOString(),
    };
  });
