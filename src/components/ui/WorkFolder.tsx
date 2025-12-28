"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
export default function WorkFolder() {
    const [isHovered, setIsHovered] = useState(false);
  const projects = [
    { title: "ReuseMotion", color: "bg-project-1", rotation: -12, x: -90, y: -160, id: 'p1' },
    { title: "AI Library", color: "bg-project-2", rotation: 2, x: 40, y: -200, id: 'p2' },
    { title: "BuildxSkill", color: "bg-project-3", rotation: -4, x: -10, y: -240, id: 'p3' }
  ];

  return (
    <div 
      className="relative w-full max-w-[300px] md:max-w-[360px] h-[260px] md:h-[300px] mx-auto lg:mx-0 mt-12 lg:mt-40 mb-12 lg:mb-20 group/dossier"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Emerging Project Plates */}
      <AnimatePresence>
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.id}
            initial={{ y: 0, opacity: 0, scale: 0.9 }}
            animate={isHovered ? { 
              y: proj.y, 
              x: proj.x, 
              rotate: proj.rotation, 
              opacity: 1, 
              scale: 1,
              zIndex: 10 + idx 
            } : { 
              y: 0, x: 0, rotate: 0, opacity: 0, scale: 0.9, zIndex: 0 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25, delay: idx * 0.05 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-56 h-40 bg-card rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-none border border-border p-6 flex flex-col justify-between ring-1 ring-black/5">
               <div className="flex justify-between items-start">
                  <div className={`w-8 h-1 ${proj.color} rounded-full`} />
                  <span className="text-[9px] font-mono text-muted-foreground/50">00{idx+1}</span>
               </div>
               <div className="space-y-1">
                  <h4 className="text-sm font-bold  leading-tight">{proj.title}</h4>
                  <div className="flex gap-1">
                     {[...Array(3)].map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-card-foreground" />)}
                  </div>
               </div>
               <div className="w-full h-12 border border-border bg-muted/30 rounded-lg overflow-hidden">
                  <div className={`w-full h-full opacity-20 ${proj.color} mix-blend-multiply`} />
               </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* The Dossier Box */}
      <div className="relative z-20 w-full h-full cursor-pointer perspective-1000">
        
        {/* Rear Panel */}
        <div className="absolute inset-0 bg-folder-back rounded-3xl -translate-z-12 shadow-inner border border-folder-border/50" />
        
        {/* Main Body Container */}
        <motion.div 
          animate={isHovered ? { rotateX: -15, y: 10, scale: 0.98 } : { rotateX: 0, y: 0, scale: 1 }}
          className="absolute inset-0 bg-folder-face border border-folder-border rounded-3xl shadow-2xl flex flex-col p-10 overflow-hidden transform-gpu"
        >
          {/* Top Metallic Tension Clip */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-linear-to-b from-folder-clip to-folder-clip-accent rounded-b-xl shadow-md z-30 ring-1 ring-white/20" />
          
          {/* Perforated Binder Side */}
          <div className="absolute left-6 inset-y-0 flex flex-col justify-between py-10">
             {[...Array(6)].map((_, i) => (
               <div key={i} className="w-4 h-4 rounded-full bg-folder-back shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] border border-folder-border" />
             ))}
          </div>

          {/* Central Label Strip */}
          <div className="mt-8 ml-10 space-y-6">
             <div className="px-6 py-3 bg-card border-2 border-dashed border-folder-border rounded shadow-sm -rotate-1">
                <span className="font-handwriting text-brand-green text-3xl select-none">Case Studies</span>
             </div>
             <div className="space-y-2 opacity-40">
                <div className="h-1.5 w-32 bg-foreground/10 rounded-full" />
                <div className="h-1.5 w-24 bg-foreground/10 rounded-full" />
             </div>
          </div>

          {/* Masking Tape Tag */}
          <div className="absolute bottom-8 right-8 px-4 py-1.5 bg-brand-green/10 border border-brand-green/20 rounded-sm text-[10px] font-bold text-brand-green tracking-widest uppercase rotate-2 shadow-sm">
            SEC_LOG_84
          </div>
        </motion.div>
      </div>

      {/* Side Label Indicator */}
      <motion.div 
        animate={isHovered ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
        className="absolute -right-24 top-1/2 -translate-y-1/2 hidden lg:block"
      >
        <div className="vertical-text text-[10px] font-bold tracking-[0.6em] uppercase text-muted-foreground/50">
           DISCOVER_LOGS
        </div>
      </motion.div>
    </div>
  );
}
