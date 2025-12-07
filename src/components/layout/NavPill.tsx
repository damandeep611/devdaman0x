"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail,X, Send } from 'lucide-react';
import Image from 'next/image';
import { ModeToggle } from '../theme/mode-toggle';

export type NavItem = 'Home' | 'Blog' | 'Work';

const tabs: NavItem[] = ['Home', 'Blog', 'Work'];

export default function NavPill()  {
  const [activeTab, setActiveTab] = useState<NavItem>('Home');
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="fixed top-6 sm:top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3 w-[calc(100%-24px)] sm:w-auto max-w-lg">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center justify-between sm:justify-start w-full sm:w-auto gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-full border border-neutral-800 bg-[#111111]/80 backdrop-blur-md shadow-2xl shadow-black/50"
      >
        {/* Profile Section */}
        <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2 pr-1 sm:pr-4 cursor-pointer group shrink-0">
          <div className="relative overflow-hidden rounded-full w-8 h-8 sm:w-9 sm:h-9 border border-neutral-700">
            <Image  src="/pfp-main.png" alt='navpill-profile-image' width={50} height={50} className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'/>
          </div>
          <span className="hidden sm:block text-sm font-semibold text-neutral-200 tracking-tight group-hover:text-white transition-colors">
            devDaman
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-5 sm:h-6 bg-neutral-800 mx-0 sm:mx-1 shrink-0" />

        {/* Action Button: Mail */}
        <motion.button
          onClick={() => setIsContactOpen(!isContactOpen)}
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
          whileTap={{ scale: 0.95 }}
          className={`p-2 sm:p-2.5 rounded-full transition-colors relative shrink-0 ${
            isContactOpen ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:text-white'
          }`}
          aria-label="Contact"
        >
          <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
          {!isContactOpen && (
            <span className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full border-2 border-[#111111]" />
          )}
        </motion.button>

        {/* Navigation Tabs */}
        <div className="flex items-center bg-transparent rounded-full px-0 sm:px-1 shrink-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab ? '' : 'hover:text-neutral-200'
              } relative px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-medium transition-colors duration-300 focus:outline-none`}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-neutral-800 rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={`relative z-10 ${activeTab === tab ? 'text-white' : 'text-neutral-400'}`}>
                {tab}
              </span>
            </button>
          ))}
        </div>

        {/* Theme Toggle */}
        <ModeToggle/>
      </motion.nav>

      {/* Contact Card */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20, scale: 0.95, filter: 'blur(4px)' }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.35 }}
            className="w-full sm:w-96 bg-[#111111]/90 backdrop-blur-2xl border border-neutral-800 rounded-3xl shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <div className="p-5 sm:p-6">
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div>
                  <h3 className="text-white font-semibold text-base sm:text-lg">Contact</h3>
                  <p className="text-neutral-500 text-[10px] sm:text-xs mt-0.5">
                    Let&apos;s discuss your next project
                  </p>
                </div>
                <button
                  onClick={() => setIsContactOpen(false)}
                  className="p-2 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
                >
                  <X size={16} className="sm:w-[18px] sm:h-[18px]" />
                </button>
              </div>

              <form className="space-y-3 sm:space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[10px] sm:text-xs font-medium text-neutral-400 ml-1">
                    Email
                  </label>
                  <input
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-700"
                    placeholder="john@example.com"
                    type="email"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label className="text-[10px] sm:text-xs font-medium text-neutral-400 ml-1">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-neutral-600 transition-colors placeholder:text-neutral-700 resize-none"
                    rows={3}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button className="w-full bg-white text-black font-semibold rounded-xl py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group">
                  Send Message
                  <Send
                    size={12}
                    className="sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform"
                  />
                </button>
              </form>
            </div>

            {/* Status Footer */}
            <div className="bg-neutral-900/30 border-t border-neutral-800/50 px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-[10px] sm:text-xs text-green-500 font-medium">
                  Available for work
                </span>
              </div>
              <span className="text-[10px] text-neutral-600 font-mono">
                Reply time: ~2h
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};