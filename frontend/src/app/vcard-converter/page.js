import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";

export const metadata = {
  title: "Free vCard Converter - Create VCF Files Online",
  description: "Create vCard files easily with our free online vCard converter. Support for CSV, Excel, and Google Contacts formats.",
  keywords: "vcard converter, free vcard converter, vcard generator, create vcf file",
  alternates: {
    canonical: "https://vcf-converter.vercel.app/vcard-converter",
  },
};

export default function VcardConverterPage() {
  return (
    <>
      <Hero 
        title={<>Free Online <span className="text-blue-500 italic">vCard Converter</span></>} 
        subtitle="The easiest way to generate vCard files"
      />
      <Features />
      <About />
    </>
  );
}
