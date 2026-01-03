"use client";

import React from "react";
import { motion } from "framer-motion";

interface ProjectData {
  title: string;
  category: string;
  year: string;
  image: string;
  insight: string;
  description: string;
  tech: string[];
}

const projects: ProjectData[] = [
  {
    title: "Kinetix Studio",
    category: "Creative Engineering",
    year: "2024",
    image: "https://picsum.photos/1200/800?random=50",
    insight:
      "Pushing the boundaries of real-time 3D interaction for modern browsers.",
    description:
      "Developing a performant web-based engine for high-fidelity animations. The challenge was maintaining 60FPS while rendering complex procedural shaders and interactive lighting systems.",
    tech: ["WebGL", "Three.js", "React", "Rust"],
  },
  {
    title: "Lumina Health",
    category: "Product Design",
    year: "2023",
    image: "https://picsum.photos/1200/800?random=51",
    insight:
      "A patient-centric dashboard focusing on clarity and empathetic user flows.",
    description:
      "A complete overhaul of the patient intake system for a major healthcare provider. We reduced the onboarding time by 40% using advanced progressive disclosure techniques.",
    tech: ["Figma", "React", "Typescript", "Tailwind"],
  },
  {
    title: "Vortex Labs",
    category: "Brand Systems",
    year: "2023",
    image: "https://picsum.photos/1200/800?random=52",
    insight:
      "Redefining the identity of a next-gen AI startup through generative aesthetics.",
    description:
      "Creating a living brand identity that responds to live data inputs. The logo evolves based on the company's real-time training processing power.",
    tech: ["Processing", "p5.js", "SVG Animation", "Next.js"],
  },
];

interface ProjectSectionProps extends ProjectData {
  index: number;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  category,
  year,
  image,
  insight,
  description,
  tech,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } gap-12 lg:gap-24 items-center mb-32 lg:mb-48 relative group perspective-1000`}
    >
      {/* Visual Side: Polaroid / Evidence Card */}
      <div className="w-full lg:w-3/5 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: isEven ? -4 : 4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: isEven ? -2 : 2 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          whileHover={{ scale: 1.02, rotate: 0, transition: { duration: 0.4 } }}
          className="bg-[#Fdfdfd] dark:bg-[#121212] p-4 pb-16 md:pb-20 shadow-2xl rounded-sm border border-neutral-200 dark:border-neutral-800 relative cursor-pointer"
        >
          {/* Tape Effect */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-yellow-100/20 dark:bg-white/5 border-l-2 border-r-2 border-white/10 backdrop-blur-[2px] -rotate-1 shadow-sm z-30 opacity-80" />

          {/* Image Frame */}
          <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-black/5 dark:border-white/5">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
            />
            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-neutral-500/10 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Polaroid Handwritten Caption */}
          <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
            <div className="flex flex-col">
              <span className="font-handwriting text-2xl md:text-4xl text-neutral-800 dark:text-neutral-200 opacity-90 -rotate-1">
                {title}
              </span>
            </div>
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest border border-neutral-200 dark:border-neutral-800 px-2 py-1 rounded-full">
              {year}
            </span>
          </div>
        </motion.div>

        {/* Decorative Background Elements */}
        <div
          className={`absolute top-12 ${
            isEven ? "-right-8 rotate-6" : "-left-8 -rotate-6"
          } w-full h-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 rounded-sm -z-10 opacity-40 hidden lg:block`}
        />
      </div>

      {/* Content Side: Typed Note */}
      <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Metadata Header */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 opacity-60">
            <span className="w-2 h-2 rounded-full bg-brand-green" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] font-mono">
              {category}
            </span>
            <div className="h-px w-12 bg-current" />
          </div>

          <h3 className="text-3xl md:text-5xl font-bold font-serif italic mb-6 leading-tight">
            {title}
          </h3>

          <p className="text-lg md:text-xl font-medium leading-relaxed text-muted-foreground mb-6">
            {insight}
          </p>

          <div className="relative pl-6 border-l-2 border-brand-green/20 mb-8">
            <p className="text-sm md:text-base text-muted-foreground/80 leading-7 font-mono">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="pt-8">
            <button className="text-xs font-bold uppercase tracking-[0.2em] border-b border-foreground/30 hover:border-foreground transition-colors pb-1">
              Read Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function WorkPage() {
  return (
    <div className="mt-12 sm:mt-32 md:mt-48 max-w-7xl mx-auto px-6">
      {/* Header Section */}
      <div className="mb-32 border-b border-border pb-8 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="space-y-4">
          <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-brand-green pl-1">
            Index_Ref: 2023-24
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter font-serif italic">
            Work <br className="hidden md:block" /> Archive.
          </h1>
        </div>
        <p className="max-w-sm text-muted-foreground font-medium leading-relaxed text-sm md:text-base">
          A collection of experiments, products, and creative engineering.
          Focusing on detail, interaction, and user empathy.
        </p>
      </div>

      {/* Project Gallery */}
      <div className="pb-32">
        {projects.map((p, i) => (
          <ProjectSection key={p.title} index={i} {...p} />
        ))}
      </div>

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
          <div className="space-y-6 relative z-10">
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

          <div className="absolute bottom-6 right-6 -rotate-12 opacity-20">
            <span className="font-handwriting text-6xl text-brand-green">
              Expertise
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
