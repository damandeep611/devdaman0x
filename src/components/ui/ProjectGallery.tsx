"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Updated Project Data with Godly.website assets
const projects = [
  {
    id: 1,
    title: "Chronicle",
    category: ["Mobile Apps", "Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/dd4776f2-72ae-4a59-986c-5886d258da5b.mp4",
    label: "Calendar & Tasks",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 2,
    title: "Nexus",
    category: ["Web Apps", "Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1440/xanenlqyomi71vuoaidc.mp4",
    label: "System Architecture",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Flux",
    category: ["Mobile Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/l3postvpevywyz4w7hoa.mp4",
    label: "Audio Interface",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 4,
    title: "Vantage",
    category: ["Design", "Web Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/htlsiutyvjm0yjygym2i.mp4",
    label: "Analytics Dashboard",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    title: "Orbit",
    category: ["Mobile Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/fgsiivhv4akbght57yfl.mp4",
    label: "Social Graph",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 6,
    title: "Zenith",
    category: ["Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/yxxdn4jnr9ubfclamcgv.mp4",
    label: "Wellness Tracker",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 7,
    title: "Cipher",
    category: ["Web Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/40dd5971-e408-42f3-9fb1-50da0571356d.mp4",
    label: "Crypto Exchange",
    aspect: "aspect-[4/3]",
  },
  {
    id: 8,
    title: "Echo",
    category: ["Mobile Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/fl9wocuwlfiykosqybye.mp4",
    label: "Voice Memos",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 9,
    title: "Prism",
    category: ["Web Apps", "Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1440/frglqedef4x9xjij0hei.mp4",
    label: "Photo Editor",
    aspect: "aspect-[4/3]",
  },
  {
    id: 10,
    title: "Horizon",
    category: ["Mobile Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/xubpht2atogmrgdx1wm3.mp4",
    label: "Travel Planner",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 11,
    title: "Metric",
    category: ["Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/r4gepm6h61qab7rexr31.mp4",
    label: "Financial Tools",
    aspect: "aspect-[3/4.5]",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-3 group mb-8 break-inside-avoid"
    >
      <div
        className={`relative ${
          project.aspect
        } bg-muted rounded-3xl overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-500 border border-border/50`}
      >
        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[2px]">
            <div className="flex justify-between items-start">
                 <span className="px-3 py-1 bg-background/90 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-wider rounded-full border border-border/50">
                    {project.title}
                 </span>
                 <div className="w-8 h-8 rounded-full bg-background/90 flex items-center justify-center text-foreground shadow-sm">
                    <ArrowUpRight size={14} />
                 </div>
            </div>
        </div>

        {/* Media */}
        <div className="absolute inset-0 z-0">
            <video
              src={project.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
        </div>
      </div>
      
      {/* Label below card */}
      <div className="flex justify-between items-center px-1">
          <span className="text-sm font-medium text-foreground/80">
            {project.title}
          </span>
          <span className="text-xs text-muted-foreground">
            {project.label}
          </span>
      </div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  const [activeTab, setActiveTab] = React.useState("All");
  const tabs = ["All", "Design", "Web Apps", "Mobile Apps"];

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "All") return true;
    return p.category.includes(activeTab);
  });

  return (
    <div className="w-full mb-32">
      {/* Tabs Switcher */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-tight transition-colors z-10 ${
              activeTab === tab
                ? "text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-foreground rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span>{tab}</span>
          </button>
        ))}
      </div>

      {/* Masonry Layout via CSS Columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProjectGallery;
