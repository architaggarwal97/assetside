import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/growth-lead-generation")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["growth-lead-generation"]!),
  component: GrowthLeadGenerationPage,
});

function GrowthLeadGenerationPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["growth-lead-generation"]!} />;
}
