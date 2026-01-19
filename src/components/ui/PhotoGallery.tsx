"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Copy,
  Sliders,
  Sparkles,
  Wand2,
  Command,
  ChevronDown,
} from "lucide-react";
import Arrow38 from "./icons/Arrow38";

export type CardType =
  | "gallery"
  | "search-bar"
  | "style-tags"
  | "prompt-viewer"
  | "model-selector"
  | "generation-settings"
  | "generate-action";

export interface PortfolioCard {
  id: number;
  type: CardType;
  rotation: number;
  zIndex: number;
}

const CARDS_DATA: PortfolioCard[] = [
  { id: 1, type: "gallery", rotation: -5, zIndex: 1 },
  { id: 2, type: "search-bar", rotation: 3, zIndex: 2 },
  { id: 3, type: "style-tags", rotation: -4, zIndex: 3 },
  { id: 4, type: "prompt-viewer", rotation: 0, zIndex: 4 },
  { id: 5, type: "model-selector", rotation: 4, zIndex: 5 },
  { id: 6, type: "generation-settings", rotation: -3, zIndex: 4 },
  { id: 7, type: "generate-action", rotation: 5, zIndex: 3 },
];

const BASE_X = [-480, -320, -160, 0, 160, 320, 480];
const BASE_Y = [15, -5, 10, 0, 10, -5, 15];

const CardStack: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spreadFactor = windowWidth < 768 ? 0.35 : windowWidth < 1024 ? 0.7 : 1;

  return (
    <div className="relative w-full h-[550px] mb-32 flex justify-center items-center pointer-events-none">
      <div className="absolute top-[15%] right-4 sm:top-0 sm:right-[10%] z-0 opacity-60 scale-75 sm:scale-100">
        <div className="relative">
          <Arrow38 className="w-32 h-20 text-muted-foreground rotate-12" />
          <p className="font-handwriting text-xl text-muted-foreground absolute -top-8 -left-12 -rotate-6 w-32 text-center leading-tight">
            Prompt and image library
          </p>
        </div>
      </div>

      {CARDS_DATA.map((card, index) => (
        <CardItem
          key={card.id}
          card={card}
          translateX={BASE_X[index] * spreadFactor}
          translateY={BASE_Y[index] * spreadFactor}
        />
      ))}
    </div>
  );
};

interface CardItemProps {
  card: PortfolioCard;
  translateX: number;
  translateY: number;
}

const CardItem: React.FC<CardItemProps> = ({
  card,
  translateX,
  translateY,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotate: card.rotation }}
      animate={{
        opacity: 1,
        y: translateY,
        x: translateX,
        rotate: card.rotation,
      }}
      whileHover={{
        scale: 1.08,
        zIndex: 100,
        rotate: 0,
        y: translateY - 40,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      transition={{
        delay: 0.05 * card.id,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute bg-card dark:bg-card/95 backdrop-blur-sm rounded-3xl dark:shadow-black/50 border border-border pointer-events-auto cursor-pointer flex flex-col justify-center items-center overflow-hidden"
      style={{
        width: 260,
        height: 260,
        zIndex: card.zIndex,
      }}
    >
      <CardContent type={card.type} />
    </motion.div>
  );
};

const CardContent = ({ type }: { type: CardType }) => {
  switch (type) {
    case "gallery":
      return (
        <div className="w-full h-full p-2 flex gap-2 items-center justify-center overflow-hidden bg-muted/50">
          <div className="w-1/3 h-24 rounded-lg bg-muted overflow-hidden shadow-sm -rotate-6 translate-y-2 border border-border">
            <img
              src="https://picsum.photos/id/10/200/300"
              alt="img1"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="w-1/3 h-28 rounded-lg bg-muted overflow-hidden shadow-md z-10 scale-110 border border-border">
            <img
              src="https://picsum.photos/id/11/200/300"
              alt="img2"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="w-1/3 h-24 rounded-lg bg-muted overflow-hidden shadow-sm rotate-6 translate-y-2 border border-border">
            <img
              src="https://picsum.photos/id/12/200/300"
              alt="img3"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      );

    case "search-bar":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-card">
          <div className="w-full bg-card border border-input rounded-full h-12 flex items-center pl-4 pr-3 shadow-sm hover:shadow-md transition-shadow">
            <Search size={18} className="text-muted-foreground" />
            <div className="flex-1 ml-3 text-sm text-muted-foreground/70 font-light truncate">
              search library...
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Command size={12} />
              <span className="text-xs font-medium">K</span>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground/60 mt-3 uppercase tracking-widest font-medium text-center pointer-events-none">
            10,000+ items
          </p>
        </div>
      );

    case "style-tags":
      return (
        <div className="w-full h-full flex flex-wrap content-center justify-center gap-2 p-4 bg-card">
          {[
            "Cyberpunk",
            "Realistic",
            "Anime",
            "3D Render",
            "Watercolor",
            "Sci-Fi",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 bg-secondary/80 hover:bg-secondary rounded-full text-xs font-medium text-secondary-foreground border border-border/50 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      );

    case "prompt-viewer":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-card gap-0 p-0 relative group">
          <div className="w-full h-full bg-zinc-950 p-5 flex flex-col font-mono text-xs text-zinc-300 leading-relaxed overflow-hidden relative">
            <div className="absolute top-3 right-3 text-zinc-500 hover:text-white cursor-pointer transition-colors">
              <Copy size={14} />
            </div>
            <div className="flex gap-2 mb-2 opacity-50">
              <span className="text-purple-400 font-bold">/imagine</span>
            </div>
            <p className="line-clamp-6 opacity-90">
              <span className="text-zinc-100">futuristic city</span> with flying
              cars, neon signs, rain-slicked streets, cinematic lighting, highly
              detailed, 8k, photorealistic
              <span className="text-yellow-500"> --v 6.0</span>
              <span className="text-blue-400"> --ar 16:9</span>
            </p>
          </div>
        </div>
      );

    case "model-selector":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-card gap-4">
          <div className="w-full flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold ml-1">
              Model
            </label>
            <div className="w-full bg-secondary/30 border border-input rounded-xl h-10 flex items-center justify-between px-3 shadow-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
                <span className="text-xs font-medium">SDXL Turbo</span>
              </div>
              <ChevronDown size={14} className="text-muted-foreground" />
            </div>
          </div>
          <div className="w-full bg-secondary/10 border border-input/50 border-dashed rounded-xl h-10 flex items-center justify-between px-3 opacity-60">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-linear-to-br from-emerald-500 to-teal-500" />
              <span className="text-xs font-medium">Midjourney v6</span>
            </div>
          </div>
        </div>
      );

    case "generation-settings":
      return (
        <div className="w-full h-full flex flex-col justify-center p-6 bg-card gap-6">
          <div className="flex items-center gap-2 mb-1 text-muted-foreground">
            <Sliders size={14} />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Settings
            </span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              <span>Guidance</span>
              <span className="text-foreground">7.5</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-primary rounded-full" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
              <span>Steps</span>
              <span className="text-foreground">40</span>
            </div>
            <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
              <div className="h-full w-[80%] bg-primary rounded-full" />
            </div>
          </div>
        </div>
      );

    case "generate-action":
      return (
        <div className="w-full h-full flex items-center justify-center p-6 bg-card">
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary mb-1">
              <Wand2 size={16} />
              <span className="text-sm font-bold">Dream it.</span>
            </div>
            <div className="w-full bg-muted/40 rounded-2xl h-10 flex items-center px-4 text-xs text-muted-foreground border border-input/20 shadow-inner">
              Astronaut in a jungle...
            </div>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-10 rounded-full text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95">
              <Sparkles size={14} className="animate-pulse" />
              Generate
            </button>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default CardStack;