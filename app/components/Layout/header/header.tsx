import Image from "next/image";
import { AnimatedHeading } from "app/components/animated-heading";
import MainSocials from "app/components/Social/main-socials";
import { metadata } from "lib/constants";
import Avatar from "../avatar/avatar";
   
function Header() {
  return (
    <header className="flex flex-col md:flex-row gap-8 justify-between items-center mb-8">
     <Image
            src="/media/me.png"
            className=" rounded-3xl flex md:hidden bg-primary  justify-center object-cover object-bottom"
            alt="Pol Gubau Amores' profile image"
            title="Pol Gubau Amores' profile image"
            width={150}
            height={150}
        />
      <div className="flex flex-col max-md:gap-6 md:gap-3">
        <AnimatedHeading className="text-center justify-start flex flex-col gap-2">
          <h1 className="overflow-hidden w-fit text-3xl sm:text-4xl md:text-5xl leading-[.85]">
            <span className="block">{metadata.longName}</span>
          </h1>
          <h2 className="overflow-hidden w-fit md:pb-2 opacity-75">
            <span className="block text-md sm:text-xl md:text-2xl  leading-[.85]">{metadata.slogan}</span>
          </h2>
          </AnimatedHeading>
        
         <MainSocials />
      </div>
      <Avatar />
    </header>
  );
}

export default Header;
