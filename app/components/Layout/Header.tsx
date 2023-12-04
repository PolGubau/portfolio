import Image from "next/image";
import React from "react";
import { largeProfileAvatar } from "./profileImageData";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row gap-8 justify-between items-center mb-16">
      <Image src="/images/me.png" className=" rounded-3xl flex md:hidden bg-yellow-200 dark:bg-primary   " alt="Pol Gubau Amores' profile image" title="Pol Gubau Amores' profile image" width={150} height={150} />
      <hgroup className="flex flex-col gap-4 text-center md:text-start ">
        <h1 className="font-medium md:font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter balance">Pol Gubau Amores</h1>
        <h2 className="text-xl md:text-2xl opacity-75 balance">Frontend Developer and UX designer.</h2>
      </hgroup>

      <Image placeholder={largeProfileAvatar} src="/images/me.png" className="shadow-xl rounded-full hidden md:flex  bg-yellow-200 dark:bg-primary " alt="Pol Gubau Amores' profile image" width={150} height={150} title="Pol Gubau Amores' profile image" />
    </header>
  );
};

export default Header;
