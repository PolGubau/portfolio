"use client";
import { motion, useScroll } from "framer-motion";
import "./ScrollLine.css";
import { useMemo } from "react";

export function ScrollLine() {
  const { scrollYProgress } = useScroll();

  return useMemo(
    () => (
      <motion.div
        className="bg-primary scrollLine sticky top-0 h-1 w-full z-50 transform-gpu rounded-r-xl"
        style={{ scaleX: scrollYProgress }}
      />
    ),
    [scrollYProgress],
  );
}
