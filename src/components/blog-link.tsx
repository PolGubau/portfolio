"use client";
import Link from "next/link";
import { cn } from "pol-ui";
import type { ReactNode } from "react";

export function ArrowIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow Icon</title>
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
    </svg>
  );
}
interface BlogLinkProps {
  slug: string;
  name: string;
  children?: ReactNode;
  className?: string;
}
export function BlogLink({
  slug,
  name,
  children,
  className,
}: Readonly<BlogLinkProps>) {
  return (
    <Link
      title={name}
      href={slug}
      className={cn(
        "w-full flex flex-1 bg-secondary-900/10 dark:bg-secondary-50/10 hover:bg-secondary-900/20 dark:hover:bg-secondary-50/20 rounded-2xl justify-between px-5 py-4 md:px-6 md:py-6 gap-6 text-balanced items-center group hover:brightness-125 transition-all select-none",
        className,
      )}
    >
      <div className="flex flex-col gap-2">
        <span className="w-full font-semibold text-md md:text-lg line-clamp-2	text-pretty">
          {name}
        </span>
        {children ? <span className="w-full">{children}</span> : null}
      </div>

      <div className="group-hover:translate-x-1 group-hover:-translate-y-0 transition-all">
        <ArrowIcon />
      </div>
    </Link>
  );
}
