import Link from "next/link";
import type React from "react";

interface SocialLinkProps {
  href: string;
  label: React.ReactNode;
  icon: React.ReactNode;
}

export function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      hrefLang="en-us"
      className="flex w-fit items-center gap-2 rounded-xl border border-secondary-900/30 px-3 py-1 text-sm transition-all hover:bg-secondary-900/10 dark:bg-secondary-50/10 dark:hover:bg-secondary-50/20"
    >
      {icon}
      {label}
    </Link>
  );
}
