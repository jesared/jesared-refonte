import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui";
import { photographyCategories } from "@/lib/photography-data";

export function CategoryCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {photographyCategories.map((category) => (
        <Link
          key={category.slug}
          href={`/photographie/${category.slug}`}
          className="group block focus-visible:outline-none"
        >
          <Card className="h-full overflow-hidden border-border/70 py-0 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-focus-visible:ring-2 group-focus-visible:ring-ring">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={category.coverImage}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 1280px) 23vw, (min-width: 640px) 45vw, 100vw"
              />
            </div>
            <CardContent className="flex h-full flex-col gap-3 py-6">
              <CardTitle className="text-2xl">{category.title}</CardTitle>
              <CardDescription className="text-sm leading-relaxed sm:text-base">
                {category.description}
              </CardDescription>
              <span className="mt-auto text-sm font-medium text-primary">Voir la galerie →</span>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
