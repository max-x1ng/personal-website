import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({
  children,
  hideFooter = false,
  fullBleed = false,
}: {
  children: ReactNode;
  hideFooter?: boolean;
  fullBleed?: boolean;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <Nav />
      <main className="relative z-10 flex flex-1 flex-col">
        {fullBleed ? (
          children
        ) : (
          <div className="mx-auto w-full max-w-3xl px-6">{children}</div>
        )}
      </main>
      {!hideFooter ? <Footer className="relative z-10" /> : null}
    </div>
  );
}
