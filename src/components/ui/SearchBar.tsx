"use client"


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Command } from 'lucide-react';

interface SearchBarProps {
  onFocusChange: (isFocused: boolean) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onFocusChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocusChange(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onFocusChange(false);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.div
        animate={{
          width: isFocused ? 'min(640px, 90vw)' : 'min(320px, 60vw)',
          boxShadow: isFocused ? '0 20px 40px rgba(0,0,0,0.08)' : '0 10px 20px rgba(0,0,0,0.04)'
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`relative flex items-center bg-white border rounded-full h-12 transition-colors duration-300 ${isFocused ? 'border-gray-400' : 'border-gray-200'}`}
      >
        <div className="pl-4 pr-3 text-gray-400">
          <Search size={18} />
        </div>
        
        <input
          type="text"
          placeholder="find anything..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="flex-1 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-300 placeholder:font-light"
        />

        <AnimatePresence mode="popLayout">
          {!isFocused && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="pr-4 flex items-center gap-1 text-gray-300"
            >
              <Command size={12} />
              <span className="text-xs font-medium">K</span>
            </motion.div>
          )}
        </AnimatePresence>

        {isFocused && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="pr-3"
          >
             <button className="bg-gray-900 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-tighter hover:bg-black transition-colors">
               Search
             </button>
          </motion.div>
        )}
      </motion.div>
      
      <motion.p 
        animate={{ opacity: isFocused ? 1 : 0, y: isFocused ? 0 : 5 }}
        className="text-[10px] text-gray-400 mt-3 uppercase tracking-widest font-medium pointer-events-none"
      >
        search projects, journal entries, or thoughts
      </motion.p>
    </div>
  );
};

export default SearchBar;
