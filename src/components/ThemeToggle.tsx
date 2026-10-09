"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const { setTheme, resolvedTheme } = useTheme();
  const dark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      className="icon-button theme-toggle"
      disabled={!mounted}
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
      title={`Switch to ${dark ? "light" : "dark"} theme`}
    >
      {dark ? (
        <SunIcon size={20} aria-hidden="true" />
      ) : (
        <MoonIcon size={20} aria-hidden="true" />
      )}
    </button>
  );
}
