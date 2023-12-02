import React from "react";

const HomeSkeleton = () => {
  return (
    <main className="flex flex-col  w-full flex-1 gap-8 animate-pulse">
      <div className="flex flex-col gap-1">
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]"></p>
        <p className="rounded-xl w:[120px] sm:w-[80px] bg-neutral-100 dark:bg-neutral-800 h-[1.3em]"></p>
      </div>
      <div className="flex flex-col gap-3 px-1">
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[75px]"></p>
        <p className=" rounded-xl w-[300px] bg-yellow-100 dark:bg-yellow-500 h-[1.7em]"></p>
        <p className=" rounded-xl w-[230px] bg-yellow-100 dark:bg-yellow-500 h-[1.7em]"></p>
        <p className=" rounded-xl w-[165px] bg-yellow-100 dark:bg-yellow-500 h-[1.7em]"></p>
      </div>
      <div className="flex gap-4 w-full">
        <p className=" rounded-xl flex flex-1 bg-neutral-100 dark:bg-neutral-800 p-6 justify-between items-center">
          <span className="w-[235px] bg-neutral-200 dark:bg-neutral-700 h-[1.7em] rounded-md"></span>
          <span className="w-[1em] bg-neutral-200 dark:bg-neutral-700 h-[1em] rounded-md"></span>
        </p>
        <p className=" rounded-xl flex flex-1 bg-neutral-100 dark:bg-neutral-800 p-6 justify-between items-center">
          <span className="w-[245px] bg-neutral-200 dark:bg-neutral-700 h-[1.7em] rounded-md"></span>
          <span className="w-[1em] bg-neutral-200 dark:bg-neutral-700 h-[1em] rounded-md"></span>
        </p>
      </div>
      <hgroup className="text-3xl font-medium balance mt-16 flex flex-col gap-5">
        <p>🎨👨‍💻</p>
        <p className=" rounded-xl w-[400px] bg-neutral-100 dark:bg-neutral-800  h-[75px]"></p>
      </hgroup>
      <div className="flex flex-col gap-1">
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]"></p>
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]"></p>
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]"></p>
        <p className=" rounded-xl w-full bg-neutral-100 dark:bg-neutral-800  h-[1.3em]"></p>
      </div>
    </main>
  );
};

export default HomeSkeleton;
