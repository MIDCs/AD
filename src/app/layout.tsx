import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anna Dygulska | Portfolio Architektury",
  description: "Portfolio architektoniczne Anny Dygulskiej — studentki Politechniki Gdańskiej. Projekty architektoniczne, urbanistyka i wizualizacje.",
  keywords: ["architektura", "portfolio", "Politechnika Gdańska", "Anna Dygulska", "projekty architektoniczne", "urbanistyka"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body className="antialiased grain-overlay">
        {children}
      </body>
    </html>
  );
}
