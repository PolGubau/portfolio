function HomeSkeleton() {
  return (
    <main className="flex flex-col  w-full flex-1 gap-8 animate-pulse">
      <div className="flex flex-col gap-1">
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]" />
        <p className="rounded-xl w:[120px] sm:w-[80px] bg-neutral-100 dark:bg-neutral-800 h-[1.3em]" />
      </div>

      <div className="flex gap-4 w-full">
        <p className=" rounded-xl flex flex-1 bg-neutral-100 dark:bg-neutral-800 p-6 justify-between items-center">
          <span className="w-[235px] bg-neutral-200 dark:bg-neutral-700 h-[1.7em] rounded-md" />
          <span className="w-[1em] bg-neutral-200 dark:bg-neutral-700 h-[1em] rounded-md" />
        </p>
        <p className=" rounded-xl flex flex-1 bg-neutral-100 dark:bg-neutral-800 p-6 justify-between items-center">
          <span className="w-[245px] bg-neutral-200 dark:bg-neutral-700 h-[1.7em] rounded-md" />
          <span className="w-[1em] bg-neutral-200 dark:bg-neutral-700 h-[1em] rounded-md" />
        </p>
      </div>
      <hgroup className="text-3xl font-medium balance mt-16 flex flex-col gap-5">
        <p>🎨👨‍💻</p>
        <p className=" rounded-xl w-[400px] bg-neutral-100 dark:bg-neutral-800  h-[75px]" />
      </hgroup>
      <div className="flex flex-col gap-1">
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]" />
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]" />
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]" />
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]" />
      </div>
    </main>
  );
}

export default HomeSkeleton;
