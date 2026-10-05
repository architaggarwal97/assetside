import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/amp/")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const { renderAmp } = await import("@/lib/amp.server");
        return renderAmp(request, "/");
      },
    },
  },
});
