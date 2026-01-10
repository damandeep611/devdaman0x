"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Duplicating project data for "Web Apps" from ProjectGallery.tsx
const projects = [
  {
    id: 2,
    title: "Nexus",
    category: ["Web Apps", "Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1440/xanenlqyomi71vuoaidc.mp4",
    label: "System Architecture",
    aspect: "aspect-[2/1]",
    rotation: "rotate-[-1.5deg]",
    className: "md:col-span-5 md:col-start-2",
  },
  {
    id: 4,
    title: "Vantage",
    category: ["Design", "Web Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/htlsiutyvjm0yjygym2i.mp4",
    label: "Analytics Dashboard",
    aspect: "aspect-square",
    rotation: "rotate-[1deg]",
    className: "md:col-span-4",
  },
  {
    id: 7,
    title: "Cipher",
    category: ["Web Apps"],
    type: "video",
    src: "https://cdn.godly.website/videos/1280/40dd5971-e408-42f3-9fb1-50da0571356d.mp4",
    label: "Crypto Exchange",
    aspect: "aspect-[2/1]",
    rotation: "rotate-[0.5deg]",
    className: "md:col-span-4 md:col-start-3 md:translate-y-2",
  },
  {
    id: 9,
    title: "Prism",
    category: ["Web Apps", "Design"],
    type: "video",
    src: "https://cdn.godly.website/videos/1440/frglqedef4x9xjij0hei.mp4",
    label: "Photo Editor",
    aspect: "aspect-[4/3]",
    rotation: "rotate-[-1deg]",
    className: "md:col-span-4 md:-translate-y-2",
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
      className={`group rounded-xl border border-border bg-card overflow-hidden shadow-md hover:shadow-2xl hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:rotate-0 hover:z-10 ${project.rotation} ${project.className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Card Header */}
      <div className="p-4 flex justify-between items-start gap-4 border-b border-border bg-muted/30 backdrop-blur-sm">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold text-foreground tracking-tight leading-none">
            {project.title}
          </h3>
          <span className="text-xs font-medium text-muted-foreground/80">
            {project.label}
          </span>
        </div>
        <div className="p-2 rounded-full text-muted-foreground/70 group-hover:text-primary transition-colors duration-300">
          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>

      {/* Media */}
      <div className={`relative w-full ${project.aspect} bg-muted`}>
        <video
          ref={videoRef}
          src={project.src}
          loop
          muted
          playsInline
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
    </motion.div>
  );
};

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

      {/* Grid Layout for Web Apps */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 w-full max-w-6xl mx-auto p-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default CaseStudy;
