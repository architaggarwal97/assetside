import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

const SERVICE = SERVICE_BY_SLUG["campaign-brand-shoots"]!;

export const Route = createFileRoute("/services/campaign-brand-shoots")({
  head: () => buildServiceHead(SERVICE),
  component: () => <ServiceDetailPage service={SERVICE} />,
});
