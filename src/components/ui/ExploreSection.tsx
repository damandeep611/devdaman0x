"use client"

import React from 'react'
import { motion } from "framer-motion";
import { BlogCard, GitHubCard, YouTubeCard } from './explore-cards';


export default function ExploreSection() {
  return (
     <section className="w-full py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        
        <div className="mb-16 text-center">
           <span className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
             Explore More
           </span>
        </div>

       
        <div className="relative grid grid-cols-1 md:flex md:items-center md:justify-center md:h-[400px] w-full gap-8 md:gap-0 perspective-1000">
          
          {/* Card 1: Pink (Left, tilted left) */}
          <motion.div
            className="w-full md:w-[380px] md:origin-bottom-right z-10 md:-mr-16"
            initial={{ x: 100, rotate: 0, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, rotate: -6, opacity: 1, scale: 1 }}
            whileHover={{ 
              rotate: -2, 
              scale: 1.05, 
              zIndex: 50,
              transition: { type: "spring", stiffness: 300, damping: 20 } 
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.1 }}
          >
            <BlogCard />
          </motion.div>

          {/* Card 2: Lime (Center, straight, on top) */}
          <motion.div
            className="w-full md:w-[400px] z-20"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ y: -30, opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.08, 
              y: -40,
              zIndex: 50,
              transition: { type: "spring", stiffness: 300, damping: 20 } 
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.2 }}
          >
            <GitHubCard />
          </motion.div>

          {/* Card 3: Mint (Right, tilted right) */}
          <motion.div
            className="w-full md:w-[380px] md:origin-bottom-left z-10 md:-ml-16"
            initial={{ x: -100, rotate: 0, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, rotate: 6, opacity: 1, scale: 1 }}
            whileHover={{ 
              rotate: 2, 
              scale: 1.05, 
              zIndex: 50,
              transition: { type: "spring", stiffness: 300, damping: 20 } 
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2, delay: 0.3 }}
          >
            <YouTubeCard />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
