"use client";

import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="font-medium text-neutral-900 dark:text-neutral-100">
          Piyush Sagar
        </h1>
        <nav className="flex items-center gap-6">
          <ThemeToggle />
          <div className="hidden md:flex gap-8">
            <a
              href="#about"
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              Skills
            </a>
            <a
              href="#links"
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              Projects
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}