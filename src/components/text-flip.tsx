"use client";

import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const variants: Variants = {
  initial: { opacity: 0, y: "-20%", filter: "blur(2px)" },
  animate: { opacity: 1, y: "0%", filter: "blur(0px)" },
  exit: {
    opacity: 0,
    y: "40%",
    filter: "blur(2px)",
    transition: { ease: "easeOut" },
  },
};

export function TextFlip({
  items,
  interval = 2.5,
  className,
}: {
  items: readonly string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % items.length),
      interval * 1000,
    );
    return () => clearInterval(timer);
  }, [interval, items.length]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={items[index]}
        className={cn("inline-block", className)}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        {items[index]}
      </motion.span>
    </AnimatePresence>
  );
}
