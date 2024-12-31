import Link from "next/link";

interface BadgeProps {
  label: string;
  href: string;
}
export function Badge({ label, href }: Readonly<BadgeProps>) {
  return (
    <Link
      target="_blank"
      hrefLang="en-us"
      href={href}
      aria-label={label}
      className=" mx-0.5 inline w-fit rounded-xl bg-primary p-1.5 py-0.5 font-semibold text-neutral-800 transition-all hover:brightness-90 dark:hover:brightness-75"
    >
      {label}
    </Link>
  );
}
