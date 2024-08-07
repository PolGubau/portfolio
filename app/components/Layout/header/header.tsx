import Image from "next/image";
import React from "react";
import { metadata } from "lib/constants";
import MainSocials from "app/components/Social/main-socials";
import Avatar from "../avatar/avatar";
  
function Header() {
  return (
    <header className="flex flex-col md:flex-row gap-8 justify-between items-center mb-16">
      <Image
        src="/images/me.png"
        className=" rounded-3xl flex md:hidden bg-primary   "
        alt="Pol Gubau Amores' profile image"
        title="Pol Gubau Amores' profile image"
        width={150}
        height={150}
      />{" "}
      <div className="flex flex-col gap-4 text-center md:text-start ">
        <h1 className="font-medium md:font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter balance">
          {metadata.longName}
        </h1>
        <h2 className="text-xl md:text-2xl opacity-75 balance">
          {metadata.slogan}
        </h2>
        <MainSocials />
      </div>
      <Avatar />
    </header>
  );
}

export default Header;
