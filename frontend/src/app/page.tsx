import Hero from "@/components/Hero";
import Converter from "@/components/Converter";
import SupportedFormats from "@/components/SupportedFormats";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import PrivacySection from "@/components/PrivacySection";
import FAQ from "@/components/FAQ";

export default function Home() {
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
