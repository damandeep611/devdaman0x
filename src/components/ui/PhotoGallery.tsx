"use client"

import React, { useRef, useState, useEffect } from 'react';
import { motion} from 'framer-motion';


export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  rotation: number;
}
// Mock images approximating the content in the screenshot
const IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/images/drawing.png",
    alt: "Architecture",
    rotation: -4,
  },
  {
    id: 2,
    src: "/images/surf.png",

    alt: "Coffee",
    rotation: 4,
  },
  {
    id: 3,
    src: "/images/samurai.png",
    alt: "Coding",
    rotation: -4,
  },
  {
    id: 4,
    src: "/images/japan.png",
    alt: "Music",
    rotation: 5,
  },
  {
    id: 5,
    src: "/images/pool.png",
    alt: "Conference",
    rotation: -4,
  },
  {
    id: 6,
    src: "blob:https://aistudio.google.com/b970e5cc-5d3f-4934-ad2e-14f95fee27a6",
    alt: "Workspace",
    rotation: 5,
  },
];

const PhotoGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const bleedOffset = 50; // pixels for bleed on each side

  useEffect(() => {
    if (containerRef.current) {
      setWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      );
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-16 md:py-20 relative cursor-grab active:cursor-grabbing">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ right: bleedOffset, left: -(width + bleedOffset) }}
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-5 md:gap-8"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: -bleedOffset, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        {IMAGES.map((img, index) => (
          <motion.div
            key={img.id}
            className="relative min-w-[200px] h-[140px] md:min-w-[300px] md:h-[200px] rounded-md overflow-hidden shadow-2xl  shrink-0"
            style={{ rotate: img.rotation, zIndex: index }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 50,
              transition: { duration: 0.2 },
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover filter brightness-[0.8] hover:brightness-100 transition-all duration-300"
            />
            {/* Subtle gloss effect */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PhotoGallery;