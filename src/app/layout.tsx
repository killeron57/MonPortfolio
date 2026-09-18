import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Créé avec Next.js et Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}