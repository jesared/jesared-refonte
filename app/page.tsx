import { PageContainer } from "@/components/layout";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  SectionTitle,
} from "@/components/ui";

const univers = [
  {
    title: "Création web",
    description:
      "Sites vitrines, pages d'atterrissage et expériences web soignées pour valoriser les projets.",
    href: "#",
  },
  {
    title: "Design & identité",
    description:
      "Directions visuelles, interfaces et systèmes graphiques sobres, lisibles et cohérents.",
    href: "#",
  },
  {
    title: "Contenu & storytelling",
    description:
      "Formats éditoriaux et narrations pensées pour renforcer la clarté du message.",
    href: "#",
  },
  {
    title: "Veille & ressources",
    description:
      "Un hub personnel de notes, références et outils pour explorer de nouvelles idées.",
    href: "#",
  },
];

export default function Home() {
  return (
    <PageContainer>
      <section className="flex flex-col gap-6 py-16 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Hub personnel
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Construire des expériences digitales claires, élégantes et utiles.
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Bienvenue sur mon espace. Vous trouverez ici mes univers de création, mes
          travaux et les ressources qui nourrissent ma pratique.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button size="lg">Découvrir mes univers</Button>
          <Button size="lg" variant="outline">
            Me contacter
          </Button>
        </div>
      </section>

      <section id="photographie" className="grid gap-6 border-y border-border/60 py-14 sm:grid-cols-2 sm:gap-8">
        <SectionTitle overline="Photographie">Des images qui capturent l’émotion et la lumière.</SectionTitle>
        <p className="text-base leading-relaxed text-muted-foreground sm:pt-8">
          Cette homepage est conçue pour aller à l’essentiel : une identité visuelle
          sobre, une hiérarchie claire et des accès rapides vers chaque domaine.
          L’objectif est d’offrir une navigation fluide sur desktop comme sur mobile.
        </p>
      </section>

      <section id="projets" className="py-14 sm:py-16">
        <div className="mb-8">
          <SectionTitle overline="Projets">Explorez les réalisations en cours</SectionTitle>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
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
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground"
                >
                  Entrer dans cet univers →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
