"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-20 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-6">
            <div className="text-3xl font-bold tracking-tighter text-foreground">
              Daman<span className="text-brand-green">.</span>
            </div>
            <div className="flex gap-10">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Contact
                </p>
                <a
                  href="mailto:hello@daman.io"
                  className="text-sm font-semibold text-muted-foreground hover:text-brand-green transition-colors"
                >
                  hello@daman.io
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Social
                </p>
                <div className="flex gap-4">
                  {["X", "GitHub", "LinkedIn"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-sm font-semibold text-muted-foreground hover:text-brand-green transition-colors"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-green">
                Available for Freelance
              </span>
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
              &copy; {new Date().getFullYear()} Handcrafted with care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
