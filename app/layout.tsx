import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site vitrine",
  description: "Base Next.js propre et évolutive pour un site vitrine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
