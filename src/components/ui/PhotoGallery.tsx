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
  { id: 1, src: "https://picsum.photos/id/122/400/300", alt: "Architecture", rotation: -6 },
  { id: 2, src: "https://picsum.photos/id/425/400/300", alt: "Coffee", rotation: 5 },
  { id: 3, src: "https://picsum.photos/id/3/400/300", alt: "Coding", rotation: -5 },
  { id: 4, src: "https://picsum.photos/id/145/400/300", alt: "Music", rotation: 7 },
  { id: 5, src: "https://picsum.photos/id/180/400/300", alt: "Conference", rotation: -4 },
  { id: 6, src: "https://picsum.photos/id/20/400/300", alt: "Workspace", rotation: 6 },
];

const PhotoGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden py-16 md:py-20 relative cursor-grab active:cursor-grabbing">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="flex gap-5 md:gap-8"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: -40, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        {IMAGES.map((img, index) => (
          <motion.div
            key={img.id}
            className="relative min-w-[280px] h-[200px] md:min-w-[400px] md:h-[280px] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800 shrink-0"
            style={{ rotate: img.rotation, zIndex: index }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 0, 
              zIndex: 50,
              transition: { duration: 0.2 } 
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