import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";

export const metadata = {
  title: "Excel to VCF Converter - Convert XLSX to vCard Instantly",
  description: "Convert Excel (XLS, XLSX) files to VCF format. The best free online Excel to vCard converter for your contacts.",
  keywords: "excel to vcf, convert excel to vcf, xlsx to vcard, xls to vcf, online excel to vcf converter",
  alternates: {
    canonical: "https://vcf-converter.vercel.app/excel-to-vcf",
  },
};

export default function ExcelToVcfPage() {
  return (
    <>
      <Hero 
        title={<>Convert <span className="text-blue-500 italic">Excel to VCF</span> Online</>} 
        subtitle="Export XLSX and XLS contacts to vCard format"
      />
      <Features />
      <About />
    </>
  );
}
