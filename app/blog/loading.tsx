export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-16 mb-8">
      <div
        id="loadingBar"
        className="w-full max-w-[200px] h-4 bg-gray-300 dark:bg-gray-800 relative rounded-full"
      >
        <div
          id="loadingBarProgress"
          className="h-full bg-primary rounded-full animate-widthGrow absolute"
        ></div>
      </div>
      <p className="text-center">Loading...</p>
    </div>
  );
}
