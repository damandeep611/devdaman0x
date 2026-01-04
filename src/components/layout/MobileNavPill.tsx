"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, Copy, MessageSquare, Phone } from "lucide-react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("hello@devdaman.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-center w-full">
      <motion.nav
        layout
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative flex flex-col items-center bg-[#EEEEEE] dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-inner w-full max-w-[92vw] sm:max-w-[380px] overflow-hidden transition-all",
          isOpen ? "rounded-4xl p-2" : "rounded-full p-2"
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
              <div className="grid grid-cols-2 gap-2 p-2 pt-0 pb-3">
                 <motion.button 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 }}
                   className="flex flex-col items-center justify-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm transition-all duration-200 group/btn"
                 >
                    <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover/btn:scale-110 transition-transform duration-300">
                       <MessageSquare size={20} fill="currentColor" className="opacity-100" />
                    </div>
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-200">Quick Message</span>
                 </motion.button>
                 
                 <motion.button 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2 }}
                   className="flex flex-col items-center justify-center gap-3 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-2xl hover:bg-white dark:hover:bg-zinc-700 hover:shadow-sm transition-all duration-200 group/btn"
                 >
                    <div className="w-12 h-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 group-hover/btn:scale-110 transition-transform duration-300">
                       <Phone size={20} fill="currentColor" className="opacity-100" />
                    </div>
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-200">Book a Call</span>
                 </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Track (The Original Nav Pill) */}
        <div className="relative w-full h-14 flex items-center shrink-0">
            <AnimatePresence mode="wait">
            {!isOpen ? (
                <motion.div
                key="nav-items"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-16 right-4 flex items-center justify-between px-4 h-full"
                >
                {navItems.map((item) => {
                    const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                    return (
                    <Link
                        key={item.id}
                        href={item.href}
                        className={cn(
                        "text-[14px] font-medium tracking-tight transition-colors duration-200",
                        isActive
                            ? "text-zinc-900 dark:text-zinc-100"
                            : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                        )}
                    >
                        {item.label}
                    </Link>
                    );
                })}
                </motion.div>
            ) : (
                <motion.div
                key="contact-info"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-4 flex items-center gap-3 text-zinc-600 dark:text-zinc-300 h-full"
                >
                <span className="text-sm font-medium tracking-wide">
                    hello@devdaman.com
                </span>
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
                "absolute top-0 z-20 flex items-center justify-center w-14 h-14 rounded-full bg-[#E5E5E5] dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 shadow-sm cursor-pointer hover:scale-105 active:scale-95 transition-all"
            )}
            initial={false}
            animate={{
                left: isOpen ? "calc(100% - 56px)" : "0px", 
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
            }}
            >
            <Mail
                size={20}
                className={cn(
                "text-zinc-500 transition-colors duration-300",
                isOpen && "text-zinc-900 dark:text-zinc-100"
                )}
            />
            </motion.div>
        </div>
      </motion.nav>
    </div>
  );
}
