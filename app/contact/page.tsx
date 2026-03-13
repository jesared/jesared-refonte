import Link from "next/link";

import { PageContainer } from "@/components/layout";
import { Button, SectionTitle } from "@/components/ui";

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
          <Button asChild>
            <a href="mailto:contact@jesared.fr">contact@jesared.fr</a>
          </Button>
        </div>
      </section>

      <section className="border-t border-border/60 py-14 text-center sm:py-16">
        <SectionTitle overline="Navigation rapide">Explorer le site</SectionTitle>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline">
            <Link href="/labs">Voir les labs</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/photographie">Voir la galerie photo</Link>
          </Button>
        </div>
      </section>
    </PageContainer>
  );
}
