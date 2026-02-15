"use client";
import React, { type SVGProps } from "react";
import { motion, Variants } from "framer-motion";

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
    <section className="w-full mx-auto flex flex-col pt-8 md:pt-24 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className="max-w-3xl mx-auto w-full flex flex-col gap-8"
      >
        {/* Header Section - Inspired by heroimage.png */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-5">
            {/* Profile Image */}
            <div className="w-20 h-20 rounded-2xl border-[1.5px] border-slate-900 p-0.5 bg-white overflow-hidden shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] shrink-0">
              <img
                src="pfp-main.png"
                alt="Avatar"
                className="w-full h-full object-cover grayscale opacity-90 scale-110"
              />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Daman
              </h1>
              <p className=" font-handwriting text-lg  text-muted-foreground">
                developer and designer
              </p>
            </div>
          </div>

          {/* Social Links Stacked */}
          <div className="flex flex-col items-end gap-2">
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
            className="text-xl md:text-2xl font-fraunces font-light leading-snug text-muted-foreground tracking-tight max-w-2xl"
          >
            <p>
              <span className="text-foreground font-medium">
                Developer and designer
              </span>
              . Help products{" "}
              <span className="text-foreground font-medium">work better</span>—
              <span className="text-foreground font-medium">
                faster checkouts
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                clearer interfaces
              </span>
              —from{" "}
              <span className="text-foreground font-medium">
                concept to deployment
              </span>
              .{" "}
              <span className="text-foreground font-medium">
                Technical decisions
              </span>{" "}
              that serve{" "}
              <span className="text-foreground font-medium">
                business outcomes
              </span>
              .
            </p>
          </motion.div>
        </div>
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