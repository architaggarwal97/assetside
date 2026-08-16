import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/pr")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["pr"]!),
  component: PrPage,
});

function PrPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["pr"]!} />;
}
