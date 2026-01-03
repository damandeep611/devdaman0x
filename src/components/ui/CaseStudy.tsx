"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, Sun, Flower, Command, 
 MessageCircle, Globe,  Music, BarChart3, 
  Cpu
} from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <div className="flex pt-8 flex-col gap-12 text-foreground">
      {/* Header with signature typography style */}
      <div className="flex flex-col gap-2 max-w-3xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif-italic leading-tight text-foreground">
          Hello, we should design <br className="hidden md:block" />
          <span className="inline-block px-2.5 py-0.5 mx-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-sans text-[0.8em] font-medium rounded-md -rotate-1 translate-y-0.5">
            software paradigms
          </span> 
          {" "}that embody <br className="hidden md:block" />
          wisdom <Sun size={24} className="inline-block mx-1 text-foreground" strokeWidth={1.5} /> and feel 
          {" "}<span className="italic">natural</span> <Flower size={24} className="inline-block mx-1 text-foreground" strokeWidth={1.5} />
        </h2>
        
        <p className="text-[11px] md:text-xs font-light text-muted-foreground tracking-tight max-w-lg">
          React ecosystem enjoyer — focusing on Next.js & Tanstack. Backend flexible, specializing in PostgreSQL and distributed systems with Golang. My content goes deeper than surface-level integrations, focusing on core fundamentals.
        </p>
      </div>

      {/* Asymmetric Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Project 1: DotOS (Full Width Highlight) */}
        <div className="lg:col-span-12">
          <ProjectCard 
            title="DotOS"
            tagline="A context-aware OS for a more personal computer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 md:p-8">
              {/* Note UI Mockup */}
              <div className="lg:col-span-5 bg-card rounded-3xl border border-border shadow-sm flex flex-col overflow-hidden min-h-[400px]">
                 <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                        <span className="text-[10px] text-primary-foreground font-bold">N</span>
                      </div>
                      <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">DotOS Notes</span>
                    </div>
                 </div>
                 <div className="p-8 flex flex-col gap-4">
                    <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="Icon" className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-semibold text-card-foreground tracking-tight">DotOS Notes</h4>
                    <div className="h-[1px] w-full bg-border my-2" />
                    <div className="space-y-3">
                      <p className="text-sm font-semibold text-foreground">A pattern</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        The number of things computers can do is growing, and its rate of growth is accelerating thanks to broad efforts to make software development more accessible.
                      </p>
                    </div>
                 </div>
                 <div className="mt-auto p-4 bg-muted/50 flex justify-between items-center text-[10px] text-muted-foreground font-medium">
                    <span>Marco&apos;s Workspace</span>
                    <div className="flex items-center gap-1">
                      <span>Release</span>
                      <div className="flex items-center gap-0.5 px-1 py-0.5 bg-muted rounded border border-border text-muted-foreground">
                        <Command size={8} />
                        <span>K</span>
                      </div>
                      <span>to open</span>
                    </div>
                 </div>
              </div>
              
              {/* Feed UI Mockup */}
              <div className="lg:col-span-7 bg-card/40 rounded-3xl border border-card/60 backdrop-blur-sm p-6 flex flex-col gap-6">
                <div className="flex items-center gap-4 border-b border-border pb-4">
                   <FeedTab label="Feed" active color="bg-blue-600 dark:bg-blue-500" />
                   <FeedTab label="Paste" />
                   <FeedTab label="Actions" />
                </div>
                <div className="space-y-2">
                   <div className="p-3 bg-indigo-50/80 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl flex items-center gap-4">
                      <div className="w-10 h-10 bg-card rounded-xl shadow-sm flex items-center justify-center relative">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Icon" className="w-6 h-6" />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-card rounded-md shadow-sm border border-border flex items-center justify-center">
                          <span className="text-[8px] font-bold">N</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-foreground">DotOS Notes</span>
                        <span className="text-[10px] text-muted-foreground">https://notion.so/dot-os</span>
                      </div>
                   </div>
                   <FeedItem avatar="https://i.pravatar.cc/150?u=amari" title="Amari Jones" desc="did you read that notion doc?" icon={<MessageCircle size={10} className="text-primary-foreground" />} iconColor="bg-emerald-400" status />
                   <FeedItem title="The Browser Company" desc="thebrowser.company" icon={<Globe size={10} className="text-indigo-600 dark:text-indigo-400" />} iconColor="bg-card border border-border" />
                </div>
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 2: Pearl (Tall/Mobile) */}
        <div className="lg:col-span-5">
          <ProjectCard 
            title="Pearl"
            tagline="AI-assisted journaling"
            className="h-full"
          >
            <div className="p-8 flex flex-col items-center justify-center h-full bg-secondary/30 min-h-[450px]">
              <div className="w-[200px] h-[400px] bg-card rounded-[2.5rem] shadow-2xl border-8 border-card flex flex-col overflow-hidden relative">
                <div className="h-6 w-full flex justify-center items-center">
                  <div className="w-10 h-1 bg-muted rounded-full" />
                </div>
                <div className="p-4 flex flex-col gap-4">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-2xl text-blue-500 font-medium">40%</span>
                      <span className="text-[6px] font-bold text-muted-foreground tracking-widest">SATISFACTION</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl text-indigo-400 font-medium">18%</span>
                      <span className="text-[6px] font-bold text-muted-foreground tracking-widest">JOY</span>
                    </div>
                  </div>
                  <div className="mt-8 p-3 bg-indigo-50/50 dark:bg-indigo-900/30 rounded-xl border border-indigo-100 dark:border-indigo-800 italic text-[10px] text-muted-foreground leading-relaxed">
                    Today felt like the bridge between where I am and where I want to be...
                  </div>
                </div>
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 3: Flux Admin (Dashboard) */}
        <div className="lg:col-span-7">
          <ProjectCard 
            title="Flux Admin"
            tagline="Real-time data orchestration"
          >
            <div className="p-8 bg-card/50 backdrop-blur-xl h-full min-h-[450px] flex flex-col gap-6">
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="bg-card p-4 rounded-2xl border border-border shadow-sm">
                    <div className="h-2 w-12 bg-muted rounded-full mb-3" />
                    <div className="h-6 w-20 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg" />
                  </div>
                ))}
              </div>
              <div className="flex-1 bg-card rounded-3xl border border-border p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Nodes</span>
                  <BarChart3 size={14} className="text-indigo-400" />
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-lg bg-muted" />
                       <div className="flex-1 h-2 bg-muted rounded-full" />
                       <div className="w-12 h-2 bg-indigo-100 dark:bg-indigo-900/40 rounded-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 4: TaskFlow (Compact/Systems) */}
        <div className="lg:col-span-6">
          <ProjectCard 
            title="TaskFlow"
            tagline="High-throughput Go engine"
          >
            <div className="p-8 bg-card dark:bg-card h-full min-h-[350px] flex flex-col justify-between hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-start">
                <Cpu size={32} className="text-emerald-400" strokeWidth={1} />
                <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                  <span className="text-[10px] text-emerald-400 font-mono tracking-tighter">exactly-once delivery</span>
                </div>
              </div>
              
              <div className="flex gap-1 h-12 items-end">
                {[20, 50, 35, 80, 45, 90, 60, 75, 40].map((h, i) => (
                  <div key={i} className="flex-1 bg-emerald-500/20 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Project 5: Aura (Compact/Audio) */}
        <div className="lg:col-span-6">
          <ProjectCard 
            title="Aura"
            tagline="Context-aware audio playback"
          >
            <div className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 h-full min-h-[350px] flex items-center justify-center overflow-hidden relative">
               <div className="w-48 h-48 bg-card/80 rounded-full border border-border/50 backdrop-blur-xl flex items-center justify-center shadow-2xl relative z-10">
                  <div className="w-40 h-40 bg-card rounded-full flex items-center justify-center shadow-inner">
                    <Music size={40} className="text-indigo-400" strokeWidth={1} />
                  </div>
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-indigo-200/50 dark:border-indigo-700/50 rounded-full"
                  />
               </div>
               <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => (
                    <div key={i} className="w-1 h-4 bg-indigo-200 dark:bg-indigo-800 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
               </div>
            </div>
          </ProjectCard>
        </div>

      </div>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  tagline: string;
  children: React.ReactNode;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, tagline, children, className }) => (
  <div className={`w-full bg-secondary rounded-[3rem] border border-border overflow-hidden group flex flex-col ${className}`}>
    <div className="p-8 md:p-10 flex items-start justify-between">
      <div className="flex flex-col gap-1">
        <h3 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">{title}</h3>
        <p className="text-lg md:text-xl font-light text-muted-foreground">{tagline}</p>
      </div>
      <div className="w-16 h-16 bg-card rounded-full border border-border shadow-sm flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:scale-105 transition-all cursor-pointer">
        <ArrowUpRight size={24} strokeWidth={1.5} />
      </div>
    </div>
    <div className="border-t border-border flex-1">
      {children}
    </div>
  </div>
);

const FeedTab: React.FC<{ label: string; active?: boolean; color?: string }> = ({ label, active, color }) => (
  <div className="flex items-center gap-2 cursor-pointer group">
    <div className={`w-2 h-2 rounded-full ${active ? color : 'bg-muted'} group-hover:scale-125 transition-transform`} />
    <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? 'text-foreground' : 'text-muted-foreground'}`}>{label}</span>
  </div>
);

const FeedItem: React.FC<{ avatar?: string; title: string; desc: string; icon: React.ReactNode; iconColor: string; status?: boolean }> = ({ avatar, title, desc, icon, iconColor, status }) => (
  <div className="p-3 hover:bg-muted/50 rounded-2xl transition-colors flex items-center gap-4 cursor-pointer">
    <div className="relative">
      {avatar ? (
        <img src={avatar} alt={title} className="w-10 h-10 rounded-full border border-border shadow-sm object-cover" />
      ) : (
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm ${iconColor}`}>
          {icon}
        </div>
      )}
      {status && <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-1.5 h-1.5 bg-red-500 rounded-full" />}
      {avatar && (
        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-md shadow-sm border border-card flex items-center justify-center ${iconColor}`}>
          {icon}
        </div>
      )}
    </div>
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-foreground">{title}</span>
      <span className="text-[10px] text-muted-foreground">{desc}</span>
    </div>
  </div>
);

export default CaseStudy;
