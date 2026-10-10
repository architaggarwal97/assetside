<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture rules
- Insights: each full article has its own file route, route head metadata and Article schema, with its listing link in the shared Insights data. Why: long-form content is independently addressable and indexable.
- AMP: `/amp/*` server routes server-render the canonical page and convert it with `src/lib/amp.server.ts`; root head adds `rel=amphtml`. Why: one source of content, AMP never drifts from the real pages.
- Indexable pages list lives in `src/data/site-pages.ts`; sitemap, AMP check and AMP dashboard read it. Why: one list keeps them in sync. Sitemap lists canonical pages only (AMP found via rel=amphtml, noindex pages excluded).
- AMP tools at `/admin/amp` are intentionally public (user choice), noindex and blocked in robots.txt.

- Case studies: summaries live in `src/data/case-studies.ts`; full client pages are one dynamic route (`case-studies_.$slug.tsx`) driven by `src/data/case-study-pages.ts`, and must be added to `site-pages.ts`. Why: one data source keeps the listing and full pages consistent.
