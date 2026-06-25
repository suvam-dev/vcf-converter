import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "@graph": [
      {
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
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a VCF file?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A VCF (Virtual Contact File) or vCard is a standard file format for electronic business cards. It is the universal format used by iOS, Android, macOS, Windows, and most email clients to store and share contact information like names, phone numbers, and email addresses."
            }
          },
          {
            "@type": "Question",
            "name": "How do I convert CSV to VCF?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply drag and drop your CSV file into the upload box. The tool will automatically detect your columns. Map the columns (e.g., matching your 'Phone Number' column to 'Mobile Phone') and click generate. It takes less than a second."
            }
          },
          {
            "@type": "Question",
            "name": "Is it safe to upload my contacts?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, because you aren't actually uploading anything! Our converter runs 100% locally in your web browser. Your contact data never leaves your device, is never sent to our servers, and is completely private."
            }
          },
          {
            "@type": "Question",
            "name": "Can I convert Excel (XLS/XLSX) to VCF?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! You don't need to export your Excel spreadsheet to CSV first. Just drag and drop your .xls or .xlsx file directly into our tool, and we will parse it instantly."
            }
          }
        ]
      },
      {
        "@type": "HowTo",
        "name": "How to convert CSV or Excel to VCF",
        "description": "Step-by-step guide on how to convert contact spreadsheets to vCard format.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Upload File",
            "text": "Drag and drop your CSV or Excel (XLS/XLSX) file into the upload zone."
          },
          {
            "@type": "HowToStep",
            "name": "Map Columns",
            "text": "Match your spreadsheet columns to standard vCard properties like First Name, Last Name, and Mobile Phone."
          },
          {
            "@type": "HowToStep",
            "name": "Generate VCF",
            "text": "Click 'Generate VCF'. The file will be processed instantly and securely in your browser."
          },
          {
            "@type": "HowToStep",
            "name": "Download",
            "text": "Save the generated .vcf file and import it into your phone, email client, or CRM."
          }
        ]
      }
    ]
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
