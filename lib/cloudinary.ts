type CloudinaryTransform = {
  width?: number;
  height?: number;
  quality?: "auto" | number;
  format?: "auto" | "webp" | "avif" | "jpg" | "png";
  crop?: "fill" | "fit" | "scale" | "limit";
};

const DEFAULT_TRANSFORM: CloudinaryTransform = {
  quality: "auto",
  format: "auto",
  crop: "fill",
};

export function cloudinaryUrl(
  publicId: string,
  transform: CloudinaryTransform = {},
) {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

  if (publicId.startsWith("http") || publicId.startsWith("/")) {
    return publicId;
  }

  if (!cloudName) {
    return publicId;
  }

  const options = { ...DEFAULT_TRANSFORM, ...transform };
  const parts: string[] = [];

  if (options.width) parts.push(`w_${options.width}`);
  if (options.height) parts.push(`h_${options.height}`);
  if (options.crop) parts.push(`c_${options.crop}`);
  if (options.quality) parts.push(`q_${options.quality}`);
  if (options.format) parts.push(`f_${options.format}`);

  const transformation = parts.length ? `${parts.join(",")}/` : "";
  const normalizedId = publicId.replace(/^\/+/, "");

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformation}${normalizedId}`;
}
