"use client";

import React from "react";
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
  { name: "Node.js", icon: SiNodedotjs, iconColor: "text-[#339933]" },
  { name: "Bun", icon: SiBun, iconColor: "text-[#fbf0df]" },
  { name: "React", icon: SiReact, iconColor: "text-[#61dafb]" },
  { name: "PostgreSQL", icon: SiPostgresql, iconColor: "text-[#4169e1]" },
  { name: "Golang", icon: SiGo, iconColor: "text-[#00add8]" },
  { name: "Drizzle", icon: SiDrizzle, iconColor: "text-[#C5F74F]" },
  { name: "JavaScript", icon: SiJavascript, iconColor: "text-[#F7DF1E]" },
  { name: "TypeScript", icon: SiTypescript, iconColor: "text-[#3178c6]" },
  { name: "Docker", icon: SiDocker, iconColor: "text-[#2496ED]" },
  { name: "GraphQL", icon: SiGraphql, iconColor: "text-[#E10098]" },
];

export default function WorkPage() {
  return (
    <div className="mt-12 sm:mt-24 md:mt-32 max-w-screen-2xl mx-auto px-6">
      {/* Header Section */}
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-border pb-12">
        <div className="space-y-4">
          <span className="font-handwriting text-2xl text-muted-foreground -rotate-2 block w-fit">
            Selected projects
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight text-foreground leading-[0.9]">
            Work.
          </h1>
        </div>

        <div className="max-w-xl text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
          <p>
            Specializing in{" "}
            <span className="text-foreground font-medium">
              high-performance interfaces
            </span>{" "}
            and distributed systems. Currently focused on the Next.js ecosystem
            and Golang backend services.
          </p>
        </div>
      </div>

      {/* Project Gallery */}
      <ProjectGallery />

      {/* Philosophy & Tech Stack (Bento Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
        {/* Philosophy Card */}
        <div className="md:col-span-2 p-10 md:p-14 bg-card text-card-foreground rounded-3xl border border-border overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-700 group-hover:bg-primary/10" />

          <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px]">
            <div className="space-y-6">
              <h3 className="text-3xl md:text-5xl font-serif italic leading-tight">
                Function is the baseline, <br /> Delight is the goal.
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-12">
              {["Motion First", "Pixel Perfect", "Human Centric"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 border border-border rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities & Tech Stack Card */}
        <div className="p-10 bg-secondary/30 border border-border rounded-3xl flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Capabilities
              </span>
              <ul className="space-y-3">
                {["AI Sdk's", "Go", "Design Systems", "Development"].map(
                  (s) => (
                    <li
                      key={s}
                      className="text-base md:text-lg font-medium flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                      {s}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-4 pt-6 border-t border-border/50">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative cursor-pointer"
                    title={tech.name}
                  >
                    <div className="p-2 bg-background rounded-xl border border-border/50 hover:border-foreground/20 hover:scale-110 transition-all duration-300 shadow-sm">
                      <tech.icon className={`size-5 ${tech.iconColor}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
