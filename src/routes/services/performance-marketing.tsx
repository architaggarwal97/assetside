import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

const SERVICE = SERVICE_BY_SLUG["performance-marketing"]!;

export const Route = createFileRoute("/services/performance-marketing")({
  head: () => buildServiceHead(SERVICE),
  component: () => <ServiceDetailPage service={SERVICE} />,
});
