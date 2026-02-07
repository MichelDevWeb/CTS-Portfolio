"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BODY_CURSOR_CLASS = "has-custom-cursor";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button"
      ) {
        setIsPointer(true);
      }
    };
    const handleOut = () => setIsPointer(false);
    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    if (window.matchMedia("(min-width: 768px)").matches && !("ontouchstart" in window)) {
      document.body.classList.add(BODY_CURSOR_CLASS);
    }
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.body.classList.remove(BODY_CURSOR_CLASS);
    };
  }, []);

  if (!mounted || typeof window === "undefined") return null;
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{ x: pos.x, y: pos.y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.span
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        animate={{
          width: isPointer ? 32 : 12,
          height: isPointer ? 32 : 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </motion.div>
  );
}
