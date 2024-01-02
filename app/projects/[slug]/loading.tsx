import AnimatedLogo from "app/components/AnimatedLogo";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-16 mb-8">
      <AnimatedLogo />
      <p className="text-center">Loading...</p>
    </div>
  );
}
