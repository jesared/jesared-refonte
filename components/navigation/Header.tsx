import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { MobileMenu } from "@/components/navigation/MobileMenu";
import { navigationLinks } from "@/components/navigation/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <PageContainer>
        <div className="flex min-h-18 items-center justify-between gap-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1.5 text-sm font-semibold tracking-tight shadow-sm transition-colors hover:bg-accent sm:text-base"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-foreground/80" aria-hidden="true" />
            Jésared Studio
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <nav aria-label="Navigation principale" className="hidden md:block">
              <ul className="flex items-center gap-1">
                {navigationLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
