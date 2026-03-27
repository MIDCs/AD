import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://annadygulska.pl";

export const metadata: Metadata = {
  title: "Anna Dygulska | Portfolio Architektury i Urbanistyki",
  description:
    "Portfolio architektoniczne Anny Dygulskiej — studentki Politechniki Gdańskiej. Projekty architektoniczne, urbanistyka i wizualizacje 3D. Zobacz wybrane realizacje.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Anna Dygulska | Portfolio Architektury i Urbanistyki",
    description:
      "Portfolio architektoniczne Anny Dygulskiej — studentki Politechniki Gdańskiej. Projekty architektoniczne, urbanistyka i wizualizacje 3D. Zobacz wybrane realizacje.",
    url: siteUrl,
    siteName: "Anna Dygulska Portfolio",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/projects/artificium-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Anna Dygulska — Portfolio Architektury",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anna Dygulska | Portfolio Architektury",
    description:
      "Portfolio architektoniczne Anny Dygulskiej — projekty architektoniczne, urbanistyka i wizualizacje 3D. Zobacz wybrane realizacje.",
    images: ["/projects/artificium-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "Anna Dygulska",
      jobTitle: "Studentka Architektury",
      affiliation: {
        "@type": "CollegeOrUniversity",
        name: "Politechnika Gdańska",
        department: "Wydział Architektury",
      },
      knowsAbout: [
        "Architektura",
        "Urbanistyka",
        "Wizualizacje 3D",
        "Projektowanie architektoniczne",
      ],
      url: siteUrl,
    },
  };

  return (
    <html lang="pl" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased grain-overlay">
        {children}
      </body>
    </html>
  );
}
