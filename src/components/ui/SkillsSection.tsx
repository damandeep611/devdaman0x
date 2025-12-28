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
      <div className="mb-24 md:mb-40 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <div className="mb-8 md:mb-10 text-center lg:text-left">
            <motion.span
              variants={fadeIn}
              className="block text-brand-green font-medium tracking-widest text-xs uppercase mb-3 md:mb-4"
            >
              Expertise
            </motion.span>
            <motion.h2
              variants={fadeIn}
              className="text-3xl md:text-5xl font-light tracking-tight font-serif italic "
            >
              Work & Skills
            </motion.h2>
          </div>
          <motion.p
            variants={fadeIn}
            className="mb-8 max-w-xl text-base md:text-lg leading-relaxed font-light mx-auto lg:mx-0 text-center lg:text-left"
          >
            React ecosystem enjoyer-
            <span className=" font-medium">
              Next js, Exploring Tanstack rn.
            </span>{" "}
            Backend flexible Specialize in —postgres, worked on projects with
            Convex, Supabase. Check out my -
            <span className=" font-medium">
              backend fundamentals and Golang related Content
            </span>{" "}
            goes deeper than surface-level integrations.
          </motion.p>
          <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center lg:justify-start">
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={fadeIn}
                className="group relative cursor-pointer"
              >
                <tech.icon
                  className={`w-6 h-6 md:w-5 md:h-5 transition-all duration-500  group-hover:scale-110 ${tech.iconColor}`}
                />
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
                  <div className="relative bg-popover text-popover-foreground text-[10px] tracking-wider font-medium px-3 py-1.5 rounded-full border border-border shadow-2xl whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex justify-center lg:justify-end perspective-1000 mt-8 lg:mt-0"
        >
          <WorkFolder />
        </motion.div>
      </div>
    </div>
  );
}
