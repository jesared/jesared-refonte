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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary/70">Portfolio photo</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Photographie</h1>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Un portfolio pensé pour raconter chaque univers visuel avec clarté : nuit, sport, événementiel et
              produit.
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
              Choisissez une galerie
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Chaque catégorie dispose de sa propre page avec un hero dédié, une grille responsive
              et un aperçu en plein écran.
            </p>
          </div>

          <CategoryCards previewsByCategory={previewsByCategory} />
        </section>
      </Reveal>
    </PageContainer>
  );
}