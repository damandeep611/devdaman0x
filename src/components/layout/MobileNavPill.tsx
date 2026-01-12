"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Check, MessageSquare, X, ArrowLeft, Send, Loader2, Calendar, Home, BookOpen, Briefcase, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "Home", href: "/", icon: Home },
  { id: "blog", label: "Blog", href: "/blog", icon: BookOpen },
  { id: "work", label: "Work", href: "/work", icon: Briefcase },
];

type ContactView = "selection" | "message" | "calendar" | "success";

export default function MobileNavPill() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Contact Logic
  const [contactView, setContactView] = useState<ContactView>("selection");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleClose = () => {
      setIsOpen(false);
      setTimeout(() => {
          setContactView("selection");
          setEmail("");
          setMessage("");
      }, 300);
  }

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
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center w-full px-4">
      <motion.nav
        layout
        className={cn(
          "relative flex flex-col items-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl shadow-black/10 dark:shadow-black/30 overflow-hidden",
          isOpen ? "rounded-[24px] w-full max-w-sm" : "rounded-full w-auto"
        )}
      >
        {/* Expanded Content (Options) - Appears above the track */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-full"
            >
              <div className="flex flex-col gap-2 p-2 pt-3 pb-1">
                 {/* Dynamic Header */}
                 <div className="flex items-center justify-between px-3 py-1 mb-1">
                        {contactView === "selection" ? (
                            <>
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                                    Get in touch
                                </span>
                                <div className="flex gap-1.5 items-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-500/20"/>
                                    <span className="text-[10px] text-zinc-500 font-medium">Available</span>
                                </div>
                            </>
                        ) : (
                             <div className="flex items-center gap-2 w-full">
                                 <button 
                                    onClick={() => setContactView("selection")}
                                    className="p-1 -ml-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                                 >
                                     <ArrowLeft size={16} className="text-zinc-600 dark:text-zinc-400"/>
                                 </button>
                                 <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                     {contactView === "message" && "New Message"}
                                     {contactView === "calendar" && "Book a Call"}
                                     {contactView === "success" && "Sent"}
                                 </span>
                             </div>
                        )}
                 </div>

                 <AnimatePresence mode="wait">
                     {/* SELECTION VIEW */}
                     {contactView === "selection" && (
                        <motion.div
                            key="selection"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="grid grid-cols-2 gap-2 px-1"
                        >
                            <button
                                onClick={() => setContactView("message")}
                                className="group flex flex-col justify-between p-3 h-24 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700/50 hover:border-zinc-200 dark:hover:border-zinc-600 transition-all hover:shadow-sm text-left relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                    <MessageSquare size={16} fill="currentColor" className="opacity-20" />
                                    <MessageSquare size={16} className="absolute" />
                                </div>
                                <div className="relative">
                                    <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">Quick Query</div>
                                    <div className="text-[10px] text-zinc-500">Drop a question</div>
                                </div>
                            </button>

                            <button 
                                onClick={() => setContactView("calendar")}
                                className="group flex flex-col justify-between p-3 h-24 bg-white dark:bg-zinc-800 rounded-2xl border border-zinc-100 dark:border-zinc-700/50 hover:border-zinc-200 dark:hover:border-zinc-600 transition-all hover:shadow-sm text-left relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent dark:from-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                                    <Calendar size={16} fill="currentColor" className="opacity-20" />
                                    <Calendar size={16} className="absolute" />
                                </div>
                                <div className="relative">
                                    <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-100">Book Call</div>
                                    <div className="text-[10px] text-zinc-500">15 min intro</div>
                                </div>
                            </button>
                        </motion.div>
                     )}

                     {/* MESSAGE VIEW */}
                     {contactView === "message" && (
                        <motion.div
                            key="message"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="px-1"
                        >
                             <form onSubmit={handleSubmit} className="space-y-3 bg-white dark:bg-zinc-800 rounded-2xl p-3 border border-zinc-100 dark:border-zinc-700/50">
                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1">Email</label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700/50 rounded-xl px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-500 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider ml-1">Message</label>
                                        <textarea
                                            required
                                            rows={3}
                                            placeholder="How can I help you?"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="w-full bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700/50 rounded-xl px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-500 transition-all resize-none"
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
                            className="h-[480px] bg-white dark:bg-zinc-800 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-700/50 relative p-[1px] mx-1"
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
                            className="py-8 flex flex-col items-center justify-center text-center p-4"
                        >
                            <div className="w-14 h-14 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 ring-1 ring-emerald-500/20 mb-3">
                                <Check size={28} />
                            </div>
                            <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                Message Received
                            </h4>
                            <p className="text-zinc-500 text-xs mt-1 max-w-[200px]">
                                Thanks! I&apos;ll get back to you shortly.
                            </p>
                        </motion.div>
                     )}
                 </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Track - Static Icon Row */}
        <div className="relative flex items-center justify-between px-3 py-2 gap-4 md:gap-6">
            <AnimatePresence mode="wait">
            {!isOpen ? (
                <motion.div
                    key="nav-row"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-4 md:gap-6"
                >
                    {/* Main Nav Items */}
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => {
                            const isActive =
                            pathname === item.href ||
                            (item.href !== "/" && pathname.startsWith(item.href));

                            return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={cn(
                                "relative p-2 rounded-full transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                isActive
                                    ? "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800/50"
                                    : "text-zinc-500 dark:text-zinc-400"
                                )}
                            >
                                <item.icon size={20} strokeWidth={2} />
                            </Link>
                            );
                        })}
                    </div>

                    {/* Divider */}
                    <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800" />

                    {/* Actions */}
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
                        >
                            <Mail size={20} strokeWidth={2} />
                        </button>
                        
                        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-1" />
                        
                        <div className="scale-90">
                            <ModeToggle />
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="close-row"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center justify-between w-full px-1.5"
                >
                    <span className="text-[13px] font-medium text-zinc-500 dark:text-zinc-400 ml-1">
                        Close
                    </span>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 transition-colors"
                    >
                        <X size={18} />
                    </button>
                </motion.div>
            )}
            </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  );
}
