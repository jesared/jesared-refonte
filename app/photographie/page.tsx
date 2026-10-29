import { PageContainer } from "@/components/layout";
import { CategoryCards } from "@/components/photography/category-cards";
import { Reveal } from "@/components/ui";
import {
  galleryByCategory,
  getGalleryFolderByCategory,
  photographyCategories,
} from "@/lib/photography-data";
import { listCloudinaryFolderImages } from "@/lib/cloudinary-server";

export default async function PhotographiePage() {
  const totalPhotos = Object.values(galleryByCategory).reduce((acc, photos) => acc + photos.length, 0);
  const previewPromises = photographyCategories.map(async (category) => {
    const folder = getGalleryFolderByCategory(category.slug);
    const previews = folder
      ? await listCloudinaryFolderImages(folder, { maxResults: 3, sortBy: "created_at", direction: "desc" })
      : [];
    return [category.slug, previews] as const;
  });
  const previewsByCategory = Object.fromEntries(await Promise.all(previewPromises));

  return (
    <PageContainer>
      <Reveal>
        <section className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Photographie par passion</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Photographie</h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              La photographie est un loisir qui me passionne. Je partage ici mes images de nuit, de sport,
              d&apos;événements et quelques compositions personnelles.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-border/70 bg-card p-4 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">Catégories</p>
                <p className="mt-2 text-lg font-semibold">{photographyCategories.length} univers</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl border border-border/70 bg-card p-4 shadow-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary/70">Images</p>
                <p className="mt-2 text-lg font-semibold">{totalPhotos} sélections</p>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>

      <Reveal delay={120}>
        <section className="border-t border-border/60 py-14 sm:py-16">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Parcourir les galeries
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Retrouvez les photos qui me tiennent à cœur, classées par univers.
            </p>
          </div>

          <CategoryCards previewsByCategory={previewsByCategory} />
        </section>
      </Reveal>
    </PageContainer>
  );
}
