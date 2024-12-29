import { AnimatedLogo } from "@/components/AnimatedLogo";

export default function Loading() {
  return (
    <>
      <h1 className="mb-8 text-pretty text-center font-medium text-xl md:text-start md:font-semibold md:text-2xl ">
        Discover my recent Projects 🚀
      </h1>
      <div className="mt-16 mb-8 flex flex-col items-center justify-center space-y-4">
        <AnimatedLogo />
        <p className="text-center">Loading...</p>
      </div>
    </>
  );
}
