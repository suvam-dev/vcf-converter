"use client";

import { motion } from "framer-motion";
import { Lock, Shield, Laptop } from "lucide-react";

export default function PrivacySection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="bg-card rounded-[32px] border border-border/50 soft-shadow p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          
          <div className="flex-1 space-y-6 relative z-10 max-w-xl">
            <div className="inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-sm font-medium text-green-600">
              <Shield size={14} className="mr-1.5" /> Client-Side Processing
            </div>
            <h2 className="text-[32px] md:text-[44px] font-bold tracking-tight">Your data never leaves your device.</h2>
            <div className="space-y-4 text-[18px] text-muted-foreground">
              <p className="flex items-center gap-3"><Lock className="text-primary" size={20} /> <span>No uploads to any server.</span></p>
              <p className="flex items-center gap-3"><Lock className="text-primary" size={20} /> <span>No tracking or analytics on your contacts.</span></p>
              <p className="flex items-center gap-3"><Lock className="text-primary" size={20} /> <span>No storage or databases used.</span></p>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative z-10 w-full max-w-[400px]">
            <div className="relative w-full aspect-square bg-muted/20 rounded-full flex items-center justify-center border border-border/50">
              {/* Central Laptop */}
              <div className="w-24 h-24 bg-card rounded-2xl flex items-center justify-center soft-shadow relative z-20 border border-border/50">
                <Laptop size={40} className="text-foreground" />
              </div>
              
              {/* Orbiting Shield */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-10"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <Shield size={20} />
                </div>
              </motion.div>

              {/* Orbiting Lock */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 z-10"
              >
                <div className="absolute bottom-0 right-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                  <Lock size={16} />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative blur */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl -z-0"></div>

        </div>
      </div>
    </section>
  );
}
