import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-3xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-8 text-xs text-muted-foreground">
        <p className="min-w-0">
          © {year} {site.name}. Designed and built by {site.name}.
        </p>
        <ul className="flex shrink-0 items-center gap-4">
          <li>
            <a
              href={site.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href={site.socials.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Substack
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
