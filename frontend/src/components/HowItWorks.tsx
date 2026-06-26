"use client";

import { motion } from "framer-motion";
import { UploadCloud, Columns, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload",
      description: "Drag & drop your CSV or Excel file.",
      icon: <UploadCloud size={24} />,
    },
    {
      title: "Preview",
      description: "Map your columns to vCard properties.",
      icon: <Columns size={24} />,
    },
    {
      title: "Download",
      description: "Get your ready-to-import .vcf file.",
      icon: <Download size={24} />,
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-muted/20 border-y border-border/50 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight">Three steps to done</h2>
          <p className="text-[18px] md:text-[22px] text-muted-foreground max-w-2xl mx-auto">No complicated setup. Just upload, map, and download.</p>
        </div>

        <div className="relative max-w-[900px] mx-auto">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[40px] left-0 right-0 h-[2px] bg-border/50 z-0">
            <motion.div 
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-full bg-primary/30"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="flex flex-col items-center text-center relative"
              >
                <div className="w-[80px] h-[80px] rounded-full bg-card border-4 border-background soft-shadow flex items-center justify-center text-primary mb-6 relative z-10 group hover:scale-110 transition-transform">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-foreground text-background text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-[20px] font-bold mb-2">{step.title}</h3>
                <p className="text-[16px] text-muted-foreground max-w-[200px]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
