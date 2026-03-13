import { notFound } from "next/navigation";

import { GalleryPage } from "@/components/photography/gallery-page";
import { galleryByCategory, getPhotographyCategory, photographyCategories } from "@/lib/photography-data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return photographyCategories.map((category) => ({ slug: category.slug }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getPhotographyCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <GalleryPage
      title={category.title}
      description={category.heroDescription}
      photos={galleryByCategory[category.slug]}
    />
  );
}
