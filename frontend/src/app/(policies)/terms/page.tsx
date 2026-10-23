import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, ShieldCheck, FileCheck } from "lucide-react";

export const metadata: Metadata = {
    title: "Terms of Service | Free VCF Converter",
    description:
        "Read our Terms of Service. Understand the terms, acceptable use, and conditions for using our free, browser-based VCF contact converter.",
    alternates: {
        canonical: "/terms",
    },
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 md:pt-40 pb-20">
            <div className="max-w-[860px] mx-auto px-4 md:px-6">

                <div className="space-y-4 mb-12">
                    <h1 className="text-4xl md:text-5xl flex justify-center font-extrabold tracking-tight">
                        Terms of Service
                    </h1>
                    <p className="text-muted-foreground text-sm justify-center flex">
                        Last updated: October 2026
                    </p>
                </div>

                <div className="bg-card border border-primary/20 rounded-2xl p-6 md:p-8 soft-shadow relative overflow-hidden mb-12">
                    <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                    <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                        <FileCheck className="text-primary" size={20} />
                        Quick Overview
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                        VCF Converter is a free, browser-based utility designed to help individuals and teams convert contact
                        spreadsheets into standard vCard files. By accessing or using our service, you agree to these Terms.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-border/50 text-xs md:text-sm">
                        <div className="flex items-start gap-2.5 text-muted-foreground">
                            <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span><strong>100% Free:</strong> No paid tiers, no sign-up gates, no hidden costs.</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-muted-foreground">
                            <ShieldCheck size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span><strong>Your Data:</strong> You maintain 100% ownership and copyright of your files.</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-muted-foreground">
                            <AlertTriangle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                            <span><strong>Provided As-Is:</strong> Free utility provided without warranties or liabilities.</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-10 text-muted-foreground leading-relaxed text-sm md:text-base">
                    <section className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            1. Acceptance of Terms
                        </h2>
                        <p>
                            By accessing, browsing, or using VCF Converter (&ldquo;the Service&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;),
                            you acknowledge that you have read, understood, and agree to be legally bound by these Terms of Service and our{" "}
                            <Link href="/privacy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
                            If you do not agree to these terms, please do not use the Service.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            2. Description of the Service
                        </h2>
                        <p>
                            VCF Converter provides web-based client-side tools to convert contact records from standard spreadsheet formats
                            (including CSV, Excel .xlsx, .xls, and text files) into standard Virtual Contact File (.vcf / vCard 3.0) format.
                        </p>
                        <p>
                            All parsing, data transformation, and file generation take place locally within your web browser using client-side
                            JavaScript. We do not provide server-side cloud storage or automated contact sync services.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            3. User Responsibilities & Acceptable Use
                        </h2>
                        <p>
                            When utilizing the Service, you represent, warrant, and agree that:
                        </p>
                        <ul className="space-y-2 list-disc pl-5">
                            <li>
                                <strong>Authority:</strong> You possess the lawful right, permission, or authority to process the contacts and personal information contained within the files you convert.
                            </li>
                            <li>
                                <strong>Compliance with Privacy Laws:</strong> You will comply with all applicable local, national, and international data protection laws (including GDPR, CCPA, CAN-SPAM, and TCPA) regarding the collection and communication with your contacts.
                            </li>
                            <li>
                                <strong>No Malicious Activity:</strong> You will not attempt to introduce viruses, malware, or maliciously crafted files designed to compromise browser runtimes, or attempt denial-of-service attacks against our web delivery infrastructure.
                            </li>
                            <li>
                                <strong>No Spam or Abuse:</strong> You will not use the Service to generate contact lists for unsolicited bulk messaging, phishing, harassment, or unlawful marketing activities.
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            4. Intellectual Property & Data Ownership
                        </h2>
                        <p>
                            <strong>Your Data:</strong> You retain complete, unencumbered ownership of all data, files, and contact records you process through the Service. We assert zero intellectual property rights, licenses, or claims over your contact information.
                        </p>
                        <p>
                            <strong>Our Platform:</strong> All software code, site layout, graphics, interface elements, typography, and documentation associated with VCF Converter are protected by applicable copyright and intellectual property laws.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            5. Disclaimer of Warranties
                        </h2>
                        <p className="uppercase text-xs font-semibold tracking-wider text-foreground">
                            Please read this section carefully as it limits our liability.
                        </p>
                        <p>
                            The Service is provided strictly on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis
                            without warranties of any kind, whether express, implied, statutory, or otherwise. To the maximum extent permitted by applicable law,
                            we explicitly disclaim all warranties of merchantability, fitness for a particular purpose, non-infringement, and error-free operation.
                        </p>
                        <p>
                            While we strive to ensure maximum compatibility with standard vCard 3.0 specifications and devices (iOS, Android, macOS, Windows, Outlook),
                            we do not warrant that all third-party contact applications will interpret non-standard contact properties identically.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            6. Limitation of Liability
                        </h2>
                        <p>
                            In no event shall VCF Converter, its developers, or contributors be liable for any direct, indirect, incidental, special,
                            consequential, or exemplary damages—including but not limited to loss of profits, data corruption, contact list loss, business interruption,
                            or device malfunctions—arising out of or in connection with your use or inability to use the Service.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            7. Termination & Modifications
                        </h2>
                        <p>
                            We reserve the right to modify, suspend, or discontinue any feature of the Service at any time without notice. We may also revise these
                            Terms of Service periodically. Your continued use of the Service following any modifications constitutes your acceptance of the updated terms.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            8. Severability
                        </h2>
                        <p>
                            If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable and shall not
                            affect the validity and enforceability of any remaining provisions.
                        </p>
                    </section>

                    <section className="space-y-3 pt-4 border-t border-border/50">
                        <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            9. Contact & Support
                        </h2>
                        <p>
                            If you have any questions, suggestions, or reports concerning these Terms of Service, please reach out to us:
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