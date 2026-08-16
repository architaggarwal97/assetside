import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/marketing-analytics")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["marketing-analytics"]!),
  component: MarketingAnalyticsPage,
});

function MarketingAnalyticsPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["marketing-analytics"]!} />;
}
