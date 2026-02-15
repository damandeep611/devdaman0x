"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MindmapPage() {
  return (
    <main className="w-full min-h-screen pt-32 pb-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight text-foreground">
              mindmap.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              An experimental space for visual thinking, neural connections, and 
              exploring the architecture of ideas.
            </p>
          </div>

          {/* Experimental Area */}
          <div className="w-full min-h-[600px] rounded-[2rem] border border-border/40 bg-card/50 backdrop-blur-sm relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)] pointer-events-none" />
             
             {/* Placeholder for experimental UI */}
             <motion.div 
               animate={{ 
                 scale: [1, 1.05, 1],
                 opacity: [0.3, 0.6, 0.3]
               }}
               transition={{ 
                 duration: 4, 
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
               className="text-muted-foreground/20 font-mono text-sm tracking-widest uppercase"
             >
               Initialize Neural Interface...
             </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
