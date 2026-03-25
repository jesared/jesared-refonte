import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageContainer } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, SectionTitle } from "@/components/ui";
import { getLabProject, labProjects } from "@/lib/labs-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return labProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getLabProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageContainer>
      <section className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Projet Lab</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge-accent rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={project.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Visiter le site
              </Link>
              <Link
                href="/labs"
                className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Retour aux labs
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={project.images[0]?.src ?? "/photographie/categories/produits.svg"}
                alt={project.images[0]?.alt ?? `Aperçu ${project.title}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-14">
        <SectionTitle overline="Aperçu">Rôle, services et stack</SectionTitle>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Rôle / mission</CardTitle>
              <CardDescription>{project.role}</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Services</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {service}
                </span>
              ))}
            </CardContent>
          </Card>
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Stack technique</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-14">
        <SectionTitle overline="Points clés">Résultats & points forts</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.highlights.map((item) => (
            <Card key={item} className="border-border/70">
              <CardHeader>
                <CardDescription className="text-sm leading-relaxed sm:text-base">
                  {item}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-14">
        <SectionTitle overline="Résultats">Résultats chiffrés</SectionTitle>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.metrics.map((metric) => (
            <Card key={metric.label} className="border-border/70">
              <CardHeader className="space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                  {metric.label}
                </p>
                <CardTitle className="text-2xl">{metric.value}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-14">
        <SectionTitle overline="Timeline">Dates & livrables</SectionTitle>
        <div className="mt-8 space-y-6 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
          {project.timeline.map((step, index) => {
            const isActive = index === 0;
            const isLast = index === project.timeline.length - 1;

            return (
              <div key={`${step.title}-${index}`} className="relative pl-8 lg:pl-0 lg:pt-8">
                <span
                  className={`absolute left-0 top-2 h-3 w-3 rounded-full ${
                    isActive ? "bg-primary shadow-[0_0_0_6px_rgba(255,255,255,0.04)]" : "bg-primary/60"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className="absolute left-[5px] top-6 h-[calc(100%-12px)] w-px bg-border/70 lg:hidden"
                  aria-hidden="true"
                />
                {!isLast ? (
                  <span
                    className="absolute left-4 top-[14px] hidden h-px w-[calc(100%-1rem)] bg-border/70 lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                <div
                  className={`rounded-2xl border border-border/70 bg-card p-4 shadow-sm ${
                    isActive ? "ring-1 ring-primary/20" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/70">
                    <span
                      className={`inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/70 bg-background ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {index === 0 ? (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.25" />
                          <path d="M12 7.5l3.5 3.5-3.5 5-3.5-5z" fill="none" stroke="currentColor" strokeWidth="1.25" />
                        </svg>
                      ) : index === 1 ? (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                          <path
                            d="M4 16.5V20h3.5L18 9.5 14.5 6 4 16.5z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                          <path d="M13.5 7L17 10.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden="true">
                          <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="1.25" />
                          <path
                            d="M19 12a7 7 0 0 0-.1-1l2-1.2-1.8-3-2.2.8a7 7 0 0 0-1.4-.8l-.3-2.3H9.8L9.5 6.8a7 7 0 0 0-1.4.8l-2.2-.8-1.8 3 2 1.2a7 7 0 0 0 0 2l-2 1.2 1.8 3 2.2-.8c.4.3.9.6 1.4.8l.3 2.3h4.4l.3-2.3c.5-.2 1-.5 1.4-.8l2.2.8 1.8-3-2-1.2c.1-.3.1-.7.1-1z"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.25"
                          />
                        </svg>
                      )}
                    </span>
                    <span>{step.date}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-14">
        <SectionTitle overline="Écrans">Images & captures</SectionTitle>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.images
            .filter((image, index, list) => list.findIndex((item) => item.src === image.src) === index)
            .map((image) => (
              <div
                key={`${project.slug}-${image.src}`}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-card"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
            ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-14">
        <SectionTitle overline="Détails">Dates & lien</SectionTitle>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Dates</CardTitle>
              <CardDescription>{project.dates}</CardDescription>
            </CardHeader>
          </Card>
          <Card className="border-border/70">
            <CardHeader>
              <CardTitle>Lien</CardTitle>
              <CardDescription>
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground transition-colors hover:text-primary"
                >
                  {project.siteUrl}
                </a>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </PageContainer>
  );
}
