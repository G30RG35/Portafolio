import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://g30rg35.github.io/Portafolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jorge Inostroza | Frontend Developer & Tech Lead (React & WordPress)",
    template: "%s | Jorge Inostroza",
  },
  description:
    "Portafolio profesional de Jorge Inostroza. Ingeniero en Desarrollo de Software y Tech Lead con 4+ años de experiencia creando arquitecturas escalables en React.js y soluciones CMS en WordPress.",
  keywords: [
    "Jorge Inostroza",
    "Frontend Developer",
    "Tech Lead",
    "React.js Developer",
    "WordPress Specialist",
    "Desarrollador Web",
    "Ingeniero de Software",
    "Next.js",
    "TypeScript",
    "WooCommerce",
    "Tailwind CSS",
  ],
  authors: [{ name: "Jorge Inostroza", url: siteUrl }],
  creator: "Jorge Inostroza",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Jorge Inostroza | Frontend Developer & Tech Lead (React & WordPress)",
    description:
      "Arquitecturas escalables en React.js y ecosistemas web empresariales autoadministrables en WordPress. Conoce mis proyectos y experiencia técnica.",
    url: siteUrl,
    siteName: "Portafolio Jorge Inostroza",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/projects/evoluciona.webp`,
        width: 1200,
        height: 630,
        alt: "Portafolio Jorge Inostroza - Frontend Developer & Tech Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jorge Inostroza | Frontend Developer & Tech Lead",
    description:
      "Ingeniero de Software especializado en React.js y WordPress. Explora proyectos corporativos y métricas de impacto.",
    creator: "@G30RG35",
    images: [`${siteUrl}/images/projects/evoluciona.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jorge Inostroza",
  jobTitle: "Ingeniero en Desarrollo de Software & Tech Lead",
  url: siteUrl,
  sameAs: [
    "https://github.com/G30RG35",
    "https://www.linkedin.com",
  ],
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "WordPress",
    "PHP",
    "Tailwind CSS",
    "Frontend Architecture",
    "Team Leadership",
    "Web Performance Optimization",
  ],
  description:
    "Ingeniero especializado con más de 4 años de experiencia en desarrollo de software y 2 años como Tech Lead liderando proyectos web en React y WordPress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#09090B] text-[#F4F4F5] font-[family-name:var(--font-inter)] selection:bg-[#DC2626] selection:text-white antialiased"
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
