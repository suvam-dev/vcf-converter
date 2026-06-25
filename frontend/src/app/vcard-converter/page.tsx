import Hero from "@/components/Hero";
import Converter from "@/components/Converter";
import SupportedFormats from "@/components/SupportedFormats";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PrivacySection from "@/components/PrivacySection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Free vCard Converter - Create VCF Files Online",
  description: "Create standard vCard (.vcf) files from your spreadsheets. The ultimate vCard converter tool for all your contact export needs.",
  keywords: "vcard converter, convert to vcard, online vcard maker, generate vcf file",
  alternates: {
    canonical: "/vcard-converter",
  },
};

export default function VCardConverterPage() {
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
