import { PageContainer } from "@/components/layout";
import { GalleryMasonry } from "@/components/gallery/GalleryMasonry";
import type { PhotoItem } from "@/lib/photography-data";

type GalleryPageProps = {
  title: string;
  description: string;
  photos: PhotoItem[];
  stats?: { label: string; value: string }[];
};

export function GalleryPage({ title, description, photos, stats = [] }: GalleryPageProps) {
  return (
    <PageContainer>
      <section className="grid gap-10 py-14 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Portfolio photo</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
        </div>
        {stats.length ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border/70 bg-card p-4 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">
                  {stat.label}
                </p>
                <p className="mt-2 text-lg font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <section className="border-t border-border/60 py-12 sm:py-14">
        <GalleryMasonry photos={photos} />
      </section>
    </PageContainer>
  );
}
