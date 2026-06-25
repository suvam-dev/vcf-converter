"use client";

import { motion } from "framer-motion";
import { Zap, Shield, FileJson, LayoutGrid, Download } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight">Built for speed and privacy</h2>
          <p className="text-[18px] md:text-[22px] text-muted-foreground max-w-2xl mx-auto">Everything you need to manage your contacts, without the bloat.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Large Card (2 columns, 2 rows) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-card rounded-[24px] p-8 soft-shadow border border-border/50 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10 space-y-4 max-w-md">
              <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-xl w-fit">
                <Shield size={28} />
              </div>
              <h3 className="text-[24px] font-bold">100% Privacy Guaranteed</h3>
              <p className="text-[18px] text-muted-foreground leading-relaxed">
                Your files never leave your device. All processing happens locally in your browser, ensuring enterprise-grade data security. We don't have servers, so we can't steal your data even if we wanted to.
              </p>
            </div>
            {/* Decorative background element */}
            <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Shield size={300} />
            </div>
          </motion.div>

          {/* Small Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-[24px] p-8 soft-shadow border border-border/50 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="p-3 bg-blue-500/10 text-blue-600 rounded-xl w-fit mb-4">
              <FileJson size={24} />
            </div>
            <h3 className="text-[20px] font-bold mb-2">Smart Auto-Mapping</h3>
            <p className="text-[16px] text-muted-foreground">
              Automatically detects column names like 'Phone' or 'Email'.
            </p>
          </motion.div>

          {/* Tall Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-[24px] p-8 soft-shadow border border-border/50 flex flex-col justify-center relative overflow-hidden"
          >
            <div className="p-3 bg-amber-500/10 text-amber-600 rounded-xl w-fit mb-4">
              <Zap size={24} />
            </div>
            <h3 className="text-[20px] font-bold mb-2">Lightning Fast</h3>
            <p className="text-[16px] text-muted-foreground">
              Convert thousands of contacts in milliseconds without network latency.
            </p>
          </motion.div>

          {/* Wide Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 bg-card rounded-[24px] p-8 soft-shadow border border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden"
          >
            <div className="space-y-3 max-w-2xl">
              <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-2">
                <LayoutGrid size={24} />
              </div>
              <h3 className="text-[24px] font-bold">Bulk Conversion Ready</h3>
              <p className="text-[18px] text-muted-foreground">
                Whether you have 10 contacts or 10,000, the app handles large datasets effortlessly, generating a single downloadable VCF file containing all vCards.
              </p>
            </div>
            <div className="flex-shrink-0 p-6 bg-muted/50 rounded-2xl border border-border/50">
              <Download size={48} className="text-muted-foreground" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
