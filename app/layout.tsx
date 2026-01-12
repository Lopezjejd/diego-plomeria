import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { siteSettings } from "@/app/data/siteSettings";
import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import { LocalBusinessJsonLd } from "@/app/components/seo/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irgasa.com"),

  title: {
    default: "Plomería a Domicilio en Medellín | IRGASA",
    template: "%s | IRGASA Plomería Medellín",
  },

  description: "Servicios profesionales de plomería a domicilio en Medellín y área metropolitana. Instalaciones, reparaciones y redes de gas certificadas. Atención 24/7 con IRGASA.",

  keywords: [
    "plomería a domicilio medellín",
    "plomero medellín",
    "servicios hidráulicos medellín",
    "redes de gas medellín",
    "IRGASA",
    "plomería 24 horas medellín",
    "reparación fugas medellín",
    "instalación acueducto medellín",
    "plomero profesional antioquia",
    "emergencias plomería medellín",
  ],

  authors: [{ name: "IRGASA", url: "https://irgasa.com" }],
  creator: "IRGASA",
  publisher: "IRGASA",

  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://irgasa.com",
    siteName: "IRGASA",
    title: "Plomería a Domicilio en Medellín | IRGASA",
    description: "Servicios profesionales de plomería a domicilio en Medellín y área metropolitana. Instalaciones, reparaciones y redes de gas certificadas con IRGASA.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IRGASA - Plomería Profesional en Medellín",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Plomería a Domicilio en Medellín | IRGASA",
    description: "Servicios profesionales de plomería a domicilio en Medellín. Atención 24/7.",
    images: ["/og-image.png"],
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

  alternates: {
    canonical: "https://irgasa.com",
  },

  verification: {
    google: "GOOGLE_VERIFICATION_CODE", // Actualizar después de verificar en Search Console
    // yandex: "",
    // bing: "",
  },

  category: "Plumbing Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
