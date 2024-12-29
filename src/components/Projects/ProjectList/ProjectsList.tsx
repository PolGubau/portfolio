"use client";
import { motion } from "framer-motion";
import "./post-list.css";
import { useMemo } from "react";
import { ProjectListItem } from "./ProjectListItem";
import type { Project } from ".contentlayer/generated";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export function ProjectsList({ projects }: { projects: Project[] }) {
  const memoizedProjects = useMemo(() => {
    return projects.map((p) => {
      return <ProjectListItem p={p} key={p._id} />;
    });
  }, [projects]);

  return (
    <motion.ul variants={container} initial="hidden" animate="show" className="flex w-full flex-wrap gap-3">
      {memoizedProjects}
    </motion.ul>
  );
}
