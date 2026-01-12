"use client"

import React from 'react'
import { motion } from "framer-motion";

export default function ExploreSection() {
  return (
    <div className="w-full py-12 md:py-20 px-4 max-w-6xl mx-auto">
      {/* Visual Stage */}
      <div className="max-w-xl mx-auto relative">
        <div className="relative">
          {/* Main Monitor with CRT Aesthetic */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative z-20 w-full rounded-[1.5rem] overflow-hidden bg-zinc-900 border-6 border-zinc-800 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.4)] group cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                  alt="Development Environment"
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />

                {/* Scanline Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%]" />

                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent flex items-end p-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)] animate-pulse" />
                      <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-zinc-400">
                        Compiling: Go + Neural Engine
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-brand-green transition-colors">
                      High-Performance Systems.
                    </h4>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-brand-green/90 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_20px_rgba(77,139,49,0.5)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="ml-1"
                    >
                      <path d="m7 4 12 8-12 8V4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Monitor Control Bar */}
              <div className="h-10 bg-zinc-800 flex items-center justify-between px-6 border-t border-zinc-700">
                <div className="flex gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 shadow-inner" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700 shadow-inner" />
                  <div className="w-8 h-2.5 rounded-full bg-zinc-900 border border-zinc-700" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-green-500/50" />
                </div>
              </div>
            </motion.div>

            {/* Stacked Notes */}
            <div className="absolute -top-10 -left-6 md:-top-16 md:-left-12 z-30">
              {/* Bottom Note (Yellow Sticky) */}
              <motion.div
                initial={{ rotate: -10, x: -20, opacity: 0 }}
                whileInView={{ rotate: -14, x: 0, opacity: 1 }}
                whileHover={{ rotate: -8, scale: 1.05 }}
                className="relative bg-[#fff9c4] dark:bg-[#fff176] p-4 md:p-6 shadow-xl rounded-sm border border-amber-200/50 max-w-[130px] md:max-w-[180px]"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-brand-green/20 backdrop-blur-md border border-white/20 -rotate-2 z-10" />
                <p className="text-amber-900 text-base md:text-xl font-handwriting leading-tight">
                  development <br /> and ai
                </p>
              </motion.div>

              {/* Top Note (Handwritten) */}
              <motion.div
                initial={{ rotate: 5, x: 20, opacity: 0 }}
                whileInView={{ rotate: 2, x: 10, y: -40, opacity: 1 }}
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="absolute top-0 left-4 z-40 bg-note-bg p-4 md:p-6 shadow-2xl rounded-sm max-w-[140px] md:max-w-[180px] border border-note-border"
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-5 bg-brand-green/10 border border-brand-green/5 backdrop-blur-sm -rotate-2 z-10" />
                <p className="font-handwriting text-note-text text-base md:text-xl leading-tight">
                  I share my <br /> learnings here <br /> as well.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
  );
}
