import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";
import { cn } from "@/lib/utils";

const univers = [
  {
    title: "Photographie",
    description:
      "Séries photo et reportages visuels pour raconter des histoires sensibles et lumineuses.",
    href: "/photographie",
  },
  {
    title: "Labs",
    description:
      "Découvrez mes projets web, expérimentations et outils construits pour des expériences fluides.",
    href: "/labs",
  },
  {
    title: "Contact",
    description:
      "Parlons de votre idée, d'une collaboration ou d'un besoin en création de site moderne.",
    href: "/contact",
  },
];

const projetsRecents = [
  {
    title: "CCTT Club",
    description: "Site club complet avec actualités, infos pratiques et vie associative.",
    href: "/labs/cctt-club",
    image: "/labs/cctt-home.png",
  },
  {
    title: "Olympique Remois TT",
    description: "Site moderne et clair pour valoriser le club et ses activités.",
    href: "/labs/ortt",
    image: "/labs/ortt-home.png",
  },
  {
    title: "Trophée François Grieder",
    description: "Refonte du site du tournoi et outils pour simplifier l'organisation.",
    href: "/labs/tropheefg",
    image: "/labs/tfg-home.png",
  },
];

const services = [
  {
    title: "Direction artistique",
    description: "Des identités élégantes et cohérentes, pensées pour durer.",
  },
  {
    title: "Design & expérience",
    description: "Des parcours clairs, des interactions fluides et une hiérarchie solide.",
  },
  {
    title: "Développement web",
    description: "Des sites rapides, fiables et optimisés pour le référencement.",
  },
];

const principes = [
  {
    title: "Clarté radicale",
    description: "Chaque écran doit guider l’utilisateur sans friction ni bruit visuel.",
  },
  {
    title: "Émotion maîtrisée",
    description: "Des contrastes subtils et une typographie expressive pour marquer les esprits.",
  },
  {
    title: "Performance réelle",
    description: "Optimisations techniques et contenus ciblés pour des pages qui convertissent.",
  },
];

export default function Home() {
  return (
    <div className="relative">
      <PageContainer>
        <section className="relative py-16 sm:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col gap-6 text-left fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">
                Studio digital
              </p>

              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Des expériences digitales modernes, élégantes et pensées pour durer.
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Je conçois des univers visuels minimalistes qui mettent vos idées au centre,
                avec une navigation fluide sur tous les écrans.
              </p>

              <div className="flex flex-wrap items-center gap-2">
                {[
                  "UI/UX",
                  "Design éditorial",
                  "Web performant",
                ].map((label) => (
                  <span
                    key={label}
                    className="badge-accent rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/labs"
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Explorer les projets
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  Discuter d’un projet
                </Link>
              </div>
            </div>

            <div className="relative fade-up fade-up-delay-2">
              <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-sm card-hover">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
                  Focus du mois
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                  Trophée François Grieder
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Refonte d’un portail sportif avec un agenda clair, des inscriptions simplifiées et des tableaux
                  intelligents.
                </p>
                <div className="mt-4 overflow-hidden rounded-2xl border border-border/60">
                  <Image
                    src="/labs/tfg-home.png"
                    alt="Aperçu du site Trophée François Grieder"
                    width={640}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>
                <Link
                  href="/labs/tropheefg"
                  className="mt-4 inline-flex items-center text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                >
                  Voir le projet →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 border-y border-border/60 py-14 sm:grid-cols-2 sm:gap-8 fade-up">
          <div className="space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">Manifeste</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Des univers lisibles, sensibles et efficaces.
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground sm:pt-6">
            Je travaille entre direction artistique et exécution technique, avec une obsession pour la clarté :
            moins d’écrans, plus d’impact. L’objectif est d’offrir des parcours fluides, esthétiques et réellement
            utiles.
          </p>
        </section>

        <section className="py-14 sm:py-16 fade-up">
          <div className="mb-8 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">Services</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Ce que je construis
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={cn(
                  "border-border/70 card-hover",
                  index === 0 && "fade-up",
                  index === 1 && "fade-up fade-up-delay-1",
                  index === 2 && "fade-up fade-up-delay-2"
                )}
              >
                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-14 sm:py-16 fade-up">
          <div className="mb-8 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">Univers</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Découvrez mes univers
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {univers.map((item, index) => (
              <Card
                key={item.title}
                className={cn(
                  "group border-border/70 card-hover",
                  index === 0 && "fade-up",
                  index === 1 && "fade-up fade-up-delay-1",
                  index === 2 && "fade-up fade-up-delay-2"
                )}
              >
                <CardHeader className="space-y-3">
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                <Link
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary"
                >
                  Voir l’univers →
                </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 py-14 sm:py-16 fade-up">
          <div className="mb-8 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
              Projets récents
            </p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Une sélection de réalisations récentes.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projetsRecents.map((projet, index) => (
              <Card
                key={projet.title}
                className={cn(
                  "group overflow-hidden border-border/70 card-hover",
                  index === 0 && "fade-up",
                  index === 1 && "fade-up fade-up-delay-1",
                  index === 2 && "fade-up fade-up-delay-2"
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={projet.image}
                    alt={`Aperçu du projet ${projet.title}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl leading-snug">{projet.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {projet.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={projet.href}
                    className={cn(
                      "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    Voir le projet
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 py-14 sm:py-16 fade-up">
          <div className="mb-8 space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">Principes</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Ce qui guide chaque projet
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principes.map((principe, index) => (
              <Card
                key={principe.title}
                className={cn(
                  "border-border/70 card-hover",
                  index === 0 && "fade-up",
                  index === 1 && "fade-up fade-up-delay-1",
                  index === 2 && "fade-up fade-up-delay-2"
                )}
              >
                <CardHeader className="space-y-3">
                  <CardTitle className="text-xl">{principe.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed sm:text-base">
                    {principe.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        <section className="border-t border-border/60 py-14 sm:py-16 fade-up">
          <div className="grid items-center gap-8 rounded-3xl border border-border/70 bg-card p-8 shadow-sm sm:p-12 lg:grid-cols-[1.2fr_0.8fr] card-hover">
            <div className="space-y-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">
                Projet en tête
              </p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Une nouvelle refonte, une identité claire et une présence digitale solide.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Parlons de votre objectif, du rythme et des contraintes. Je propose une approche directe,
                structurée et orientée résultat.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-md px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
              >
                Démarrer un projet
              </Link>
              <Link
                href="/labs"
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  "hover:bg-accent hover:text-accent-foreground"
                )}
              >
                Voir les projets
              </Link>
            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}
