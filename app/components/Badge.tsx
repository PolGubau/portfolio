import Link from "next/link";

interface BadgeProps {
  label: string;
  href: string;
}
export function Badge({ label, href }: Readonly<BadgeProps>) {
  return (
    <Link target="_blank" href={ href } aria-label={ label } className=" bg-primary text-neutral-800 font-semibold hover:brightness-90 dark:hover:brightness-75 transition-all rounded-xl py-0.5 p-1.5 mx-0.5">
      { label }
    </Link>
  );
}
