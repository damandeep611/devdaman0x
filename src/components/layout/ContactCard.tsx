"use client";

import React, { useState } from "react";
import { Send, X } from "lucide-react";
import { motion } from "framer-motion";

interface ContactCardProps {
  onClose: () => void;
}

export default function ContactCard({ onClose }: ContactCardProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    try {
      //submitting the form 
      const response = await fetch("/api/telegram-connect",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          message
        })
      })
      if(response.ok){
        setIsSending(false);
        setTimeout(()=> {
          onClose();
        },2000)
      }else{
        console.error("Form submission failed");
        setIsSending(false)
      }
      
    } catch (error) {
      console.error("Error submitting Form:", error);
      setIsSending(false)
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -20, scale: 0.95, filter: "blur(4px)" }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.35 }}
      className="w-full sm:w-96 bg-[#111111]/90 backdrop-blur-2xl border border-neutral-800 rounded-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
    >
      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg">
              Contact
            </h3>
            <p className="text-neutral-500 text-[10px] sm:text-xs mt-0.5">
              Let&apos;s discuss your next project
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
          >
            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>

        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1.5 sm:space-y-2">
            <label
              htmlFor="email"
              className="text-[10px] sm:text-xs font-medium text-neutral-400 ml-1"
            >
              Email
            </label>
            <input
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-700"
              placeholder="john@example.com"
              type="email"
            />
          </div>
          <div className="space-y-1.5 sm:space-y-2">
            <label
              htmlFor="message"
              className="text-[10px] sm:text-xs font-medium text-neutral-400 ml-1"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-700 resize-none"
              rows={3}
              placeholder="Tell me about your project..."
            />
          </div>
          <motion.button className="w-full bg-white text-black font-semibold rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group">
            {isSending ? (
              <motion.div
                className="size-5 border-2 border-zinc-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ) : (
              <div className="flex items-center justify-center gap-2">
                Send Message
                <Send
                  size={12}
                  className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            )}
          </motion.button>
        </form>
      </div>

      {/* Status Footer */}
      <div className="bg-neutral-900/30 border-t border-neutral-800/50 px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </div>
          <span className="text-[10px] sm:text-xs text-green-500 font-medium">
            Available for work
          </span>
        </div>
        <span className="text-[10px] text-neutral-600 font-mono">
          Reply time: ~2h
        </span>
      </div>
    </motion.div>
  );
}
