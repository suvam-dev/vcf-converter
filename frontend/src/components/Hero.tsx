"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Zap, Lock, FileText, Smartphone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero({ children }: { children?: React.ReactNode }) {
  const trustIndicators = [
    { icon: <ShieldCheck size={14} />, text: "Runs Locally" },
    { icon: <FileText size={14} />, text: "No Registration" },
    { icon: <Zap size={14} />, text: "Lightning Fast" },
    { icon: <Lock size={14} />, text: "100% Private" },
    { icon: <Check size={14} />, text: "Unlimited Files" },
    { icon: <Smartphone size={14} />, text: "Mobile Friendly" },
  ];

  return (
    <section className="relative pt-[120px] pb-[64px] md:pb-[96px] lg:pb-[120px] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-[900px] mx-auto space-y-8">
          
          {/* Headline & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-[44px] md:text-[64px] font-bold leading-[1.05] tracking-tight text-foreground balance-text">
              The Fastest Way <br className="hidden md:block" /> to Create vCard Files
            </h1>
            <p className="text-[18px] md:text-[22px] text-muted-foreground font-normal max-w-[650px] mx-auto leading-relaxed balance-text">
              Convert CSV, Excel, TXT, and contact lists into VCF files without uploading your data. Everything runs securely in your browser.
            </p>
          </motion.div>

          {/* Upload Component (Passed as children) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="w-full max-w-[900px] mx-auto relative z-10"
          >
            {children}
          </motion.div>

          {/* Trust Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 pt-6 pb-12"
          >
            {trustIndicators.map((indicator, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[14px] font-medium text-muted-foreground">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  {indicator.icon}
                </div>
                <span>{indicator.text}</span>
              </div>
            ))}
          </motion.div>

          {/* Live Preview Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-[650px] mx-auto pt-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">How it works</h3>
            <LiveDemo />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function LiveDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-card border border-border/50 rounded-2xl p-6 shadow-sm overflow-hidden h-[180px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="csv"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <div className="text-xs font-mono text-muted-foreground mb-2 text-left">Sample CSV Row</div>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-left border border-border">
              <span className="text-primary">Name</span>,<span className="text-primary">Phone</span>,<span className="text-primary">Email</span><br />
              John Doe,+919876543210,john@email.com
            </div>
          </motion.div>
        )}
        
        {step === 1 && (
          <motion.div
            key="processing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="h-10 w-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-sm font-medium text-muted-foreground">Converting locally...</p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="vcf"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full flex items-center gap-4 bg-primary/5 border border-primary/20 rounded-xl p-4"
          >
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
              JD
            </div>
            <div className="text-left flex-1">
              <div className="font-semibold text-foreground">John Doe</div>
              <div className="text-sm text-muted-foreground">+91 98765 43210</div>
              <div className="text-sm text-muted-foreground">john@email.com</div>
            </div>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-none px-3 py-1">VCF Ready</Badge>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
