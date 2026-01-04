"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Github, Twitter, Linkedin, FileText } from "lucide-react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="w-full mx-auto flex flex-col pt-8 md:pt-24  px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="max-w-3xl mx-auto w-full flex flex-col gap-8 "
      >
        {/* Profile Image - High Fidelity Interaction */}
        <motion.div 
          variants={itemVariants} 
          className="relative w-20 h-20 cursor-pointer"
          whileHover="hover"
          whileTap="tap"
        >
          {/* Wrapper for coordinated scaling on tap */}
          <motion.div 
            className="relative w-full h-full"
            variants={{
              tap: { scale: 0.96 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            {/* Back Layer - Rotated Yellow Card */}
            <motion.div 
              className="absolute inset-0 bg-[#FFD23F] rounded-2xl border-2 border-primary"
              variants={{
                hover: { 
                  rotate: 12, 
                  x: 6, 
                  y: 4,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              }}
              initial={{ rotate: 6, x: 0, y: 0 }}
            />
            
            {/* Front Layer - Image */}
            <motion.div 
              className="relative z-10 w-full h-full rounded-2xl border-2 border-primary overflow-hidden bg-background shadow-sm"
              variants={{
                hover: { 
                  y: -4,
                  rotate: -2,
                  scale: 1.05,
                  boxShadow: "0 12px 24px -10px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/download.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-5">
          <motion.p
            variants={itemVariants}
            className="text-xl font-medium tracking-tight "
          >
            hello there! I&apos;m daman.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed font-light tracking-tight "
          >
            I&apos;m a designer in pursuit of aesthetics and function. I hope to
            create a world of seeing, learning, thinking, building, and loving.
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-lg leading-relaxed font-light tracking-tight "
          >
            full-stack developer and designer who loves turning abstract ideas
            into functional, beautiful products.
          </motion.p>
        </div>

        {/* Social Media & Resume */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-6 pt-2"
        >
          <div className="flex items-center gap-5 border-r border-gray-100 pr-6">
            <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
            <SocialLink href="#" icon={<Github size={18} />} label="GitHub" />
            <SocialLink
              href="#"
              icon={<Linkedin size={18} />}
              label="LinkedIn"
            />
          </div>

          <motion.a
            href="#"
            whileHover={{ x: 3 }}
            className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-black transition-colors group"
          >
            <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
              <FileText size={16} />
            </div>
            <span>Resume</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}

const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    whileHover={{ y: -2 }}
    className="text-gray-400 hover:text-gray-900 transition-colors"
    aria-label={label}
  >
    {icon}
  </motion.a>
);