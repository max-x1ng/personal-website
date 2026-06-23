import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/Projects";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${site.name}` },
      {
        name: "description",
        content: "Projects by " + site.name + ".",
      },
      { property: "og:title", content: `Projects — ${site.name}` },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <Projects />
    </PageShell>
  );
}
