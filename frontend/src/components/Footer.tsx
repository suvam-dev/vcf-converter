"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        
        {/* Final CTA */}
        <div className="bg-primary/5 rounded-[32px] p-10 md:p-16 text-center border border-primary/10 mb-24 relative overflow-hidden soft-shadow">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight">Ready to convert?</h2>
            <p className="text-[18px] md:text-[22px] text-muted-foreground">
              Join thousands of professionals converting contacts securely in seconds. No sign-up required.
            </p>
            <div className="pt-4">
              <button 
                onClick={scrollToTop}
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_40px_-10px_var(--primary)]"
              >
                Upload Your File <ArrowUpRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-extrabold text-[24px] tracking-tight text-foreground">
              VCF<span className="text-primary">Converter</span>
            </span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Fast, secure, and private vCard generation. <br className="hidden md:block" /> Your files never leave your device.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-muted-foreground">
            <Link href="#privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="#terms" className="hover:text-foreground transition-colors">Terms</Link>
            <Link href="mailto:support@vcfconverter.com" className="hover:text-foreground transition-colors">Contact</Link>
            <Link href="https://github.com/suvam-dev" target="_blank" className="hover:text-foreground transition-colors flex items-center gap-1.5">
              GitHub
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-12 pt-8 border-t border-border/50 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VCF Converter. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Version 2.0.0</span>
            <span>Built by <a href="https://github.com/suvam-dev" target="_blank" className="hover:text-primary transition-colors font-medium">suvam-dev</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
