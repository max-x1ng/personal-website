import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/Experience";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Experiences — ${site.name}` },
      {
        name: "description",
        content: "Work and education history of " + site.name + ".",
      },
      { property: "og:title", content: `Experiences — ${site.name}` },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <PageShell>
      <Experience />
    </PageShell>
  );
}
