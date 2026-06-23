import { createFileRoute } from "@tanstack/react-router";
import { Reading } from "@/components/Reading";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export const Route = createFileRoute("/reading")({
  head: () => ({
    meta: [
      { title: `Reading — ${site.name}` },
      {
        name: "description",
        content: "Books and reading list of " + site.name + ".",
      },
      { property: "og:title", content: `Reading — ${site.name}` },
      { property: "og:url", content: "/reading" },
    ],
    links: [{ rel: "canonical", href: "/reading" }],
  }),
  component: ReadingPage,
});

function ReadingPage() {
  return (
    <PageShell>
      <Reading />
    </PageShell>
  );
}
