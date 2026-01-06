"use client"
import React from 'react';
import { ArrowUpRight, Layers, Activity } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudy: React.FC = () => {
  return (
    <section className="flex py-24 flex-col gap-16 text-foreground relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-orange-500/5 to-transparent -z-10 blur-3xl opacity-50 pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col mb-8">
        <span className="font-(family-name:--font-geist-caveat) text-xl md:text-2xl text-muted-foreground ml-32 md:ml-56 mb-[-0.6rem] md:-mb-4 -rotate-6 z-10 w-fit">
          Recent Projects
        </span>
        <div className="flex items-end justify-between w-full group/header">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.85] text-foreground">
            WORK
          </h2>
          <motion.svg
            width="48"
            height="48"
            viewBox="0 0 92 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="2px"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 mb-1 md:mb-2 cursor-pointer"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              filter: "drop-shadow(0 0 8px rgba(34, 158, 255, 0.4))",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <path
              d="M47.5303 62.6201L45.3903 61.5501L34.8903 56.3001L27.5303 52.6201L2.46027 26.8201L22.4603 36.8201L36.9703 51.7501L45.7503 60.7801L47.5303 62.6201Z"
              stroke="#229EFF"
              strokeLinejoin="round"
            />
            <path
              d="M89.6503 38.31L64.5803 93.06L52.3003 100.15L77.3703 45.4L66.8003 34.53L52.3003 19.6L57.9903 16.31L64.5803 12.5L89.6503 38.31Z"
              stroke="#229EFF"
              strokeLinejoin="round"
            />
            <path
              d="M64.5803 12.5L57.9903 16.31L52.3003 19.6L32.3003 9.6L44.5803 2.5L64.5803 12.5Z"
              stroke="#229EFF"
              strokeLinejoin="round"
            />
            <path
              d="M34.7503 29.73L28.1603 33.53L22.4603 36.82L2.46027 26.82L14.7503 19.73L34.7503 29.73Z"
              stroke="#229EFF"
              strokeLinejoin="round"
            />
            <path
              d="M47.5303 62.6201L35.8703 88.0901L34.4403 91.2201L22.4603 117.38L2.46027 107.38L27.5303 52.6201L34.8903 56.3001L45.3903 61.5501L47.5303 62.6201Z"
              stroke="#229EFF"
              strokeLinejoin="round"
            />
            <path
              d="M77.3703 45.3999L52.3003 100.15L41.7903 94.8999L59.8203 55.5299L58.0303 53.6899L51.8903 47.3699L57.3703 35.3999C57.3703 35.3999 60.7103 37.1499 64.6703 39.1799C69.9203 41.8799 76.2503 45.0899 77.3703 45.3999Z"
              stroke="#229EFF"
              strokeLinejoin="round"
            />
            <path
              d="M59.8203 55.53L41.7903 94.9L34.7503 110.28L22.4603 117.38L34.4403 91.22L35.8703 88.09L47.5303 62.62L45.7503 60.78L36.9703 51.75L22.4603 36.82L28.1603 33.53L34.7503 29.73L51.8903 47.37L58.0303 53.69L59.8203 55.53Z"
              stroke="#229EFF"
              strokeLinejoin="round"
            />
            <path
              d="M77.3703 45.4001C76.2503 45.0901 69.9203 41.8801 64.6703 39.1801C60.7103 37.1501 57.3703 35.4001 57.3703 35.4001L32.3003 9.6001L52.3003 19.6001L66.8003 34.5301L77.3703 45.4001Z"
              stroke="#229EFF"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
        {/* Project 1: buildxskill (Kanban) - Large Feature */}
        <div className="lg:col-span-8 group">
          <ProjectCard
            title="buildxskill"
            description="Enterprise-grade Kanban system optimized for complex workflows."
            tags={["Next.js 15", "Drizzle", "Real-time"]}
            rotation="rotate-[-1.5deg]"
          >
            {/* Visual: Dark Mode Kanban Board */}
            <div className="absolute inset-0 bg-zinc-950 flex flex-col p-6 md:p-10 transition-transform duration-700 group-hover:scale-[1.02]">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

              {/* App Header */}
              <div className="w-full h-12 border-b border-white/5 flex items-center justify-between mb-6 px-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="h-2 w-24 bg-white/5 rounded-full" />
              </div>

              {/* Kanban Columns */}
              <div className="flex gap-4 md:gap-6 w-full h-full opacity-90">
                {/* Column 1 */}
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-2 w-16 bg-indigo-400/50 rounded-full" />
                    <span className="text-[10px] text-zinc-500 font-mono">
                      3 ITEMS
                    </span>
                  </div>
                  <div className="w-full aspect-4/2 bg-zinc-900 border border-white/5 rounded-lg p-3 shadow-lg hover:border-indigo-500/30 transition-colors">
                    <div className="h-1.5 w-1/2 bg-zinc-700 rounded-full mb-2" />
                    <div className="h-1 w-3/4 bg-zinc-800 rounded-full" />
                  </div>
                  <div className="w-full aspect-[4/2.5] bg-zinc-900 border border-white/5 rounded-lg p-3 shadow-lg">
                    <div className="flex justify-between mb-2">
                      <div className="h-1.5 w-1/3 bg-zinc-700 rounded-full" />
                      <div className="h-3 w-3 rounded-full bg-orange-500" />
                    </div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full" />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex-1 flex flex-col gap-3 sm:flex">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-2 w-20 bg-emerald-400/50 rounded-full" />
                    <span className="text-[10px] text-zinc-500 font-mono">
                      ACTIVE
                    </span>
                  </div>
                  {/* Active Card */}
                  <div className="w-full aspect-square bg-zinc-800/50 border border-indigo-500/20 rounded-lg p-4 shadow-2xl relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
                    <div className="h-2 w-2/3 bg-white/10 rounded-full mb-3" />
                    <div className="space-y-2">
                      <div className="h-1 w-full bg-white/5 rounded-full" />
                      <div className="h-1 w-5/6 bg-white/5 rounded-full" />
                      <div className="h-1 w-4/6 bg-white/5 rounded-full" />
                    </div>
                    <div className="mt-4 flex gap-2">
                      <div className="h-4 w-4 rounded-full bg-indigo-500/20 border border-indigo-500/50" />
                      <div className="h-4 w-4 rounded-full bg-zinc-700" />
                    </div>
                  </div>
                </div>

                {/* Column 3 (Fade out) */}
                <div className="flex-1 flex flex-col gap-3 opacity-30">
                  <div className="h-2 w-12 bg-zinc-700 rounded-full mb-2" />
                  <div className="w-full h-32 bg-zinc-900 border border-white/5 rounded-lg" />
                  <div className="w-full h-24 bg-zinc-900 border border-white/5 rounded-lg" />
                </div>
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 2: Aether (AI) - Square Feature */}
        <div className="lg:col-span-4 group">
          <ProjectCard
            title="Aether"
            description="High-throughput generative AI pipeline."
            tags={["Redis", "Python", "Vector DB"]}
            rotation="rotate-[1.2deg]"
          >
            <div className="absolute inset-0 bg-[#050505] flex items-center justify-center overflow-hidden">
              {/* Orbital System */}
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Center Core */}
                <div className="absolute w-12 h-12 bg-cyan-500/20 rounded-full blur-md z-10 group-hover:scale-150 transition-transform duration-1000" />
                <div className="absolute w-8 h-8 bg-white rounded-full shadow-[0_0_40px_rgba(34,211,238,0.8)] z-20" />

                {/* Rings */}
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute -inset-5 border border-dashed border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]" />

                {/* Particles */}
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]" />
                <div className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-indigo-400 rounded-full shadow-[0_0_10px_indigo]" />
              </div>

              {/* Tech Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <span className="font-mono text-[9px] text-zinc-600 uppercase">
                  Latency: 12ms
                </span>
                <Activity size={12} className="text-cyan-500 animate-pulse" />
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 3: synap.directory - Tall/Grid */}
        <div className="lg:col-span-5 group">
          <ProjectCard
            title="synap.directory"
            description="Curated tool directory with automated scraping analytics."
            tags={["Web Scraping", "Analytics", "SEO"]}
            rotation="rotate-[0.8deg]"
          >
            <div className="absolute inset-0 bg-zinc-50 dark:bg-[#0A0A0A] p-6 flex flex-col overflow-hidden">
              {/* Grid Background */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Search Bar */}
              <div className="w-full h-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm flex items-center px-4 gap-2 mb-6 transform group-hover:-translate-y-1 transition-transform">
                <div className="w-3 h-3 rounded-full border border-zinc-400" />
                <div className="h-1.5 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
              </div>

              {/* Grid Items */}
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 flex flex-col justify-between hover:border-orange-500/50 transition-colors group/item"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        i === 1
                          ? "bg-orange-500 text-white"
                          : "bg-zinc-100 dark:bg-zinc-800"
                      }`}
                    >
                      {i === 1 ? (
                        <Layers size={14} />
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-16 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                      <div className="h-1 w-8 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 4: reuseMotion - Wide/Technical */}
        <div className="lg:col-span-7 group">
          <ProjectCard
            title="reuseMotion"
            description="Motion primitive library for React applications."
            tags={["Framer Motion", "npm package", "DX"]}
            rotation="rotate-[-0.5deg]"
          >
            <div className="absolute inset-0 bg-[#121214] flex items-center justify-center overflow-hidden">
              {/* Waveform/Graph Visualization */}
              <div className="relative w-full max-w-sm h-32">
                <div className="absolute inset-0 flex items-end justify-between px-1 gap-1">
                  {[
                    40, 60, 30, 80, 50, 90, 20, 40, 70, 50, 30, 60, 80, 40, 20,
                  ].map((h, i) => (
                    <motion.div
                      key={i}
                      className="w-full bg-zinc-800 rounded-t-sm"
                      initial={{ height: "20%" }}
                      whileInView={{ height: `${h}%` }}
                      transition={{
                        duration: 1,
                        delay: i * 0.05,
                        ease: "circOut",
                      }}
                    />
                  ))}
                </div>

                {/* The Curve Line */}
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                  <path
                    d="M0 100 Q 50 100 100 50 T 200 80 T 300 20 T 400 60"
                    fill="none"
                    stroke="url(#gradient-line)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                  />
                  <defs>
                    <linearGradient
                      id="gradient-line"
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Label */}
                <motion.div
                  className="absolute -top-8 right-10 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-md shadow-xl flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                  <span className="font-mono text-[10px] text-zinc-300">
                    spring(stiffness: 400)
                  </span>
                </motion.div>
              </div>
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  children: React.ReactNode;
  href?: string;
  className?: string;
  rotation?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  children,

  className,
  rotation = "rotate-0",
}) => (
  <div className={`flex flex-col gap-4 h-full ${className}`}>
    {/* Visual Container */}
    <div
      className={`w-full relative aspect-4/3 md:aspect-auto md:h-[400px] overflow-hidden rounded-2xl bg-card border border-border/50 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-500/10 group-hover:border-orange-500/20 group-hover:rotate-0 ${rotation}`}
    >
      {children}

      {/* Overlay Gradient on Hover */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Floating Action Button */}
      <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100 z-20">
        <div className="w-10 h-10 bg-white dark:bg-zinc-950 rounded-full flex items-center justify-center shadow-lg border border-white/10 text-foreground">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="flex flex-col gap-2 px-1">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        {/* Tag Pilla */}
        <div className="flex gap-2 flex-wrap justify-end">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
    </div>
  </div>
);

export default CaseStudy;