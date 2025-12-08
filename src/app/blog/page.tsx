"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const posts = [
  {
    slug: "design-engineering",
    title: "The Rise of the Design Engineer",
    date: "Dec 08, 2025",
    readTime: "5 min read",
    excerpt:
      "Why bridging the gap between Figma and VS Code is the most valuable skill in 2025.",
    category: "Career",
  },
  {
    slug: "nextjs-16",
    title: "What's New in Next.js 16",
    date: "Nov 24, 2025",
    readTime: "8 min read",
    excerpt:
      "A deep dive into the new routing primitives and server actions stability improvements.",
    category: "Tech",
  },
  {
    slug: "minimalism",
    title: "The Art of Digital Minimalism",
    date: "Oct 15, 2025",
    readTime: "4 min read",
    excerpt:
      "How reducing cognitive load in UI leads to better conversion and happier users.",
    category: "Design",
  },
  {
    slug: "framer-motion-guide",
    title: "Mastering Layout Animations",
    date: "Sep 02, 2025",
    readTime: "12 min read",
    excerpt:
      "Understanding layoutId and AnimatePresence for seamless component transitions.",
    category: "Tutorial",
  },
];

export default function BlogPage() {
  return (
    <section className="w-full mx-auto min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto w-full px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <div className="space-y-4">
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl font-medium tracking-tight text-foreground"
            >
              Writing
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-serif italic text-muted-foreground"
            >
              Thoughts on software, design, and life.
            </motion.p>
          </div>

          {/* Posts List */}
          <div className="space-y-8">
            {posts.map((post) => (
              <motion.article
                key={post.slug}
                variants={itemVariants}
                className="group relative flex flex-col gap-2 p-4 -mx-4 rounded-2xl hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mb-1">
                  <span>{post.date}</span>
                  <span>{post.category}</span>
                </div>

                <h2 className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                  <Link href={`#`} className="before:absolute before:inset-0">
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1 text-xs font-medium text-primary mt-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Read article <ArrowRight size={12} />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
