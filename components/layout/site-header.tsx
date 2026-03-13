import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";
import { PageContainer } from "@/components/layout/page-container";

const navigation = [
  { label: "Accueil", href: "#top" },
  { label: "Présentation", href: "#presentation" },
  { label: "Univers", href: "#univers" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <PageContainer>
        <div className="flex min-h-16 items-center justify-between gap-4 py-3">
          <Link href="#top" className="text-base font-semibold tracking-tight sm:text-lg">
            Jésared
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Navigation principale">
              <ul className="flex items-center gap-1 sm:gap-2">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="inline-flex rounded-md px-3 py-2 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground sm:text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
