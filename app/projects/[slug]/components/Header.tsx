"use client";
import { ChevronDownLeft } from "assets/icons/ChevronDownLeft";
import { Projects } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbBrandGithub, TbSearch } from "react-icons/tb";
import { SiNpm } from "react-icons/si";

const Header = ({ project: p }: { project: Projects }) => {
  function formatDate(date: string) {
    const fullDate = new Date(date).toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return `${fullDate}`;
  }
  return (
    <header className="flex flex-col gap-6   mb-8">
      <AnimatePresence mode="wait">
        <section className="flex flex-col gap-4  ">
          <Link title="Back to projects" href="/projects" className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300">
            <span className="sr-only">Back to projects</span>← Back
          </Link>
          <header
            className="flex justify-between items-end rounded-2xl overflow-hidden  relative min-h-[200px] md:min-h-[250px]  "
            style={ {
              backgroundColor: p.color ?? "transparent",
            } }
          >
            <div className={ `flex flex-col px-6 py-6` }>
              <div className="flex gap-4 items-center group">
                { p.link ? (
                  <Link href={ p.link } target="_blank">
                    <h1
                      title="Visit Project"
                      className="font-semibold text-4xl md:text-7xl tracking-tighter max-w-[650px] text-neutral-900 z-10 rounded-full w-fit p-2 balance"
                      style={ {
                        backgroundColor: p.color ?? "transparent",
                      } }
                    >
                      { p.title }
                    </h1>
                  </Link>
                ) : (
                  <h1
                    className="font-semibold text-4xl md:text-7xl tracking-tighter max-w-[650px] text-neutral-900 z-10 rounded-full w-fit p-2 balance"
                    style={ {
                      backgroundColor: p.color ?? "transparent",
                    } }
                  >
                    { p.title }
                  </h1>
                ) }
              </div>
              <div
                className="rounded-xl p-2 py-1 font-medium sm:font-normal w-fit text-neutral-800 dark:text-neutral-800 z-10 text-sm md:text-lg flex gap-1 flex-col "
                style={ {
                  backgroundColor: p.color ?? "transparent",
                } }
              >
                <p className="flex items-center">
                  <ChevronDownLeft className="rotate-90" />
                  { formatDate(p.startedAt) }
                </p>
                <p className="flex items-center">
                  <ChevronDownLeft />
                  { p.endedAt ? formatDate(p.endedAt) : "In Progress" }
                </p>
              </div>
            </div>

            <Image
              style={ {
                mixBlendMode: "multiply",
              } }
              title={ `Cover Image for the project ${p.title}` }
              className="absolute -top-16 -right-60 md:-right-40 opacity-50 md:opacity-100"
              src={ `/images/${p.slug}/${p.cover}` }
              alt={ p.title }
              width={ 500 }
              height={ 500 }
            />
          </header>
        </section>
        <nav className="w-full flex flex-wrap gap-4">
          { p.link && (
            <motion.div
              initial={ { scaleY: 0, y: -20 } }
              animate={ { scaleY: 1, y: 0 } }
              exit={ { scaleY: 0, y: -20 } }
              transition={ { type: "spring", stiffness: 100, damping: 20 } }


              className="flex-1"
            >
              <Link
                href={ p.link }
                title="Visit Project"
                className="hover:brightness-90 px-3 py-2 text-xl text-background rounded-2xl text-black flex gap-2 items-center flex-1 justify-center sm:justify-start "
                target="_blank"
                style={ {
                  backgroundColor: p.color ?? "transparent",
                } }
                rel="noopener noreferrer"
              >
                <span className="sr-only">Link to the project</span>
                <TbSearch size={ 20 } />
                <span>Visit Project</span>
              </Link></motion.div>
          ) }
          { p.githubLink && (
            <motion.div
              initial={ { scaleY: 0, y: -20 } }
              animate={ { scaleY: 1, y: 0 } }
              transition={ { type: "spring", stiffness: 100, damping: 20 } }


            >
              <Link
                title="Link to Github Source"
                href={ p.githubLink }
                className="hover:brightness-90 px-3 py-2 text-xl text-background rounded-2xl text-black flex gap-2 items-center w-fit truncate"
                target="_blank"
                style={ {
                  backgroundColor: p.color ?? "transparent",
                } }
                rel="noopener noreferrer"
              >
                <TbBrandGithub size={ 20 } />
                <span className="sr-only">Link to Github Source</span>
                <span className="hidden sm:block">View Source</span>
              </Link>
            </motion.div>
          ) }
          { p.npmLink && (
            <motion.div
              initial={ { scaleY: 0, y: -20 } }
              animate={ { scaleY: 1, y: 0 } }
              transition={ { type: "spring", stiffness: 100, damping: 20 } }


            >
              <Link
                title="Link to NPM Package"
                href={ p.npmLink }
                className="hover:brightness-90 px-3 py-2 text-xl text-background rounded-2xl text-black flex gap-2 items-center w-fit truncate"
                target="_blank"
                style={ {
                  backgroundColor: p.color ?? "transparent",
                } }
                rel="noopener noreferrer"
              >


                <SiNpm size={ 20 } />
                <span className="sr-only">Link to NPM</span>
                <span className="hidden sm:block">View package</span>
              </Link>
            </motion.div>
          ) }
        </nav></AnimatePresence>
    </header>
  );
};

export default Header;
