import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Reveal } from "@/components/ui";
import { cn } from "@/lib/utils";

const photoUnivers = [
  {
    title: "Événements",
    description:
      "Capter l’ambiance, les temps forts et les détails qui donnent une vraie mémoire à la journée.",
    href: "/photographie/evenement",
  },
  {
    title: "Sport",
    description:
      "Montrer l’intensité, le rythme et l’énergie du terrain avec des images lisibles et vivantes.",
    href: "/photographie/sport",
  },
  {
    title: "Famille",
    description:
      "Créer des images simples, spontanées et durables, centrées sur les liens et les présences.",
    href: "/photographie",
  },
];

const reperes = [
  {
    title: "Reportage sensible",
    description: "Une approche naturelle pour raconter sans figer ni surjouer.",
  },
  {
    title: "Événementiel",
    description: "Soirées, rencontres et temps forts à garder vivants.",
  },
  {
    title: "Sport",
    description: "Des images qui tiennent le rythme, l’effort et la tension du moment.",
  },
  {
    title: "Famille",
    description: "Des souvenirs sincères et durables, pensés pour traverser le temps.",
  },
];

const approche = [
  {
    title: "Observer",
    description: "Comprendre le rythme du moment, les personnes et ce qui doit ressortir sans le forcer.",
  },
  {
    title: "Cadrer",
    description: "Chercher une image nette dans l’émotion, avec une vraie lisibilité du geste et de la présence.",
  },
  {
    title: "Raconter",
    description: "Construire une série d’images qui garde une ambiance, une énergie et une mémoire durable.",
  },
];

const labs = [
  {
    title: "Trophée François Grieder",
    description:
      "Un site dédié au tournoi, avec les informations utiles aux joueurs et aux clubs participants.",
    href: "/labs/tropheefg",
    image: "/labs/tfg-home.png",
  },
  {
    title: "CCTT Club",
    description:
      "Un site de club pour retrouver les actualités, les informations pratiques et la vie associative.",
    href: "/labs/cctt-club",
    image: "/labs/cctt-home.png",
  },
  {
    title: "Olympique Remois TT",
    description:
      "Un site clair pour présenter le club, ses activités et ses actualités.",
    href: "/labs/ortt",
    image: "/labs/ortt-home.png",
  },
  {
    title: "CD51TT",
    description:
      "Le site du Comité de la Marne de tennis de table : actualités, compétitions, clubs et documents utiles.",
    href: "/labs/cd51tt",
    image: "/labs/cd51tt.png",
  },
  {
    title: "Cham'élo Couture",
    description:
      "Un site vitrine pour découvrir les retouches, les cours de couture et les broderies de l’atelier.",
    href: "/labs/chamelo-couture",
    image: "/labs/chamelo-couture.png",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <PageContainer>
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal delay={0}>
              <div className="space-y-9 lg:pr-12 lg:pt-10">
                <div className="space-y-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/78">
                    Photographie & web, par passion
                  </p>

                  <div className="space-y-3">
                    <p className="text-4xl leading-none tracking-tight sm:text-5xl lg:text-[4.3rem] [font-family:var(--font-display)]">
                      J&eacute;r&ocirc;me Henry
                    </p>
                    <p className="text-sm font-medium tracking-[0.08em] text-foreground/62">
                      Passionn&eacute; de photographie et de cr&eacute;ation web
                    </p>
                  </div>

                  <h1 className="max-w-md text-2xl leading-snug tracking-tight text-foreground/88 sm:text-3xl lg:text-[2.3rem] [font-family:var(--font-display)]">
                    Deux passions, un même goût pour l’image et la création.
                  </h1>

                  <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Je photographie sur mon temps libre et je conçois des projets web par hobby. Je partage ici
                    mes images et quelques réalisations web.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/labs"
                    className={cn(
                      "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    Voir mes projets web
                  </Link>
                  <Link
                    href="/photographie"
                    className={cn(
                      "inline-flex items-center text-sm font-medium text-foreground/74 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:text-primary"
                    )}
                  >
                    Voir les galeries photo
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {labs.slice(-2).map((projet) => (
                  <Link
                    key={projet.title}
                    href={projet.href}
                    className="group overflow-hidden rounded-[1.75rem] border border-border/70 bg-card shadow-sm transition-transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={projet.image}
                        alt={`Aperçu du projet ${projet.title}`}
                        fill
                        className={`${projet.title === "CD51TT" ? "bg-white object-contain p-4" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.04]`}
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        priority
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/75">
                        Projet web
                      </p>
                      <h2 className="mt-2 text-lg font-semibold leading-snug sm:text-xl">{projet.title}</h2>
                      <p className="mt-2 text-sm text-muted-foreground">Découvrir le projet <span aria-hidden="true">→</span></p>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {reperes.map((repere, index) => (
                <Reveal key={repere.title} delay={index * 70}>
                  <div className="rounded-[1.35rem] border border-border/65 bg-background/85 p-5">
                    <p className="text-sm font-semibold text-foreground">{repere.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{repere.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal delay={120}>
          <section className="border-t border-border/60 py-16 sm:py-20">
            <div className="mb-8 max-w-3xl space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">Projets web</p>
              <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl [font-family:var(--font-display)]">
                Des réalisations concrètes, faites par passion.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Le web est aussi un hobby : voici des sites et projets que j&apos;ai conçus par curiosité et intérêt
                pour le design, les clubs et les expériences utiles.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {labs.map((projet, index) => (
                <Reveal key={projet.title} delay={index * 70}>
                  <Card className="panel-glass group h-full overflow-hidden border-border/60 py-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={projet.image}
                        alt={`Aperçu du projet ${projet.title}`}
                        fill
                        className={`${projet.title === "CD51TT" ? "bg-white object-contain p-5" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`}
                        sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="bg-card p-6">
                      <CardHeader className="space-y-3 px-0">
                        <CardTitle className="text-2xl leading-tight [font-family:var(--font-display)]">
                          {projet.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed sm:text-base">
                          {projet.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-0 pt-4">
                        <Link
                          href={projet.href}
                          className="inline-flex items-center text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary"
                        >
                          Découvrir le projet <span className="ml-1" aria-hidden="true">→</span>
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/labs"
                className="inline-flex h-11 items-center justify-center rounded-full border border-border bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Voir tous les projets web
              </Link>
            </div>
          </section>
        </Reveal>

        <Reveal delay={140}>
          <section className="border-t border-border/60 py-16 sm:py-20">
            <div className="mb-8 max-w-3xl space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">Univers photo</p>
              <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl [font-family:var(--font-display)]">
                Trois univers, une même exigence de regard.
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Que je photographie un événement, un moment sportif ou une scène du quotidien, je cherche des images
                qui racontent sans surjouer : une énergie, une présence, une atmosphère, un lien.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {photoUnivers.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <Card className="panel-glass group h-full border-border/60 py-0">
                    <div className="h-full bg-card p-6">
                      <CardHeader className="space-y-3 px-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/75">
                          0{index + 1}
                        </p>
                        <CardTitle className="text-2xl [font-family:var(--font-display)]">{item.title}</CardTitle>
                        <CardDescription className="text-sm leading-relaxed sm:text-base">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-0 pt-4">
                        <Link
                          href={item.href}
                          className="inline-flex items-center text-sm font-medium text-foreground/80 transition-colors group-hover:text-primary"
                        >
                          Voir la galerie
                        </Link>
                      </CardContent>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={160}>
          <section className="border-t border-border/60 py-16 sm:py-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">Approche</p>
                <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl [font-family:var(--font-display)]">
                  Une photographie vivante, lisible et sensible.
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Je cherche des images qui racontent sans surjouer. Un geste, une lumière, une présence, une
                  tension, un calme : chaque série doit garder quelque chose de vrai, sans rigidité ni effet forcé.
                </p>
              </div>

              <div className="panel-glass overflow-hidden rounded-[2rem] p-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/photos/discotheque/photo1.jpg"
                    alt="Ambiance reportage"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 xl:grid-cols-3">
              {approche.map((etape, index) => (
                <Reveal key={etape.title} delay={index * 80}>
                  <div className="timeline-card rounded-[1.6rem] p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/80">
                      0{index + 1}
                    </p>
                    <h3 className="mt-4 text-3xl leading-tight tracking-tight [font-family:var(--font-display)]">
                      {etape.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {etape.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={200}>
          <section className="py-16 sm:py-20">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-border/70 bg-card p-8 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.38)] sm:p-12">
              <div className="relative grid items-center gap-8 lg:grid-cols-[1.18fr_0.82fr]">
                <div className="space-y-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-primary/70">Contact</p>
                  <h2 className="text-4xl leading-tight tracking-tight sm:text-5xl [font-family:var(--font-display)]">
                    La photo est une passion que j’aime partager.
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Événements, sport, instants du quotidien : je partage ici les images que je prends par plaisir,
                    au fil des rencontres et des occasions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="metric-card rounded-[1.7rem] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/80">Une passion personnelle</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">
                      Je photographie sur mon temps libre, sans activité commerciale ni prestation.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className={cn(
                        "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cta-pulse",
                        "bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      Échanger
                    </Link>
                    <Link
                      href="/photographie"
                      className={cn(
                        "inline-flex h-11 items-center justify-center rounded-full border bg-background px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        "hover:bg-accent hover:text-accent-foreground"
                      )}
                    >
                      Voir les galeries
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>
      </PageContainer>
    </div>
  );
}
