"use client";
import React from "react";
import { motion } from "framer-motion";

import PhotoGallery from "./PhotoGallery";

export default function HeroSection() {
  return (
    <section className="w-full mx-auto min-h-screen flex flex-col justify-between pt-32 pb-10">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full mb-12">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-3xl overflow-hidden border-8 border-border shadow-2xl bg-secondary -rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="/download.png"
              alt="Daman's Profile"
              className="w-full h-full object-contain scale-110"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-center md:text-left max-w-md"
        >
          <h1 className="text-5xl md:text-6xl font-bold  tracking-tight leading-[1.1]">
            Hey I&apos;m
            <span className="text-brand-green pl-2 relative inline-block">
              Daman
            </span>
          </h1>
          <p className="mt-4 text-2xl font-medium text-muted-foreground font-serif italic">
            Designer & Developer.
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-4 text-muted-foreground font-semibold tracking-wide">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-green"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm uppercase tracking-[0.2em]">India</span>
          </div>
        </motion.div>
      </div>
      {/* Section 2: Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 mt-4 mb-12"
      >
        <TagChip label="Email" href="mailto:hello@example.com" />
        <TagChip label="Resume" href="#" />
        <TagChip label="Twitter" href="#" />
        <TagChip label="YouTube" href="#" />
      </motion.div>

      {/* Image Gallery */}
      <div className="mt-6 w-full mx-auto">
        <PhotoGallery />
      </div>
    </section>
  );
}

interface TagChipProps {
  label: string;
  href: string;
}

const TagChip: React.FC<TagChipProps> = ({ label, href }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-muted-foreground shadow-sm hover:border-brand-green hover:text-brand-green transition-all duration-300"
  >
    {label}
  </motion.a>
);