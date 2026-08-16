import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/performance-marketing")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["performance-marketing"]!),
  component: PerformanceMarketingPage,
});

function PerformanceMarketingPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["performance-marketing"]!} />;
}
