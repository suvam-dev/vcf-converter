import type { Metadata } from "next";
import { Lock, EyeOff, ServerOff, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Free VCF Converter",
  description:
    "Learn about our privacy practices. VCF Converter processes 100% of your contact spreadsheets locally in your browser. No files or contacts are ever uploaded or stored.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-32 md:pt-40 pb-20">
      <div className="max-w-[860px] mx-auto px-4 md:px-6">

        <div className="space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl flex justify-center font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm justify-center flex">
            Last updated: October 2026
          </p>
        </div>

        <div className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8 soft-shadow relative overflow-hidden mb-12">
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
            <Lock className="text-primary" size={20} />
            The Short Version: Your data never leaves your device.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
            Unlike traditional file conversion utilities that upload your sensitive spreadsheets to cloud servers,
            <strong> VCF Converter operates entirely in your web browser</strong>. Your contact lists, phone numbers,
            and email addresses are never transmitted over the internet, never saved to any database, and never viewed by anyone.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-border/50 text-xs md:text-sm">
            <div className="flex items-start gap-2.5 text-muted-foreground">
              <ServerOff size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Zero server uploads:</strong> Processing uses local JavaScript APIs.</span>
            </div>
            <div className="flex items-start gap-2.5 text-muted-foreground">
              <Database size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Zero data storage:</strong> No databases or cloud buckets exist.</span>
            </div>
            <div className="flex items-start gap-2.5 text-muted-foreground">
              <EyeOff size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <span><strong>Zero profiling:</strong> We do not track, sell, or inspect contacts.</span>
            </div>
          </div>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed text-sm md:text-base">
          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              1. How Client-Side Conversion Works
            </h2>
            <p>
              When you select or drop a CSV, Excel (.xlsx/.xls), or text file into VCF Converter, the conversion process uses
              the web browser&apos;s native <code className="bg-muted px-1.5 py-0.5 rounded text-foreground font-mono text-xs">FileReader</code> and
              client-side parsing libraries (PapaParse and SheetJS).
            </p>
            <p>
              Your browser reads the file directly from your local hard drive into temporary browser memory (RAM), extracts
              the contact columns, maps them into vCard standard 3.0 format, and creates a local Blob object for download.
              At no point during this pipeline does any network request carry your file or contacts across the internet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              2. Information We Do NOT Collect
            </h2>
            <p>
              Because of our local-first architecture, we do not have access to, collect, or store any of the following:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li><strong>Contact Information:</strong> Names, mobile numbers, work phones, email addresses, job titles, companies, physical addresses, notes, or birthdates contained in your spreadsheets.</li>
              <li><strong>File Contents & Metadata:</strong> File names, sheet structures, column headers, or generated VCF file outputs.</li>
              <li><strong>Account Credentials:</strong> We do not offer or require account registration, passwords, or credit card details.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              3. Telemetry & Analytics
            </h2>
            <p>
              To maintain service uptime and diagnose website performance, we use privacy-friendly hosting and monitoring tools:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <strong>Vercel Analytics & Speed Insights:</strong> We capture aggregated, non-personally identifiable metrics such as
                page load speed (Core Web Vitals), general browser type, operating system family, and approximate geographic region (country level).
              </li>
              <li>
                These telemetry services do not log personal identities, do not record IP addresses, and have zero interaction with file upload or conversion logic.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              4. Cookies and Local Storage
            </h2>
            <p>
              VCF Converter does not use advertising cookies, marketing pixels, or third-party profiling trackers.
            </p>
            <p>
              Any state stored in your browser (such as file column selections or rename settings) exists only in React component memory
              and is cleared as soon as you refresh or navigate away from the page.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              5. Data Retention & Deletion
            </h2>
            <p>
              We do not retain any user contact data because we never receive it in the first place. When you close your browser tab,
              all in-memory representations of your spreadsheet rows and generated vCard files are immediately discarded by your browser&apos;s
              garbage collector.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              6. Security
            </h2>
            <p>
              The most secure data is the data that is never sent. By eliminating server-side uploads entirely, VCF Converter protects
              you from data breaches, man-in-the-middle transmission vulnerabilities, and server misconfigurations.
            </p>
            <p>
              Our website is served exclusively over HTTPS using modern TLS encryption to guarantee that you are running genuine, untampered
              application code.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              7. Third-Party Links
            </h2>
            <p>
              Our website may contain links to third-party services, such as our open-source GitHub repository. We are not responsible
              for the privacy practices or content of external websites. We encourage you to review their respective privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              8. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect operational or legal updates. Any changes will be posted on this
              page with an updated &ldquo;Last updated&rdquo; timestamp.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-border/50">
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              9. Contact Us
            </h2>
            <p>
              If you have any questions, feedback, or concerns regarding this Privacy Policy, please reach out to us:
            </p>
            <div className="bg-muted/40 rounded-xl p-4 border border-border/60 text-sm space-y-1">
              <div><strong>Email:</strong> <a href="mailto:suvam.iitkgp@gmail.com" className="text-primary hover:underline">suvam.iitkgp@gmail.com</a></div>
              <div><strong>GitHub:</strong> <a href="https://github.com/suvam-dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">github.com/suvam-dev</a></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}