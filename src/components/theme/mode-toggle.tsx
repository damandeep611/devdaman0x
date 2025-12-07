"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <motion.button
      className="relative flex items-center justify-center p-2 sm:p-2.5 ml-0 sm:ml-1 rounded-full text-neutral-400 hover:text-white transition-colors shrink-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] dark:rotate-0 dark:scale-100" />
    </motion.button>
  );
}
