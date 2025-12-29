"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <section className="w-full mx-auto min-h-screen pt-12 sm:pt-32 pb-20">
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
            {sortedPosts.map((post) => (
              <motion.article
                key={post.slug}
                variants={itemVariants}
                className="group relative flex flex-col gap-2 p-4 -mx-4 rounded-2xl hover:bg-secondary/50 transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mb-1">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span>{post.tags?.[0] || "Tech"}</span>
                </div>

                <h2 className="text-xl font-medium tracking-tight group-hover:text-primary transition-colors">
                  <Link
                    href={post.url}
                    className="before:absolute before:inset-0"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {post.description}
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
