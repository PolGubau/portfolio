import { ArrowIcon } from "@/components/BlogLink";

export default function Loading() {
  const array = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <>
      <h1 className="mb-8 text-pretty text-center font-medium text-xl md:text-start md:font-semibold md:text-2xl ">
        Some thoughts written down ✏️
      </h1>
      <ul className="flex flex-col justify-center gap-4">
        {array.map((n) => (
          <li key={n} className="width-animation-both">
            <div className="balance group flex w-full flex-1 items-center justify-between gap-6 rounded-2xl bg-secondary-900/10 px-5 py-4 transition-all hover:bg-secondary-900/20 hover:brightness-125 md:px-6 md:py-6 dark:bg-secondary-50/10 dark:hover:bg-secondary-50/20">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="line-clamp-2 h-[22px] w-[100px] animate-pulse text-pretty rounded-lg bg-secondary font-semibold text-md md:w-[300px] md:text-lg" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="line-clamp-2 h-[18px] w-[120px] animate-pulse text-pretty rounded-lg bg-secondary-300 font-semibold text-md md:text-lg dark:bg-secondary-700" />
                </div>
              </div>
              <div className="group-hover:-translate-y-0 transition-all group-hover:translate-x-1">
                <ArrowIcon />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
