import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import { PageContainer } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle, Reveal } from "@/components/ui";

const paypalDonateUrl =
  process.env.NEXT_PUBLIC_PAYPAL_DONATE_URL ??
  "https://www.paypal.com/donate?hosted_button_id=7X4G2TKAQC2Q4";

export const metadata: Metadata = {
  title: "Acces clients",
  description: "Retrouvez les galeries photo publiques et privees, avec telechargement libre et soutien PayPal.",
};

export default function AccesClientsPage() {
  return (
    <PageContainer>
      <Reveal>
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl space-y-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Galeries photo</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Acces clients</h1>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              L&apos;ensemble des photos est disponible ici, avec des galeries publiques et des galeries privees selon
              les reportages. Les images peuvent etre proposees en telechargement libre, avec un soutien PayPal
              possible pour celles et ceux qui souhaitent encourager ce travail.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="#galeries-publiques"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Voir les galeries
              </Link>
              <Link
                href={paypalDonateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md border bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Faire un don PayPal
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal delay={80}>
        <section className="grid gap-4 border-t border-border/60 py-12 sm:grid-cols-3 sm:py-14">
          <div className="rounded-2xl border border-border/70 bg-card/95 p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">Public</p>
            <p className="mt-2 text-lg font-semibold">Galeries visibles par tous</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">Prive</p>
            <p className="mt-2 text-lg font-semibold">Galeries reservees aux clients</p>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card/95 p-5 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">Telechargement</p>
            <p className="mt-2 text-lg font-semibold">Photos disponibles selon le reportage</p>
          </div>
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="border-t border-border/60 py-12 sm:py-16" id="galeries-publiques">
          <Card className="border-border/70 bg-card/95">
            <CardHeader className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                Galeries JINGOO
              </p>
              <CardTitle className="text-2xl tracking-tight sm:text-3xl">Acces aux galeries publiques et privees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-2xl border border-border/70 bg-background/60 px-4 py-6 sm:px-6">
                <div id="jingooGallery" className="min-h-24" />
              </div>
              <Script id="jingoo-gallery-loader" strategy="afterInteractive">
                {`(function(i,s,o,g,r,a,m){i['JingooGalleryObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script',"https://www.jingoo.com/api/accesDistant/Am4AZlQGUGNdOlcjUjoAYQl8XDgGJQRvCWVSOAtlDGZXZAUwCzlVN11mV3EBZ1I3USJdMQY6BGkBNVJpDzxbdQJzAFBUM1B7XTpXJVIh.js",'JingooGalleryLoader');`}
              </Script>
            </CardContent>
          </Card>
        </section>
      </Reveal>

      <Reveal delay={180}>
        <section className="border-t border-border/60 py-12 sm:py-16">
          <div className="rounded-3xl border border-border/70 bg-card/95 p-8 text-center shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">Soutien</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Soutenir la mise a disposition des photos
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Si les photos te plaisent et que tu les utilises, tu peux faire un don selon tes moyens. Cela aide a
              continuer a produire du contenu de qualite et a le proposer librement.
            </p>
            <div className="mt-6">
              <Link
                href={paypalDonateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Faire un don sur PayPal
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </PageContainer>
  );
}
