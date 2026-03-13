import { PageContainer } from "@/components/layout";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  SectionTitle,
} from "@/components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <PageContainer>
        <section className="flex flex-col gap-8 py-24">
          <SectionTitle overline="Base projet">
            Une fondation Next.js propre, simple et prête pour la suite.
          </SectionTitle>

          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            On ajoute uniquement les briques essentielles de shadcn/ui pour démarrer:
            <strong> button</strong> et <strong>card</strong>. Les composants
            <strong> sheet</strong> et <strong>dialog</strong> seront ajoutés plus tard,
            seulement si un vrai besoin apparaît.
          </p>

          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>UI minimale et maintenable</CardTitle>
              <CardDescription>
                Cette base reste volontairement légère pour éviter la dette UI inutile.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                La suite sera ajoutée au fur et à mesure des écrans réellement conçus.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Continuer la refonte</Button>
            </CardFooter>
          </Card>
        </section>
      </PageContainer>
    </main>
  );
}
