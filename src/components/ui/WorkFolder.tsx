"use client"

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

export default function WorkFolder() {
    const [isHovered, setIsHovered] = useState(false);
    
    // Document cards data
    const projects = [
      { title: "ReuseMotion", type: "CASE_STUDY", id: 'p1', rotate: -2, y: -90, x: -10, color: "bg-blue-50" },
      { title: "AI Library", type: "RESOURCE", id: 'p2', rotate: 1, y: -60, x: 5, color: "bg-emerald-50" },
      { title: "BuildxSkill", type: "PLATFORM", id: 'p3', rotate: -1, y: -30, x: 0, color: "bg-indigo-50" }
    ];

  return (
    <div
      className="relative w-full max-w-[320px] md:max-w-[360px] h-[260px] md:h-[300px] mx-auto lg:mx-0 mt-16 mb-12 group/folder perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 
         Unified Folder Color Palette (Kraft / Manila) 
         Consistent across Light/Dark modes for physical realism.
         Face: #EBE5CE (Manila)
         Back: #DFD8BF (Darker Manila)
      */}

      {/* Back Panel (Interior) */}
      <div className="absolute bottom-0 w-full h-[85%] bg-[#DFD8BF] rounded-t-lg rounded-b-xl border border-[#D1C9AC] shadow-sm flex items-end justify-center transform-gpu">
        {/* Tab */}
        <div className="absolute -top-7 left-0 w-[40%] h-8 bg-[#DFD8BF] rounded-t-lg border-t border-l border-r border-[#D1C9AC]" />
      </div>

      {/* Emerging Papers / Cards */}
      <div className="absolute inset-x-6 bottom-4 h-[85%] z-10 flex items-end justify-center pointer-events-none">
        <AnimatePresence>
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ y: 0 }}
              animate={
                isHovered
                  ? {
                      y: proj.y,
                      rotate: proj.rotate,
                      scale: 1,
                      zIndex: idx,
                    }
                  : {
                      y: -10 - idx * 5, // Subtle peek
                      rotate: idx % 2 === 0 ? -1 : 1,
                      scale: 0.95 + idx * 0.01,
                      zIndex: idx,
                    }
              }
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
              className={`absolute bottom-0 w-full h-[85%] bg-white ${proj.color} rounded-t-md rounded-b-sm border border-neutral-200/80 shadow-sm flex flex-col p-5 origin-bottom`}
            >
              {/* Document Header */}
              <div className="flex justify-between items-start mb-4 opacity-70">
                <span className="text-[9px] font-mono font-bold text-neutral-500 tracking-widest uppercase border-b border-neutral-200 pb-1">
                  {proj.type}
                </span>
                <span className="text-[9px] font-mono text-neutral-400">
                  0{idx + 1}
                </span>
              </div>

              {/* Content */}
              <h4 className="text-lg font-bold text-neutral-800 leading-tight mb-2">
                {proj.title}
              </h4>

              {/* Mock Text Lines */}
              <div className="space-y-2 mt-2 opacity-40">
                <div className="h-1 w-full bg-neutral-800 rounded-full" />
                <div className="h-1 w-5/6 bg-neutral-800 rounded-full" />
                <div className="h-1 w-4/6 bg-neutral-800 rounded-full" />
              </div>

              {/* Bottom Bar */}
              <div className="mt-auto pt-4 border-t border-dashed border-neutral-300 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neutral-300" />
                <div className="text-[8px] text-neutral-400 font-mono">
                  CONFIDENTIAL
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Front Panel (Cover) */}
      <motion.div
        className="absolute bottom-0 w-full h-[75%] bg-[#EBE5CE] rounded-xl border-t border-x border-[#DFD8BF] border-b shadow-[0_5px_20px_-5px_rgba(0,0,0,0.15)] z-20 flex flex-col items-center justify-center transform-gpu origin-bottom overflow-hidden"
        animate={isHovered ? { rotateX: 12, y: 5 } : { rotateX: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
      >
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] mix-blend-multiply pointer-events-none" />

        {/* Label Area */}
        <div className="relative z-10 w-full px-8">
          <div className="bg-white/90 backdrop-blur-[2px] p-4 shadow-sm border border-neutral-200/50 -rotate-1 relative">
            {/* Tape */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-white/40 border border-white/60 backdrop-blur-md -rotate-1 shadow-sm opacity-60" />

            <div className="flex flex-col items-center gap-1">
              <span className="font-handwriting text-3xl text-neutral-800 leading-none pt-2">
                Case Studies
              </span>
              <div className="w-full h-px bg-neutral-300" />
              <span className="font-mono text-[9px] text-neutral-400 tracking-[0.2em] uppercase">
                Confidential
              </span>
            </div>
          </div>
        </div>

        {/* Clip/Fastener Visual */}
        <div className="absolute top-0 w-full flex justify-center">
          <div className="w-24 h-4 bg-linear-to-b from-[#DFD8BF] to-transparent opacity-50" />
        </div>
      </motion.div>

      {/* Subtle Shadow Pool */}
      <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/10 blur-xl rounded-[100%] z-[-1]" />
    </div>
  );
}
