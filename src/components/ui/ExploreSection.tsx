"use client"

import React from 'react'
import { motion } from "framer-motion";

export default function ExploreSection() {
  return (
    <div className="w-full py-12 md:py-20 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Context & Metadata */}
        <div className="lg:col-span-4 space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-recording-red/10 flex items-center justify-center text-recording-red">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="md:w-5 md:h-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.46-5.58z" />
                  <path d="m9.75 15.02 5.75-3.02-5.75-3z" />
                </svg>
              </div>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.4em] uppercase text-muted-foreground">
                The Creator Studio
              </span>
            </div>
            <h3 className="text-3xl md:text-5xl font-serif italic text-foreground leading-[1.1]">
              Recording the <br /> journey of <br />{" "}
              <span className="text-brand-green">creation.</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed font-medium max-w-xs mx-auto lg:mx-0 text-sm md:text-base">
              I believe the process is as valuable as the result. My YouTube
              channel is a public archive of engineering sprints, design
              failures, and final breakthroughs.
            </p>
          </div>
        </div>

        {/* Right Column: Visual Stage */}
        <div className="lg:col-span-8 relative mt-8 lg:mt-0">
          <div className="relative">
            {/* Main Monitor with CRT Aesthetic */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative z-20 w-full rounded-[3rem] overflow-hidden bg-zinc-900 border-12 border-zinc-800 shadow-[0_60px_100px_-20px_rgba(0,0,0,0.4)] group cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src="https://picsum.photos/1200/675?random=301"
                  alt="Main Video"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Scanline Effect Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-size-[100%_4px,3px_100%]" />

                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent flex items-end p-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse" />
                      <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-400">
                        Recording Process
                      </span>
                    </div>
                    <h4 className="text-3xl font-bold text-white tracking-tight group-hover:text-brand-green transition-colors">
                      Building Invisible Infrastructure.
                    </h4>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-24 h-24 rounded-full bg-brand-green/90 backdrop-blur-md flex items-center justify-center text-white shadow-[0_0_30px_rgba(77,139,49,0.5)]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
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
              <div className="h-14 bg-zinc-800 flex items-center justify-between px-10 border-t border-zinc-700">
                <div className="flex gap-4">
                  <div className="w-4 h-4 rounded-full bg-zinc-700 shadow-inner" />
                  <div className="w-4 h-4 rounded-full bg-zinc-700 shadow-inner" />
                  <div className="w-12 h-4 rounded-full bg-zinc-900 border border-zinc-700" />
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
              </div>
            </motion.div>

            {/* Sticky Note - Redesigned to be more 'Fun' */}
            <motion.div
              initial={{ rotate: -10, x: -20, y: -20, opacity: 0 }}
              whileInView={{ rotate: -14, x: 0, y: 0, opacity: 1 }}
              whileHover={{ rotate: -8, scale: 1.1, y: -10 }}
              className="absolute -top-6 -left-4 md:-top-10 md:-left-12 z-30 pointer-events-auto"
            >
              <div className="font-(family-name:--font-geist-caveat) relative bg-[#fff9c4] dark:bg-[#fff176] p-4 md:p-8 shadow-[10px_10px_30px_rgba(0,0,0,0.15)] rounded-sm border border-amber-200/50 max-w-[140px] md:max-w-[200px]">
                {/* Translucent Washi Tape */}
                <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-10 h-6 md:w-16 md:h-8 bg-brand-green/30 backdrop-blur-md border border-white/20 -rotate-2 z-10" />

                <p
                  className="
                 text-amber-900 text-lg md:text-2xl leading-tight"
                >
                  Don&apos;t skip <br /> the messy <br /> parts.
                </p>
                <div className="mt-2 md:mt-4 flex gap-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-900/10" />
                  <div className="w-8 h-1 md:w-10 md:h-1 rounded-full bg-amber-900/10" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* The Handwritten Note - Refined Integration */}
          <div className="absolute -top-8 -right-4 md:-top-12 md:-left-16 z-30 pointer-events-none hidden md:block">
            <motion.div
              initial={{ rotate: -5, opacity: 0 }}
              whileInView={{ rotate: -8, opacity: 1 }}
              className="relative bg-note-bg p-4 md:p-6 shadow-2xl rounded-sm max-w-[140px] md:max-w-[180px] border border-note-border"
            >
              {/* Tape Effect */}
              <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 w-10 h-5 md:w-12 md:h-6 bg-brand-green/10 border border-brand-green/5 backdrop-blur-sm -rotate-2 z-10" />

              <p className="font-(family-name:--font-geist-caveat) text-note-text text-lg md:text-xl leading-tight">
                I share my learnings <br /> & related stuff here <br /> as well.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
