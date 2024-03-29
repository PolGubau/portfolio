"use client";
import React, { useRef } from "react";
import Image from "next/image";
import clsx from "clsx";

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
          <Image
            className={clsx(
              `h-auto max-h-[500px] w-full object-contain`,
              i === 0 && "show-first-phone",
              i === 1 && "show-second-phone",
              i === 2 && "show-third-phone"
            )}
            alt="A preview of the performance stats in my technical blog"
            title="A preview of the performance stats in my technical blog"
            src={image.src}
            width={250}
            height={500}
          />
        </div>
      ))}
    </div>
  );
};

export default ThreePhones;
