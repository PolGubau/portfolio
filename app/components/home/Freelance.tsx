import Image from "next/image";
import Link from "next/link";
import React from "react";

const Freelance = () => {
  return (
    <div className="text-center p-8 rounded-2xl flex items-center flex-col mt-16">
      <h2 className="text-4xl pt-8 pb-4 font-bold balance ">Each dream is a new challenge. 🏆</h2>
      <p className="opacity-75 text-2xl mb-16">And all challenges start from an idea.</p>
      <Image src="/images/Beecipes/beecipes3.png" className="rounded-xl object-cover h-full mt-4 mb-8" alt="Mockup of the result of Beecipes website" title="Mockup of the result of Beecipes website" width={600} height={400} /> <p className="opacity-75 text-2xl my-16">Then you need to believe in it.</p>
      <Image src="/images/Beecipes/beecipes2.png" className="rounded-xl object-cover h-full mt-4 mb-8" title="Mockup of the result of Beecipes website" alt="Mockup of the result of Beecipes website" width={600} height={400} /> <p className="opacity-75 text-2xl my-16">And finally, you need to make it happen.</p>
      <Image src="/images/Beecipes/0.webp" alt="Mockup of the result of Beecipes website" width={600} height={400} title="Mockup of the result of Beecipes website" /> <h2 className="mt-16 text-4xl opacity-75">You believe in your idea.</h2>
      <h3 className="mt-4 text-5xl">Let's make it happen.</h3>
      <Link href="mailto:gubaupol@gmail.com" className="bg-yellow-400 text-neutral-900 font-bold rounded-full text-2xl w-full p-4 mt-8 text-center">
        Don't be shy, say hi!
      </Link>
    </div>
  );
};

export default Freelance;
