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
      className="bg-transparent border border-dark/30  dark:bg-light/10  rounded-full flex gap-2 w-fit py-1 px-3 items-center transition-all hover:bg-dark/10 dark:hover:bg-light/20"
    >
      {icon}
      {label}
    </Link>
  );
};

export default SocialLink;
