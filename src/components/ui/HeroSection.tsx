"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, Youtube } from "lucide-react";
import PhotoGallery from "./PhotoGallery";

export default function HeroSection() {
  return (
    <section className="w-full mx-auto min-h-screen flex flex-col pt-24 pb-10 px-4">
      {/* Profile Card Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto mb-24"
      >
        {/* Header: Avatar & Info */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
          <div className="flex flex-row items-center gap-6">
            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-border shadow-sm">
                <img
                  src="/download.png"
                  alt="Daman's Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand-green rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Daman
              </h1>
              <span className="text-lg text-muted-foreground font-(family-name:--font-geist-caveat) font-medium">
                Designer & Developer
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-b border-dashed border-border mb-8" />

        {/* Bio Section */}
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            <span className="text-foreground font-semibold">
              Hey! I&apos;m Daman
            </span>
            , a full-stack developer and designer who loves turning abstract
            ideas into functional, beautiful products.
          </p>
          <p>
            I&apos;m flexible working with various tech stacks, & expertise in
            <span className="text-foreground font-medium"> Next.js</span>,
            <span className="text-foreground font-medium"> TypeScript</span>,
            and
            <span className="text-foreground font-medium"> Golang</span>
          </p>
        </div>

        {/* Action & Socials */}
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6 mt-10">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground border border-border rounded-lg font-medium hover:bg-secondary/80 transition-colors shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Send an email</span>
          </a>

          <div className="flex flex-wrap gap-8 items-center">
            <SocialLink
              href="#"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
            <SocialLink
              href="#"
              icon={<Twitter className="w-5 h-5" />}
              label="Twitter"
            />
            <SocialLink
              href="#"
              icon={<Youtube className="w-5 h-5" />}
              label="YouTube"
            />
          </div>
        </div>
      </motion.div>

      {/* Visual Diary / PhotoGallery Section */}
      <div className="w-full mx-auto">
        <PhotoGallery />
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
    >
      <span className="group-hover:scale-110 transition-transform duration-200">
        {icon}
      </span>
      <span className="font-medium">{label}</span>
    </a>
  );
}