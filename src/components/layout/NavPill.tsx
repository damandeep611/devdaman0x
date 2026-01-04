"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Mail, Sparkles, MessageSquare, Phone, Copy, Check, X, ArrowUpRight } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import MobileNavPill from "./MobileNavPill";

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "work", label: "Work", href: "/work" },
];

const isActiveRoute = (pathname: string, href: string): boolean => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export default function NavPill() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@devdaman.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-6 sm:hidden pointer-events-none">
        <div className="pointer-events-auto w-full">
          <MobileNavPill />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex fixed z-50 left-0 right-0 items-start justify-center pointer-events-none top-6 h-screen">
        <LayoutGroup>
          <motion.nav
            layout
            initial={{ y: -100, opacity: 0 }}
            animate={{ 
              y: 0, 
              opacity: 1,
              width: isOpen ? 380 : "fit-content",
              borderRadius: isOpen ? 24 : 50,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="pointer-events-auto bg-[#EEEEEE] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 shadow-xl shadow-black/5 dark:shadow-black/20 overflow-hidden flex flex-col"
          >
            {/* Header Row */}
            <motion.div 
              layout="position" 
              className={cn(
                "flex items-center justify-between w-full",
                isOpen ? "p-3 px-4" : "p-1.5 pl-3"
              )}
            >
              {/* Brand */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative w-6 h-6 flex items-center justify-center bg-zinc-200 dark:bg-zinc-800 rounded-full text-zinc-600 dark:text-zinc-300 group-hover:scale-110 transition-transform">
                  <Sparkles size={12} fill="currentColor" />
                </div>
                {!isOpen && (
                    <motion.span 
                        initial={{ opacity: 0, width: 0 }} 
                        animate={{ opacity: 1, width: "auto" }}
                        className="text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-100 whitespace-nowrap overflow-hidden"
                    >
                        devDaman
                    </motion.span>
                )}
                {isOpen && (
                    <motion.span 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        className="text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
                    >
                        devDaman
                    </motion.span>
                )}
              </Link>

              {/* Navigation Links (Centered) */}
              <motion.div layout className="flex items-center gap-1 mx-2">
                {navItems.map((item) => {
                  const isActive = isActiveRoute(pathname, item.href);
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={cn(
                        "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50",
                        isActive ? "text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400"
                      )}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="desktop-nav-active"
                          className="absolute inset-0 bg-white dark:bg-zinc-800 rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{item.label}</span>
                    </Link>
                  );
                })}
              </motion.div>

              {/* Actions */}
              <div className="flex items-center gap-1.5">
                <motion.button
                  layout
                  onClick={() => setIsOpen(!isOpen)}
                  className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full transition-colors",
                    isOpen 
                        ? "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100" 
                        : "hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400"
                  )}
                >
                  {isOpen ? <X size={16} /> : <Mail size={16} />}
                </motion.button>
                <div className="scale-90">
                    <ModeToggle />
                </div>
              </div>
            </motion.div>

            {/* Expanded Content */}
            <AnimatePresence mode="popLayout">
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="w-full border-t border-zinc-200/50 dark:border-zinc-800/50"
                >
                  <div className="p-3 flex flex-col gap-2">
                    <div className="flex items-center justify-between px-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                            Get in touch
                        </span>
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
                            <span className="text-[10px] text-zinc-500 font-medium">Available for work</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-1">
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

                    <div 
                        onClick={handleCopy}
                        className="group flex items-center justify-between p-3 mt-1 bg-zinc-100 dark:bg-zinc-800/50 rounded-xl cursor-pointer hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                    >
                         <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-600 dark:text-zinc-300">
                                 <Mail size={14} />
                             </div>
                             <div className="flex flex-col">
                                <span className="text-xs font-medium text-zinc-900 dark:text-zinc-100">hello@devdaman.com</span>
                                <span className="text-[10px] text-zinc-500">Click to copy</span>
                             </div>
                         </div>
                         <div className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors">
                            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                         </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </LayoutGroup>
      </div>
    </>
  );
}