"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Mail, Sparkles, MessageSquare, Copy, Check, X, ArrowLeft, Send, Loader2, Calendar } from "lucide-react";
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

type ContactView = "selection" | "message" | "calendar" | "success";

const isActiveRoute = (pathname: string, href: string): boolean => {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
};

export default function NavPill() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const pathname = usePathname();

  // Contact Logic
  const [contactView, setContactView] = useState<ContactView>("selection");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@devdaman.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after animation
    setTimeout(() => {
        setContactView("selection");
        setEmail("");
        setMessage("");
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      const response = await fetch("/api/telegram-connect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (response.ok) {
        setContactView("success");
        setTimeout(handleClose, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSending(false);
    }
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
              width: isOpen ? (contactView === 'calendar' ? 500 : 440) : "fit-content",
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
              {/* Brand or Back Button */}
              <div className="flex items-center gap-2">
                 <AnimatePresence mode="popLayout" initial={false}>
                    {isOpen && contactView !== "selection" && contactView !== "success" ? (
                        <motion.button
                            initial={{ opacity: 0, x: -10, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -10, scale: 0.8 }}
                            onClick={() => setContactView("selection")}
                            className="p-1.5 -ml-1.5 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                        >
                            <ArrowLeft size={18} />
                        </motion.button>
                    ) : (
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
                    )}
                 </AnimatePresence>
              </div>

              {/* Navigation Links (Centered) - Only show when closed or in selection view */}
              <AnimatePresence>
                  {(!isOpen || contactView === "selection") && (
                    <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, width: 0 }}
                        className="flex items-center gap-1 mx-2"
                    >
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
                  )}
              </AnimatePresence>

              {/* Title for Sub-views */}
               <AnimatePresence>
                  {isOpen && contactView !== "selection" && (
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute left-1/2 -translate-x-1/2 font-medium text-sm text-zinc-900 dark:text-zinc-100"
                     >
                        {contactView === "message" && "New Message"}
                        {contactView === "calendar" && "Book a Call"}
                        {contactView === "success" && "Sent"}
                     </motion.div>
                  )}
               </AnimatePresence>


              {/* Actions */}
              <div className="flex items-center gap-1.5">
                <motion.button
                  layout
                  onClick={isOpen ? handleClose : () => setIsOpen(true)}
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
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25, delay: 0.1 }}
                  className="w-full border-t border-zinc-200/50 dark:border-zinc-800/50"
                >
                   <AnimatePresence mode="wait">

                       {/* SELECTION VIEW */}
                       {contactView === "selection" && (
                           <motion.div
                                key="selection"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="p-3 flex flex-col gap-2"
                           >
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
                                    <button
                                        onClick={() => setContactView("message")}
                                        className="group flex flex-col justify-between p-3 h-24 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all hover:shadow-sm text-left"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                            <MessageSquare size={16} fill="currentColor" className="opacity-20" />
                                            <MessageSquare size={16} className="absolute" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">Quick Query</div>
                                            <div className="text-[10px] text-zinc-500">Drop a question</div>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setContactView("calendar")}
                                        className="group flex flex-col justify-between p-3 h-24 bg-white dark:bg-zinc-800 rounded-xl border border-zinc-200/50 dark:border-zinc-700/50 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all hover:shadow-sm text-left"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                            <Calendar size={16} fill="currentColor" className="opacity-20" />
                                            <Calendar size={16} className="absolute" />
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
                           </motion.div>
                       )}

                       {/* MESSAGE VIEW */}
                       {contactView === "message" && (
                           <motion.div
                                key="message"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="p-4"
                           >
                                <form onSubmit={handleSubmit} className="space-y-3">
                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1">Email</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="name@example.com"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 rounded-xl px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-500 transition-all"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1">Message</label>
                                            <textarea
                                                required
                                                rows={4}
                                                placeholder="How can I help you?"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="w-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 rounded-xl px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-500 transition-all resize-none"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        disabled={isSending}
                                        className="w-full bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 font-medium rounded-xl py-2.5 text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-2 disabled:opacity-50"
                                    >
                                        {isSending ? (
                                            <Loader2 size={16} className="animate-spin" />
                                        ) : (
                                            <>
                                                Send Message <Send size={14} />
                                            </>
                                        )}
                                    </button>
                                </form>
                           </motion.div>
                       )}

                       {/* CALENDAR VIEW */}
                       {contactView === "calendar" && (
                           <motion.div
                                key="calendar"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="h-[500px] w-full bg-white dark:bg-zinc-800/50 overflow-hidden relative"
                           >
                                <iframe
                                    src="https://cal.com/daman-deep-lbx8oq"
                                    className="w-full h-full border-none"
                                    title="Book a call"
                                />
                           </motion.div>
                       )}

                        {/* SUCCESS VIEW */}
                        {contactView === "success" && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 flex flex-col items-center justify-center text-center p-4"
                            >
                                <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 ring-1 ring-emerald-500/20 mb-4">
                                    <Check size={32} />
                                </div>
                                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                    Message Received
                                </h4>
                                <p className="text-zinc-500 text-xs mt-2 max-w-[200px]">
                                    Thanks! I&apos;ll get back to you shortly.
                                </p>
                            </motion.div>
                        )}

                   </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.nav>
        </LayoutGroup>
      </div>
    </>
  );
}