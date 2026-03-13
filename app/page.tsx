import Link from "next/link";

import { PageContainer } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  SectionTitle,
} from "@/components/ui";
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
    title: "PingQuest",
    description:
      "Plateforme interactive dédiée au tennis de table avec une expérience claire sur tous les écrans.",
    href: "/labs",
  },
  {
    title: "Trophée François Grieder",
    description:
      "Refonte du site du tournoi et création d'outils web pour simplifier l'organisation.",
    href: "/labs",
  },
  {
    title: "Cham'élo Couture",
    description:
      "Site vitrine moderne pour valoriser les créations sur mesure avec une navigation épurée.",
    href: "/labs",
  },
];

export default function Home() {
  return (
    <PageContainer>
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-6 py-16 text-center sm:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Hub personnel
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Des expériences digitales modernes, élégantes et pensées pour durer.
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Je conçois des univers visuels minimalistes qui mettent vos idées au centre,
          avec une navigation fluide sur tous les écrans.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            href="/labs"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Voir mes projets
          </Link>
          <Link
            href="/contact"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              "hover:bg-accent hover:text-accent-foreground"
            )}
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="grid gap-6 border-y border-border/60 py-14 sm:grid-cols-2 sm:gap-8">
        <SectionTitle overline="Photographie">
          Des images qui capturent l’émotion et la lumière.
        </SectionTitle>
        <p className="text-base leading-relaxed text-muted-foreground sm:pt-8">
          Cette homepage est conçue pour aller à l’essentiel : une identité visuelle
          sobre, une hiérarchie claire et des accès rapides vers chaque domaine.
          L’objectif est d’offrir une navigation fluide sur desktop comme sur mobile.
        </p>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mb-8">
          <SectionTitle overline="Univers">Découvrez mes univers</SectionTitle>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {univers.map((item) => (
            <Card
              key={item.title}
              className="group border-border/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
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
                  className="inline-flex items-center text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground"
                >
                  Voir l’univers →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-14 sm:py-16">
        <div className="mb-8">
          <SectionTitle overline="Projets récents">
            Une sélection de réalisations récentes.
          </SectionTitle>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projetsRecents.map((projet) => (
            <Card key={projet.title} className="border-border/70">
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
    </PageContainer>
  );
}
