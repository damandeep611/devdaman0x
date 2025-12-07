"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-6 w-6 bg-primary rounded-md" />
              <span className="font-bold text-lg text-foreground tracking-tight">
                devDaman
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Crafting digital experiences with a focus on speed, accessibility, and clean design.
            </p>
          </div>

          {/* Links Column */}
          <div className="flex flex-col md:items-end gap-4">
             <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
               <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
               <Link href="/work" className="hover:text-foreground transition-colors">Work</Link>
               <Link href="/blogpage" className="hover:text-foreground transition-colors">Writing</Link>
             </nav>
             
             <div className="flex gap-4 mt-2">
               <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                 <Twitter size={20} />
               </a>
               <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
                 <Github size={20} />
               </a>
               <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                 <Linkedin size={20} />
               </a>
               <a href="mailto:hello@example.com" aria-label="Email" className="text-muted-foreground hover:text-foreground transition-colors">
                 <Mail size={20} />
               </a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-muted-foreground font-mono">
            © {currentYear} Daman. All rights reserved.
          </span>
          <div className="flex items-center gap-2">
             <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
             <span className="text-xs text-muted-foreground font-medium">All systems normal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
