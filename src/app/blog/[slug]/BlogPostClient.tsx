"use client";

import React, { useEffect, useState } from "react";
import { MDXContent } from "@content-collections/mdx/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, AlignLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Define the shape of the post prop
interface Post {
  title: string;
  description: string;
  date: Date | string;
  author?: string;
  tags?: string[];
  image?: string;
  mdx: string;
}

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function BlogPostClient({ post, code }: { post: Post; code: string }) {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let observer: IntersectionObserver;
    const frameId = requestAnimationFrame(() => {
      const elements = Array.from(
        document.querySelectorAll("#article-content h2, #article-content h3"),
      );
      const items: TocItem[] = elements.map((elem) => ({
        id: elem.id,
        text: elem.textContent || "",
        level: Number(elem.tagName.substring(1)),
      }));

      // Only update if headings have actually changed to avoid unnecessary renders
      setHeadings((prev) => {
        if (prev.length !== items.length) return items;
        for (let i = 0; i < items.length; i++) {
          if (prev[i].id !== items[i].id || prev[i].text !== items[i].text)
            return items;
        }
        return prev;
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-100px 0px -66% 0px" },
      );

      elements.forEach((elem) => observer.observe(elem));
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (observer) observer.disconnect();
    };
  }, [code]);

  return (
    <div className="w-full min-h-screen pt-20 sm:pt-24 md:pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Navigation - Scoped to align with content */}
        <div className="mb-8 md:mb-12 lg:pl-[10%] xl:pl-[15%]">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span>Back to writing</span>
          </Link>
        </div>

        {/* 
          Grid layout:
          - Left spacer: 10% to 15% width
          - Main content: minmax(auto, 768px)
          - Sidebar: 300px
          - Right spacer: auto (remaining)
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[10%_1fr_280px] xl:grid-cols-[15%_1fr_300px] gap-12 xl:gap-24 relative items-start">
          {/* Empty Left Spacer Column */}
          <div className="hidden lg:block" />

          {/* Main Content Column */}
          <article className="min-w-0 w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Article Header */}
              <header className="space-y-6 md:space-y-8 mb-10 md:mb-16">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-muted-foreground">
                    <time className="font-mono">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex flex-wrap gap-2">
                      {post.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="capitalize px-2 py-0.5 rounded-full bg-secondary/50 text-[10px] sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Heading text responsive sizes */}
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif font-medium tracking-tight text-foreground leading-tight sm:leading-[1.15]">
                    {post.title}
                  </h1>
                </div>

                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
                  {post.description}
                </p>
              </header>

              {/* Cover Image */}
              {post.image && (
                <div className="relative w-full aspect-video mb-10 md:mb-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-border/40 bg-secondary/20">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Content */}
              <div
                id="article-content"
                className="prose prose-base sm:prose-lg dark:prose-invert max-w-none
                prose-headings:font-serif prose-headings:font-medium prose-headings:text-foreground prose-headings:scroll-mt-32
                prose-h1:text-2xl sm:prose-h1:text-3xl prose-h2:text-xl sm:prose-h2:text-2xl prose-h2:mt-10 sm:prose-h2:mt-12 prose-h3:text-lg sm:prose-h3:text-xl
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-light
                prose-a:text-foreground prose-a:underline prose-a:decoration-border prose-a:underline-offset-4 hover:prose-a:decoration-foreground hover:prose-a:opacity-80
                prose-blockquote:border-l-primary prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-foreground
                prose-strong:font-medium prose-strong:text-foreground
                prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-xs sm:prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border
                prose-li:text-muted-foreground prose-li:marker:text-foreground/50
                prose-img:rounded-xl sm:prose-img:rounded-2xl prose-img:border prose-img:border-border/50
              "
              >
                <MDXContent code={code} />
              </div>

              {/* Footer / Author */}
              <div className="mt-16 sm:mt-20 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="text-sm text-muted-foreground">
                  Written by{" "}
                  <span className="text-foreground font-medium">
                    {post.author || "Daman"}
                  </span>
                </div>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Read more articles
                </Link>
              </div>
            </motion.div>
          </article>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block sticky top-32 h-fit max-h-[calc(100vh-10rem)] overflow-y-auto">
            <div className="flex items-center gap-2 mb-6 text-xs font-medium text-foreground uppercase tracking-wider">
              <AlignLeft size={14} />
              <span>Table of Contents</span>
            </div>
            <nav className="flex flex-col space-y-1">
              {headings.map((heading) => (
                <Link
                  key={heading.id}
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${heading.id}`)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setActiveId(heading.id);
                  }}
                  className={cn(
                    "group flex items-start py-1.5 pr-4 transition-colors border-l-2 text-xs leading-snug",
                    heading.level === 3 && "pl-6",
                    heading.level === 2 && "pl-4",
                    activeId === heading.id
                      ? "border-foreground text-foreground font-medium"
                      : "border-transparent text-muted-foreground hover:text-foreground hover:border-border",
                  )}
                >
                  <span className="block truncate">{heading.text}</span>
                </Link>
              ))}
            </nav>

            {headings.length === 0 && (
              <p className="text-xs text-muted-foreground italic pl-4">
                No sections available
              </p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}