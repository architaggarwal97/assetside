import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/pr")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["pr"]!),
  component: PrPage,
});

function PrPage() {
  const service = SERVICE_BY_SLUG["pr"];
  if (!service) return null;
  return <ServiceDetailPage service={service} relatedReadingSlugs={[
    "boutique-vs-conglomerate-pr-agency",
    "targeted-media-network-luxury-pr",
    "private-pr-events-luxury-brands",
  ]} />;
}
