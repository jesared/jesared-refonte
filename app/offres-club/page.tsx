import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const pricingTiers = [
  {
    name: "Essentiel",
    price: "250€ + 150€/an (≈12€/mois)",
    accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    features: ["Site moderne", "Pages principales", "Maintenance", "Support"],
  },
  {
    name: "Club",
    price: "350€ + 200€/an (≈17€/mois)",
    accent: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    features: [
      "Tout Essentiel",
      "Actualités",
      "Galerie photos",
      "Évolutions régulières",
    ],
    highlight: true,
  },
  {
    name: "Performance",
    price: "600€ + 300€/an (≈25€/mois)",
    accent: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    features: ["Tout Club", "Gestion tournoi", "Inscriptions", "UX premium"],
  },
];

export default function OffresClubPage() {
  return (
    <main className="space-y-24 py-16 sm:py-20">
      <PageContainer>
        <section className="flex flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
            Création de site club
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Un site web moderne pour votre club
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Simple, fiable et évolutif dans le temps
          </p>
          <div className="mt-8">
            <Link
              href="#offres"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Voir les offres
            </Link>
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <section className="grid gap-10 md:grid-cols-[1.1fr_1.3fr] md:items-center">
          <div className="space-y-4">
            <SectionTitle overline="Problème">
              Des sites trop souvent dépassés
            </SectionTitle>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Aujourd’hui, beaucoup de clubs ont des sites peu mis à jour ou
              difficiles à gérer.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Site obsolète", "Gestion compliquée", "Manque de fiabilité"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border/70 bg-card p-4 text-sm font-medium shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  {item}
                </div>
              ),
            )}
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <section className="grid gap-10">
          <SectionTitle overline="Solution">
            Une solution clé en main
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Site moderne", "Gestion simplifiée", "Évolutif"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-card p-5 text-base font-medium shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <section id="offres" className="space-y-10">
          <div className="text-center">
            <SectionTitle overline="Offres">
              Choisissez la formule adaptée
            </SectionTitle>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Trois niveaux pour s’adapter au rythme et aux ambitions de votre
              club.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className="rounded-2xl border border-border/70 bg-card/80 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    {tier.highlight ? (
                      <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        Recommandé
                      </span>
                    ) : null}
                  </div>
                  <p className="text-2xl font-semibold">{tier.price}</p>
                  <span
                    className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold ${tier.accent}`}
                  >
                    {tier.name}
                  </span>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">
                    Choisir {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <section className="grid gap-10 md:grid-cols-[1.1fr_1.3fr] md:items-center">
          <div className="space-y-4">
            <SectionTitle overline="Fonctionnement">
              Vous vous concentrez sur le club, je m’occupe du site
            </SectionTitle>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Un accompagnement durable pour un site toujours fiable, sécurisé
              et à jour.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Maintenance incluse", "Sécurité", "Évolutions"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-card p-4 text-sm font-medium shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                {item}
              </div>
            ))}
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <section className="rounded-3xl border border-border/70 bg-card/80 px-8 py-12 text-center shadow-lg">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Discutons de votre projet
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Un audit rapide de votre club et une proposition claire sous 48h.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Me contacter
            </Link>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
