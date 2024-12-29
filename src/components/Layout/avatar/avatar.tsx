"use client";
import Image from "next/image";
import { largeProfileAvatar } from "../largeProfileAvatar";

export function Avatar() {
  return (
    <div className=" rounded-full bg-primary">
      <Image
        placeholder={largeProfileAvatar}
        src="/media/me.png"
        className="z-30 hidden rounded-full shadow-xl md:flex"
        alt="Pol Gubau Amores' profile image"
        width={150}
        height={150}
        title="Pol Gubau Amores' profile image"
      />
    </div>
  );
}
