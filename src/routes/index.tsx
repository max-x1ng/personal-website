import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Investor, builder, writer` },
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
    <PageShell>
      <InteractiveBackground />
      <Hero />
    </PageShell>
  );
}
