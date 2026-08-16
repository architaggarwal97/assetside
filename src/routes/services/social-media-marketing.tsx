import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/social-media-marketing")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["social-media-marketing"]!),
  component: SocialMediaMarketingPage,
});

function SocialMediaMarketingPage() {
  return <ServiceDetailPage service={SERVICE_BY_SLUG["social-media-marketing"]!} />;
}
