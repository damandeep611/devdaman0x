"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Folder,
  ThumbsUp,
  ThumbsDown,
  Heart,
  Smile,
  Meh,
  Search,
  Command,
} from "lucide-react";
import Arrow38 from "./icons/Arrow38";

export type CardType =
  | "gallery"
  | "input-simple"
  | "tags"
  | "folder"
  | "status"
  | "reaction"
  | "input-button";

export interface PortfolioCard {
  id: number;
  type: CardType;
  rotation: number;
  zIndex: number;
}

const CARDS_DATA: PortfolioCard[] = [
  { id: 1, type: "gallery", rotation: -5, zIndex: 1 },
  { id: 2, type: "input-simple", rotation: 3, zIndex: 2 },
  { id: 3, type: "tags", rotation: -4, zIndex: 3 },
  { id: 4, type: "folder", rotation: 0, zIndex: 4 },
  { id: 5, type: "status", rotation: 4, zIndex: 5 },
  { id: 6, type: "reaction", rotation: -3, zIndex: 4 },
  { id: 7, type: "input-button", rotation: 5, zIndex: 3 },
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
      className="absolute bg-card dark:bg-card/95 backdrop-blur-sm rounded-3xl  dark:shadow-black/50 border border-border pointer-events-auto cursor-pointer flex flex-col justify-center items-center overflow-hidden"
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
          <div className="w-1/3 h-24 rounded-lg bg-muted overflow-hidden shadow-sm rotate-[-6deg] translate-y-2 border border-border">
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
          <div className="w-1/3 h-24 rounded-lg bg-muted overflow-hidden shadow-sm rotate-[6deg] translate-y-2 border border-border">
            <img
              src="https://picsum.photos/id/12/200/300"
              alt="img3"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      );

    case "input-simple":
      return (
        <div className="w-full h-full flex items-center justify-center p-6 bg-card">
          <div className="w-full bg-muted/50 rounded-full h-12 flex items-center px-4 text-muted-foreground text-sm shadow-inner border border-input/20">
            Email
          </div>
        </div>
      );

    case "tags":
      return (
        <div className="w-full h-full flex flex-wrap content-center justify-center gap-2 p-4 bg-card">
          {["Playlists", "Albums", "Liked", "Artists", "Downloads"].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-secondary/80 hover:bg-secondary rounded-full text-xs font-medium text-secondary-foreground border border-border/50 transition-colors"
              >
                {tag}
              </span>
            )
          )}
        </div>
      );

    case "folder":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-card gap-3">
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-12 bg-sky-200 dark:bg-sky-900 rounded-lg rotate-6 border border-card" />
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-12 bg-sky-300 dark:bg-sky-800 rounded-lg -rotate-3 border border-card" />
            <div className="relative w-20 h-16 bg-sky-400 dark:bg-sky-600 rounded-xl flex items-center justify-center shadow-lg text-white border-t border-white/20">
              <Folder size={32} fill="currentColor" strokeWidth={1.5} />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-card-foreground">Images</p>
            <p className="text-xs text-muted-foreground">3 items</p>
          </div>
        </div>
      );

    case "status":
      return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-card">
          <div className="w-full bg-card border border-input rounded-full h-12 flex items-center pl-4 pr-3 shadow-sm hover:shadow-md transition-shadow">
            <Search size={18} className="text-muted-foreground" />
            <div className="flex-1 ml-3 text-sm text-muted-foreground/70 font-light truncate">
              find anything...
            </div>
            <div className="flex items-center gap-1 text-muted-foreground">
              <Command size={12} />
              <span className="text-xs font-medium">K</span>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground/60 mt-3 uppercase tracking-widest font-medium text-center pointer-events-none">
            search projects
          </p>
        </div>
      );

    case "reaction":
      return (
        <div className="w-full h-full flex flex-col items-center justify-between p-6 bg-card">
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="w-24 h-24 border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center text-center p-2 bg-muted/20">
              <span className="text-[10px] text-muted-foreground font-medium">
                Double tap to react
              </span>
            </div>
          </div>
          <div className="flex gap-3 bg-card shadow-sm border border-border px-3 py-2 rounded-full">
            <ThumbsUp size={16} className="text-yellow-500/80 dark:text-yellow-400" />
            <ThumbsDown size={16} className="text-muted-foreground" />
            <Heart size={16} className="text-red-500/80 dark:text-red-400 fill-red-500/80 dark:fill-red-400" />
            <Smile size={16} className="text-yellow-500/80 dark:text-yellow-400" />
            <Meh size={16} className="text-muted-foreground" />
          </div>
        </div>
      );

    case "input-button":
      return (
        <div className="w-full h-full flex items-center justify-center p-6 bg-card">
          <div className="w-full bg-muted/50 rounded-full h-12 flex items-center pl-4 pr-1 justify-between shadow-inner border border-input/20">
            <span className="text-muted-foreground text-sm">Email</span>
            <button className="bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
              Sign up
            </button>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default CardStack;
