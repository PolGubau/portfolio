"use client";
 import { gsap } from "gsap";
import { TransitionRouter } from "next-transition-router";
import { PoluiProvider, Toaster } from "pol-ui";
import React, { useRef } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
const firstLayer = useRef<HTMLDivElement | null>(null);
 
 
  return (
    <PoluiProvider>
    <TransitionRouter
      auto 
        leave={(next) => {
        const tl = gsap
          .timeline({
            onComplete: next,
          })
          .fromTo(
            firstLayer.current,
            { x: "100%" },
            {
              x: 0,
              duration: 0.4,
              // ease: "circ.inOut",
            },
          )
        return () => {
          tl.kill();
        };
      }}
      enter={(next) => {
        const tl = gsap
          .timeline()
           
          .fromTo(
            firstLayer.current,
            { x: 0 },
            {
              x: "-100%",
              duration: 0.4,
              // ease: "circ.inOut",
            },
            "<50%",
          )
          .call(next, undefined, "<50%");
        return () => {
          tl.kill();
        };
      }}
    >
      <Toaster />
      {children} 

         <div ref={firstLayer} className="fixed inset-0 z-50 translate-x-full overflow-hidden bg-secondary-50 dark:bg-secondary-900" />
    </TransitionRouter>
  </PoluiProvider>
  );
}
