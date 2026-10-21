import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

// Stile A "Ghat": grotesk espressivo per i titoli, grotesk sobrio per il testo.
// Font variabili ospitati sul sito (src/app/fonts): niente richieste a Google, niente errori di build.
const bricolage = localFont({
  src: "./fonts/BricolageGrotesque-normal-500-800.woff2",
  variable: "--font-bricolage",
  weight: "500 800",
  display: "swap",
});

const schibsted = localFont({
  src: "./fonts/SchibstedGrotesk-normal-400-700.woff2",
  variable: "--font-schibsted",
  weight: "400 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.brandName,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.shortName,
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.brandName,
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: siteConfig.brandName,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: "it-IT",
  };

  return (
    <html
      lang="it"
      className={`${bricolage.variable} ${schibsted.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
