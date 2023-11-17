import Link from "next/link";

interface BadgeProps {
  label: string;
  href: string;
}
export function Badge({ label, href }: Readonly<BadgeProps>) {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={label}
      className=" bg-yellow-200 dark:bg-accent text-neutral-800 font-semibold hover:bg-neutral-200 dark:hover:bg-yellow-700 transition-all rounded-xl py-0.5 px-1 mx-1 "
    >
      {label}
    </Link>
  );
}
