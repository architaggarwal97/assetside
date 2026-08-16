import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

const SERVICE = SERVICE_BY_SLUG["mbo-placements"]!;

export const Route = createFileRoute("/services/mbo-placements")({
  head: () => buildServiceHead(SERVICE),
  component: () => <ServiceDetailPage service={SERVICE} />,
});
