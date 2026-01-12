"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { allPosts } from "content-collections";

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

export default function BlogPage() {
  const uniquePosts = allPosts.filter(
    (post, index, self) => index === self.findIndex((t) => t.slug === post.slug)
  );

  const sortedPosts = uniquePosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="w-full mx-auto min-h-screen pt-12 sm:pt-32 pb-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <div className="max-w-2xl space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-serif tracking-tight text-foreground"
            >
              writing.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              Blog that doesn&apos;t really adhere to any fixed themes. From
              software engineering to design philosophy to random AI
              automations.
            </motion.p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sortedPosts.map((post) => (
              <motion.article
                key={post.slug}
                variants={itemVariants}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-card border border-border/40 hover:border-border transition-all duration-300 h-full min-h-[320px]"
              >
                {/* Top Row: Category & Icon */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Writing • {post.tags?.[0] || "Blog"}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                {/* Middle: Content */}
                <div className="mt-8 mb-6">
                  <h2 className="text-3xl font-serif font-medium tracking-tight text-foreground mb-4 group-hover:opacity-80 transition-opacity">
                    <Link
                      href={post.url}
                      className="before:absolute before:inset-0"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>

                {/* Bottom: Date */}
                <div className="mt-auto pt-4 border-t border-border/20">
                  <time className="text-sm text-muted-foreground/80">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}