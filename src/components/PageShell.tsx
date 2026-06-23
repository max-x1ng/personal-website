import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({
  children,
  hideFooter = false,
}: {
  children: ReactNode;
  hideFooter?: boolean;
}) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <Nav />
      <main className="relative z-10 flex flex-1 flex-col">{children}</main>
      {!hideFooter ? <Footer className="relative z-10" /> : null}
    </div>
  );
}
