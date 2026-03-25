import { notFound } from "next/navigation";

import { GalleryPage } from "@/components/photography/gallery-page";
import {
  getGalleryFolderByCategory,
  getGalleryPhotosByCategory,
  getPhotographyCategory,
  photographyCategories,
  galleryByCategory,
} from "@/lib/photography-data";
import { listCloudinaryFolderImages } from "@/lib/cloudinary-server";

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

  const fallbackPhotos = getGalleryPhotosByCategory(category.slug);
  const folder = getGalleryFolderByCategory(category.slug);
  const cloudinaryPhotos = folder ? await listCloudinaryFolderImages(folder) : [];
  const photos = cloudinaryPhotos.length ? cloudinaryPhotos : fallbackPhotos;
  const totalPhotos = cloudinaryPhotos.length || galleryByCategory[category.slug].length;

  return (
    <GalleryPage
      title={category.title}
      description={category.heroDescription}
      photos={photos}
      stats={[
        { label: "Images", value: `${totalPhotos} photos` },
        { label: "Catégorie", value: category.title },
        { label: "Sélection", value: "Portfolio éditorial" },
      ]}
    />
  );
}
