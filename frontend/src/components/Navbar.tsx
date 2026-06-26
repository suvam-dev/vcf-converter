"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, FileUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedButton } from "@/components/ui/animated-button";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-[900px] z-50">
      <div
        className={`transition-all duration-500 rounded-full border-2 ${isScrolled
            ? "bg-background/90 backdrop-blur-xl border-primary/20 shadow-2xl shadow-primary/20 py-3 px-6"
            : "bg-background/60 backdrop-blur-md border-border/60 shadow-xl shadow-black/5 py-4 px-8"
          }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="group-hover:scale-105 transition-transform overflow-hidden rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]">
              <Image src="/logo.jpg" width={36} height={36} alt="VCF Converter" className="object-cover" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-foreground hidden sm:block">
              VCF<span className="text-primary">Converter</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-muted-foreground">
            <Link href="/#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </Link>
            <Link href="/#features" className="hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="/#faq" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="https://github.com/suvam-dev" target="_blank" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </Link>
            <AnimatedButton variant="default" onClick={() => router.push("/#converter")}>
              Convert Now
            </AnimatedButton>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-[calc(100%+16px)] left-0 w-full bg-background/95 backdrop-blur-xl border border-border shadow-xl rounded-[24px] py-6 px-6 flex flex-col gap-4"
            >
              <Link
                href="/#how-it-works"
                className="text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/#features"
                className="text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/#faq"
                className="text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <div className="h-px w-full bg-border/50 my-2" />
              <Link
                href="https://github.com/suvam-dev"
                target="_blank"
                className="text-base font-medium hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                GitHub
              </Link>
              <AnimatedButton variant="default" className="w-full mt-2" onClick={() => { setMobileMenuOpen(false); router.push("/#converter"); }}>
                Convert Now
              </AnimatedButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
