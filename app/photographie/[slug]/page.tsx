import { notFound } from "next/navigation";

import { PageContainer } from "@/components/layout";
import { PhotoGallery } from "@/components/photography/photo-gallery";
import { galleryByCategory, getPhotographyCategory, photographyCategories } from "@/lib/photography-data";

type CategoryPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return photographyCategories.map((category) => ({ slug: category.slug }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const category = getPhotographyCategory(slug);

  if (!category) {
    notFound();
  }

  const photos = galleryByCategory[category.slug];

  return (
    <PageContainer>
      <section className="flex min-h-[36vh] flex-col items-center justify-center gap-4 py-14 text-center sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
          Portfolio photo
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{category.title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {category.heroDescription}
        </p>
      </section>

      <section className="border-t border-border/60 py-12 sm:py-14">
        <PhotoGallery photos={photos} categoryName={category.title} />
      </section>
    </PageContainer>
  );
}
