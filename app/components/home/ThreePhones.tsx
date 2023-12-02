"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

export const SlideUpWhenVisible = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section ref={ref}>
      <motion.div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
};

interface Image {
  src: string;
  mt: number;
}
const ThreePhones = ({ images }: { images: Image[] }) => {
  return (
    <div className="grid grid-cols-3 gap-4 xl:gap-8">
      {images.map((image, i) => (
        <div
          key={image.src}
          style={{
            marginTop: image.mt,
          }}
        >
          <SlideUpWhenVisible>
            <Image className={clsx(`h-auto max-h-[500px] w-full  object-contain`, i === 0 && "rotate-12", i === 2 && "-rotate-12")} alt="A preview of the performance stats in my technical blog" title="A preview of the performance stats in my technical blog" src={image.src} width={250} height={500} />
          </SlideUpWhenVisible>
        </div>
      ))}
    </div>
  );
};

export default ThreePhones;
