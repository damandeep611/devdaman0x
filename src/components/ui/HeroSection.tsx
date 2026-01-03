"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Twitter, Youtube } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full mx-auto flex flex-col pt-8 md:pt-24  px-4">
      {/* Profile Card Container */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto mb-6"
      >
        {/* Header: Avatar & Info */}
        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between mb-8">
          <div className="flex flex-row items-center gap-4 md:gap-6">
            <div className="relative shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-2 border-border shadow-sm">
                <img
                  src="/download.png"
                  alt="Daman's Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-brand-green rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-pulse" />
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">
                Daman
              </h1>
              <span className="text-base md:text-lg text-muted-foreground font-(family-name:--font-geist-caveat) font-medium">
                Designer & Developer
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-b border-dashed border-border mb-6 md:mb-8" />

        {/* Bio Section */}
        <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-x-10 mt-8 md:mt-10">
          <a
            href="mailto:hello@example.com"
            className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground border border-border rounded-lg font-medium hover:bg-secondary/80 transition-colors shrink-0 w-full sm:w-auto justify-center"
          >
            <Mail className="w-4 h-4" />
            <span>Send an email</span>
          </a>

          <div className="flex flex-wrap gap-6 md:gap-8 items-center w-full sm:w-auto justify-center sm:justify-start">
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