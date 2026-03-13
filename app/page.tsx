import { PageContainer } from "@/components/layout";
import { SectionTitle } from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <section className="flex flex-col gap-8 py-24">
          <SectionTitle overline="Base projet">
            Une fondation Next.js propre, simple et prête pour la suite.
          </SectionTitle>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Structure claire, design sobre, composants préparés. On garde une base
            légère avant d&apos;ajouter les briques UI avancées.
          </p>
        </section>
      </PageContainer>
    </main>
  );
}
