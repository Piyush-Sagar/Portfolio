"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";

const themes = ["light", "dark", "system"] as const;
const themeLabels: Record<typeof themes[number], string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};
const themeIcons: Record<typeof themes[number], React.ReactNode> = {
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
  system: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 002-2H7a2 2 0 002 2z" />
    </svg>
  ),
};

function ThemeToggleInner() {
  const { theme, setTheme } = useTheme();

  const currentIndex = themes.indexOf(theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  return (
    <motion.button
      onClick={() => setTheme(nextTheme)}
      className="relative p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch theme (current: ${themeLabels[theme]})`}
    >
      <span className="sr-only">{themeLabels[theme]}</span>
      <motion.div
        key={theme}
        initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotate: 90 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {themeIcons[theme]}
      </motion.div>
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-neutral-500 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {themeLabels[theme]}
      </motion.div>
    </motion.button>
  );
}

function ThemeToggleSkeleton() {
  return (
    <div className="relative p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 w-10 h-10 flex" aria-hidden="true" suppressHydrationWarning />
  );
}

export default function ThemeToggle() {
  // Use lazy initialization to avoid hydration mismatch
  // Server renders skeleton, client renders actual component
  // The ThemeProvider applies theme classes before hydration completes
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? <ThemeToggleSkeleton /> : <ThemeToggleInner />}
    </div>
  );
}