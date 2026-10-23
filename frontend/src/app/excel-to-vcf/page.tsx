import Hero from "@/components/Hero";
import Converter from "@/components/Converter";
import SupportedFormats from "@/components/SupportedFormats";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PrivacySection from "@/components/PrivacySection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Excel to VCF Converter - Convert XLSX to vCard Instantly",
  description: "Convert Excel (XLS/XLSX) spreadsheets to VCF files. The fastest and most secure way to convert Excel contacts for mobile devices.",
  keywords: [
    "excel to vcf",
    "convert excel to vcf",
    "xlsx to vcard",
    "xls to vcf",
    "online excel to vcf converter",
    "excel contacts to vcf",
    "import excel contacts to iphone",
    "import excel contacts to android",
    "xlsx to vcf converter free",
    "convert xlsx to contacts",
  ],
  alternates: {
    canonical: "/excel-to-vcf",
  },
};

export default function ExcelToVCF() {
  return (
    <>
      <Hero>
        <Converter />
      </Hero>
      <SupportedFormats />
      <WhyChooseUs />
      <HowItWorks />
      <PrivacySection />
      <FAQ />
    </>
  );
}
