"use client";
import Image from "next/image";
import { largeProfileAvatar } from "../profile-image-data";

function Avatar() {
  return (
    <div className=" bg-primary rounded-full">
      <Image
        placeholder={largeProfileAvatar}
        src="/media/me.png"
        className="shadow-xl rounded-full hidden md:flex z-30"
        alt="Pol Gubau Amores' profile image"
        width={150}
        height={150}
        title="Pol Gubau Amores' profile image"
      />
    </div>
  );
}

export default Avatar;
