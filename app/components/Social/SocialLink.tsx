import Link from "next/link";
import React from "react";

interface SocialLinkProps {
  href: string;
  label: React.ReactNode;
  icon: React.ReactNode;
}

const SocialLink = ({ href, label, icon }: SocialLinkProps) => {
  return (
    <Link
      href={href}
      className="bg-transparent border border-secondary-900/30  dark:bg-secondary-50/10  rounded-full flex gap-2 w-fit py-1 px-3 items-center transition-all hover:bg-secondary-900/10 dark:hover:bg-secondary-50/20"
    >
      {icon}
      {label}
    </Link>
  );
};

export default SocialLink;
