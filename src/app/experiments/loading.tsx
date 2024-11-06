 
export default function Loading() {
  const array = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <>
 <h1 className="font-medium md:font-semibold text-xl md:text-2xl mb-8 text-center md:text-start text-pretty ">
        Some thoughts written down ✏️
      </h1>
      <ul className="gap-4 grid grid-cols-2">
        {array.map((n) => (
           <li key={n} className="min-h-[12rem] project-cascade w-full flex bg-secondary-900/10 dark:bg-secondary-50/10 rounded-2xl justify-end items-end p-4"> 
                 
                   <span className="m-4 bg-secondary-300 dark:bg-secondary-700 animate-pulse w-[120px] h-[18px] rounded-lg" />
                
           </li>
        ))}
      </ul>
    </>
  );
}
