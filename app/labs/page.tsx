import Link from "next/link";

import { PageContainer } from "@/components/layout";
import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, SectionTitle } from "@/components/ui";

const projects = [
  {
    title: "PingQuest",
    description: "Plateforme moderne pour la gestion de tournois.",
    href: "/contact",
  },
  {
    title: "Trophée François Grieder",
    description: "Refonte du site et outils pour le tournoi.",
    href: "/photographie",
  },
  {
    title: "Cham'élo Couture",
    description: "Création d’un site vitrine moderne.",
    href: "/contact",
  },
];

export default function LabsPage() {
  return (
    <PageContainer>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Labs</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Labs</h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Cette section présente mes projets, expérimentations et outils web.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 py-14 sm:py-16">
        <SectionTitle overline="Projets">Projets & expérimentations</SectionTitle>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex h-full flex-col overflow-hidden border-border/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="h-28 bg-gradient-to-br from-primary/20 via-transparent to-primary/5" aria-hidden="true" />
              <CardHeader className="space-y-3">
                <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed sm:text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild className="w-full sm:w-auto">
                  <Link href={project.href}>Voir le projet</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
