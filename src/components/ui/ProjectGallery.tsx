"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Project Data
const projects = [
  // --- DESIGN & MOBILE APPS (The 19 Media Items) ---
  {
    id: 1,
    title: "AI Chat",
    category: ["Design", "Mobile Apps"],
    type: "video",
    src: "https://framerusercontent.com/assets/oJ0YcElKZRMeMW8nmeGupF7PaMc.mp4",
    label: "AI character → Chat",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 2,
    title: "Wallet",
    category: ["Design", "Mobile Apps"],
    type: "video",
    src: "https://framerusercontent.com/assets/YVwxqIs5jj53TfqCQhpBS26HAk.mp4",
    label: "Swap",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 3,
    title: "Gallery",
    category: ["Design"],
    type: "video",
    src: "https://framerusercontent.com/assets/XiP1ClHXk1u0za8jtLnge8r2rq4.mp4",
    label: "Photo Gallery",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    title: "Chart",
    category: ["Design"],
    type: "video",
    src: "https://framerusercontent.com/assets/XHriT6GGIWnphYQXIBJ53GtUPaA.mp4",
    label: "Market Chart",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    title: "Backup",
    category: ["Design", "Mobile Apps"],
    type: "video",
    src: "https://framerusercontent.com/assets/1H3SWqw8UVcPfbMPSgWQ2dcUmRM.mp4",
    label: "Manual backup → Wallet",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 6,
    title: "Widget",
    category: ["Design"],
    type: "video",
    src: "https://framerusercontent.com/assets/rvAkPCuZLQmLZl5uQxWmmOF9c4.mp4",
    label: "Weather widget",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 7,
    title: "Interface",
    category: ["Design"],
    type: "image",
    src: "https://framerusercontent.com/images/Dh6sJGJ7IpZQVMaHwl7arvMo4.png?scale-down-to=2048&lossless=1&width=1226&height=2070",
    label: "Mobile UI Design",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 8,
    title: "Concept",
    category: ["Design"],
    type: "image",
    src: "https://framerusercontent.com/images/1M6Ys2p2TXlpHO7Y8Is7ymiTXCs.png?scale-down-to=2048&lossless=1&width=1226&height=2070",
    label: "Dark Mode Concept",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 9,
    title: "Prototyping",
    category: ["Design", "Mobile Apps"],
    type: "video",
    src: "https://framerusercontent.com/assets/k1gbD1SV9Wfqm8S2CWpMFlh64CU.mp4",
    label: "Interaction Flow",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 10,
    title: "Dashboard",
    category: ["Design"],
    type: "video",
    src: "https://framerusercontent.com/assets/5yPk6Jw9MpITlFg8Rxewz52HHQ.mp4",
    label: "Admin Panel",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 11,
    title: "Animation",
    category: ["Design"],
    type: "video",
    src: "https://framerusercontent.com/assets/lWxH8OsIDXEMU4Xm8Y0uKKnyqE.mp4",
    label: "Motion Study",
    aspect: "aspect-[4/3]",
  },
  {
    id: 12,
    title: "Social",
    category: ["Design", "Mobile Apps"],
    type: "video",
    src: "https://framerusercontent.com/assets/5or8FbuSqpgkaty3i3pMR9wV25s.mp4",
    label: "Feed Scroll",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 13,
    title: "Music",
    category: ["Design", "Mobile Apps"],
    type: "video",
    src: "https://framerusercontent.com/assets/LfkzR6XMLBQlsCKgpzEPY5JgGw.mp4",
    label: "Player Interface",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 14,
    title: "Profile",
    category: ["Design"],
    type: "image",
    src: "https://framerusercontent.com/images/M71SgXvMYdDc21hf8stTyFZupQ.png?scale-down-to=2048&width=1226&height=2070",
    label: "User Profile",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 15,
    title: "Settings",
    category: ["Design"],
    type: "image",
    src: "https://framerusercontent.com/images/5DJf3yNWidIOb1dsRrVaE6o3ZAs.png?scale-down-to=2048&width=1226&height=2070",
    label: "Preferences",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 16,
    title: "Crypto",
    category: ["Design"],
    type: "video",
    src: "https://framerusercontent.com/assets/xjGFNEXBtm5D8GToyCzJW1eko.mp4",
    label: "Token Analytics",
    aspect: "aspect-[4/3]",
  },
  {
    id: 17,
    title: "Onboarding",
    category: ["Design", "Mobile Apps"],
    type: "video",
    src: "https://framerusercontent.com/assets/LovNrwy53vlb5X9bNFTeWuCMTs.mp4",
    label: "Welcome Flow",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 18,
    title: "Detail",
    category: ["Design"],
    type: "video",
    src: "https://framerusercontent.com/assets/oJ0YcElKZRMeMW8nmeGupF7PaMc.mp4",
    label: "Micro-interaction",
    aspect: "aspect-[3/4.5]",
  },
  {
    id: 19,
    title: "Graph",
    category: ["Design"],
    type: "video",
    src: "https://framerusercontent.com/assets/XHriT6GGIWnphYQXIBJ53GtUPaA.mp4",
    label: "Data Visualization",
    aspect: "aspect-[4/3]",
  },

  // --- WEB APPS (High-Quality Placeholders) ---
  {
    id: 20,
    title: "DotOS",
    category: ["Web Apps"],
    type: "image",
    src: "https://cdn.dribbble.com/userupload/46252782/file/089321701bd13a3a6f55138512a4639d.png?resize=1600x1200&vertical=center",
    label: "Branding, System Design, Illustration",
    aspect: "aspect-[4/3]",
  },
  {
    id: 21,
    title: "Aura",
    category: ["Web Apps"],
    type: "image",
    src: "https://cdn.dribbble.com/userupload/46262439/file/814dcf2b3391cee997a9b0dc40502c89.jpg?resize=1600x1200&vertical=center",
    label: "Audio Engine, Visual Identity",
    aspect: "aspect-[4/3]",
  },
  {
    id: 22,
    title: "Flux",
    category: ["Web Apps"],
    type: "image",
    src: "https://cdn.dribbble.com/userupload/46267415/file/ec02ef77daa4c3d2b3baf6079dcd997e.png?resize=1600x1200&vertical=center",
    label: "SaaS, Dashboard, Dark Mode",
    aspect: "aspect-[4/3]",
  },
  {
    id: 23,
    title: "Pearl",
    category: ["Web Apps"],
    type: "image",
    src: "https://cdn.dribbble.com/userupload/46102893/file/27913b25589d3392059aa283f33fe21b.png?resize=1600x1200&vertical=center",
    label: "Wellness, Mobile, Pastel",
    aspect: "aspect-[4/3]",
  },
    {
    id: 24,
    title: "PromptMatrix",
    category: ["Web Apps"],
    type: "image",
    src: "https://cdn.dribbble.com/userupload/41507805/file/original-d5d06c2d76fd1d6c15e8111dfd653769.png?resize=1600x1157&vertical=center",
    label: "AI Image Gallery Prompts",
    aspect: "aspect-[4/3]",
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
        className={`relative ${project.aspect} bg-zinc-100 dark:bg-zinc-900 rounded-[2rem] overflow-hidden flex flex-col justify-between border border-border shadow-sm group-hover:shadow-2xl transition-all duration-500`}
      >
        <div className="flex justify-between items-start p-5 relative z-10 pointer-events-none">
          <span className="px-3 py-1 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md text-black dark:text-white text-[10px] font-bold uppercase tracking-wider rounded-full border border-border shadow-sm">
            {project.title}
          </span>
          <button className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center text-black dark:text-white shadow-lg pointer-events-auto group-hover:scale-110 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300">
            <ArrowRight size={14} />
          </button>
        </div>

        <div className="absolute inset-0 z-0">
          {project.type === "video" ? (
            <video
              src={project.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          ) : (
            <img
              src={project.src}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>
      <span className="text-sm font-medium text-muted-foreground/70 text-center group-hover:text-foreground transition-colors">
        {project.label}
      </span>
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
            className={`relative px-6 py-2 rounded-full text-sm font-bold tracking-tight transition-colors z-10 ${
              activeTab === tab
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-black dark:bg-white rounded-full -z-10"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className={activeTab === tab ? "dark:text-black" : ""}>
              {tab}
            </span>
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
