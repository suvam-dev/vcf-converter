"use client";

import { motion } from "framer-motion";
import { FileSpreadsheet, Smartphone, Mail, FileText, Contact } from "lucide-react";

export default function SupportedFormats() {
  const formats = [
    { name: "CSV", icon: <FileText size={24} />, color: "text-blue-500", bg: "bg-blue-500/10" },
    { name: "Excel", icon: <FileSpreadsheet size={24} />, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { name: "Google Contacts", icon: <Contact size={24} />, color: "text-amber-500", bg: "bg-amber-500/10" },
    { name: "Android", icon: <Smartphone size={24} />, color: "text-green-500", bg: "bg-green-500/10" },
    { name: "iPhone", icon: <Smartphone size={24} />, color: "text-zinc-800 dark:text-zinc-200", bg: "bg-zinc-500/10" },
    { name: "Outlook", icon: <Mail size={24} />, color: "text-sky-500", bg: "bg-sky-500/10" },
    { name: "vCard (.vcf)", icon: <Contact size={24} />, color: "text-primary", bg: "bg-primary/10" },
  ];

  return (
    <section className="section-padding bg-background border-t border-border/50">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight text-foreground">Works with your favorite platforms</h2>
          <p className="text-[16px] md:text-[18px] text-muted-foreground">Import from any spreadsheet, export to any device.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {formats.map((format, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 bg-card border border-border/50 rounded-2xl py-3 px-5 soft-shadow cursor-default"
            >
              <div className={`p-2 rounded-xl ${format.bg} ${format.color}`}>
                {format.icon}
              </div>
              <span className="font-medium text-[15px]">{format.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
