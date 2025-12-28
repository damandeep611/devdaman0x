"use client"

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const IMAGES = [
  {
    src: "https://picsum.photos/400/500?random=11",
    label: "Studio Vibes",
    tape: true,
  },
  {
    src: "https://picsum.photos/400/500?random=22",
    label: "Late Nights",
    tape: false,
  },
  {
    src: "https://picsum.photos/400/500?random=33",
    label: "Architecture",
    tape: true,
  },
  {
    src: "https://picsum.photos/400/500?random=44",
    label: "Minimalism",
    tape: false,
  },
  {
    src: "https://picsum.photos/400/500?random=55",
    label: "Pure Focus",
    tape: true,
  },
];

const cardVariants: Variants = {
  initial: (i: number) => ({
    y: 80,
    opacity: 0,
    rotate: i % 2 === 0 ? -15 : 15,
    x: -30,
    scale: 0.9,
  }),
  animate: (i: number) => {
    const center = 2;
    const offset = i - center;
    const rotate = offset * 7 + (i % 2 === 0 ? 2 : -2);
    const x = offset * 48;
    const y = Math.abs(offset) * 15 + (i % 2 === 0 ? 5 : 0);

    return {
      y,
      opacity: 1,
      rotate,
      x,
      scale: 1,
      zIndex: 10 - Math.abs(offset),
      transition: {
        delay: 0.2 + i * 0.12,
        duration: 1.2,
        type: "spring",
        stiffness: 90,
        damping: 15,
      },
    };
  },
  hover: {
    y: -40,
    rotate: 0,
    scale: 1.12,
    zIndex: 50,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};

const PhotoGallery: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20 overflow-hidden lg:overflow-visible relative px-4">
      <div className="w-full order-2 lg:order-1 relative">
        <ImageFan />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-green/5 rounded-full blur-3xl -z-10 opacity-60" />
      </div>

      <div className="text-center lg:text-left order-1 lg:order-2 space-y-4 md:space-y-6 relative">
        <div className="hidden lg:block absolute -left-20 top-0 text-brand-green/40">
          <svg
            width="60"
            height="60"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M 80 20 Q 50 20 20 80" />
            <path d="M 15 70 L 20 80 L 30 75" />
          </svg>
        </div>
        <div className="space-y-2">
          <h2 className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-brand-green/60">
            Gen AI Library
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold font-serif italic leading-[1.1]">
            Workflows | Prompts <br />
            <span className="text-muted-foreground">&</span> Exploration.
          </h3>
        </div>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0 font-medium">
          Contains Generative AI workflows, Prompts, Images and references to
          the tools used. Comprehensive guides also for local setups.
        </p>
        <motion.div
          whileHover={{ x: 10 }}
          className="pt-4 md:pt-6 inline-flex items-center gap-3 text-brand-green font-bold cursor-pointer group"
        >
          <span className="text-xs md:text-sm uppercase tracking-widest border-b-2 border-brand-green/20 group-hover:border-brand-green transition-colors pb-1">
            Browse
          </span>
          <ArrowRight size={14} className="md:w-4 md:h-4" />
        </motion.div>
      </div>
    </div>
  );
};

export default PhotoGallery;

const ImageFan: React.FC = () => {
  return (
    <div className="relative h-[350px] md:h-[450px] lg:h-[550px] w-full flex items-center justify-center lg:justify-start overflow-visible">
      <div className="relative w-full max-w-md flex justify-center items-center h-full z-10 perspective-2000">
        {IMAGES.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="absolute w-36 h-48 md:w-44 md:h-60 lg:w-60 lg:h-80 rounded-sm overflow-visible border-4 md:border-8 border-card bg-card group cursor-pointer"
            style={{
              transformOrigin: "bottom center",
              boxShadow:
                "0 10px 30px -10px rgba(0,0,0,0.15), 0 2px 5px -2px rgba(0,0,0,0.1)",
            }}
          >
            {/* Washi Tape Effect */}
            {item.tape && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-brand-green/20 dark:bg-brand-green/40 border border-brand-green/10 dark:border-brand-green/20 backdrop-blur-sm -rotate-2 z-20 shadow-sm opacity-80" />
            )}

            <div className="relative w-full h-[82%] overflow-hidden bg-muted">
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] pointer-events-none" />
            </div>

            {/* Polaroid Bottom Label Area */}
            <div className="h-[18%] flex items-center justify-center px-2">
              <span className="font-handwriting text-muted-foreground text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                {item.label}
              </span>
              <span className="font-handwriting text-muted-foreground/30 text-xs md:text-sm absolute group-hover:opacity-0 transition-opacity">
                #{i + 1}
              </span>
            </div>

            {/* Card Lift Shadow */}
            <div className="absolute -inset-1 bg-foreground/5 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
