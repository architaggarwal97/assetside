import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/amp/$")({
  server: {
    handlers: {
      GET: async ({ request, params }) => {
        const splat = (params._splat ?? "").replace(/\/+$/, "");
        if (!/^[a-z0-9\-/]*$/.test(splat) || splat.startsWith("amp")) {
          return new Response("Not found", { status: 404 });
        }
        const { renderAmp } = await import("@/lib/amp.server");
        return renderAmp(request, splat ? `/${splat}` : "/");
      },
    },
  },
});
