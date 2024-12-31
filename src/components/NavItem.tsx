"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "pol-ui";
import { memo, useMemo } from "react";

export const NavItem = memo(function NavItem({
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

  const memoizedMotionDiv = useMemo(
    () => (
      <motion.div
        className="absolute inset-0 z-[-1] h-full rounded-full bg-primary"
        layoutId="sidebar"
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 30,
        }}
      />
    ),
    [pathname],
  );

  return (
    <Link
      key={path}
      href={path}
      hrefLang="en-us"
      tabIndex={isActive ? -1 : undefined}
      className={cn("flex rounded-xl align-middle outline-0 outline-primary transition-all focus-visible:outline-1", {
        "text-secondary-900/70 hover:brightness-150 dark:text-secondary-50/70": !isActive,
        "pointer-events-none text-secondary-900": isActive,
      })}
    >
      <span className="relative px-2 py-1">
        {name}
        {path === pathname ? memoizedMotionDiv : null}
      </span>
    </Link>
  );
});
