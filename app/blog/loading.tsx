 import { ArrowIcon } from "app/components/blog-link";

export default function Loading() {
  const array = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <>
 <h1 className="font-medium md:font-semibold text-xl md:text-2xl mb-8 text-center md:text-start text-pretty ">
        Some thoughts written down ✏️
      </h1>
      <ul className="flex flex-col gap-4 justify-center">
        {array.map((n) => (
           <li key={n} className="width-animation-both"> 
            <div className="w-full flex flex-1 bg-secondary-900/10 dark:bg-secondary-50/10 hover:bg-secondary-900/20 dark:hover:bg-secondary-50/20 rounded-2xl justify-between px-5 py-4 md:px-6 md:py-6  gap-6 balance items-center group hover:brightness-125 transition-all">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-md md:text-lg line-clamp-2 bg-secondary animate-pulse	text-pretty w-[100px] md:w-[300px] h-[22px] rounded-lg" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-md md:text-lg line-clamp-2 bg-secondary-300 dark:bg-secondary-700 animate-pulse	text-pretty w-[120px] h-[18px] rounded-lg" />
                </div>
              </div>
              <div className="group-hover:translate-x-1 group-hover:-translate-y-0 transition-all">
                <ArrowIcon />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
