import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Writing } from "@/components/Writing";
import { Projects } from "@/components/Projects";
import { Interests } from "@/components/Interests";
import { Reading } from "@/components/Reading";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Writing />
        <Projects />
        <Interests />
        <Reading />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
