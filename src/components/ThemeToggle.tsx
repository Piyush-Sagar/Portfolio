"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

const themeLabels = {
  light: "Light",
  dark: "Dark",
} as const;

const themeIcons: Record<keyof typeof themeLabels, React.ReactNode> = {
  light: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  dark: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  ),
};

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="relative p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 w-9 h-9"
        aria-label="Toggle theme"
      />
    );
  }

  // The system theme resolves to light or dark, so the toggle only needs two states.
  const currentTheme: keyof typeof themeLabels = resolvedTheme === "dark" ? "dark" : "light";
  const nextTheme: keyof typeof themeLabels = currentTheme === "dark" ? "light" : "dark";

  return (
    <motion.button
      onClick={() => setTheme(nextTheme)}
      className="group relative p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center w-9 h-9"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Theme: ${themeLabels[currentTheme]}. Click to switch to ${themeLabels[nextTheme]}.`}
    >
      <span className="sr-only">{themeLabels[currentTheme]}</span>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTheme}
          initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.8, opacity: 0, rotate: 90 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {themeIcons[currentTheme]}
        </motion.div>
      </AnimatePresence>
      <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 dark:bg-neutral-100 dark:text-neutral-900">
        {themeLabels[currentTheme]}
      </span>
    </motion.button>
  );
}
