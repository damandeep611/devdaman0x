"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDrizzle,
  SiCloudinary,
  SiOpenai,
  SiAuth0,
  SiNodedotjs,
  SiSupabase,
} from "react-icons/si";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const projects = [
  {
    id: 1,
    title: "buildxSkill",
    description:
      "Skill learning management tool with daily/weekly performance analytics, AI-integrated bulk task creation, and time tracking workflows.",
    techIcons: [SiNextdotjs, SiTailwindcss, SiPostgresql, SiDrizzle, SiAuth0],
    gradient: "from-blue-600 to-cyan-500",
    link: "#",
    github: "#",
    status: "All Systems Operational",
  },
  {
    id: 2,
    title: "synap.directory",
    description:
      "A curated library tool to discover resources for modern app building, marketing, and AI tools.",
    techIcons: [SiNextdotjs, SiDrizzle, SiCloudinary, SiPostgresql, SiAuth0],
    gradient: "from-purple-600 to-pink-500",
    link: "#",
    github: "#",
    status: "Scaling",
  },
  {
    id: 3,
    title: "matrixprompt",
    description:
      "AI stock image application for finding high-quality prompts and modifying existing images with generative AI.",
    techIcons: [SiNextdotjs, SiOpenai, SiTailwindcss, SiCloudinary],
    gradient: "from-emerald-500 to-teal-500",
    link: "#",
    github: "#",
    status: "Beta Access",
  },
  {
    id: 4,
    title: "writerflow",
    description:
      "AI-integrated writing platform for novels with single-click comic style panel generation and storytelling assistance.",
    techIcons: [SiNextdotjs, SiOpenai, SiSupabase, SiNodedotjs],
    gradient: "from-orange-500 to-amber-500",
    link: "#",
    github: "#",
    status: "In Development",
  },
];

export default function WorkPage() {
  return (
    <section className="w-full mx-auto min-h-screen pt-32 pb-20">
      <div className="max-w-5xl mx-auto w-full px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-medium tracking-tight text-foreground"
            >
              Selected Work
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-serif italic text-muted-foreground"
            >
              Building digital products with a focus on experience and
              performance.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group relative flex flex-col rounded-4xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-[#09090b] overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/20 dark:hover:shadow-black/40 transition-all duration-500 ring-1 ring-inset ring-transparent hover:ring-zinc-200 dark:hover:ring-zinc-800"
              >
                {/* Image Section */}
                <div
                  className={`relative h-72 w-full overflow-hidden bg-linear-to-br ${project.gradient}`}
                >
                  <div className="absolute inset-0 bg-white/5 dark:bg-black/5 mix-blend-overlay" />{" "}
                  {/* Noise/Texture overlay placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                    <motion.div className="w-[85%] h-[85%] bg-zinc-950 rounded-lg shadow-2xl translate-y-12 rotate-x-6 group-hover:translate-y-8 group-hover:rotate-0 transition-all duration-700 ease-out border border-white/10 overflow-hidden flex flex-col">
                      {/* Mockup Header */}
                      <div className="h-6 bg-zinc-900 border-b border-white/5 flex items-center px-3 gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-500/20" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                        <div className="w-2 h-2 rounded-full bg-green-500/20" />
                      </div>
                      {/* Mockup Body */}
                      <div className="flex-1 flex">
                        {/* Sidebar */}
                        <div className="w-12 border-r border-white/5 bg-zinc-900/50 flex flex-col gap-2 p-2">
                          <div className="w-full aspect-square rounded bg-white/5" />
                          <div className="w-full aspect-square rounded bg-white/5" />
                          <div className="w-full aspect-square rounded bg-white/5" />
                        </div>
                        {/* Main Content */}
                        <div className="flex-1 p-3 space-y-2">
                          <div className="h-2 w-1/3 bg-white/10 rounded-full" />
                          <div className="grid grid-cols-2 gap-2">
                            <div className="h-16 rounded bg-white/5 border border-white/5" />
                            <div className="h-16 rounded bg-white/5 border border-white/5" />
                          </div>
                          <div className="h-20 rounded bg-white/5 border border-white/5 w-full" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-1 p-6 md:p-8 gap-5">
                  {/* Title & Links */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h2>
                      <div className="flex flex-wrap gap-x-2 mt-2">
                        {project.techIcons.map((Icon, index) => (
                          <div
                            key={index}
                            className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors"
                          >
                            <Icon size={16} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={project.link}
                        className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      >
                        <Globe size={16} />
                      </Link>
                      <Link
                        href={project.github}
                        className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800/50 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/60">
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/10">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                      </span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-emerald-600 dark:text-emerald-400">
                        {project.status}
                      </span>
                    </div>

                    <Link
                      href={project.link}
                      className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors group/link"
                    >
                      View Project{" "}
                      <ArrowRight
                        size={14}
                        className="-translate-x-1 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
