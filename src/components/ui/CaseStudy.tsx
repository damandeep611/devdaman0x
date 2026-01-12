"use client";
import React from "react";
import { ArrowUpRight, Wifi, Battery, Signal } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- Phone Card Components ---

const PhoneMockup = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6 md:p-10 perspective-1000">
      {/* Phone Frame */}
      <motion.div
        whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-full max-w-[300px] aspect-[9/19] bg-white dark:bg-zinc-950 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border-[8px] border-zinc-900 overflow-hidden transform rotate-[-4deg] transition-all duration-500 ease-out"
      >
        {/* Status Bar & Dynamic Island */}
        <div className="h-10 w-full flex items-center justify-between px-8 pt-4 relative z-50">
          <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
            9:41
          </span>

          {/* Dynamic Island */}
          <div className="absolute left-1/2 -translate-x-1/2 top-4 w-20 h-5 bg-black rounded-full" />

          <div className="flex gap-1.5 text-zinc-900 dark:text-zinc-100">
            <Signal size={12} strokeWidth={2.5} />
            <Wifi size={12} strokeWidth={2.5} />
            <Battery size={12} strokeWidth={2.5} className="rotate-90" />
          </div>
        </div>

        {/* App Content */}
        <div className="p-6 flex flex-col h-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 mt-4">
            <div className="w-10 h-10 rounded-2xl bg-zinc-900 dark:bg-zinc-100 flex items-center justify-center text-white dark:text-zinc-900 shadow-lg shadow-zinc-200 dark:shadow-none">
              <span className="text-sm font-bold">⌘</span>
            </div>
            <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 px-3 py-2 rounded-full border border-zinc-200/50 dark:border-zinc-800/50">
              <span className="text-[10px] font-medium text-zinc-500">
                Meet with
              </span>
              <div className="w-5 h-5 rounded-full bg-indigo-500 border-2 border-white dark:border-zinc-800" />
              <span className="text-[10px] font-bold">Jess</span>
            </div>
          </div>

          {/* Calendar Strip */}
          <div className="flex justify-between mb-8 gap-2">
            <div className="flex-1 flex flex-col items-center gap-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl py-3 shadow-xl shadow-zinc-200/50 dark:shadow-none">
              <span className="text-[10px] font-medium opacity-70 uppercase tracking-wider">
                Mon
              </span>
              <span className="text-xl font-black">21</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1 py-3 opacity-30">
              <span className="text-[10px] font-medium uppercase tracking-wider">
                Tue
              </span>
              <span className="text-xl font-bold">22</span>
            </div>
            <div className="flex-1 flex flex-col items-center gap-1 py-3 opacity-30">
              <span className="text-[10px] font-medium uppercase tracking-wider">
                Wed
              </span>
              <span className="text-xl font-bold">23</span>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-8">
            <span className="text-[10px] font-bold text-indigo-500 uppercase tracking-[0.2em] mb-1 block">
              Calendar
            </span>
            <h3 className="text-3xl font-black tracking-tight leading-tight">
              Monday,
              <br />
              Nov 21st
            </h3>
          </div>

          {/* Schedule */}
          <div className="flex flex-col gap-5 relative">
            {/* Time Marker */}
            <div className="absolute left-0 top-[-12px] text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              9 AM
            </div>

            {/* Event 1 */}
            <div className="ml-10 bg-indigo-50/50 dark:bg-indigo-500/10 border-l-4 border-indigo-500 p-4 rounded-xl relative group/item transition-all hover:translate-x-1">
              <div className="text-[11px] font-black text-indigo-900 dark:text-indigo-200 mb-0.5">
                Daily Standup
              </div>
              <div className="text-[10px] text-indigo-700/70 dark:text-indigo-300/70 mb-3">
                10:00am - 11:00am
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-zinc-800 w-fit px-2 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900/50 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-[9px] font-bold text-zinc-600 dark:text-zinc-400">
                  you@work.com
                </span>
              </div>
              {/* Duration Badge */}
              <div className="absolute right-4 top-4 bg-red-500 text-white flex flex-col items-center justify-center w-9 h-11 rounded-xl shadow-lg shadow-red-200 dark:shadow-none">
                <span className="text-sm font-black">1</span>
                <span className="text-[7px] uppercase font-black tracking-tighter">
                  hour
                </span>
              </div>
            </div>

            {/* Time Marker */}
            <div className="absolute left-0 top-[125px] text-[10px] text-zinc-400 font-bold uppercase tracking-wider">
              11 AM
            </div>

            {/* Event 2 */}
            <div className="ml-10 bg-emerald-50/50 dark:bg-emerald-500/10 border-l-4 border-emerald-500 p-4 rounded-xl opacity-60">
              <div className="text-[11px] font-black text-emerald-900 dark:text-emerald-200 mb-0.5">
                1-on-1 Interview
              </div>
              <div className="text-[10px] text-emerald-700/70 dark:text-emerald-300/70 mb-3">
                11:00am - 12:00pm
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-zinc-800 w-fit px-2 py-1 rounded-lg border border-emerald-100 dark:border-emerald-900/50 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                <span className="text-[9px] font-bold text-zinc-600 dark:text-zinc-400">
                  you@work.com
                </span>
              </div>
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
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <div className="w-full max-w-[104rem] mx-auto flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase text-foreground leading-none">
            Selected Work
          </h2>
          <div className="h-[2px] flex-1 bg-linear-to-r from-zinc-200 via-zinc-200 to-transparent dark:from-zinc-800 dark:via-zinc-800 dark:to-transparent mt-4" />
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-[104rem] mx-auto auto-rows-min">
        {/* 1. Buildxskill Phone Card (Left, Tall) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-5 md:row-span-2 min-h-[600px] md:min-h-[720px] bg-white dark:bg-zinc-900 rounded-[3rem] relative overflow-hidden group border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-2xl transition-all duration-700"
        >
          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-indigo-500/[0.02] to-transparent pointer-events-none" />

          <div className="absolute top-8 left-8 z-20">
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Buildxskill
              </span>
            </div>
          </div>

          <PhoneMockup />

          {/* Link Icon */}
          <div className="absolute bottom-8 left-8 z-20 w-14 h-14 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg cursor-pointer">
            <ArrowUpRight size={24} />
          </div>
        </motion.div>

        {/* 2. Plib Card (Top Center) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 min-h-[340px] bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] relative overflow-hidden group flex items-center justify-center border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="text-center px-8">
            <h3 className="text-6xl md:text-7xl font-serif text-zinc-300 dark:text-zinc-600 mb-1 tracking-tight group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-all duration-700 scale-95 group-hover:scale-100">
              Plib
            </h3>
            <span className="text-xl font-serif italic text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors duration-500">
              AI Library
            </span>
          </div>
          <div className="absolute bottom-8 left-8 z-20 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:scale-110 transition-all duration-500 shadow-md cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>

        {/* 3. Logo Card (Top Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-3 min-h-[340px] bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] relative overflow-hidden group flex items-center justify-center border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          {/* Abstract 3D Logo Shape constructed with CSS */}
          <div className="relative w-36 h-36 perspective-1000 group-hover:scale-110 transition-transform duration-700">
            <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 transform translate-x-6 translate-y-6 rounded-[2rem] opacity-50" />
            <div className="absolute inset-0 bg-zinc-300 dark:bg-zinc-700 transform translate-x-3 translate-y-3 rounded-[2rem] opacity-70" />
            <div className="absolute inset-0 bg-zinc-400 dark:bg-zinc-600 rounded-[2rem] flex items-center justify-center shadow-2xl">
              <span className="text-7xl font-black text-white dark:text-zinc-900">
                E
              </span>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 z-20 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:scale-110 transition-all duration-500 shadow-md cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>

        {/* 4. reuse motion Card (Bottom Center) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 min-h-[340px] bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] relative overflow-hidden group flex flex-col items-center justify-center border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <span className="text-sm font-black text-zinc-400 dark:text-zinc-500 mb-3 tracking-[0.3em] uppercase group-hover:text-indigo-500 transition-colors duration-500">
            Animation Library
          </span>
          <h3 className="text-5xl md:text-6xl font-black text-zinc-300 dark:text-zinc-700 uppercase tracking-tighter group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-all duration-700 group-hover:tracking-normal">
            REUSE MOTION
          </h3>
          <div className="absolute bottom-8 left-8 z-20 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:scale-110 transition-all duration-500 shadow-md cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>

        {/* 5. Arch Card (Bottom Right) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="md:col-span-3 min-h-[340px] bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] relative overflow-hidden group flex items-center justify-center border border-zinc-100 dark:border-zinc-800/50 shadow-sm hover:shadow-xl transition-all duration-500"
        >
          <div className="w-36 h-44 rounded-t-full border-[8px] border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-900 dark:group-hover:border-zinc-100 transition-all duration-700 group-hover:scale-105" />
          <div className="absolute bottom-8 left-8 z-20 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 group-hover:scale-110 transition-all duration-500 shadow-md cursor-pointer">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy;
