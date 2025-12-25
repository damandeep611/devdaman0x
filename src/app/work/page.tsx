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
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-12 items-center mb-32 group`}
    >
      {/* Visual Side */}
      <div className="w-full md:w-3/5 relative cursor-pointer">
        <div className="relative aspect-16/10 rounded-4xl overflow-hidden shadow-2xl bg-secondary border-8 border-border">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/5 group-hover:bg-transparent transition-colors duration-500" />

          <div className="absolute top-6 right-6 px-3 py-1 bg-popover/60 backdrop-blur-md rounded-full text-[10px] font-bold text-foreground tracking-widest border border-border">
            {year}
          </div>
        </div>

        <div
          className={`absolute -top-4 ${
            isEven ? "-right-4" : "-left-4"
          } w-24 h-8 bg-brand-green/15 backdrop-blur-sm border border-brand-green/20 rotate-12 z-20 shadow-sm`}
        />
      </div>

      {/* Content Side */}
      <div className="w-full md:w-2/5 space-y-6 text-center md:text-left">
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-green">
            {category}
          </span>
          <h3 className="text-4xl font-bold  tracking-tight">{title}</h3>
        </div>

        <p className="text-muted-foreground leading-relaxed font-medium italic serif">
          {insight}
        </p>

        <div className="pt-4 flex justify-center md:justify-start">
          <motion.button
            whileHover={{ x: 8 }}
            className="flex items-center gap-4 group/btn"
          >
            <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center  transition-transform group-hover/btn:-rotate-45">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] ">
              Read Case Study
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkPage() {
  return (
    <div className="mt-40 max-w-6xl mx-auto">
      {/* Header Bar */}
      <div className="  border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase ">
              Selected Projects
            </span>
            <div className="w-12 h-px " />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-brand-green">
              Archive 24/25
            </span>
          </div>
        </div>
      </div>
      {/* work cards section */}
      <div className=" py-20">
        {/* Title Section */}
        <div className="mb-32 space-y-6 max-w-2xl">
          <h2 className="text-7xl font-bold  tracking-tighter leading-[0.9]">
            Work as an <br />{" "}
            <span className="text-brand-green italic font-serif ">
              Inquiry.
            </span>
          </h2>
          <p className="text-xl  font-medium leading-relaxed">
            I believe great products are born from curiosity. This gallery is a
            record of my attempts to bridge aesthetic elegance with technical
            precision.
          </p>
        </div>
        {/* Project List */}
        <div className="space-y-40">
          {projects.map((p, i) => (
            <ProjectSection key={p.title} index={i} {...p} />
          ))}
        </div>
      </div>

      {/* Bento Philosophy Section */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="md:col-span-2 p-12 b rounded-[2.5rem] bg-foreground text-background flex flex-col justify-between min-h-[400px]">
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-background/40">
              Philosophy
            </span>
            <h3 className="text-4xl font-bold font-serif italic leading-tight">
              Function is the baseline, <br /> Delight is the goal.
            </h3>
          </div>
          <div className="pt-12 flex flex-wrap gap-3">
            {[
              "Pixel Perfect",
              "Motion First",
              "Human Centric",
              "Scalable Architecture",
            ].map((t) => (
              <span
                key={t}
                className="px-4 py-2 bg-background/10 rounded-full text-[10px] font-bold uppercase tracking-widest"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="p-12 bg-card border border-border rounded-[2.5rem] shadow-xl shadow-foreground/5 flex flex-col justify-between">
          <div className="space-y-4">
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-muted-foreground">
              Services
            </span>
            <ul className="space-y-4 pt-4">
              {[
                "Product Design",
                "Full-stack Dev",
                "Design Systems",
                "3D Interaction",
              ].map((s) => (
                <li
                  key={s}
                  className="text-lg font-bold  flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-8 relative">
            <div className="pt-8 relative">
              <div className="font-(family-name:--font-geist-caveat) text-brand-green/40 text-4xl -rotate-12 absolute -top-8 right-0">
                Expertise
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
