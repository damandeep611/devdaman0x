"use client";

import React, { useState } from "react";
import {
  Send,
  X,
  Calendar,
  Mail,
  ArrowLeft,
  Check,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  onClose: () => void;
}

type View = "selection" | "message" | "calendar" | "success";

export default function ContactCard({ onClose }: ContactCardProps) {
  const [view, setView] = useState<View>("selection");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

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
        setView("success");
        setTimeout(onClose, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  // Slightly wider for a more premium "breathing" layout
  const cardWidth = view === "calendar" ? "w-[500px]" : "w-[400px]";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.95, y: 10, filter: "blur(4px)" }}
      transition={{ type: "spring", stiffness: 350, damping: 25 }}
      className={cn(
        "bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/8 rounded-4xl shadow-2xl shadow-black/80 overflow-hidden relative z-50",
        cardWidth
      )}
    >
      {/* Subtle top light leak */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/2 blur-3xl rounded-full pointer-events-none" />

      {/* Header */}
      <div className="relative flex items-center justify-between px-6 pt-6 pb-2 shrink-0 z-10">
        <div className="flex items-center gap-3">
          <AnimatePresence mode="popLayout">
            {view !== "selection" && view !== "success" && (
              <motion.button
                initial={{ opacity: 0, x: -10, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -10, scale: 0.8 }}
                onClick={() => setView("selection")}
                className="p-2 -ml-2 rounded-full hover:bg-white/5 text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={18} />
              </motion.button>
            )}
          </AnimatePresence>
          <motion.h3
            layoutId="title"
            className="text-white tracking-wide flex items-center gap-2"
          >
            {view === "selection" && (
              <span className=" text-sm flex items-center gap-2">
                Choose how to proceed
              </span>
            )}
            {view === "message" && "New Message"}
            {view === "calendar" && "Book a Call"}
            {view === "success" && "Sent"}
          </motion.h3>
        </div>
        <button
          onClick={onClose}
          className="group p-2 rounded-full bg-transparent hover:bg-white/5 text-neutral-500 hover:text-white transition-all"
        >
          <X
            size={18}
            className="group-hover:rotate-90 transition-transform duration-300"
          />
        </button>
      </div>

      <div className="p-6 pt-4 relative z-10">
        <AnimatePresence mode="wait">
          {view === "selection" && (
            <motion.div
              key="selection"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="space-y-3"
            >
              {/* Message Option */}
              <button
                onClick={() => setView("message")}
                className="group relative w-full overflow-hidden rounded-3xl bg-white/3 border border-white/5 p-1 transition-all hover:bg-white/5 hover:border-white/10"
              >
                <div className="relative flex items-center gap-5 p-4 rounded-[20px] transition-all bg-neutral-900/50 group-hover:bg-neutral-900/0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                    <Mail size={22} strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-[15px] font-medium text-white group-hover:text-blue-100 transition-colors">
                      Quick Query
                    </div>
                    <div className="text-xs text-neutral-500 mt-1 leading-relaxed pr-4 group-hover:text-neutral-400 transition-colors">
                      Got a quick question? Drop it here.
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all"
                  />
                </div>
              </button>

              {/* Calendar Option */}
              <button
                onClick={() => setView("calendar")}
                className="group relative w-full overflow-hidden rounded-3xl bg-white/3 border border-white/5 p-1 transition-all hover:bg-white/5 hover:border-white/10"
              >
                <div className="relative flex items-center gap-5 p-4 rounded-[20px] transition-all bg-neutral-900/50 group-hover:bg-neutral-900/0">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
                    <Calendar size={22} strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-[15px] font-medium text-white group-hover:text-purple-100 transition-colors">
                      Book Call
                    </div>
                    <div className="text-xs text-neutral-500 mt-1 leading-relaxed pr-4 group-hover:text-neutral-400 transition-colors">
                      Schedule call to discuss project.
                    </div>
                  </div>
                  <ChevronRight
                    size={18}
                    className="text-neutral-600 group-hover:text-white group-hover:translate-x-1 transition-all"
                  />
                </div>
              </button>
            </motion.div>
          )}

          {view === "message" && (
            <motion.form
              key="message"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-neutral-500 ml-1 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/3 border border-white/8 rounded-2xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:bg-white/6 focus:border-blue-500/30 transition-all placeholder:text-neutral-600"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[11px] font-medium text-neutral-500 ml-1 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What kind of project? What's your timeline?."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/3 border border-white/8 rounded-2xl px-4 py-3.5 text-[14px] text-white focus:outline-none focus:bg-white/6 focus:border-blue-500/30 transition-all placeholder:text-neutral-600 resize-none"
                  />
                </div>
              </div>
              <button
                disabled={isSending}
                className="w-full bg-white text-black font-semibold rounded-2xl py-4 text-[14px] hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <Loader2
                    size={18}
                    className="animate-spin text-neutral-600"
                  />
                ) : (
                  <>
                    Send Message <Send size={16} strokeWidth={2.5} />
                  </>
                )}
              </button>
            </motion.form>
          )}

          {view === "calendar" && (
            <motion.div
              key="calendar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="h-[500px] bg-neutral-900 rounded-3xl overflow-hidden border border-white/8 relative"
            >
              <iframe
                src="https://cal.com/daman-deep-lbx8oq"
                className="w-full h-full border-none"
                title="Book a call"
              />
            </motion.div>
          )}

          {view === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 ring-1 ring-emerald-500/20 mb-6 shadow-2xl shadow-emerald-500/20">
                <Check size={40} strokeWidth={3} />
              </div>
              <h4 className="text-xl font-semibold text-white tracking-tight">
                Message Received
              </h4>
              <p className="text-neutral-500 text-[13px] mt-2 max-w-60 leading-relaxed">
                Thank you for reaching out. I&apos;ll get back to you within a
                few hours.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
