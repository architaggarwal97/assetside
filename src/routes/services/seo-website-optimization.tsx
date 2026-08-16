import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/seo-website-optimization")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["seo-website-optimization"]!),
  component: SeoWebsiteOptimizationPage,
});

function SeoWebsiteOptimizationPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["seo-website-optimization"]!} />;
}
