import Link from "next/link";

import { PageContainer } from "@/components/layout";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui";

const categories = [
  {
    title: "Discothèque",
    description:
      "Ambiances nocturnes, jeux de lumières et énergie de la piste capturés dans des séries intenses.",
    href: "/photographie/discotheque",
  },
  {
    title: "Sport",
    description:
      "Instants d'action, concentration et mouvement pour valoriser la performance et l'émotion.",
    href: "/photographie/sport",
  },
  {
    title: "Événements",
    description:
      "Reportages visuels pour immortaliser les moments clés de vos soirées, cérémonies et lancements.",
    href: "/photographie/evenements",
  },
  {
    title: "Produits",
    description:
      "Images propres et soignées conçues pour sublimer vos objets, marques et campagnes.",
    href: "/photographie/produits",
  },
];

export default function PhotographiePage() {
  return (
    <PageContainer>
      <section className="flex min-h-[48vh] flex-col items-center justify-center gap-5 py-16 text-center sm:py-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
          Portfolio photo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Photographie</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Un univers visuel minimaliste, centré sur la lumière, l&apos;émotion et des compositions
          nettes pour raconter chaque histoire avec élégance.
        </p>
      </section>

      <section className="border-t border-border/60 py-14 sm:py-16">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Catégories</h2>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">
            Explorez les différentes facettes de mon travail photographique.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {categories.map((category) => (
            <Link key={category.title} href={category.href} className="group block focus-visible:outline-none">
              <Card className="h-full border-border/70 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-md group-focus-visible:ring-2 group-focus-visible:ring-ring">
                <CardHeader className="space-y-3">
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
