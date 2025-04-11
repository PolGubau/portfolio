"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { toast, useCopyToClipboard } from "pol-ui";
import type React from "react";
import { useState } from "react";
import { TbBrandGithub, TbBrandNpm, TbSearch, TbShare } from "react-icons/tb";
import type { Project } from ".contentlayer/generated";

interface ProjectBarProps {
  project: Project;
}

const ProjectBar: React.FC<ProjectBarProps> = ({ project }) => {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });
  const { copy } = useCopyToClipboard();

  const handleCopyUrl = () => {
    copy(window.location.href);
    toast("Copied to clipboard", {
      dismissible: true,
      className: "bg-secondary-800 text-secondary-50 mb-16 3xl:mb-0 max-w-[90vw]",
    });
  };

  return (
    <div className="fixed bottom-4 left-0 flex w-full justify-center">
      <AnimatePresence mode="wait">
        {scroll > 300 && (
          <motion.div
            className="flex w-fit max-w-4xl items-center justify-between gap-8 rounded-2xl p-3 shadow-lg "
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundColor: project.color ?? "#808080",
            }}
          >
            <h2 className="pl-2 font-semibold text-2xl text-black">{project.title}</h2>

            {project.audio.length > 0 && (
              <audio controls={true} className="hidden md:flex">
                <track kind="captions" />
                {project.audio.map((audioSrc) => {
                  const type = audioSrc.split(".").pop() ?? "mp3";
                  const audioType = `audio/${type}`;
                  return <source key={audioSrc} src={audioSrc} type={audioType} />;
                })}
                Your browser does not support the audio element.
              </audio>
            )}

            <ul className="flex items-center gap-2">
              {/* copy url button */}
              <li>
                <button
                  type="button"
                  className=" flex aspect-square rounded-lg p-2 text-secondary-900 transition-all hover:bg-secondary-900/60"
                  onClick={handleCopyUrl}
                >
                  <TbShare size={20} />
                </button>
              </li>
              {project.npmLink ? (
                <Link
                  href={project.npmLink}
                  hrefLang="en-us"
                  title="Link to the NPM repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className=" flex aspect-square rounded-lg p-2 text-secondary-900 transition-all hover:bg-secondary-900/60">
                    <TbBrandNpm size={20} />
                  </li>
                </Link>
              ) : null}

              {project.githubLink ? (
                <Link
                  href={project.githubLink}
                  hrefLang="en-us"
                  title="Link to the Github repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className=" flex aspect-square rounded-lg p-2 text-secondary-900 transition-all hover:bg-secondary-900/60">
                    <TbBrandGithub size={20} />
                  </li>{" "}
                </Link>
              ) : null}

              {project.link ? (
                <Link
                  href={project.link}
                  hrefLang="en-us"
                  title="Link to the project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <li
                    className="flex aspect-square rounded-lg bg-secondary-900/90 p-2 transition-all hover:bg-secondary-900"
                    style={{
                      color: project.color ?? "#808080",
                    }}
                  >
                    <TbSearch size={20} />
                  </li>{" "}
                </Link>
              ) : null}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ProjectBar };
