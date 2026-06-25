import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vcf.suvam-dev.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Free VCF Converter Online - Convert Excel & CSV to vCard",
  description: "Free online VCF converter. Easily convert CSV, Excel (XLS/XLSX), and contact exports into vCard (.vcf) files. Fast, secure, and completely private—no data leaves your device.",
  keywords: "vcf converter, csv to vcf, excel to vcf, vcard converter, contacts converter, free vcf generator",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "VCF Converter | Fast & Secure",
    description: "Convert CSV and Excel to VCF (vCard) format entirely in your browser.",
    type: "website",
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "VCF Converter",
    "url": siteUrl,
    "description": "Free online VCF converter to easily convert CSV, Excel (XLS/XLSX), and contact exports into vCard (.vcf) files locally in your browser.",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" className={`h-full scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
