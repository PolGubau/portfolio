"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function NavItem({
  path,
  name,
}: Readonly<{
  path: string;
  name: string;
}>) {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  if (pathname.includes("/projects/")) {
    pathname = "/projects";
  }
  const isActive = path === pathname;

  return (
    <Link
      key={ path }
      href={ path }
      className={ clsx("transition-all  flex align-middle ", {
        "text-dark/70 dark:text-light/70 hover:brightness-150": !isActive,
        "text-dark ": isActive,
      }) }
    >
      <span className="relative py-1 px-2">
        { name }
        { path === pathname ? (
          <motion.div
            className="absolute h-full rounded-full inset-0 bg-primary z-[-1]  "
            layoutId="sidebar"
            transition={ {
              type: "spring",
              stiffness: 350,
              damping: 30,
            } }
          />
        ) : null }
      </span>
    </Link>
  );
}
