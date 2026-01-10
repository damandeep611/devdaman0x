"use client";

import React from "react";
import { MDXContent } from "@content-collections/mdx/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

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

export default function BlogPostClient({ post, code }: { post: Post; code: string }) {
  return (
    <article className="w-full min-h-screen pt-24 md:pt-32 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* Navigation */}
        <div className="mb-12">
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

        {/* Article Header */}
        <header className="space-y-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <time className="font-mono">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <div className="flex gap-2">
                {post.tags?.map((tag) => (
                  <span key={tag} className="capitalize">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-foreground leading-[1.1]">
              {post.title}
            </h1>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">
            {post.description}
          </p>
        </header>

        {/* Cover Image */}
        {post.image && (
          <div className="relative w-full aspect-video mb-16 rounded-3xl overflow-hidden border border-border/40 bg-secondary/20">
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
          className="prose prose-lg dark:prose-invert max-w-none
          prose-headings:font-serif prose-headings:font-medium prose-headings:text-foreground
          prose-h1:text-4xl prose-h2:text-3xl prose-h2:mt-12 prose-h3:text-2xl
          prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:font-light
          prose-a:text-foreground prose-a:underline prose-a:decoration-border prose-a:underline-offset-4 hover:prose-a:decoration-foreground hover:prose-a:opacity-80
          prose-blockquote:border-l-primary prose-blockquote:font-serif prose-blockquote:italic prose-blockquote:text-foreground
          prose-strong:font-medium prose-strong:text-foreground
          prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border
          prose-li:text-muted-foreground prose-li:marker:text-foreground/50
          prose-img:rounded-2xl prose-img:border prose-img:border-border/50
        "
        >
          <MDXContent code={code} />
        </div>

        {/* Footer / Author */}
        <div className="mt-20 pt-8 border-t border-border flex justify-between items-center">
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
  );
}