"use client";
import { motion } from "framer-motion";
import { Projects } from "contentlayer/generated";
import "./post-list.css";
import ProjectPreview from "app/components/ProjectPreview";
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
export const ProjectsList = ({ projects }: { projects: Projects[] }) => {
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap gap-4"
    >
      {projects.map((p) => (
        <motion.li variants={item} key={p.slug} className="postGrid ">
          <ProjectPreview
            backgroundColor={p.color}
            title={p.title}
            slug={p.slug}
            image={{ src: `/images/${p.slug}/${p.cover}`, alt: "" }}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
};
