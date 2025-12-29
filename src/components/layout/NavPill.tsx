"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactCard from "./ContactCard";
import { cn } from "@/lib/utils";

const navItems = [
  {
    id: "home-page",
    label: "Home",
    href: "/",
  },
  {
    id: "blog-page",
    label: "Blog",
    href: "/blog",
  },
  {
    id: "work-page",
    label: "Work",
    href: "/work",
  },
];

const isActiveRoute = (pathname: string, href: string): boolean => {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
};

export default function NavPill() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="fixed z-50 left-0 right-0 flex items-center justify-center pointer-events-none bottom-6 sm:bottom-auto sm:top-6 flex-col-reverse sm:flex-col gap-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="pointer-events-auto flex items-center gap-1 sm:gap-2 p-1.5 rounded-full border border-border/40 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-black/20"
      >
        {/* Profile / Brand */}
        <Link 
          href="/" 
          className="flex items-center gap-2 pl-3 pr-2 py-1.5 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-5 h-5 flex items-center justify-center bg-brand-green/10 rounded-md text-brand-green">
            <Sparkles size={12} fill="currentColor" />
          </div>
          <span className="hidden sm:block text-sm font-bold tracking-tight text-foreground">
            devDaman
          </span>
        </Link>

        <div className="w-px h-4 bg-border mx-1 hidden sm:block" />

        {/* Navigation Tabs */}
        <div className="flex items-center p-0.5 rounded-full bg-muted/50 border border-transparent sm:border-border/50">
          {navItems.map((item) => {
            const isActive = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative px-3 sm:px-4 py-1.5 text-[13px] sm:text-sm font-medium transition-colors duration-200",
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-background rounded-full shadow-sm ring-1 ring-black/5 dark:ring-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="w-px h-4 bg-border mx-1" />

        {/* Actions */}
        <div className="flex items-center gap-1 pr-1">
          <motion.button
            onClick={() => setIsContactOpen(!isContactOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "relative p-2 rounded-full transition-all duration-300 group",
              isContactOpen
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
            aria-label="Contact"
          >
            <Mail size={16} />
            {!isContactOpen && (
              <>
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-brand-green rounded-full ring-2 ring-background" />
                
                {/* Architectural Annotation Hint */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="absolute top-8 -left-20 pointer-events-none hidden md:block w-24"
                >
                  <div className="relative flex items-center justify-end gap-1">
                    <span className="font-(family-name:--font-geist-caveat) text-brand-green/80 text-xl rotate-[-6deg] pt-1">
                      contact
                    </span>
                    <svg
                      width="40"
                      height="30"
                      viewBox="0 0 40 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-brand-green/40"
                    >
                      <path
                        d="M 2 25 Q 15 25 35 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 25 5 L 35 5 L 33 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </>
            )}
          </motion.button>

          <ModeToggle />
        </div>
      </motion.nav>

      {/* Contact Card Container */}
      <AnimatePresence>
        {isContactOpen && (
          <div className="pointer-events-auto px-4 w-full flex justify-center">
            <ContactCard onClose={() => setIsContactOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}