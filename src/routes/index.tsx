import { createFileRoute } from "@tanstack/react-router";
import { Hero, SocialLinks } from "@/components/Hero";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { Footer } from "@/components/Footer";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.name },
      {
        name: "description",
        content:
          "Personal site of " +
          site.name +
          ". Writing, projects, and notes on AI, investing, and human behavior.",
      },
      { property: "og:title", content: `${site.name}` },
      {
        property: "og:description",
        content: "Writing, projects, and notes on AI, investing, and human behavior.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <PageShell hideFooter fullBleed>
      <InteractiveBackground />
      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-6">
        <Hero />
        <div className="mt-auto pb-5">
          <div className="mb-2">
            <SocialLinks />
          </div>
          <Footer embedded />
        </div>
      </div>
    </PageShell>
  );
}
