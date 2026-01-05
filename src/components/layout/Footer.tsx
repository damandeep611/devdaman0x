"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { XformerlyTwitter, GitHub, LinkedIn } from "../ui/icons/Icons";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/devdaman",
      icon: <GitHub className="w-5 h-5" />,
    },
    {
      name: "Twitter / X",
      href: "https://twitter.com/devdaman",
      icon: <XformerlyTwitter className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/devdaman",
      icon: <LinkedIn className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="w-full bg-background pt-16 pb-12 overflow-hidden relative z-10">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          {/* Left Side: Brand/CTA */}
          <div className="flex flex-col gap-4 max-w-md">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                System Core
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-black tracking-tighter leading-none text-foreground"
              >
                NEURAL CODEX
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-muted-foreground font-medium"
            >
              Building digital artifacts through clean design and technical
              precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="mailto:hello@devdaman.com"
                className="inline-flex items-center gap-1.5 text-sm font-bold border-b border-foreground pb-0.5 hover:text-blue-500 hover:border-blue-500 transition-colors group"
              >
                hello@devdaman.com
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Side: Social Icons (Icon Only) */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-muted/50 border border-transparent text-foreground hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-500 transition-all duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Background Text - Cut off at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05] z-0">
        <span className="text-[13vw] font-black leading-none whitespace-nowrap text-foreground tracking-tighter block translate-y-[35%]">
          DEVDAMAN DEVDAMAN
        </span>
      </div>
    </footer>
  );
};

export default Footer;