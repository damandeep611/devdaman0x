"use client"

import React from 'react'
import { motion, Variants } from 'framer-motion'
import { 
  SiTypescript, 
  SiReact, 
  SiPostgresql, 
  SiBun, 
  SiNodedotjs, 
  SiGo, 
  SiDrizzle, 
  SiJavascript, 
  SiDocker, 
  SiGraphql,
} from "react-icons/si";
import WorkFolder from "./WorkFolder";

const techStack = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconColor: "group-hover:text-[#339933]",
  },
  {
    name: "Bun",
    icon: SiBun,
    iconColor: "group-hover:text-[#fbf0df]",
  },
  {
    name: "React",
    icon: SiReact,
    iconColor: "group-hover:text-[#61dafb]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    iconColor: "group-hover:text-[#4169e1]",
  },
  {
    name: "Golang",
    icon: SiGo,
    iconColor: "group-hover:text-[#00add8]",
  },
  {
    name: "Drizzle",
    icon: SiDrizzle,
    iconColor: "group-hover:text-[#C5F74F]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    iconColor: "group-hover:text-[#F7DF1E]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    iconColor: "group-hover:text-[#3178c6]",
  },
  {
    name: "Docker",
    icon: SiDocker,
    iconColor: "group-hover:text-[#2496ED]",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    iconColor: "group-hover:text-[#E10098]",
  },
];

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function SkillsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
      <div className="mb-24 md:mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-6 md:space-y-8 text-center lg:text-left relative"
        >
          <div className="space-y-3">
            <motion.div variants={fadeIn} className="flex items-center justify-center lg:justify-start gap-3">
                <span className="h-px w-8 bg-brand-green/30" />
                <span className="text-brand-green font-bold tracking-[0.4em] text-[10px] uppercase">
                    Archive // 01
                </span>
            </motion.div>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-bold tracking-tight font-serif italic leading-[1.1]"
            >
              Work & <span className="text-muted-foreground">Competence.</span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeIn}
            className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium"
          >
            React ecosystem enjoyer — focusing on <span className="text-foreground">Next.js & Tanstack</span>. 
            Backend flexible, specializing in PostgreSQL and distributed systems with <span className="text-foreground">Golang</span>. 
            My content goes deeper than surface-level integrations, focusing on <span className="text-brand-green">core fundamentals</span>.
          </motion.p>

          <div className="flex flex-wrap gap-5 md:gap-7 items-center justify-center lg:justify-start pt-4">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={fadeIn}
                className="group relative cursor-pointer"
              >
                <tech.icon
                  className={`w-6 h-6 transition-all duration-500 text-muted-foreground/40 group-hover:scale-125 ${tech.iconColor}`}
                />
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
                  <div className="bg-card text-foreground text-[9px] font-bold tracking-widest uppercase px-3 py-1 rounded border border-border shadow-xl whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Media (WorkFolder) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex justify-center lg:justify-end perspective-1000 relative mt-8 lg:mt-0"
        >
          <WorkFolder />
          {/* Manila Glow Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#EBE5CE]/10 rounded-full blur-3xl -z-10 opacity-50" />
        </motion.div>
      </div>
    </div>
  );
}
