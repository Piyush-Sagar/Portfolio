"use client";

import { createContext, useContext, useEffect, useLayoutEffect, useState, ReactNode, useCallback, useRef, useMemo } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "system";
  return (localStorage.getItem("theme") as Theme | null) ?? "system";
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme: Theme, resolvedTheme: "light" | "dark") {
  if (typeof window === "undefined") return;
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolvedTheme);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => getInitialTheme());
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const initial = getInitialTheme();
    return initial === "system" ? getSystemTheme() : initial;
  });
  const mediaQueryRef = useRef<MediaQueryList | null>(null);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    const resolved = newTheme === "system" ? getSystemTheme() : newTheme;
    setResolvedTheme(resolved);
    applyTheme(newTheme, resolved);
    localStorage.setItem("theme", newTheme);
  }, []);

  // Apply theme before paint to avoid flash
  useLayoutEffect(() => {
    applyTheme(theme, resolvedTheme);
  }, [theme, resolvedTheme]);

  // Listen for system theme changes when system is selected
  useEffect(() => {
    if (theme !== "system") {
      if (mediaQueryRef.current) {
        mediaQueryRef.current.removeEventListener("change", handleSystemChange);
        mediaQueryRef.current = null;
      }
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQueryRef.current = mediaQuery;

    function handleSystemChange() {
      const newResolved = getSystemTheme();
      setResolvedTheme(newResolved);
      applyTheme("system", newResolved);
    }

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [theme]);

  const contextValue = useMemo(() => ({
    theme,
    resolvedTheme,
    setTheme,
  }), [theme, resolvedTheme, setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}