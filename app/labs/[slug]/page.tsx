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
      <section className="relative overflow-hidden py-14 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(14,116,144,0.18),transparent_55%)]" />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
            Projet Lab
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {project.longDescription}
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
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
        <SectionTitle overline="Écrans">Images & captures</SectionTitle>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {project.images
            .filter((image, index, list) => list.findIndex((item) => item.src === image.src) === index)
            .map((image) => (
            <div
              key={`${project.slug}-${image.src}`}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-card"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 640px) 50vw, 100vw" />
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
