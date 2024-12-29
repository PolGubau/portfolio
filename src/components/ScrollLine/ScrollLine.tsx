"use client";
import { motion, useScroll } from "framer-motion";
import "./ScrollLine.css";
import { useMemo } from "react";

export function ScrollLine() {
  const { scrollYProgress } = useScroll();

  return useMemo(
    () => (
      <motion.div
        className="scrollLine sticky top-0 z-50 h-1 w-full transform-gpu rounded-r-xl bg-primary"
        style={{ scaleX: scrollYProgress }}
      />
    ),
    [scrollYProgress],
  );
}
