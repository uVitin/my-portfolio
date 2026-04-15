import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Albert Vitor - Full Stack Developer",
  description: "Portfolio de Albert Vitor, desenvolvedor full stack especializado em React, Next.js, Node.js e experiências web modernas.",
  openGraph: {
    title: "Albert Vitor - Full Stack Developer",
    description: "Construindo experiências digitais que importam.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
};