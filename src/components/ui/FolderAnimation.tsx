"use client"

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// --- Types ---
interface CardData {
  id: number;
  imageUrl: string;
  rotation: number;
}

// --- Data ---
const cards: CardData[] = [
  { id: 1, imageUrl: "https://picsum.photos/id/10/400/300", rotation: -8 }, // Left card
  { id: 2, imageUrl: "https://picsum.photos/id/16/400/300", rotation: 0 }, // Center card
  { id: 3, imageUrl: "https://picsum.photos/id/28/400/300", rotation: 8 }, // Right card
];

// --- Animation Variants ---

// Parent container coordinates animations
const folderVariants: Variants = {
  initial: {
    scale: 1,
    rotateY: 0,
  },
  hover: {
    scale: 1.05,
    rotateY: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// The back plate of the folder
const folderBackVariants: Variants = {
  initial: { scaleY: 1 },
  hover: { scaleY: 1.05, transition: { duration: 0.3 } },
};

// The front plate (cover) of the folder
const folderFrontVariants: Variants = {
  initial: {
    rotateX: 0,
    y: 0,
    // Fix: We rely on the container's preserve-3d and static translateZ style
    // rather than animating z-index to prevent flickering.
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  hover: {
    rotateX: -25, // Tilts top towards viewer (negative X usually tips top forward in standard CSS perspective)
    y: 5,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 1,
    },
  },
};

// The cards popping out
const cardVariants: Variants = {
  initial: {
    y: 0,
    opacity: 0,
    scale: 0.6,
    rotateZ: 0,
    // Fix: Fast exit transition to prevent glitching through the closing folder
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
  hover: (custom: { i: number; r: number }) => ({
    y: -110 - Math.abs(custom.r) * 3, // Dynamic height based on rotation
    opacity: 1,
    scale: 1,
    rotateZ: custom.r,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 18,
      // Stagger the cards slightly for a "fan" effect
      delay: 0.1 + custom.i * 0.08,
    },
  }),
};

export default function FolderAnimation () {
  return (
    <div className="flex flex-col items-center gap-12">
      {/* 
        Perspective Wrapper 
        perspective-[1000px] gives the 3D depth
      */}
      <div className="relative group perspective-distant">
        <motion.div
          className="relative w-72 h-56 cursor-pointer"
          variants={folderVariants}
          initial="initial"
          whileHover="hover"
          // CRITICAL: preserve-3d allows children to exist in true 3D space
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* 
            --- Back Folder Plate --- 
            Pushed back in Z space (-10px) so cards (at 0px) are clearly in front of it.
          */}
          <motion.div
            variants={folderBackVariants}
            className="absolute inset-0 bg-folder-back rounded-2xl shadow-sm origin-bottom"
            style={{
              transform: "translateZ(-20px)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* The Tab on top-left */}
            <div className="absolute -top-4 left-0 w-28 h-6 bg-folder-back rounded-t-xl" />
          </motion.div>

          {/* 
            --- Content Cards --- 
            Positioned at Z = 0px.
            They pop up from behind the Front Plate and in front of the Back Plate.
          */}
          <div
            className="absolute inset-x-4 bottom-4 h-full flex justify-center items-end pointer-events-none"
            style={{
              transform: "translateZ(0px)",
              transformStyle: "preserve-3d",
            }}
          >
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                custom={{ i: index, r: card.rotation }}
                variants={cardVariants}
                className="absolute w-44 h-32 rounded-lg bg-card shadow-md border-2 border-card overflow-hidden origin-bottom"
                style={{
                  transformOrigin: "bottom center",
                  zIndex: index, // visual stacking order
                }}
              >
                <Image
                  src={card.imageUrl}
                  alt="Work preview"
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* 
            --- Front Folder Plate --- 
            Pushed forward in Z space (+20px) to prevent clipping when it rotates.
            Because it is physically in front, the cards will naturally appear behind it when closed.
          */}
          <motion.div
            variants={folderFrontVariants}
            className="absolute bottom-0 left-0 right-0 h-[85%] bg-folder-face rounded-2xl flex items-center justify-center border-t border-folder-border shadow-folder"
            style={{
              transformOrigin: "bottom",
              transformStyle: "preserve-3d",
              transform: "translateZ(20px)", // Critical Z separation
            }}
          >
            {/* Inner "paper" shadow/depth effect */}
            <div className="absolute inset-0 rounded-2xl shadow-inner-light pointer-events-none" />

            {/* Emoji Icon */}
            <div className="relative z-10 bg-card/80 backdrop-blur-sm rounded-full p-3 shadow-sm w-16 h-16 flex items-center justify-center text-3xl">
              📂
            </div>
          </motion.div>

          {/* Shadow beneath the folder for grounding */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-foreground/10 blur-xl rounded-full"
            style={{ transform: "translateZ(-40px)" }}
          />
        </motion.div>
      </div>

      {/* Label Text */}
      <motion.div
        initial={{ opacity: 0.6, y: 0 }}
        whileHover={{ opacity: 1, y: -2 }}
        className="cursor-pointer text-muted-foreground font-medium text-lg tracking-wide hover:text-brand-green transition-colors"
      >
        Recent Projects
      </motion.div>
    </div>
  );
};
