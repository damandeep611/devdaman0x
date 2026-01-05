"use client"
import React from 'react';
import { ArrowRight, Layers, Zap, Box } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudy: React.FC = () => {
  return (
    <div className="flex pt-8 flex-col gap-12 text-foreground">
      {/* Header Style: MY LATEST WORK */}
      <div className="flex flex-col mb-8">
        <span className="font-(family-name:--font-geist-caveat) text-xl md:text-2xl text-muted-foreground ml-32 md:ml-56 mb-[-0.6rem] md:mb-[-1rem] rotate-[-6deg] z-10 w-fit">
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
              filter: "drop-shadow(0 0 8px rgba(34, 158, 255, 0.4))"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <path d="M47.5303 62.6201L45.3903 61.5501L34.8903 56.3001L27.5303 52.6201L2.46027 26.8201L22.4603 36.8201L36.9703 51.7501L45.7503 60.7801L47.5303 62.6201Z" stroke="#229EFF" strokeLinejoin="round"/>
            <path d="M89.6503 38.31L64.5803 93.06L52.3003 100.15L77.3703 45.4L66.8003 34.53L52.3003 19.6L57.9903 16.31L64.5803 12.5L89.6503 38.31Z" stroke="#229EFF" strokeLinejoin="round"/>
            <path d="M64.5803 12.5L57.9903 16.31L52.3003 19.6L32.3003 9.6L44.5803 2.5L64.5803 12.5Z" stroke="#229EFF" strokeLinejoin="round"/>
            <path d="M34.7503 29.73L28.1603 33.53L22.4603 36.82L2.46027 26.82L14.7503 19.73L34.7503 29.73Z" stroke="#229EFF" strokeLinejoin="round"/>
            <path d="M47.5303 62.6201L35.8703 88.0901L34.4403 91.2201L22.4603 117.38L2.46027 107.38L27.5303 52.6201L34.8903 56.3001L45.3903 61.5501L47.5303 62.6201Z" stroke="#229EFF" strokeLinejoin="round"/>
            <path d="M77.3703 45.3999L52.3003 100.15L41.7903 94.8999L59.8203 55.5299L58.0303 53.6899L51.8903 47.3699L57.3703 35.3999C57.3703 35.3999 60.7103 37.1499 64.6703 39.1799C69.9203 41.8799 76.2503 45.0899 77.3703 45.3999Z" stroke="#229EFF" strokeLinejoin="round"/>
            <path d="M59.8203 55.53L41.7903 94.9L34.7503 110.28L22.4603 117.38L34.4403 91.22L35.8703 88.09L47.5303 62.62L45.7503 60.78L36.9703 51.75L22.4603 36.82L28.1603 33.53L34.7503 29.73L51.8903 47.37L58.0303 53.69L59.8203 55.53Z" stroke="#229EFF" strokeLinejoin="round"/>
            <path d="M77.3703 45.4001C76.2503 45.0901 69.9203 41.8801 64.6703 39.1801C60.7103 37.1501 57.3703 35.4001 57.3703 35.4001L32.3003 9.6001L52.3003 19.6001L66.8003 34.5301L77.3703 45.4001Z" stroke="#229EFF" strokeLinejoin="round"/>
          </motion.svg>
        </div>
      </div>

      {/* Brand Poster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16">
        {/* Project 1: DotOS */}
        <div className="lg:col-span-7">
          <ProjectCard
            title="DotOS"
            tags="Branding, System Design, Illustration"
            rotation="rotate-1"
          >
            <div className="w-full h-full bg-[#FDFBF7] dark:bg-[#1a1917] p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden group-hover:bg-[#F5F2EB] dark:group-hover:bg-[#22201d] transition-colors duration-500">
              {/* 3D-ish Isometric Illustration */}
              <div className="relative z-10 transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">
                <div className="w-48 h-32 bg-white dark:bg-[#2A2A2A] rounded-xl border-2 border-black/10 dark:border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center relative z-20">
                  <Layers
                    size={48}
                    className="text-orange-500"
                    strokeWidth={1.5}
                  />
                </div>
                {/* Floating Elements */}
                <div
                  className="absolute -top-6 -right-6 w-16 h-16 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center transform rotate-12 z-10 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <Box className="text-white" size={24} />
                </div>
                <div className="absolute -bottom-4 -left-8 w-12 h-12 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center transform -rotate-6 z-30">
                  <Zap className="text-black" size={20} fill="currentColor" />
                </div>
              </div>

              <div className="mt-8 text-center relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 tracking-tight leading-none">
                  We organize your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    digital chaos!
                  </span>
                </h3>
              </div>

              {/* Background Elements */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-50" />
            </div>
          </ProjectCard>
        </div>

        {/* Project 2: Aura */}
        <div className="lg:col-span-5">
          <ProjectCard
            title="Aura"
            tags="Audio Engine, Visual Identity"
            className="h-full min-h-[400px]"
            rotation="-rotate-1"
          >
            <div className="w-full h-full bg-[#FF4500] relative overflow-hidden flex flex-col items-center justify-center p-8 group-hover:scale-[1.01] transition-transform duration-500">
              {/* Halftone/Noise Pattern Simulation */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-multiply dark:mix-blend-color-burn"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #0000FF 2px, transparent 2.5px)",
                  backgroundSize: "12px 12px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-blue-900/50 mix-blend-overlay" />

              <div className="relative z-10 text-center transform transition-all duration-500 group-hover:scale-110">
                <div className="text-white text-[8rem] leading-none font-bold tracking-tighter mix-blend-overlay opacity-90 font-serif-italic">
                  Aa
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                  <h3 className="text-5xl md:text-6xl font-black text-white tracking-widest uppercase drop-shadow-md">
                    AURA
                  </h3>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 text-white/80 font-mono text-xs tracking-widest uppercase border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                Sonic Branding
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 3: Flux */}
        <div className="lg:col-span-5">
          <ProjectCard
            title="Flux"
            tags="SaaS, Dashboard, Dark Mode"
            className="h-full"
            rotation="rotate-1"
          >
            <div className="w-full h-full bg-[#050505] p-8 relative overflow-hidden flex flex-col group-hover:bg-[#000] transition-colors duration-500">
              {/* Green Glow */}
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-900/40 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

              <div className="flex-1 flex items-center justify-center perspective-1000">
                <div className="relative w-48 h-64 transform rotate-y-12 rotate-z-6 transition-transform duration-700 group-hover:rotate-y-0 group-hover:rotate-z-0">
                  {/* Card 1 */}
                  <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl p-4 flex flex-col gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    </div>
                    <div className="space-y-2 mt-2">
                      <div className="h-2 w-3/4 bg-zinc-800 rounded-full" />
                      <div className="h-2 w-1/2 bg-zinc-800 rounded-full" />
                    </div>
                    <div className="mt-auto h-24 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-lg border border-white/5" />
                  </div>
                  {/* Card 2 (Behind) */}
                  <div className="absolute top-4 -right-12 w-full h-full bg-zinc-800/50 backdrop-blur-sm rounded-2xl border border-white/5 -z-10 transform scale-95" />
                </div>
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 4: Pearl */}
        <div className="lg:col-span-7">
          <ProjectCard
            title="Pearl"
            tags="Wellness, Mobile, Pastel"
            rotation="-rotate-1"
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950 p-10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30" />

              <div className="relative z-10 w-full max-w-md aspect-video bg-white/40 dark:bg-black/20 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-white/10 shadow-xl flex items-center justify-center gap-8 group-hover:gap-12 transition-all duration-500">
                <div className="flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-3xl">
                    🧘
                  </div>
                  <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
                    Mind
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform delay-75">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-3xl">
                    💤
                  </div>
                  <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
                    Rest
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2 transform group-hover:scale-110 transition-transform delay-150">
                  <div className="w-16 h-16 rounded-2xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center text-3xl">
                    ❤️
                  </div>
                  <span className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
                    Health
                  </span>
                </div>
              </div>
            </div>
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  title: string;
  tags: string;
  children: React.ReactNode;
  className?: string;
  rotation?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  tags,
  children,
  className,
  rotation = "rotate-0",
}) => (
  <div className="flex flex-col gap-5 group cursor-pointer">
    {/* Visual Container (The 'Brand Poster') - Added white border 'sticker' effect and tilt */}
    <div
      className={`w-full overflow-hidden rounded-[2rem] border-[6px] border-white dark:border-zinc-800 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:rotate-0 ${rotation} ${className} aspect-[4/3] lg:aspect-auto`}
    >
      {children}
    </div>

    {/* Text Below */}
    <div className="flex flex-col px-1 gap-1">
      <div className="flex items-center gap-2 group-hover:gap-3 transition-all">
        <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
          {title}
        </h3>
        <ArrowRight
          size={22}
          className="text-muted-foreground group-hover:text-foreground transition-colors transform duration-300"
        />
      </div>
      <p className="text-sm text-muted-foreground font-medium">{tags}</p>
    </div>
  </div>
);

export default CaseStudy;