import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/d2c-whatsapp-commerce")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["d2c-whatsapp-commerce"]!),
  component: D2cWhatsappCommercePage,
});

function D2cWhatsappCommercePage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["d2c-whatsapp-commerce"]!} />;
}
