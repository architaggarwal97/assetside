import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Archit Aggarwal" },
      {
        name: "description",
        content:
          "Privacy policy for Asset Side, the independent consulting practice of Archit Aggarwal.",
      },
      { property: "og:title", content: "Privacy Policy — Archit Aggarwal" },
      {
        property: "og:description",
        content:
          "Privacy policy for Asset Side, the independent consulting practice of Archit Aggarwal.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://assetside.lovable.app/privacy-policy" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://assetside.lovable.app/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  useReveal();

  useEffect(() => {
    if (window.location.hash === "") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-cream text-charcoal font-sans antialiased">
      <SiteNav variant="dark" />

      <header
        id="top"
        className="relative overflow-hidden pt-40 pb-20 text-cream md:pt-52 md:pb-28"
        style={{ background: "linear-gradient(160deg, #0b2b1e 0%, #1d4a36 55%, #2F6B4F 100%)" }}
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold reveal">Legal</p>
          <h1 className="font-display text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl reveal">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm text-cream/70 reveal">Last updated: 1 August 2026</p>
        </div>
      </header>

      <main className="px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none text-charcoal reveal">
            <p className="lead text-lg text-charcoal-soft">
              Asset Side is the independent consulting practice of Archit Aggarwal. This policy
              explains what information is collected through this website and how it&apos;s used.
            </p>

            <h2 className="font-display text-2xl text-navy-deep mt-12 mb-4">Information We Collect</h2>
            <p>
              We only collect information you choose to share with us, for example your name, contact
              details, and the content of your message, when you reach out via the Call, WhatsApp, or
              Email links on this site. We may also collect standard analytics data (such as pages
              visited, browser type, and approximate location) through tools like Google Analytics to
              understand how visitors use the site.
            </p>

            <h2 className="font-display text-2xl text-navy-deep mt-12 mb-4">How We Use This Information</h2>
            <p>
              Information shared with us is used solely to respond to your enquiry and to understand
              and improve how the site is used. We do not sell, rent, or share your information with
              third parties, except where necessary to respond to you (for example, when you contact us
              via WhatsApp, your message is handled through Meta&apos;s WhatsApp platform, which has its
              own privacy practices).
            </p>

            <h2 className="font-display text-2xl text-navy-deep mt-12 mb-4">Cookies and Analytics</h2>
            <p>
              This site may use basic analytics cookies to understand aggregate visitor behavior. These
              do not identify you personally and are used only to improve the site experience.
            </p>

            <h2 className="font-display text-2xl text-navy-deep mt-12 mb-4">Third-Party Links</h2>
            <p>
              This site may link to third-party platforms, including WhatsApp, LinkedIn, and email
              providers. We are not responsible for the privacy practices of those platforms.
            </p>

            <h2 className="font-display text-2xl text-navy-deep mt-12 mb-4">Data Retention</h2>
            <p>
              We retain enquiry information only as long as needed to respond to you and maintain a
              reasonable business record, and delete it upon request.
            </p>

            <h2 className="font-display text-2xl text-navy-deep mt-12 mb-4">Your Rights</h2>
            <p>
              You can request that any information you&apos;ve shared with us be corrected or deleted at any
              time by contacting us directly.
            </p>

            <h2 className="font-display text-2xl text-navy-deep mt-12 mb-4">Contact</h2>
            <p>
              Questions about this policy can be directed to{" "}
              <a
                href="mailto:ArchitAggarwal97@gmail.com"
                className="text-gold underline underline-offset-4 transition-colors hover:text-navy"
              >
                ArchitAggarwal97@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
