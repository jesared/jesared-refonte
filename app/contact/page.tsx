import Link from "next/link";

import { PageContainer } from "@/components/layout";
import { SectionTitle } from "@/components/ui";
import { cn } from "@/lib/utils";

const buttonClassName =
  "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export default function ContactPage() {
  return (
    <PageContainer>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Parlons de votre projet</h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Une idée, une collaboration ou une question ? Je vous réponds rapidement.
          </p>
          <a
            href="mailto:contact@jesared.fr"
            className={cn(buttonClassName, "bg-primary text-primary-foreground hover:bg-primary/90")}
          >
            contact@jesared.fr
          </a>
        </div>
      </section>

      <section className="border-t border-border/60 py-14 text-center sm:py-16">
        <SectionTitle overline="Navigation rapide">Explorer le site</SectionTitle>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/labs"
            className={cn(buttonClassName, "border bg-background hover:bg-accent hover:text-accent-foreground")}
          >
            Voir les labs
          </Link>
          <Link
            href="/photographie"
            className={cn(buttonClassName, "border bg-background hover:bg-accent hover:text-accent-foreground")}
          >
            Voir la galerie photo
          </Link>
        </div>
      </section>
    </PageContainer>
  );
}
