"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect } from "react";
import { flushSync } from "react-dom";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !document.startViewTransition) {
      setTheme(next);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => setTheme(next));
    });
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() !== "d" || e.metaKey || e.ctrlKey || e.altKey) {
        return;
      }
      if (
        e.target instanceof HTMLElement &&
        e.target.closest("input, textarea, select, [contenteditable]")
      ) {
        return;
      }
      toggle();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [toggle]);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="toggle theme"
      title="toggle theme (d)"
      onClick={toggle}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        aria-hidden="true"
        className="size-[18px]"
      >
        <circle cx="12" cy="12" r="8" />
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="currentColor"
          stroke="none"
          className="origin-center scale-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:scale-100"
        />
      </svg>
    </Button>
  );
}
