"use client";
import { motion } from "framer-motion";
import { cn } from "pol-ui";
import ProjectPreview from "app/components/project-preview";
import { type Projects } from "contentlayer/generated";
import "./post-list.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, innerWidth: 0 },
  show: { opacity: 1, innerWidth: "100%" },
};
export function ProjectsList({ projects }: { projects: Projects[] }) {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap gap-4 w-full"
    >
      {projects.map((p) => {
        return (
          <motion.li variants={item} key={p.slug} className={cn("postGrid  ")}>
            <ProjectPreview
              backgroundColor={p.color}
              title={p.title}
              slug={p.slug}
              image={{ src: `/media/${p.slug}/${p.cover}`, alt: p.cover }}
            />
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
