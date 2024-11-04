"use client";
import Image from "next/image";
import Link from "next/link";

interface ProjectPreviewProps {
  title: string;
  slug: string;
  backgroundColor?: string;

  image: {
    src: string;
    alt: string;
  };
}

function ProjectPreview({
  title,
  image: { src, alt },
  slug,
  backgroundColor,
}: ProjectPreviewProps) {
  return (
    <div
      className="flex flex-col transition-all gap-1 group bg-transparent h-64 md:h-96  overflow-hidden relative cursor-pointer hover:brightness-110 project-cascade"
      style={{
        backgroundColor,
      }}
    >
      <Link
        href={`/${slug}`}
        title={title}
        className="h-full flex items-start md:justify-center focus-visible:outline-1 outline-0 outline-primary"
      >
        <Image
          style={{
            mixBlendMode: "multiply",
          }}
          className="mt-20 transition-all w-full h-auto md:h-[500px] object-cover object-left pointer-events-none "
          src={src}
          title={`Cover Image for ${title}`}
          alt={`Cover Image for ${alt}`}
          width={600}
           height={330}
        />
        <h3 className=" absolute top-6 left-6 z-10 text-3xl dark:text-neutral-800 mb-3 leading-snug font-medium">
          {title}
        </h3>
      </Link>
    </div>
  );
}

export default ProjectPreview;
