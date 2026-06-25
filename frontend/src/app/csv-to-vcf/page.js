import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";

export const metadata = {
  title: "CSV to VCF Converter - Free Online vCard Generator",
  description: "Convert CSV to VCF instantly. Easily map CSV columns to vCard format. No sign-up required, secure and free.",
  keywords: "csv to vcf, convert csv to vcf, csv to vcard, online csv to vcf converter",
  alternates: {
    canonical: "https://vcf-converter.vercel.app/csv-to-vcf",
  },
};

export default function CsvToVcfPage() {
  return (
    <>
      <Hero 
        title={<>Convert <span className="text-blue-500 italic">CSV to VCF</span> Online</>} 
        subtitle="Generate vCard files from spreadsheets instantly"
      />
      <Features />
      <About />
    </>
  );
}
