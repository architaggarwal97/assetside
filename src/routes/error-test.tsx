import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/error-test")({
  component: function ErrorTest() {
    throw new Error("Intentional test error for error-page verification");
  },
});
