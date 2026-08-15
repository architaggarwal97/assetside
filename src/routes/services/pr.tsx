import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";

const SERVICE = SERVICE_BY_SLUG["pr"]!;
const CANONICAL_URL = "https://assetside.lovable.app/services/pr";

export const Route = createFileRoute("/services/pr")({
  head: () => ({
    meta: [
      { title: SERVICE.metaTitle },
      { name: "description", content: SERVICE.metaDescription },
      { property: "og:title", content: SERVICE.metaTitle },
      { property: "og:description", content: SERVICE.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SERVICE.metaTitle },
      { name: "twitter:description", content: SERVICE.metaDescription },
    ],
    links: [{ rel: "canonical", href: CANONICAL_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: SERVICE.title,
          description: SERVICE.metaDescription,
          url: CANONICAL_URL,
          serviceType: SERVICE.title,
          provider: {
            "@type": "Organization",
            name: "Asset Side",
            url: "https://assetside.lovable.app",
          },
          areaServed: ["IN", "AE", "GB", "US"],
        }),
      },
    ],
  }),
  component: () => <ServiceDetailPage service={SERVICE} />,
});
