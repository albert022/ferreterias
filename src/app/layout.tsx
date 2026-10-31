import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { QuoteProvider } from "@/context/QuoteContext";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Materiales de Construcción en ${siteConfig.location.city}`,
  description: siteConfig.description,
  keywords: [
    "ferretería",
    "materiales de construcción",
    "cemento gris",
    "varillas",
    "herramientas",
    "Santo Domingo Este",
    "República Dominicana",
    "cotización WhatsApp",
    "pinturas",
    "plomería PVC",
    "electricidad",
    "QRMOON",
  ],
  authors: [{ name: "QRMOON", url: siteConfig.qrmoon.websiteUrl }],
  creator: "QRMOON",
  openGraph: {
    type: "website",
    locale: "es_DO",
    url: "https://ferreteria-elconstructor.demo",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Ferretería y Materiales en Santo Domingo Este`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: siteConfig.name,
    description: siteConfig.description,
    image:
      "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80",
    telephone: siteConfig.contact.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.province,
      addressCountry: "DO",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.4861",
      longitude: "-69.8569",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "07:30",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "08:30",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-amber-400 selection:text-gray-950">
        <GoogleAnalytics />
        <QuoteProvider>{children}</QuoteProvider>
      </body>
    </html>
  );
}
