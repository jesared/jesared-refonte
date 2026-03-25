import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, SectionTitle, Reveal } from "@/components/ui";
import { cn } from "@/lib/utils";
import { labProjects } from "@/lib/labs-data";

export default function LabsPage() {
  return (
    <PageContainer>
      <Reveal>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">Labs</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Labs</h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Cette section présente mes projets, expérimentations et outils web.
            </p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="border-t border-border/60 py-14 sm:py-16">
          <SectionTitle overline="Projets">Projets & expérimentations</SectionTitle>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {labProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 80}>
                <Card className="group flex h-full flex-col overflow-hidden border-border/70 card-hover">
                  <div className="relative h-40 overflow-hidden image-reveal">
                    <Image
                      src={project.images[0]?.src ?? "/photographie/categories/produits.svg"}
                      alt={project.images[0]?.alt ?? `Aperçu du projet ${project.title}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/5"
                      aria-hidden="true"
                    />
                  </div>
                  <CardHeader className="space-y-3">
                    <CardTitle className="text-xl leading-snug">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed sm:text-base">
                      {project.shortDescription}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="badge-accent rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {project.dates}
                    </p>
                    <Link
                      href={`/labs/${project.slug}`}
                      className={cn(
                        "inline-flex h-9 w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:w-auto",
                        "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      Voir le projet
                    </Link>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>
    </PageContainer>
  );
}
