import { AnimatedHeading } from "@/components/AnimatedHeading";
import { MainSocials } from "@/components/Social/MainSocials";
import { metadata } from "@/lib/constants";
import Image from "next/image";
import { Avatar } from "../avatar/avatar";

export function Header() {
  return (
    <header className="mb-8 flex flex-col items-center justify-between gap-8 md:flex-row">
      <Image
        src="/media/me.png"
        className="flex justify-center rounded-3xl bg-primary-300 object-cover object-bottom drop-shadow-md md:hidden"
        alt="Pol Gubau Amores' profile image"
        title="Pol Gubau Amores' profile image"
        width={150}
        height={150}
      />
      <div className="flex flex-col max-md:gap-6 md:gap-3">
        <h1 className="w-fit overflow-hidden text-3xl leading-[.85] sm:text-4xl md:text-5xl ">
          <span className="block">{metadata.longName}</span>
        </h1>

        {/*  */}

        <AnimatedHeading className="flex flex-col items-center justify-center gap-2 text-center md:items-start">
          <h1 className="w-fit overflow-hidden text-3xl leading-[.85] sm:text-4xl md:text-5xl">
            <span className="block">{metadata.longName}</span>
          </h1>
          <h2 className="w-fit overflow-hidden opacity-75 md:pb-2">
            <span className="block text-md leading-[.85] sm:text-xl md:text-2xl">{metadata.slogan}</span>
          </h2>
        </AnimatedHeading>
        <MainSocials />
      </div>
      <Avatar />
    </header>
  );
}
