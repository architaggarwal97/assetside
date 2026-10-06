import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState } from "react";
import { SITE_PAGES, ampUrl } from "@/data/site-pages";
import { getGscOverview, inspectAmpPage } from "@/lib/gsc.functions";

export const Route = createFileRoute("/admin/amp")({
  head: () => ({
    meta: [
      { title: "AMP Tools — Asset Side" },
      { name: "description", content: "Internal AMP content check and Search Console indexing dashboard." },
      { property: "og:title", content: "AMP Tools — Asset Side" },
      { property: "og:description", content: "Internal AMP content check and indexing dashboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AmpToolsPage,
});

function AmpToolsPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-charcoal">
      <header className="border-b border-gold/30 bg-navy-deep px-6 py-8 text-cream md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Internal</p>
          <h1 className="mt-3 font-display text-3xl md:text-4xl">AMP Tools</h1>
        </div>
      </header>
      <main className="mx-auto max-w-6xl space-y-16 px-6 py-12 md:px-10">
        <ContentCheck />
        <IndexDashboard />
      </main>
    </div>
  );
}

/* ---------------- AI content check ---------------- */

function ContentCheck() {
  const [path, setPath] = useState(SITE_PAGES[0].path);
  const [report, setReport] = useState("");
  const [error, setError] = useState("");
  const [running, setRunning] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  async function run() {
    setReport("");
    setError("");
    setRunning(true);
    const ac = new AbortController();
    abortRef.current = ac;
    try {
      const res = await fetch("/api/public/amp-compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path }),
        signal: ac.signal,
      });
      if (!res.ok || !res.body) {
        const j = await res.json().catch(() => ({}));
        if (res.status === 402) setError(j.error ?? "Out of AI credits. Add credits in Settings → Plans & credits.");
        else setError(j.error ?? `Check failed (${res.status}).`);
        return;
      }
      const reader = res.body.getReader();
      const dec = new TextDecoder();
      let buf = "";
      let text = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buf += dec.decode(value, { stream: true });
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";
        for (const line of lines) {
          if (!line.startsWith("data:")) continue;
          const raw = line.slice(5).trim();
          if (!raw || raw === "[DONE]") continue;
          try {
            const ev = JSON.parse(raw);
            if (ev.type === "response.output_text.delta") {
              text += ev.delta;
              setReport(text);
            } else if (ev.type === "response.failed" || ev.type === "error") {
              setError(ev.response?.error?.message ?? ev.message ?? "The AI check failed.");
            }
          } catch {}
        }
      }
      if (!text) setError((e) => e || "The AI returned no result for this page.");
    } catch (e) {
      if ((e as Error).name !== "AbortError") setError("Network error while running the check.");
    } finally {
      setRunning(false);
    }
  }

  return (
    <section>
      <h2 className="font-display text-2xl text-navy-deep">AMP content check</h2>
      <p className="mt-2 max-w-2xl text-sm text-charcoal-soft">
        Pick a page. AI compares its AMP copy against the normal page and lists meaningful differences.
        Each check uses AI credits.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <select
          value={path}
          onChange={(e) => setPath(e.target.value)}
          aria-label="Page to check"
          className="min-w-0 flex-1 border border-gold/40 bg-cream px-4 py-3 text-sm"
        >
          {SITE_PAGES.map((p) => (
            <option key={p.path} value={p.path}>
              {p.label} — {p.path === "/" ? "/amp" : `/amp${p.path}`}
            </option>
          ))}
        </select>
        {running ? (
          <button
            onClick={() => abortRef.current?.abort()}
            className="border border-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-gold"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={run}
            className="bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-navy-deep hover:bg-gold-soft"
          >
            Compare
          </button>
        )}
      </div>
      {(report || error || running) && (
        <div className="mt-6 border border-gold/30 bg-cream p-6">
          {error && <p className="text-sm text-destructive">{error}</p>}
          {running && !report && <p className="text-sm text-charcoal-soft">Comparing pages…</p>}
          {report && <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{report}</pre>}
        </div>
      )}
    </section>
  );
}

/* ---------------- Search Console dashboard ---------------- */

type Overview = Awaited<ReturnType<typeof getGscOverview>>;
type Inspect = Awaited<ReturnType<typeof inspectAmpPage>>;
const STORE = "amp-index-snapshot-v1";

function IndexDashboard() {
  const fetchOverview = useServerFn(getGscOverview);
  const inspect = useServerFn(inspectAmpPage);
  const [overview, setOverview] = useState<Overview | null>(null);
  const [loadErr, setLoadErr] = useState("");
  const [siteUrl, setSiteUrl] = useState<string | undefined>();
  const [rows, setRows] = useState<Record<string, Inspect>>({});
  const [busy, setBusy] = useState<string | null>(null);
  const [stopNote, setStopNote] = useState("");

  useEffect(() => {
    try {
      setRows(JSON.parse(localStorage.getItem(STORE) ?? "{}"));
    } catch {}
  }, []);

  useEffect(() => {
    setLoadErr("");
    fetchOverview({ data: { siteUrl } })
      .then((o) => {
        setOverview(o);
        if (o.status === "selected") setSiteUrl(o.siteUrl);
      })
      .catch((e) => setLoadErr((e as Error).message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteUrl]);

  const save = (next: Record<string, Inspect>) => {
    setRows(next);
    localStorage.setItem(STORE, JSON.stringify(next));
  };

  async function checkOne(path: string, acc = rows) {
    if (!siteUrl) return { acc, stop: true };
    setBusy(path);
    const r = await inspect({ data: { siteUrl, path } }).catch(
      (e) => ({ ok: false, message: (e as Error).message }) as Inspect,
    );
    const next = { ...acc, [path]: r };
    save(next);
    setBusy(null);
    const stop = !r.ok && "status" in r && (r.status === 403 || r.status === 429);
    return { acc: next, stop };
  }

  async function checkAll() {
    setStopNote("");
    let acc = rows;
    for (const p of SITE_PAGES) {
      const res = await checkOne(p.path, acc);
      acc = res.acc;
      if (res.stop) {
        setStopNote("Stopped early: Google refused or rate-limited the request. Try again later.");
        break;
      }
    }
  }

  const done = Object.values(rows).filter((r) => r.ok) as Extract<Inspect, { ok: true }>[];
  const indexed = done.filter((r) => r.ampVerdict === "PASS").length;
  const withIssues = done.filter((r) => r.issues.length > 0).length;

  return (
    <section>
      <h2 className="font-display text-2xl text-navy-deep">AMP indexing (Google Search Console)</h2>
      <p className="mt-2 max-w-2xl text-sm text-charcoal-soft">
        Shows Google's stored view of each AMP page, as of its last crawl. Checking doesn't ask Google to re-crawl.
      </p>

      {loadErr && <p className="mt-4 text-sm text-destructive">{loadErr}</p>}

      {overview?.status === "selection_required" && (
        <div className="mt-6">
          <label className="text-sm">Choose the Search Console property:</label>
          <select
            defaultValue=""
            onChange={(e) => setSiteUrl(e.target.value)}
            className="ml-3 border border-gold/40 bg-cream px-3 py-2 text-sm"
          >
            <option value="" disabled>
              Select…
            </option>
            {overview.candidates.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      )}
      {overview?.status === "error" && <p className="mt-4 text-sm text-destructive">{overview.message}</p>}

      {overview?.status === "selected" && (
        <>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Stat label="Property" value={overview.siteUrl} small />
            <Stat
              label="Sitemap"
              value={
                overview.sitemap
                  ? `${overview.sitemap.errors} errors · ${overview.sitemap.warnings} warnings`
                  : overview.sitemapError ?? "—"
              }
              small
            />
            <Stat label="AMP valid in Google" value={`${indexed} / ${done.length} checked`} />
            <Stat label="Pages with AMP issues" value={String(withIssues)} />
          </div>
          {overview.sitemap?.lastDownloaded && (
            <p className="mt-3 text-xs text-charcoal-soft">
              Sitemap last read by Google: {new Date(overview.sitemap.lastDownloaded).toLocaleString()}
            </p>
          )}

          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={checkAll}
              disabled={!!busy}
              className="bg-gold px-6 py-3 text-xs uppercase tracking-[0.2em] text-navy-deep disabled:opacity-50"
            >
              {busy ? "Checking…" : "Check all pages"}
            </button>
            {stopNote && <span className="text-sm text-destructive">{stopNote}</span>}
          </div>

          <div className="mt-6 overflow-x-auto border border-gold/30">
            <table className="w-full text-left text-sm">
              <thead className="bg-gold/10 text-[11px] uppercase tracking-[0.15em] text-charcoal-soft">
                <tr>
                  <th className="p-3">Page</th>
                  <th className="p-3">Google status</th>
                  <th className="p-3">AMP result</th>
                  <th className="p-3">Validation errors</th>
                  <th className="p-3">Last crawl</th>
                  <th className="p-3" />
                </tr>
              </thead>
              <tbody>
                {SITE_PAGES.map((p) => {
                  const r = rows[p.path];
                  return (
                    <tr key={p.path} className="border-t border-gold/20 align-top">
                      <td className="p-3">
                        <a href={ampUrl(p.path)} target="_blank" rel="noreferrer" className="text-navy-deep hover:text-gold">
                          {p.label}
                        </a>
                      </td>
                      {r?.ok ? (
                        <>
                          <td className="p-3">{r.coverageState}</td>
                          <td className="p-3">
                            <Verdict v={r.ampVerdict} />
                          </td>
                          <td className="p-3">
                            {r.issues.length === 0
                              ? "None"
                              : r.issues.map((i, k) => (
                                  <div key={k} className="text-destructive">
                                    {i.severity === "ERROR" ? "Error" : "Warning"}: {i.message}
                                  </div>
                                ))}
                          </td>
                          <td className="p-3 whitespace-nowrap">
                            {r.lastCrawlTime ? new Date(r.lastCrawlTime).toLocaleDateString() : "Not crawled"}
                          </td>
                        </>
                      ) : (
                        <td className="p-3 text-charcoal-soft" colSpan={4}>
                          {r && !r.ok ? <span className="text-destructive">{r.message}</span> : "Not checked yet"}
                        </td>
                      )}
                      <td className="p-3">
                        <button
                          onClick={() => checkOne(p.path)}
                          disabled={!!busy}
                          className="border border-gold px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-gold disabled:opacity-50"
                        >
                          {busy === p.path ? "…" : "Check"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </section>
  );
}

function Stat({ label, value, small }: { label: string; value: string; small?: boolean }) {
  return (
    <div className="border border-gold/30 p-4">
      <div className="text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">{label}</div>
      <div className={`mt-2 break-all text-navy-deep ${small ? "text-sm" : "font-display text-2xl"}`}>{value}</div>
    </div>
  );
}

function Verdict({ v }: { v: string | null }) {
  if (!v) return <span className="text-charcoal-soft">Not known to Google</span>;
  const label = v === "PASS" ? "Valid" : v === "FAIL" ? "Invalid" : v === "PARTIAL" ? "Valid with warnings" : v;
  return <span className={v === "FAIL" ? "text-destructive" : "text-navy-deep"}>{label}</span>;
}
