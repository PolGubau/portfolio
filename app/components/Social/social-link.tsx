import Link from "next/link";
import React from "react";

interface SocialLinkProps {
  href: string;
  label: React.ReactNode;
  icon: React.ReactNode;
}

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="border border-secondary-900/30  dark:bg-secondary-50/10  rounded-full flex gap-2 w-fit py-2 px-3 items-center transition-all hover:bg-secondary-900/10 dark:hover:bg-secondary-50/20"
    >
      {icon}
      {label}
    </Link>
  );
}

export default SocialLink;
