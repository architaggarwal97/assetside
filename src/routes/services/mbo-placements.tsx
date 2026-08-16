import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/mbo-placements")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["mbo-placements"]!),
  component: MboPlacementsPage,
});

function MboPlacementsPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["mbo-placements"]!} />;
}
