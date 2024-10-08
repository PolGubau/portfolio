import { AnimatedHeading } from "app/components/animated-heading";
import MainSocials from "app/components/Social/main-socials";
import { metadata } from "lib/constants";
import Image from "next/image";
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
      <div className="flex flex-col gap-4">
         <AnimatedHeading className="relative z-10 text-5xl leading-[.85] text-white mix-blend-difference lg:text-xl lg:leading-[.85]">
          <h1 className="overflow-hidden px-2">
            <span className="block text-5xl">{metadata.longName}</span>
          </h1>
          <h2 className="overflow-hidden px-2">
            <span className="block text-2xl opacity-75">{metadata.slogan}</span>
          </h2>
          </AnimatedHeading>
        
        <MainSocials />
      </div>
      <Avatar />
    </header>
  );
}

export default Header;
