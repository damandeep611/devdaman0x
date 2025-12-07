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
import FolderAnimation from './FolderAnimation';


const techStack = [
  { 
    name: "Node.js", 
    icon: SiNodedotjs, 
    iconColor: "group-hover:text-[#339933]"
  },
  { 
    name: "Bun", 
    icon: SiBun, 
    iconColor: "group-hover:text-[#fbf0df]"
  },
  { 
    name: "React", 
    icon: SiReact, 
    iconColor: "group-hover:text-[#61dafb]"
  },
  { 
    name: "PostgreSQL", 
    icon: SiPostgresql, 
    iconColor: "group-hover:text-[#4169e1]"
  },
  { 
    name: "Golang", 
    icon: SiGo, 
    iconColor: "group-hover:text-[#00add8]"
  },
  { 
    name: "Drizzle", 
    icon: SiDrizzle, 
    iconColor: "group-hover:text-[#C5F74F]"
  },
  { 
    name: "JavaScript", 
    icon: SiJavascript, 
    iconColor: "group-hover:text-[#F7DF1E]"
  },
  { 
    name: "TypeScript", 
    icon: SiTypescript, 
    iconColor: "group-hover:text-[#3178c6]"
  },
  { 
    name: "Docker", 
    icon: SiDocker, 
    iconColor: "group-hover:text-[#2496ED]"
  },
  { 
    name: "GraphQL", 
    icon: SiGraphql, 
    iconColor: "group-hover:text-[#E10098]"
  },
];


const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function SkillsSection() {
  return (
     <div className='max-w-7xl mx-auto px-6 '>
       <div className="mb-40 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <div className="mb-10">
                <motion.span
                  variants={fadeIn}
                  className="block text-emerald-500 font-medium tracking-widest text-xs uppercase mb-4"
                >
                  Expertise
                </motion.span>
                <motion.h2
                  variants={fadeIn}
                  className="text-4xl md:text-5xl font-light tracking-tight font-serif italic "
                >
                  The Tech Stack
                </motion.h2>
              </div>
              <motion.p
                variants={fadeIn}
                className=" mb-14 max-w-xl text-lg leading-relaxed font-light"
              >
                I build primarily with{" "}
                <span className=" font-medium">React (Next.js)</span>{" "}
                and <span className=" font-medium">Postgres</span>. I
                prefer backend-agnostic patterns, leveraging tools like Convex or
                Supabase when speed is key, and custom{" "}
                <span className=" font-medium">Go/Node</span>{" "}
                services when control is paramount.
              </motion.p>
              <div className="flex flex-wrap gap-10 items-center">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={fadeIn}
                    className="group relative cursor-pointer"
                  >
                    <tech.icon
                      className={`w-5 h-5 transition-all duration-500  group-hover:scale-110 ${tech.iconColor}`}
                    />
                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none z-20">
                      <div className="relative bg-zinc-900 text-zinc-300 text-[10px] tracking-wider font-medium px-3 py-1.5 rounded-full border border-zinc-800 shadow-2xl whitespace-nowrap">
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
              className="flex justify-center lg:justify-end perspective-1000"
            >
              <FolderAnimation />
            </motion.div>
          </div>
     </div>
  )
}
