import { ProjectPreview } from "@/components/ProjectPreview";
import { motion } from "framer-motion";
import { useMemo } from "react";
import type { Project } from ".contentlayer/generated";

const item = {
  hidden: { opacity: 0, innerWidth: 0 },
  show: { opacity: 1, innerWidth: "100%" },
};

export const ProjectListItem = ({ p }: { p: Project }) => {
  const image = useMemo(() => ({ src: `/media/${p.slug}/${p.cover}`, alt: p.cover }), [p.slug, p.cover]);

  return (
    <motion.li variants={item} className="postGrid">
      <ProjectPreview backgroundColor={p.color} title={p.title} slug={p.slug} image={image} />
    </motion.li>
  );
};
