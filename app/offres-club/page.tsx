import Link from "next/link";

import { PageContainer } from "@/components/layout/page-container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";

const pricingTiers = [
  {
    name: "Essentiel",
    price: "250€ + 150€/an (≈12€/mois)",
    priceNote: "Parfait pour démarrer",
    description: "Un site simple, propre et fiable",
    accent: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    features: ["Site moderne", "Pages principales", "Maintenance", "Support"],
    cta: "Choisir cette offre",
  },
  {
    name: "Club",
    price: "350€ + 200€/an (≈17€/mois)",
    priceNote: "Le meilleur équilibre",
    description: "Idéal pour un club actif",
    accent: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    features: ["Tout Essentiel", "Actualités", "Galerie photos", "Évolutions régulières"],
    highlight: true,
    badge: "Le plus choisi",
    cta: "Choisir cette offre",
  },
  {
    name: "Performance",
    price: "600€ + 300€/an (≈25€/mois)",
    priceNote: "Pour les clubs ambitieux",
    description: "Pensé pour les clubs organisateurs",
    accent: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    features: ["Tout Club", "Gestion tournoi", "Inscriptions", "UX premium"],
    cta: "Discuter de mon projet",
  },
];

const problemPoints = [
  "Site jamais mis à jour",
  "Gestion compliquée",
  "Dépendance à une seule personne",
  "Manque de fiabilité",
];

const differentiationPoints = [
  {
    title: "Projets réels",
    description: "Expérience sur des clubs et tournois concrets, pas de théorie.",
  },
  {
    title: "Besoins spécifiques",
    description: "Calendriers, actus, licences, résultats : je connais vos priorités.",
  },
  {
    title: "Tournois & inscriptions",
    description: "Possibilité d’aller plus loin avec une gestion dédiée.",
  },
];

const steps = [
  "Création du site",
  "Mise en ligne",
  "Suivi et évolutions",
];

export default function OffresClubPage() {
  return (
    <main className="space-y-24 py-16 sm:py-20">
      <PageContainer>
        <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
            Création de site club
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Un site moderne pour votre club, sans contrainte technique
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Je m’occupe de toute la partie technique. Vous vous concentrez sur votre club.
          </p>
          <div className="mt-8">
            <Link
              href="#offres"
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Discuter de votre projet
            </Link>
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <section className="grid gap-10">
          <div className="max-w-2xl">
            <SectionTitle overline="Problème">
              Un problème que rencontrent beaucoup de clubs
            </SectionTitle>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemPoints.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm font-medium text-foreground/80 shadow-sm transition-transform duration-300 hover:-translate-y-1"
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
            <SectionTitle overline="Offres">Choisissez la formule adaptée</SectionTitle>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Trois niveaux pour s’adapter au rythme et aux ambitions de votre club.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={
                  "relative rounded-2xl border border-border/70 bg-card/80 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                }
              >
                {tier.highlight ? (
                  <span className="absolute -top-3 left-6 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {tier.badge}
                  </span>
                ) : null}
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                  </div>
                  <p className="text-2xl font-semibold">{tier.price}</p>
                  <p className="text-sm font-medium text-primary/80">{tier.priceNote}</p>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
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
                  <Button className="w-full rounded-full transition-transform duration-300 hover:-translate-y-0.5">
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <section className="grid gap-10">
          <SectionTitle overline="Différenciation">
            Spécialisé dans les clubs de tennis de table
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {differentiationPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </PageContainer>

      <PageContainer>
        <section className="grid gap-10">
          <SectionTitle overline="Fonctionnement">Comment ça fonctionne ?</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-border/70 bg-card p-5 text-sm font-medium shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                  Étape {index + 1}
                </p>
                <p className="mt-3 text-base font-semibold">{item}</p>
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
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Me contacter
            </Link>
          </div>
        </section>
      </PageContainer>
    </main>
  );
}
