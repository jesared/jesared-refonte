import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jésared",
  description: "Base Next.js minimaliste pour une refonte moderne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
