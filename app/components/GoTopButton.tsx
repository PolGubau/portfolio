"use client";

import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import React from "react";

const GoTopButton = () => {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = React.useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="fixed bottom-3 right-3 z-50">
      <AnimatePresence mode="wait">
        {scroll > 400 && (
          <motion.button
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            style={{
              zIndex: 99999,
            }}
            className="aspect-square shadow-xl p-3 rounded-2xl flex gap-4 items-center justify-center bg-primary text-dark/90 hover:bg-primary/90 transition-all "
          >
            <svg
              className="w-4 h-4"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GoTopButton;
