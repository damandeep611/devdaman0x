"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from "lucide-react";
import { ModeToggle } from "../theme/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactCard from "./ContactCard";

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
  const isPathname = usePathname();

  return (
    <div className="fixed top-6 sm:top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 w-[calc(100%-24px)] sm:w-auto max-w-lg">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full border border-neutral-800 bg-[#111111]/80 backdrop-blur-md shadow-2xl shadow-black/50"
      >
        {/* Profile Section */}
        <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2 pr-1 sm:pr-4 cursor-pointer group shrink-0">
          <span className="hidden sm:block text-sm font-semibold text-neutral-200 tracking-tight group-hover:text-white transition-colors">
            devDaman
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 sm:h-6 bg-neutral-800 mx-0 sm:mx-1 shrink-0" />

        {/* Action Button: Mail */}
        <motion.button
          onClick={() => setIsContactOpen(!isContactOpen)}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 sm:p-2.5 rounded-full transition-colors relative shrink-0 ${
            isContactOpen
              ? "bg-neutral-800 text-white"
              : "text-neutral-400 hover:text-white"
          }`}
          aria-label="Contact"
        >
          <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
          {!isContactOpen && (
            <span className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full border-2 border-[#111111]" />
          )}
        </motion.button>

        {/* Navigation Tabs */}
        <nav
          className="flex items-center bg-transparent rounded-full px-0 sm:px-1 shrink-0"
          aria-label="Main-navigation"
        >
          {navItems.map((item) => {
            const isActive = isActiveRoute(isPathname, item.href);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={`relative px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full font-medium transition-colors duration-300 ease-in-out focus:outline-none ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                }`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-zinc-700 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ borderRadius: 9999 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle */}
        <ModeToggle />
      </motion.nav>

      {/* Contact Card */}
      <AnimatePresence>
        {isContactOpen && (
          <ContactCard onClose={() => setIsContactOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};