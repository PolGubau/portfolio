"use client";
import Image from "next/image";
import Link from "next/link";
import { memo, useMemo } from "react";

interface ProjectPreviewProps {
  title: string;
  slug: string;
  backgroundColor?: string;

  image: {
    src: string;
    alt: string;
  };
}

export const ProjectPreview = memo(function ProjectPreview({
  title,
  image: { src, alt },
  slug,
  backgroundColor,
}: ProjectPreviewProps) {
  const memoizedImage = useMemo(
    () => (
      <Image
        style={{
          mixBlendMode: "multiply",
        }}
        className="pointer-events-none mt-20 h-auto w-full object-cover object-left transition-all md:h-[500px] "
        src={src}
        title={`Cover Image for ${title}`}
        alt={`Cover Image for ${alt}`}
        width={600}
        height={330}
      />
    ),
    [src, alt, title],
  );

  return (
    <div
      className="group project-cascade relative flex h-64 cursor-pointer flex-col gap-1 overflow-hidden bg-transparent transition-all hover:brightness-110 md:h-96"
      style={{
        backgroundColor,
      }}
    >
      <Link
        href={`/${slug}`}
        title={title}
        className="flex h-full items-start outline-0 outline-primary focus-visible:outline-1 md:justify-center"
      >
        {memoizedImage}
        <h3 className="absolute top-6 left-6 z-10 mb-3 font-medium text-3xl leading-snug dark:text-neutral-800">
          {title}
        </h3>
      </Link>
    </div>
  );
});
