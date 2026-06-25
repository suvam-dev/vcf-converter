"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is a VCF file?",
      answer: "A VCF (Virtual Contact File) or vCard is a standard file format for electronic business cards. It is the universal format used by iOS, Android, macOS, Windows, and most email clients to store and share contact information like names, phone numbers, and email addresses."
    },
    {
      question: "How do I convert CSV to VCF?",
      answer: "Simply drag and drop your CSV file into the upload box above. The tool will automatically detect your columns. Map the columns (e.g., matching your 'Phone Number' column to 'Mobile Phone') and click generate. It takes less than a second."
    },
    {
      question: "Is it safe to upload my contacts?",
      answer: "Yes, because you aren't actually uploading anything! Our converter runs 100% locally in your web browser. Your contact data never leaves your device, is never sent to our servers, and is completely private."
    },
    {
      question: "Can I convert Excel (XLS/XLSX) to VCF?",
      answer: "Yes! You don't need to export your Excel spreadsheet to CSV first. Just drag and drop your .xls or .xlsx file directly into our tool, and we will parse it instantly."
    },
    {
      question: "Is there a limit on how many contacts I can convert?",
      answer: "No. Because the conversion happens on your own computer's hardware, you can process thousands of rows instantly without hitting any artificial limits or paywalls."
    },
    {
      question: "Will the generated VCF work on my iPhone?",
      answer: "Yes. iOS natively supports the vCard format. Once downloaded, you can email or AirDrop the .vcf file to your iPhone, tap it, and iOS will prompt you to import all the contacts."
    },
    {
      question: "Can I import the VCF to my Android device?",
      answer: "Absolutely. Android devices handle VCF files natively. You can open the downloaded file directly on your phone or import it via the Google Contacts app."
    },
    {
      question: "What if my CSV has custom headers?",
      answer: "Our smart auto-mapping tries to guess standard headers like 'Name' or 'Phone', but if you have custom headers (e.g., 'Client Mobile'), you can manually select the correct VCF property from the dropdown menu before converting."
    },
    {
      question: "Can I use this converter completely offline?",
      answer: "Yes! Since it's a client-side web application, once the webpage loads, you can disconnect from the internet and still convert files securely."
    },
    {
      question: "Does it work with Google Contacts exports?",
      answer: "Yes. If you exported your contacts from Google Contacts as a CSV, you can drop that file here to convert it into a standard VCF file for Apple devices or other software."
    },
    {
      question: "What format should phone numbers be in?",
      answer: "For the best compatibility across all devices, we recommend using the international format with a plus sign and country code (e.g., +1234567890). However, the converter will accept whatever text is in your cell."
    },
    {
      question: "How do I convert TXT to VCF?",
      answer: "If you have a tab-separated or comma-separated .txt file, just upload it. Our engine will parse it just like a CSV file."
    },
    {
      question: "Does the converter support Unicode and different languages?",
      answer: "Yes! We use UTF-8 encoding standard for the generated VCF files, ensuring that special characters, emojis, and non-Latin alphabets are preserved perfectly."
    },
    {
      question: "What happens if some fields are blank in my spreadsheet?",
      answer: "Blank fields are safely ignored. The converter will only generate vCard properties for cells that contain actual data, preventing empty entries in your phone book."
    },
    {
      question: "Do I need to create an account?",
      answer: "No. There are no accounts, no subscriptions, and no paywalls. The tool is completely free and instantly accessible."
    },
  ];

  return (
    <section id="faq" className="section-padding bg-muted/10 border-t border-border/50">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight">Frequently Asked Questions</h2>
          <p className="text-[18px] md:text-[22px] text-muted-foreground">Everything you need to know about our secure VCF converter.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-[24px] p-6 md:p-10 soft-shadow border border-border/50"
        >
          <Accordion className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className={idx === faqs.length - 1 ? "border-none" : ""}>
                <AccordionTrigger className="text-left text-[16px] md:text-[18px] font-semibold hover:no-underline hover:text-primary transition-colors py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] md:text-[16px] text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

      </div>
    </section>
  );
}
