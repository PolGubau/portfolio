export function HomeSkeleton() {
  return (
    <main className="flex w-full flex-1 animate-pulse flex-col gap-8">
      <div className="flex flex-col gap-1">
        <p className=" h-[1.3em] w-full rounded-xl bg-neutral-100 dark:bg-neutral-800" />
        <p className="h-[1.3em] rounded-xl bg-neutral-100 w:[120px] sm:w-[80px] dark:bg-neutral-800" />
      </div>

      <div className="flex w-full gap-4">
        <p className=" flex flex-1 items-center justify-between rounded-xl bg-neutral-100 p-6 dark:bg-neutral-800">
          <span className="h-[1.7em] w-[235px] rounded-md bg-neutral-200 dark:bg-neutral-700" />
          <span className="h-[1em] w-[1em] rounded-md bg-neutral-200 dark:bg-neutral-700" />
        </p>
        <p className=" flex flex-1 items-center justify-between rounded-xl bg-neutral-100 p-6 dark:bg-neutral-800">
          <span className="h-[1.7em] w-[245px] rounded-md bg-neutral-200 dark:bg-neutral-700" />
          <span className="h-[1em] w-[1em] rounded-md bg-neutral-200 dark:bg-neutral-700" />
        </p>
      </div>
      <hgroup className="balance mt-16 flex flex-col gap-5 font-medium text-3xl">
        <p>🎨👨‍💻</p>
        <p className=" h-[75px] w-[400px] rounded-xl bg-neutral-100 dark:bg-neutral-800" />
      </hgroup>
      <div className="flex flex-col gap-1">
        <p className=" h-[1.3em] w-full rounded-xl bg-neutral-100 dark:bg-neutral-800" />
        <p className=" h-[1.3em] w-full rounded-xl bg-neutral-100 dark:bg-neutral-800" />
        <p className=" h-[1.3em] w-full rounded-xl bg-neutral-100 dark:bg-neutral-800" />
        <p className=" h-[1.3em] w-full rounded-xl bg-neutral-100 dark:bg-neutral-800" />
      </div>
    </main>
  );
}
