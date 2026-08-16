export const SITE_ORIGIN = "https://assetside.lovable.app";

export type Crumb = { name: string; path: string };

/** BreadcrumbList JSON-LD, always rooted at Home. */
export function breadcrumbSchema(trail: Crumb[]) {
  const items: Crumb[] = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_ORIGIN}${c.path === "/" ? "/" : c.path}`,
    })),
  };
}

/** head().scripts entry for a breadcrumb trail. */
export function breadcrumbScript(trail: Crumb[]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(breadcrumbSchema(trail)),
  };
}
