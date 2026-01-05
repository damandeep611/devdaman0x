"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Copy, MessageSquare, Phone, X, Sparkles } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "work", label: "Work", href: "/work" },
];

export default function MobileNavPill() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("hello@devdaman.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-center w-full px-4 mb-2">
      <motion.nav
        layout
        className={cn(
          "relative flex flex-col items-center bg-[#EEEEEE] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-xl shadow-black/5 dark:shadow-black/20 w-full overflow-hidden transition-all",
          isOpen ? "rounded-3xl p-1.5" : "rounded-full p-1.5"
        )}
      >
        {/* Expanded Content (Options) - Appears above the track */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full overflow-hidden origin-bottom"
            >
              <div className="flex flex-col gap-2 p-2 pt-1 pb-3">
                 <div className="flex items-center justify-between px-2 py-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                            Get in touch
                        </span>
                        <div className="flex gap-1 items-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
                            <span className="text-[10px] text-zinc-500 font-medium">Available for work</span>
                        </div>
                 </div>

                 <div className="grid grid-cols-2 gap-2">
                    <a 
                        href="mailto:hello@devdaman.com"
                        className="group flex flex-col justify-between p-3 h-24 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all hover:shadow-sm"
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <MessageSquare size={16} fill="currentColor" className="opacity-20" />
                            <MessageSquare size={16} className="absolute" />
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">Email Me</div>
                            <div className="text-[10px] text-zinc-500">Response in 24h</div>
                        </div>
                    </a>

                    <button 
                        className="group flex flex-col justify-between p-3 h-24 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all hover:shadow-sm text-left"
                    >
                        <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                            <Phone size={16} fill="currentColor" className="opacity-20" />
                            <Phone size={16} className="absolute" />
                        </div>
                        <div>
                            <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">Book Call</div>
                            <div className="text-[10px] text-zinc-500">15 min intro</div>
                        </div>
                    </button>
                 </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Track (The Original Nav Pill) */}
        <div className="relative w-full h-12 flex items-center shrink-0">
            <AnimatePresence mode="wait">
            {!isOpen ? (
                <motion.div
                key="nav-items"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-14 right-2 flex items-center justify-between px-2 h-full"
                >
                  <div className="flex items-center justify-between flex-1">
                    {navItems.map((item) => {
                        const isActive =
                        pathname === item.href ||
                        (item.href !== "/" && pathname.startsWith(item.href));

                        return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={cn(
                            "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full",
                            isActive
                                ? "text-zinc-900 dark:text-zinc-100"
                                : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="mobile-nav-active"
                                    className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{item.label}</span>
                        </Link>
                        );
                    })}
                  </div>
                  <div className="flex items-center ml-2 pl-2 border-l border-zinc-300 dark:border-zinc-800 scale-75">
                      <ModeToggle />
                  </div>
                </motion.div>
            ) : (
                <motion.div
                key="contact-info"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-2 right-14 flex items-center justify-between pl-2 pr-2 text-zinc-600 dark:text-zinc-300 h-full"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                             <Mail size={16} />
                        </div>
                        <span className="text-sm font-medium tracking-tight">
                            hello@devdaman.com
                        </span>
                    </div>
                    <button
                        onClick={handleCopy}
                        className="p-1.5 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-full transition-colors"
                        title="Copy email"
                    >
                        {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                    </button>
                </motion.div>
            )}
            </AnimatePresence>

            {/* The Circle Handle */}
            <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
                "absolute top-0 z-20 flex items-center justify-center w-12 h-12 rounded-full shadow-sm cursor-pointer transition-all",
                "bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:scale-105 active:scale-95"
            )}
            initial={false}
            animate={{
                left: isOpen ? "calc(100% - 48px)" : "0px", 
            }}
            transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
            }}
            >
             <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                     <motion.div 
                        key="close"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                     >
                        <X size={20} className="text-zinc-900 dark:text-zinc-100" />
                     </motion.div>
                ) : (
                    <motion.div 
                        key="open"
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                     >
                         <Mail size={20} className="text-zinc-600 dark:text-zinc-300" />
                    </motion.div>
                )}
             </AnimatePresence>
            </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
