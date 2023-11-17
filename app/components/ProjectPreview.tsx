"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  slug: string;
  backgroundColor?: string;

  image: {
    src: string;
    alt: string;
  };
};

const ProjectPreview = ({
  title,
  image: { src, alt },
  slug,
  backgroundColor,
}: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 1 }}
      className="flex flex-col gap-1 group bg-slate-400 h-60 md:h-96 rounded-2xl overflow-hidden relative hover:brightness-75 transition-all "
      style={{
        backgroundColor,
      }}
    >
      <Link href={`/${slug}`} title={title}>
        <Image
          style={{
            mixBlendMode: "multiply",
          }}
          className="ml-20 mt-20"
          src={src}
          title={`Cover Image for ${title}`}
          alt={`Cover Image for ${alt}`}
          width={600}
          height={330}
        />

        <h2 className=" absolute top-6 left-6 z-10 text-3xl dark:text-neutral-800 mb-3 leading-snug font-medium">
          {title}
        </h2>
      </Link>
    </motion.div>
  );
};

export default ProjectPreview;
