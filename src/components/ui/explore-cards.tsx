"use client";

import type React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type CardTheme = "pink" | "lime" | "mint";

interface ShowcaseCardBaseProps {
  theme: CardTheme;
  title: string;
  subtitle: string;
  footer?: React.ReactNode;
  href: string;
  external?: boolean;
  className?: string;
}

const themeStyles: Record<CardTheme, string> = {
  pink: "bg-gradient-to-br from-[#FDF4FF] to-[#F5E6FF] text-[#5b21b6] shadow-pink-200/50 hover:shadow-pink-300/60",
  lime: "bg-gradient-to-br from-[#F7FFE5] to-[#E9FFC2] text-[#365314] shadow-lime-200/50 hover:shadow-lime-300/60",
  mint: "bg-gradient-to-br from-[#E6FFFA] to-[#D0FAE8] text-[#064e3b] shadow-emerald-200/50 hover:shadow-emerald-300/60",
};

const themeTextStyles: Record<CardTheme, string> = {
  pink: "text-[#4c1d95]",
  lime: "text-[#1a2e05]",
  mint: "text-[#022c22]",
};

function ShowcaseCardBase({
  theme,
  title,
  subtitle,
  footer,
  href,
  external,
  className,
}: ShowcaseCardBaseProps) {
  const Content = (
    <div
      className={cn(
        "group relative flex h-[340px] w-full flex-col justify-between rounded-4xl p-8 md:p-10 transition-all duration-500 ease-out",
        "border border-white/40 shadow-xl backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.01]",
        themeStyles[theme],
        className
      )}
    >
      {/* Noise Texture Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between">
          <h3
            className={cn(
              "font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl",
              themeTextStyles[theme]
            )}
          >
            {title}
          </h3>
          {external && (
            <ArrowUpRight
              className={cn(
                "h-6 w-6 opacity-40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100",
                themeTextStyles[theme]
              )}
            />
          )}
        </div>
        <p
          className={cn(
            "text-lg font-medium leading-relaxed opacity-80 mix-blend-multiply max-w-[90%]",
            themeTextStyles[theme]
          )}
        >
          {subtitle}
        </p>
      </div>

      <div className="relative z-10 mt-auto flex items-center gap-4">
        {footer}
      </div>
    </div>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="block h-full w-full outline-none focus-visible:ring-4 ring-offset-4 ring-blue-500/20 rounded-4xl"
      >
        {Content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="block h-full w-full outline-none focus-visible:ring-4 ring-offset-4 ring-blue-500/20 rounded-4xl"
    >
      {Content}
    </Link>
  );
}

// --- Specific Cards ---

export function BlogCard() {
  return (
    <ShowcaseCardBase
      theme="pink"
      title="Stories"
      subtitle="Deep dives into React, UI engineering, and design systems."
      href="/blogpage"
      footer={
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/60 shadow-sm">
            <Image
              src="https://avatars.githubusercontent.com/u/99176180?v=4"
              alt="Daman"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#4c1d95]">devDaman</span>
            <span className="text-xs font-medium text-[#4c1d95]/60">
              Read Articles
            </span>
          </div>
        </div>
      }
    />
  );
}

export function GitHubCard() {
  return (
    <ShowcaseCardBase
      theme="lime"
      title="Labs"
      subtitle="Open source experiments, UI kits, and shipping code."
      href="https://github.com/"
      external
      footer={
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2e05]/5 border border-white/20">
            <svg
              className="h-5 w-5 text-[#1a2e05]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#1a2e05]">GitHub</span>
            <span className="text-xs font-medium text-[#1a2e05]/60">
              View Activity
            </span>
          </div>
        </div>
      }
    />
  );
}

export function YouTubeCard() {
  return (
    <ShowcaseCardBase
      theme="mint"
      title="Cinema"
      subtitle="Visual learning for developers. Watch me build."
      href="https://youtube.com/@yourchannel"
      external
      footer={
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#022c22]/5 border border-white/20">
            <svg
              className="h-5 w-5 text-[#022c22]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#022c22]">YouTube</span>
            <span className="text-xs font-medium text-[#022c22]/60">
              Watch Videos
            </span>
          </div>
        </div>
      }
    />
  );
}
