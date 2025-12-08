"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  Mail,
  XIcon,
  MapPin
} from "lucide-react";
import Image from "next/image";
import { FaGithub, FaLinkedin,  } from "react-icons/fa";
import PhotoGallery from "./PhotoGallery";
import { RiTwitterXFill } from "react-icons/ri";
import { SiReaddotcv } from "react-icons/si";
import { TfiInfo } from "react-icons/tfi";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HeroSection() {
  return (
    <section className="w-full mx-auto min-h-screen flex flex-col justify-between pt-32 pb-10">
      <div className="max-w-3xl mx-auto w-full px-6">
        {/* Profile Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="shrink-0">
            <div className="relative w-36 h-32 md:w-48 md:h-40 rounded-b-full overflow-hidden  ">
              <Image
                src="/download.png"
                alt="Daman"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Info */}
          <div className="space-y-4 pt-2">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-medium tracking-tight "
            >
              Hey I&apos;m Daman
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-lg md:text-xl font-serif italic ">
                Designer & Developer.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-2  text-sm"
            >
              <MapPin size={16} className="text-orange-200" />
              <span>India</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Pills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 flex flex-wrap justify-center md:justify-start gap-3"
        >
          {[
            { label: "About me", href: "#", icon: TfiInfo },
            { label: "Resume", href: "/resume.pdf", icon: SiReaddotcv },
            { label: "Email", href: "mailto:hello@example.com", icon: Mail },
            { label: "GitHub", href: "https://github.com", icon: FaGithub },
            {
              label: "Twitter",
              href: "https://twitter.com",
              icon: RiTwitterXFill,
            },
          ].map((item) => (
            <motion.a
              key={item.label}
              variants={itemVariants}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 border border-border text-sm rounded-full transition-all"
            >
              {item.icon && <item.icon size={14} />}
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Image Gallery */}
      <div className="mt-20 w-full">
        <PhotoGallery />
      </div>
    </section>
  );
}
