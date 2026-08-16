import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/brand-positioning-gtm")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["brand-positioning-gtm"]!),
  component: BrandPositioningGtmPage,
});

function BrandPositioningGtmPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["brand-positioning-gtm"]!} />;
}
