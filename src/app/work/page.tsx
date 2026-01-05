"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectGallery from "@/components/ui/ProjectGallery";
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

const techStack = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    iconColor: "text-[#339933]",
  },
  {
    name: "Bun",
    icon: SiBun,
    iconColor: "text-[#fbf0df]",
  },
  {
    name: "React",
    icon: SiReact,
    iconColor: "text-[#61dafb]",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    iconColor: "text-[#4169e1]",
  },
  {
    name: "Golang",
    icon: SiGo,
    iconColor: "text-[#00add8]",
  },
  {
    name: "Drizzle",
    icon: SiDrizzle,
    iconColor: "text-[#C5F74F]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    iconColor: "text-[#F7DF1E]",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    iconColor: "text-[#3178c6]",
  },
  {
    name: "Docker",
    icon: SiDocker,
    iconColor: "text-[#2496ED]",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    iconColor: "text-[#E10098]",
  },
];

export default function WorkPage() {
  return (
    <div className="mt-12 sm:mt-24 md:mt-32 max-w-7xl mx-auto px-6">
      {/* New Header Style: MY LATEST WORK + Moved Intro */}
      <div className="mb-32 flex items-center justify-between gap-16">
        {/* Title Group */}
        <div className="flex flex-col items-start justify-start text-center">
          <span className="font-(family-name:--font-geist-caveat) text-xl md:text-3xl text-muted-foreground relative self-end md:self-start md:ml-72  md:-mb-2 -rotate-6 z-10">
            from 2020 &apos;til today
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.85] text-foreground">
            Selected
            <br className="md:hidden" /> WORK
          </h1>
        </div>

        {/* Moved "Signature" Intro Section */}
        <div className="flex flex-col items-start gap-5 max-w-4xl mx-auto border-t border-dashed border-border/50 ">
          <div className="flex flex-col md:flex-row md:items-start gap-6 justify-between mt-4">
            <p className="text-sm md:text-base font-light text-muted-foreground tracking-tight max-w-xl leading-relaxed text-center md:text-left">
              React ecosystem enjoyer — focusing on Next.js & Tanstack. Backend
              flexible, specializing in PostgreSQL and distributed systems with
              Golang. My content focuses on core fundamentals.
            </p>
          </div>
        </div>
      </div>

      {/* Project Gallery */}
      <ProjectGallery />

      {/* Bento Footer / Philosophy */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        <div className="md:col-span-2 p-10 md:p-14 bg-[#1a1a1a] text-[#f0f0f0] rounded-lg shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-white/10" />

          <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/40">
                <div className="w-2 h-2 bg-brand-green rounded-full" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase">
                  Philosophy
                </span>
              </div>
              <h3 className="text-3xl md:text-5xl font-serif italic leading-tight">
                Function is the baseline, <br /> Delight is the goal.
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-8">
              {["Motion First", "Pixel Perfect", "Human Centric"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-10 bg-secondary border border-border rounded-lg flex flex-col justify-between relative overflow-hidden">
          {/* Paper texture overlay could go here */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-muted-foreground">
                Capabilities
              </span>
              <ul className="space-y-3">
                {[
                  "Product Design",
                  "Full-stack Dev",
                  "Design Systems",
                  "3D Interaction",
                ].map((s) => (
                  <li
                    key={s}
                    className="text-base md:text-lg font-bold flex items-center gap-3"
                  >
                    <div className="w-1 h-1 bg-foreground rounded-full" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Integrated Tech Stack */}
            <div className="space-y-4 pt-4 border-t border-border/50">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-muted-foreground">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative cursor-pointer"
                    title={tech.name}
                  >
                    <div className="p-1.5 bg-background/80 rounded-md border border-border/50 hover:bg-background hover:border-foreground/20 hover:scale-110 transition-all duration-300">
                      <tech.icon className={`size-4 ${tech.iconColor}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 -rotate-12 opacity-10 pointer-events-none">
            <span className="font-(family-name:--font-geist-caveat) text-6xl text-brand-green">
              Expertise
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}