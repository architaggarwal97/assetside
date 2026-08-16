import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/campaign-brand-shoots")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["campaign-brand-shoots"]!),
  component: CampaignBrandShootsPage,
});

function CampaignBrandShootsPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["campaign-brand-shoots"]!} />;
}
