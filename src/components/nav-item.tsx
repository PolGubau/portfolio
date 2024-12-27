"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "pol-ui";
import { memo, useMemo } from "react";

const NavItem = memo(function NavItem({
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  const memoizedMotionDiv = useMemo(
    () => (
      <motion.div
        className="absolute h-full rounded-full inset-0 bg-primary z-[-1]"
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
      tabIndex={isActive ? -1 : undefined}
      className={cn(
        "transition-all flex align-middle outline-0 outline-primary rounded-xl focus-visible:outline-1",
        {
          "text-secondary-900/70 dark:text-secondary-50/70 hover:brightness-150":
            !isActive,
          "text-secondary-900 pointer-events-none": isActive,
        },
      )}
    >
      <span className="relative py-1 px-2">
        {name}
        {path === pathname ? memoizedMotionDiv : null}
      </span>
    </Link>
  );
});

export default NavItem;
