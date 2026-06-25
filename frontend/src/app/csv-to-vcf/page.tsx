import Hero from "@/components/Hero";
import Converter from "@/components/Converter";
import SupportedFormats from "@/components/SupportedFormats";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PrivacySection from "@/components/PrivacySection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "CSV to VCF Converter - Free Online vCard Generator",
  description: "Convert your CSV contacts to VCF (vCard) format instantly. Perfect for importing spreadsheet contacts into iPhone, Android, or Outlook. No sign up required.",
  keywords: "csv to vcf, convert csv to vcf, csv to vcard, online csv to vcf converter",
  alternates: {
    canonical: "/csv-to-vcf",
  },
};

export default function CSVToVCF() {
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
