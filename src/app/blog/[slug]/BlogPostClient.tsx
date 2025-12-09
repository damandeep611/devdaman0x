"use client";

import React from "react";
import { MDXContent } from "@content-collections/mdx/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Define the shape of the post prop
interface Post {
  title: string;
  description: string;
  date: Date; // or string if serialized
  author?: string;
  tags?: string[];
  image?: string;
  mdx: string; // The code string for MDXContent
}

export default function BlogPostClient({ post, code }: { post: Post; code: string }) {
  return (
    <article className="w-full min-h-screen pt-32 pb-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        {/* Back Link */}
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to writing</span>
        </Link>

        {/* Header */}
        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-y border-border py-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            {post.author && (
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
            )}
             <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {post.image && (
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-secondary border border-border">
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
        <div className="prose prose-lg dark:prose-invert prose-headings:font-medium prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-code:bg-secondary/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none max-w-none">
          <MDXContent code={code} />
        </div>
      </motion.div>
    </article>
  );
}
