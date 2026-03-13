import { PageContainer } from "@/components/layout";
import { CategoryCards } from "@/components/photography/category-cards";

export default function PhotographiePage() {
  return (
    <PageContainer>
      <section className="flex min-h-[44vh] flex-col items-center justify-center gap-5 py-16 text-center sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
          Portfolio photo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Photographie</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Une approche moderne et minimaliste pour raconter vos projets par l&apos;image :
          ambiance, mouvement, événementiel et produit.
        </p>
      </section>

      <section className="border-t border-border/60 py-14 sm:py-16">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Catégories</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Explorez chaque univers via des galeries dédiées.
          </p>
        </div>

        <CategoryCards />
      </section>
    </PageContainer>
  );
}
