"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Dashboard Mockup Components ---

const DashboardMockup = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10 perspective-1000">
      <motion.div
        whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full aspect-video md:aspect-4/3 bg-card rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-border overflow-hidden transform -rotate-2 transition-all duration-500 ease-out flex"
      >
        {/* Sidebar */}
        <div className="w-16 md:w-20 border-r border-border flex flex-col items-center py-6 gap-6 bg-muted/20">
          <div className="w-8 h-8 rounded-lg bg-project-3 flex items-center justify-center text-white font-bold text-xs">
            B
          </div>
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={cn(
                  "w-8 h-8 rounded-lg border border-border/50 flex items-center justify-center",
                  i === 1
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground opacity-50",
                )}
              >
                <div className="w-3 h-3 rounded-full bg-current" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="h-14 border-b border-border flex items-center justify-between px-6 bg-card">
            <div className="flex items-center gap-3">
              <div className="h-2 w-24 rounded-full bg-muted" />
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-project-3/10 border border-project-3/20" />
              <div className="w-8 h-8 rounded-full bg-muted" />
            </div>
          </div>

          {/* Grid */}
          <div className="p-6 grid grid-cols-2 gap-4 flex-1 overflow-hidden">
            {/* Main Chart Card */}
            <div className="col-span-2 bg-muted/10 border border-border rounded-xl p-4 flex flex-col gap-3">
              <div className="flex justify-between items-end h-24 gap-1">
                {[40, 70, 45, 90, 65, 80, 50, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className="flex-1 bg-project-3/20 rounded-t-sm border-t border-project-3/40"
                  />
                ))}
              </div>
              <div className="h-2 w-1/3 bg-muted rounded-full" />
            </div>

            {/* Stat Cards */}
            <div className="bg-project-1/5 border border-project-1/20 rounded-xl p-4 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-project-1/20 mb-1" />
              <div className="h-2 w-full bg-project-1/20 rounded-full" />
              <div className="h-2 w-1/2 bg-project-1/10 rounded-full" />
            </div>
            <div className="bg-project-2/5 border border-project-2/20 rounded-xl p-4 flex flex-col gap-2">
              <div className="w-8 h-8 rounded-lg bg-project-2/20 mb-1" />
              <div className="h-2 w-full bg-project-2/20 rounded-full" />
              <div className="h-2 w-1/2 bg-project-2/10 rounded-full" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Main Component ---

const CaseStudy: React.FC = () => {
  return (
    <section className="flex py-24 flex-col gap-12 text-foreground relative overflow-hidden px-4 md:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10 opacity-50">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-project-3/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-project-2/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <div className="w-full max-w-416 mx-auto flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase text-foreground leading-none">
            Selected Work
          </h2>
          <div className="h-0.5 flex-1 bg-linear-to-r from-border via-border to-transparent mt-4" />
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-416 mx-auto auto-rows-min">
        {/* 1. Buildxskill Phone Card (Left, Tall) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 md:row-span-2 min-h-[600px] md:min-h-[720px] bg-card rounded-[3rem] relative overflow-hidden group border border-border shadow-sm hover:shadow-2xl transition-all duration-700"
        >
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-project-3/2 to-transparent pointer-events-none" />

          <div className="absolute top-8 left-8 z-20">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black tracking-tighter text-card-foreground transition-all duration-500 group-hover:tracking-tight group-hover:scale-105 inline-block origin-left">
                Buildxskill
              </span>
            </div>
          </div>

          <DashboardMockup />

          {/* Link Icon */}
          <div className="absolute bottom-8 left-8 z-20 w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg cursor-pointer">
            <ArrowUpRight size={24} />
          </div>
        </motion.div>

        {/* 2. Plib Card (Top Center) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 min-h-[340px] bg-card rounded-[3rem] relative overflow-hidden group flex items-center justify-center border border-border shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="text-center px-8">
            <h3 className="text-6xl md:text-7xl font-serif text-foreground/50 mb-1 tracking-tight group-hover:text-foreground transition-all duration-700 scale-95 group-hover:scale-100">
              Plib
            </h3>
            <span className="text-xl font-serif italic text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-500">
              AI Library
            </span>
          </div>
          <div className="absolute bottom-8 left-8 z-20 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-500 shadow-md cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>

        {/* 3. Synap.Directory Card (Top Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 min-h-[340px] bg-card rounded-[3rem] relative overflow-hidden group flex flex-col items-center justify-center border border-border shadow-sm hover:shadow-xl transition-all duration-500 p-8"
        >
          {/* Directory/Node Icon constructed with CSS */}
          <div className="relative w-24 h-24 mb-6 group-hover:scale-110 transition-transform duration-700">
            <div className="absolute inset-0 bg-project-2/20 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
            <div className="absolute inset-0 bg-project-2/40 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
            <div className="absolute inset-0 bg-card border-2 border-project-2 rounded-2xl flex items-center justify-center shadow-xl">
              <div className="grid grid-cols-2 gap-1.5 p-3">
                <div className="w-3 h-3 rounded-sm bg-project-2" />
                <div className="w-3 h-3 rounded-sm bg-project-2/40" />
                <div className="w-3 h-3 rounded-sm bg-project-2/40" />
                <div className="w-3 h-3 rounded-sm bg-project-2" />
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-foreground/50 text-center tracking-tighter group-hover:text-foreground transition-all duration-500">
            Synap.Directory
          </h3>
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">
            Dev Resource
          </span>

          <div className="absolute bottom-8 left-8 z-20 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-500 shadow-md cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>

        {/* 4. reuse motion Card (Bottom Center) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 min-h-[340px] bg-card rounded-[3rem] relative overflow-hidden group flex flex-col items-center justify-center border border-border shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <span className="text-sm font-black text-muted-foreground mb-3 tracking-[0.3em] uppercase group-hover:text-project-3 transition-colors duration-500">
            Animation Library
          </span>
          <h3 className="text-5xl md:text-6xl font-black text-foreground/50 mb-1 uppercase tracking-tighter group-hover:text-foreground transition-all duration-700 group-hover:tracking-normal">
            REUSE MOTION
          </h3>
          <div className="absolute bottom-8 left-8 z-20 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-500 shadow-md cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>

        {/* 5. Designs Card (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-3 min-h-[340px] bg-card rounded-[3rem] relative overflow-hidden group flex flex-col items-center justify-center border border-border shadow-sm hover:shadow-xl transition-all duration-500 p-8"
        >
          {/* Design System Composition (Visible by Default) */}
          <div className="relative w-32 h-32 mb-6 group-hover:scale-110 transition-transform duration-700">
            {/* Layer 1: Color Palette */}
            <div className="absolute top-0 right-0 w-20 h-24 bg-card border-2 border-border rounded-xl shadow-sm rotate-6 group-hover:rotate-12 transition-all duration-500 z-10 flex flex-col p-1.5 gap-1.5">
              <div className="flex-1 rounded-md bg-project-1/20 group-hover:bg-project-1 transition-colors duration-500" />
              <div className="flex-1 rounded-md bg-project-2/20 group-hover:bg-project-2 transition-colors duration-500" />
              <div className="flex-1 rounded-md bg-project-3/20 group-hover:bg-project-3 transition-colors duration-500" />
            </div>

            {/* Layer 2: Wireframe / Arch */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-muted/30 border-2 border-muted rounded-full flex items-center justify-center -rotate-3 group-hover:-rotate-6 transition-all duration-500 backdrop-blur-sm">
              <div className="w-12 h-12 border-2 border-muted/50 rounded-full group-hover:border-foreground/20 transition-colors duration-500" />
            </div>
          </div>

          <h3 className="text-3xl font-black text-foreground/50 tracking-tighter group-hover:text-foreground transition-all duration-500">
            Designs
          </h3>

          <div className="absolute bottom-8 left-8 right-8 z-20 flex items-center justify-between">
            <div className="flex items-center gap-3 group/btn cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-500 shadow-md">
                <ArrowUpRight size={20} />
              </div>
              <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                See more
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
