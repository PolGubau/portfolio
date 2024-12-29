export default function Loading() {
  const array = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <ul className="grid gap-4 md:grid-cols-2">
      {array.map((n) => (
        <li
          key={n}
          className="project-cascade flex min-h-[12rem] w-full items-end justify-end rounded-2xl bg-secondary-900/10 p-4 dark:bg-secondary-50/10"
        >
          <span className="m-4 h-[18px] w-[120px] animate-pulse rounded-lg bg-secondary-300 dark:bg-secondary-700" />
        </li>
      ))}
    </ul>
  );
}
