"use client";

import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { XformerlyTwitter, GitHub, LinkedIn } from "../ui/icons/Icons";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="w-full pb-10 pt-20">
      <div className="flex justify-center w-full px-4 sm:px-6">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 bg-white/70 dark:bg-zinc-900/90 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 p-4 px-10 rounded-[40px] w-full max-w-7xl shadow-2xl shadow-black/5"
        >
            {/* Left Side: Brand & Email */}
            <div className="flex items-center gap-6">
                <a 
                    href="mailto:hello@devdaman.com" 
                    className="flex items-center gap-4 group transition-all"
                >
                    <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-200/50 dark:border-zinc-700/50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                        <Send size={20} className="text-zinc-600 dark:text-zinc-300 -ml-0.5 mt-0.5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 font-bold leading-tight mb-0.5">Get in touch</span>
                        <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">
                            hello@devdaman.com
                        </span>
                    </div>
                </a>
            </div>

            {/* Right Side: Social Dock */}
            <div className="flex items-center gap-4">
                <SocialLink 
                    href="https://twitter.com/devdaman" 
                    icon={<XformerlyTwitter className="w-5 h-5" />} 
                    label="X / Twitter"
                    className="bg-black text-white dark:bg-zinc-950 dark:text-white"
                />
                <SocialLink 
                    href="https://github.com/devdaman" 
                    icon={<GitHub className="w-6 h-6 text-white" />} 
                    label="GitHub"
                    className="bg-[#181717] dark:bg-zinc-800"
                />
                <SocialLink 
                    href="https://linkedin.com/in/devdaman" 
                    icon={<LinkedIn className="w-10 h-10" />} 
                    label="LinkedIn"
                    className="bg-white dark:bg-white p-0 border-zinc-200"
                />
            </div>
        </motion.div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label, className }: { href: string; icon: React.ReactNode; label: string; className?: string }) {
    return (
        <motion.a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            whileHover={{ y: -8, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg shadow-black/5 transition-all overflow-hidden border border-transparent hover:border-zinc-200/50 dark:hover:border-zinc-700/50",
                className
            )}
        >
            {icon}
        </motion.a>
    )
}
