import "server-only";

import { cloudinaryUrl } from "@/lib/cloudinary";

type CloudinaryResource = {
  public_id: string;
  created_at?: string;
};

type CloudinaryResponse = {
  resources: CloudinaryResource[];
  next_cursor?: string;
};

type CloudinarySortBy = "created_at" | "public_id";

type CloudinaryListOptions = {
  maxResults?: number;
  sortBy?: CloudinarySortBy;
  direction?: "asc" | "desc";
  revalidate?: number;
};

export async function listCloudinaryFolderImages(
  folder: string,
  {
    maxResults = 200,
    sortBy = "created_at",
    direction = "desc",
    revalidate = 600,
  }: CloudinaryListOptions = {},
) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    return [];
  }

  const auth = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  const resources: CloudinaryResource[] = [];
  let nextCursor: string | undefined;

  do {
    const params = new URLSearchParams({
      prefix: folder,
      max_results: String(Math.min(maxResults - resources.length, 100)),
      sort_by: sortBy,
      direction,
    });

    if (nextCursor) {
      params.set("next_cursor", nextCursor);
    }

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?${params.toString()}`,
      process.env.NODE_ENV === "development"
        ? {
            headers: {
              Authorization: `Basic ${auth}`,
            },
            cache: "no-store",
          }
        : {
            headers: {
              Authorization: `Basic ${auth}`,
            },
            next: { revalidate },
          },
    );

    if (!response.ok) {
      console.error(
        `[cloudinary] Failed to list ${folder}: ${response.status} ${response.statusText}`,
      );
      return [];
    }

    const data = (await response.json()) as CloudinaryResponse;
    resources.push(...data.resources);
    nextCursor = data.next_cursor;
  } while (nextCursor && resources.length < maxResults);

  return resources.map((resource) => ({
    src: cloudinaryUrl(resource.public_id, {
      width: 1800,
      quality: "auto",
      format: "auto",
    }),
    alt: resource.public_id.split("/").pop()?.replace(/[-_]/g, " ") ?? "Photo",
  }));
}
