import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-5 text-xs text-muted-foreground">
        <p>
          © {year} {site.name}. Designed and built by {site.name}.
        </p>
      </div>
    </footer>
  );
}
