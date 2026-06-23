import { createFileRoute } from "@tanstack/react-router";
import { Writing } from "@/components/Writing";
import { PageShell } from "@/components/PageShell";
import { site } from "@/data/site";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: `Writing — ${site.name}` },
      {
        name: "description",
        content: "Essays and writing by " + site.name + ".",
      },
      { property: "og:title", content: `Writing — ${site.name}` },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: WritingPage,
});

function WritingPage() {
  return (
    <PageShell>
      <Writing />
    </PageShell>
  );
}
