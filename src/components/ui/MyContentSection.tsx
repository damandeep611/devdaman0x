"use client"
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { SiGithub, SiMedium } from 'react-icons/si'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from "next/link";

interface Post {
  title: string;
  description: string;
  date: string;
  tag: string;
  image: string;
  url: string;
}

export default function MyContentSection({ posts }: { posts: Post[] }) {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Writings */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-muted-foreground/50"></span>
            <span className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest">
              Latest Writing
            </span>
          </div>

          <div className="space-y-4 md:space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row gap-4 sm:gap-6 items-start p-3 md:p-4 rounded-3xl hover:bg-muted/50 transition-colors duration-300"
              >
                <div className="relative w-full sm:w-32 aspect-video sm:aspect-square rounded-2xl overflow-hidden bg-secondary shrink-0 border border-border">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover p-2 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex-1 space-y-2 md:space-y-3">
                  <div className="flex items-center gap-3 text-[10px] md:text-xs text-muted-foreground font-medium">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span className="text-foreground">{post.tag}</span>
                  </div>

                  <Link href={post.url} className="block">
                    <h3 className="text-base md:text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {post.description}
                  </p>

                  <Link
                    href={post.url}
                    className="flex items-center gap-2 text-xs md:text-sm font-semibold text-foreground mt-2 group/btn"
                  >
                    Read Article
                    <ArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform text-muted-foreground"
                    />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-muted-foreground/50"></span>
            <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
              Explore
            </span>
          </div>

          {/* Medium Promotion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-1 rounded-3xl bg-linear-to-br from-border/50 to-muted/50 border border-border hover:border-primary/20 transition-colors duration-500 group overflow-hidden"
          >
            <div className="bg-card/80 backdrop-blur-xl p-8 rounded-[22px] relative h-full">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <SiMedium size={80} className="text-foreground rotate-12" />
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background">
                      <SiMedium size={18} />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                      On Medium
                    </span>
                  </div>

                  <h4 className="text-2xl font-serif italic text-foreground mb-4 leading-tight">
                    Stories on architecture & <br /> engineering.
                  </h4>

                  <p className="text-muted-foreground mb-8 leading-relaxed font-light text-sm max-w-sm">
                    Deep dives into system design, patterns, and the occasional
                    rant about complexity.
                  </p>
                </div>

                <a
                  href="https://medium.com/@devdaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground font-medium text-sm group/btn"
                >
                  <span className="border-b border-muted-foreground/30 pb-0.5 group-hover/btn:border-foreground transition-colors">
                    Read Articles
                  </span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover/btn:translate-x-1 text-muted-foreground group-hover/btn:text-foreground"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Learning / YOLO Speedrun Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative p-8 rounded-3xl border border-border bg-card transition-colors duration-500 backdrop-blur-sm group overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-secondary border border-border group-hover:border-primary/30 transition-colors">
                    <SiGithub size={24} className="text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground transition-colors">
                      yolo-speedrun
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5">
                      Public Learning Tracker
                    </p>
                  </div>
                </div>
              </div>

              <p className="mb-8 leading-relaxed font-light text-sm text-muted-foreground">
                A chaotic, public collection of everything I&apos;m currently
                learning. Code snippets, raw notes, and resources on everything
                from backend internals to algorithms.
              </p>

              <a
                href="https://github.com/devdaman/yolo-speedrun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-4 rounded-xl bg-secondary border border-border hover:bg-accent hover:border-border transition-all group/link"
              >
                <span className="text-sm font-medium text-foreground">
                  Browse Repository
                </span>
                <ArrowRight
                  size={16}
                  className="text-muted-foreground group-hover/link:text-foreground group-hover/link:-rotate-45 transition-all duration-300"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}