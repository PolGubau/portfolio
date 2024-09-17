"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { toast, useCopyToClipboard } from "pol-ui";
import React, { useState } from "react";
import { TbBrandGithub, TbBrandNpm, TbSearch, TbShare } from "react-icons/tb";
import { type Projects } from "contentlayer/generated";

interface ProjectBarProps {
  project: Projects;
}

const ProjectBar: React.FC<ProjectBarProps> = ({ project }) => {
  const { scrollY } = useScroll();
  const [scroll, setScroll] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScroll(latest);
  });
  const { copy } = useCopyToClipboard();

  const  handleCopyUrl =  () => {
      copy(window.location.href) 
      toast("Copied to clipboard", {
       dismissible: true,
      className:
        "bg-secondary-800 text-secondary-50 mb-16 3xl:mb-0 max-w-[90vw]",
        
      });
  }

     
   

  return (
    <div className="fixed bottom-4 left-0 w-full flex justify-center">
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
            className="w-[90vw] sm:w-[80vw] lg:w-[90vw] max-w-4xl shadow-lg p-3 rounded-2xl flex gap-4 items-center justify-between "
          >
            <h2 className="text-black text-2xl font-semibold pl-2">
              {project.title}
            </h2>


              {project.audio.length>0 && (
              <audio controls>
                <track kind="captions" />
                {project.audio.map((audioSrc) => {
                  const type = audioSrc.split('.').pop()??'mp3'
                  const audioType = `audio/${type}`;
                  return (
                    <source key={audioSrc} src={audioSrc} type={audioType} />
                  )})}

                  Your browser does not support the audio element.
                </audio>
              )}

            <ul className="flex gap-2 items-center">
              {/* copy url button */}
              <li>
                <button
                  type='button'
                  className=" transition-all hover:bg-secondary-900/60 rounded-lg flex aspect-square p-2 text-secondary-900"
                  onClick={handleCopyUrl}
                >
                  <TbShare size={20} />
                </button>
              </li>
              {project.npmLink ? <Link
                  href={project.npmLink}
                  title="Link to the NPM repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className=" transition-all hover:bg-secondary-900/60 rounded-lg flex aspect-square p-2 text-secondary-900">
                    <TbBrandNpm size={20} />
                  </li>
                </Link> : null}

              {project.githubLink ? <Link
                  href={project.githubLink}
                  title="Link to the Github repository"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <li className=" transition-all hover:bg-secondary-900/60 rounded-lg flex aspect-square p-2 text-secondary-900">
                    <TbBrandGithub size={20} />
                  </li>{" "}
                </Link> : null}

              {project.link ? <Link
                  href={project.link}
                  title="Link to the project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <li
                    className="bg-secondary-900/90 hover:bg-secondary-900  transition-all rounded-lg flex aspect-square p-2"
                    style={{
                      color: project.color ?? "#808080",
                    }}
                  >
                    <TbSearch size={20} />
                  </li>{" "}
                </Link> : null}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { ProjectBar };

