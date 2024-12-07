import AnimatedLogo from "@/components/animated-logo";

export default function Loading() {
  return (
    <>
      <h1 className="font-medium md:font-semibold text-xl md:text-2xl mb-8 text-center md:text-start text-pretty ">
        Discover my recent Projects 🚀
      </h1>
      <div className="flex flex-col items-center justify-center space-y-4 mt-16 mb-8">
        <AnimatedLogo />
        <p className="text-center">Loading...</p>
      </div>
    </>
  );
}
