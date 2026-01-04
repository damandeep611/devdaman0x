"use client"

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface PortfolioCard {
  id: number;
  title: string;
  image: string;
  rotation: number;
  translateX: number;
  translateY: number;
  zIndex: number;
}

const CARDS_DATA: Omit<PortfolioCard, "translateX" | "translateY">[] = [
  {
    id: 1,
    title: "software made with care",
    image: "https://picsum.photos/id/1/400/500",
    rotation: -15,
    zIndex: 10,
  },
  {
    id: 2,
    title: "designing for some",
    image: "https://picsum.photos/id/10/400/500",
    rotation: -8,
    zIndex: 12,
  },
  {
    id: 3,
    title: "puns made visual",
    image: "https://picsum.photos/id/20/400/500",
    rotation: -20,
    zIndex: 15,
  },
  {
    id: 4,
    title: "cyanotypes",
    image: "https://picsum.photos/id/40/400/500",
    rotation: 5,
    zIndex: 20,
  },
  {
    id: 5,
    title: "the journal that reflects with you",
    image: "https://picsum.photos/id/60/400/500",
    rotation: 0,
    zIndex: 22,
  },
  {
    id: 6,
    title: "mother's hometown",
    image: "https://picsum.photos/id/80/400/500",
    rotation: 12,
    zIndex: 21,
  },
  {
    id: 7,
    title: "another story",
    image: "https://picsum.photos/id/90/400/500",
    rotation: 20,
    zIndex: 19,
  },
];

const BASE_X = [-480, -320, -160, 0, 160, 320, 480];
const BASE_Y = [60, 10, 50, -20, 30, 70, -10];

interface CardStackProps {
  isSearchFocused: boolean;
}

const CardStack: React.FC<CardStackProps> = ({ isSearchFocused }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const spreadFactor = windowWidth < 768 ? 0.35 : windowWidth < 1024 ? 0.7 : 1;

  return (
    <div className="relative w-full h-[550px]  mb-32 flex justify-center items-center pointer-events-none">
      {CARDS_DATA.map((card, index) => (
        <CardItem
          key={card.id}
          card={card}
          translateX={BASE_X[index] * spreadFactor}
          translateY={BASE_Y[index] * spreadFactor}
          isForcedColor={isSearchFocused}
        />
      ))}
    </div>
  );
};

interface CardItemProps {
  card: Omit<PortfolioCard, "translateX" | "translateY">;
  translateX: number;
  translateY: number;
  isForcedColor: boolean;
}

const CardItem: React.FC<CardItemProps> = ({
  card,
  translateX,
  translateY,
  isForcedColor,
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
      className="absolute bg-white p-2 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 pointer-events-auto cursor-pointer"
      style={{
        width: "min(260px, 45vw)",
        zIndex: card.zIndex,
      }}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-xl mb-4 bg-gray-50">
        <img
          src={card.image}
          alt={card.title}
          className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
            isForcedColor ? "grayscale-0" : "grayscale hover:grayscale-0"
          }`}
        />
        {card.id === 5 && (
          <div className="absolute inset-0 p-4 flex flex-col justify-between bg-linear-to-b from-black/5 to-transparent pointer-events-none">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-white/90 shadow-sm" />
              <div className="w-2 h-2 rounded-full bg-white/40 shadow-sm" />
            </div>
            <div className="h-10 w-full bg-white/20 backdrop-blur-md rounded-lg border border-white/30" />
          </div>
        )}
      </div>
      <div className="px-2 pb-2">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em] leading-tight truncate">
          {card.title}
        </p>
      </div>
    </motion.div>
  );
};

export default CardStack;

