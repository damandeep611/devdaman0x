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
    aspect: "aspect-square",
  },
  {
    id: 2,
    title: "Nexus",
    category: ["Web Apps", "Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1440/xanenlqyomi71vuoaidc.mp4",
    label: "System Architecture",
    aspect: "aspect-[16/10]",
  },
  {
    id: 3,
    title: "Flux",
    category: ["Mobile Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/l3postvpevywyz4w7hoa.mp4",
    label: "Audio Interface",
    aspect: "aspect-square",
  },
  {
    id: 4,
    title: "Vantage",
    category: ["Design", "Web Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/htlsiutyvjm0yjygym2i.mp4",
    label: "Analytics Dashboard",
    aspect: "aspect-[16/10]",
  },
  {
    id: 5,
    title: "Orbit",
    category: ["Mobile Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/fgsiivhv4akbght57yfl.mp4",
    label: "Social Graph",
    aspect: "aspect-square",
  },
  {
    id: 6,
    title: "Zenith",
    category: ["Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/yxxdn4jnr9ubfclamcgv.mp4",
    label: "Wellness Tracker",
    aspect: "aspect-[4/5]",
  },
  {
    id: 7,
    title: "Cipher",
    category: ["Web Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/40dd5971-e408-42f3-9fb1-50da0571356d.mp4",
    label: "Crypto Exchange",
    aspect: "aspect-[16/10]",
  },
  {
    id: 8,
    title: "Echo",
    category: ["Mobile Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/fl9wocuwlfiykosqybye.mp4",
    label: "Voice Memos",
    aspect: "aspect-square",
  },
  {
    id: 9,
    title: "Prism",
    category: ["Web Apps", "Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1440/frglqedef4x9xjij0hei.mp4",
    label: "Photo Editor",
    aspect: "aspect-[16/10]",
  },
  {
    id: 10,
    title: "Horizon",
    category: ["Mobile Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/xubpht2atogmrgdx1wm3.mp4",
    label: "Travel Planner",
    aspect: "aspect-square",
  },
  {
    id: 11,
    title: "Metric",
    category: ["Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/r4gepm6h61qab7rexr31.mp4",
    label: "Financial Tools",
    aspect: "aspect-square",
  },
];

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignore errors from interrupted play requests
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group mb-8 break-inside-avoid"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Card */}
      <div className={`relative w-full ${project.aspect} bg-muted rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-lg hover:border-foreground/20 transition-all duration-300`}>
        <video
          ref={videoRef}
          src={project.src}
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Overlay gradient for better depth on some videos */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Info Below Card */}
      <div className="mt-3 flex justify-between items-start gap-4 px-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-foreground tracking-tight leading-none group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-xs font-medium text-muted-foreground">{project.label}</span>
        </div>
        <div className="text-muted-foreground/50 group-hover:text-foreground transition-colors duration-300">
          <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
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
