"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";

const themes = ["light", "dark", "system"] as const;
const themeLabels: Record<typeof themes[number], string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};
const themeDescriptions: Record<typeof themes[number], string> = {
  light: "Always use light mode",
  dark: "Always use dark mode",
  system: "Match system preference",
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

function ThemeDropdown({ isOpen, onClose, theme, setTheme, resolvedTheme }: {
  isOpen: boolean;
  onClose: () => void;
  theme: typeof themes[number];
  setTheme: (t: typeof themes[number]) => void;
  resolvedTheme: "light" | "dark";
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const activeIndexRef = useRef(themes.indexOf(theme));

  useEffect(() => {
    activeIndexRef.current = themes.indexOf(theme);
    const item = listRef.current?.querySelector(`[data-index="${activeIndexRef.current}"]`);
    item?.scrollIntoView({ block: "nearest" });
  }, [theme]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const items = listRef.current?.querySelectorAll<HTMLButtonElement>('[role="option"]');
    if (!items?.length) return;

    const currentIndex = activeIndexRef.current;
    let newIndex = currentIndex;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        newIndex = (currentIndex + 1) % items.length;
        break;
      case "ArrowUp":
        e.preventDefault();
        newIndex = (currentIndex - 1 + items.length) % items.length;
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = items.length - 1;
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        items[currentIndex]?.click();
        break;
      case "Escape":
        e.preventDefault();
        onClose();
        return;
      case "Tab":
        onClose();
        return;
      default:
        return;
    }

    activeIndexRef.current = newIndex;
    items[newIndex]?.focus();
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            className="absolute right-0 top-full mt-2 z-50 w-56 origin-top-right"
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            role="menu"
            onKeyDown={handleKeyDown}
          >
            <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-lg overflow-hidden p-1">
              <ul ref={listRef} className="space-y-0.5" role="listbox" aria-label="Select theme">
                {themes.map((t, index) => (
                  <li key={t}>
                    <motion.button
                      data-index={index}
                      onClick={() => { setTheme(t); onClose(); }}
                      role="option"
                      aria-selected={theme === t}
                      aria-label={`${themeLabels[t]}, ${themeDescriptions[t]}`}
                      className={`relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors group ${
                        theme === t
                          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.03 }}
                        className="flex-shrink-0"
                      >
                        {themeIcons[t]}
                      </motion.div>
                      <div className="flex-1 text-sm font-medium">
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 }}
                        >
                          {themeLabels[t]}
                        </motion.span>
                        <motion.span
                          className="block text-xs font-normal opacity-70 mt-0.5"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.03 + 0.02 }}
                        >
                          {themeDescriptions[t]}
                        </motion.span>
                      </div>
                      <AnimatePresence mode="wait">
                        {theme === t && (
                          <motion.svg
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 45 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className="w-5 h-5 flex-shrink-0 text-blue-500 dark:text-blue-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </motion.svg>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </li>
                ))}
              </ul>
            </div>
            <motion.div
              className="absolute bottom-full right-2 w-3 h-3 bg-white dark:bg-neutral-900 rotate-45 border-r border-b border-neutral-200 dark:border-neutral-800"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setTimeout(() => buttonRef.current?.focus(), 0);
      }
      return next;
    });
  }, []);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (buttonRef.current?.contains(e.target as Node)) return;
      if (dropdownRef.current?.contains(e.target as Node)) return;
      setIsOpen(false);
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        ref={buttonRef}
        onClick={toggleDropdown}
        className="relative p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`Theme: ${themeLabels[theme as typeof themes[number]]}. Click to change.`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        type="button"
      >
        <span className="sr-only">{themeLabels[theme as typeof themes[number]]}</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={theme}
            initial={{ scale: 0.8, opacity: 0, rotate: -90 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0, rotate: 90 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {themeIcons[theme as typeof themes[number]]}
            <motion.span
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-medium text-neutral-500 dark:text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {themeLabels[theme as typeof themes[number]]}
              {theme === "system" && resolvedTheme && ` (${themeLabels[resolvedTheme as "light" | "dark"]})`}
            </motion.span>
          </motion.div>
        </AnimatePresence>
        <motion.svg
          className="ml-1 w-3.5 h-3.5 opacity-60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>
      <ThemeDropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        theme={theme as typeof themes[number]}
        setTheme={setTheme}
        resolvedTheme={resolvedTheme as "light" | "dark"}
      />
    </div>
  );
}