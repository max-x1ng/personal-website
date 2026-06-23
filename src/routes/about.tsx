import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/About";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${site.name}` },
      {
        name: "description",
        content: "Background and interests of " + site.name + ".",
      },
      { property: "og:title", content: `About — ${site.name}` },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
