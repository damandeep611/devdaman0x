"use client";
import React, { type SVGProps } from "react";
import { motion, Variants } from "framer-motion";
import { Linkedin, FileText } from "lucide-react";

const GitHub = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 1024 1024" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
      transform="scale(64)"
      fill="currentColor"
    />
  </svg>
);

export { GitHub };

const XformerlyTwitter = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} fill="none" viewBox="0 0 1200 1227">
    <path
      fill="currentColor"
      d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
    />
  </svg>
);

export { XformerlyTwitter };

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="w-full mx-auto flex flex-col pt-12 md:pt-24 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="max-w-3xl mx-auto w-full flex flex-col gap-12"
      >
        {/* Header Section - Inspired by heroimage.png */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between w-full border-b border-dashed border-border pb-8"
        >
          <div className="flex items-center gap-5">
            {/* Profile Image */}
            <motion.div
              className="relative w-16 h-16 sm:w-20 sm:h-20 cursor-pointer"
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                className="relative w-full h-full"
                variants={{
                  tap: { scale: 0.96 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <motion.div
                  className="relative z-10 w-full h-full rounded-2xl border-2 border-primary overflow-hidden bg-background shadow-sm"
                  variants={{
                    hover: {
                      y: -2,
                      rotate: -2,
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    },
                  }}
                >
                  <img
                    src="/pfp-main.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            <div className="flex flex-col gap-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Daman
              </h1>
              <p className=" font-handwriting text-lg  text-muted-foreground">
                developer and designer
              </p>
            </div>
          </div>

          {/* Social Links Stacked - Desktop */}
          <div className="hidden sm:flex flex-col items-end gap-2">
            <SocialLinkVertical
              href="#"
              icon={<XformerlyTwitter width={14} height={14} />}
              label="twitter"
            />
            <SocialLinkVertical
              href="#"
              icon={<GitHub width={14} height={14} />}
              label="github"
            />
          </div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl font-light leading-snug text-muted-foreground tracking-tight max-w-2xl"
          >
            <p>
              I&apos;m a{" "}
              <span className="text-foreground font-medium">designer</span> in
              pursuit of{" "}
              <span className="text-foreground font-medium">aesthetics</span>{" "}
              and <span className="text-foreground font-medium">function</span>.
              I hope to create a world of{" "}
              <span className="text-foreground font-medium">seeing</span>,{" "}
              <span className="text-foreground font-medium">learning</span>,{" "}
              <span className="text-foreground font-medium">thinking</span>,{" "}
              <span className="text-foreground font-medium">building</span>, and{" "}
              <span className="text-foreground font-medium">loving</span>.
            </p>
            <p className="mt-6">
              Currently a{" "}
              <span className="text-foreground font-medium">
                full-stack developer
              </span>{" "}
              and designer who loves turning{" "}
              <span className="text-foreground font-medium">
                abstract ideas
              </span>{" "}
              into functional, beautiful products.
            </p>
          </motion.div>
        </div>

        {/* Mobile Socials */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between pt-2 border-t border-dashed border-border sm:hidden"
        >
          <div className="flex items-center gap-5">
            <SocialLink
              href="#"
              icon={<XformerlyTwitter width={18} height={18} />}
              label="Twitter"
            />
            <SocialLink
              href="#"
              icon={<GitHub width={18} height={18} />}
              label="GitHub"
            />
            <SocialLink
              href="#"
              icon={<Linkedin size={18} />}
              label="LinkedIn"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const SocialLinkVertical: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    whileHover={{ x: -2 }}
    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group text-sm"
  >
    <span className="opacity-60 group-hover:opacity-100 transition-opacity">
      {icon}
    </span>
    <span className="font-mono">{label}</span>
  </motion.a>
);

const SocialLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <motion.a
    href={href}
    whileHover={{ y: -2 }}
    className="text-muted-foreground hover:text-foreground transition-colors"
    aria-label={label}
  >
    {icon}
  </motion.a>
);