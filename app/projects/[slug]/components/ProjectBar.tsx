"use client";
import { Projects } from "contentlayer/generated";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  motion,
} from "framer-motion";
import Link from "next/link";
import React from "react";
import { TbBrandGithub, TbBrandNpm, TbSearch } from "react-icons/tb";
interface ProjectBarProps {
  project: Projects;
}

const ProjectBar: React.FC<ProjectBarProps> = ({ project }) => {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = React.useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });

  return (
    <div className="fixed bottom-8 left-0 w-full flex justify-center">
      <AnimatePresence mode="wait">
        {scroll > 300 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: project.color ?? "#808080",
            }}
            className="w-full max-w-4xl shadow-lg mx-6 p-3 rounded-2xl flex gap-4 items-center justify-between "
          >
            <h2 className="text-black text-2xl font-semibold pl-2">
              {project.title}
            </h2>
            <ul className="flex gap-2 items-center">
              {project.npmLink && (
                <Link
                  href={project.npmLink}
                  title="Link to the NPM repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className=" transition-all hover:bg-dark/60 rounded-lg flex aspect-square p-2 text-dark">
                    <TbBrandNpm size={20} />
                  </li>
                </Link>
              )}

              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  title="Link to the Github repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className=" transition-all hover:bg-dark/60 rounded-lg flex aspect-square p-2 text-dark">
                    <TbBrandGithub size={20} />
                  </li>{" "}
                </Link>
              )}

              {project.link && (
                <Link
                  href={project.link}
                  title="Link to the project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <li
                    className="bg-dark/90 hover:bg-dark  transition-all rounded-lg flex aspect-square p-2"
                    style={{
                      color: project.color ?? "#808080",
                    }}
                  >
                    <TbSearch size={20} />
                  </li>{" "}
                </Link>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectBar;
