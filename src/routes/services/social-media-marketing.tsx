import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/service-page";
import { SERVICE_BY_SLUG } from "@/data/services";
import { buildServiceHead } from "@/data/service-schema";

export const Route = createFileRoute("/services/social-media-marketing")({
  head: () => buildServiceHead(SERVICE_BY_SLUG["social-media-marketing"]!),
  component: SocialMediaMarketingPage,
});

function SocialMediaMarketingPage() {
  const service = SERVICE_BY_SLUG["social-media-marketing"];
  if (!service) return null;
  return <ServiceDetailPage service={service} relatedReadingSlugs={[
    "firm-generated-content-authority",
    "social-kpis-predict-revenue",
  ]} />;
}
