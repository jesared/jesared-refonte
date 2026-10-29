import Link from "next/link";

import { Card } from "@/components/ui";
import { donationUrl } from "@/lib/donation";

export function SupportPassion() {
  return (
    <section className="border-t border-border/60 py-12 sm:py-14">
      <Card className="border-border/70 bg-card/80 p-6 shadow-sm sm:p-8">
        <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/75">
              Soutien facultatif
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Soutenir ma passion</h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Si mes projets vous plaisent, vous pouvez contribuer librement aux frais de logiciels et de matériel.
              Chaque don est facultatif et sans contrepartie. Merci pour votre soutien.
            </p>
          </div>
          <Link
            href={donationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Faire un don
          </Link>
        </div>
      </Card>
    </section>
  );
}
