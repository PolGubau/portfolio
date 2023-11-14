import Image from "next/image";
import React from "react";

const gradients = [
  "linear-gradient(90deg, #a5c624 0%, #c1c630 100%)",
  "linear-gradient(90deg, #ff4 0%, #cc0 100%)",
  "linear-gradient(90deg, #bb0 0%, #ff0 100%)",
];

const randomGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row gap-8 justify-between items-center mb-16">
      <Image
        style={{
          backgroundImage: randomGradient(),
        }}
        src="/images/me.png"
        className=" rounded-3xl flex md:hidden"
        alt="Pol Gubau Amores' profile image"
        width={150}
        height={150}
      />
      <hgroup className="flex flex-col gap-4 text-center md:text-start ">
        <h1 className="font-medium md:font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tighter balance">
          Pol Gubau Amores
        </h1>
        <h2 className="text-xl md:text-2xl opacity-75 balance">
          Frontend Developer and UX designer.
        </h2>
      </hgroup>

      <Image
        src="/images/me.png"
        style={{
          backgroundImage: randomGradient(),
        }}
        className="rounded-full hidden md:flex  "
        alt="Pol Gubau Amores' profile image"
        width={150}
        height={150}
      />
    </header>
  );
};

export default Header;
