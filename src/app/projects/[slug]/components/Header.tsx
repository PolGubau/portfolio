"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { SiNpm } from "react-icons/si";
import { TbBrandGithub, TbChevronDownLeft, TbSearch } from "react-icons/tb";
import type { Project } from ".contentlayer/generated";

function Header({ project: p }: { project: Project }) {
  function formatDate(date: string) {
    const fullDate = new Date(date).toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return fullDate;
  }

  return (
    <header className="mb-8 flex flex-col gap-6">
      {useMemo(
        () => (
          <AnimatePresence>
            <section className="flex flex-col gap-4">
              <Link
                hrefLang="en-us"
                title="Back to projects"
                href="/projects"
                className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
              >
                <span className="sr-only">Back to projects</span>← Back
              </Link>
              <header
                className="relative flex min-h-[200px] items-end justify-between overflow-hidden rounded-2xl md:min-h-[250px]"
                style={{
                  backgroundColor: p.color ?? "transparent",
                }}
              >
                <div className="flex flex-col px-6 py-6">
                  <span className="group flex gap-4 overflow-hidden">
                    <Link
                      href={p.link ?? ""}
                      hrefLang="en-us"
                      target="_blank"
                      tabIndex={p.link ? undefined : -1}
                      className={p.link ? "" : "pointer-events-none"}
                      aria-disabled={!p.link}
                    >
                      <h1
                        title="Visit Project"
                        className="balance z-10 w-fit max-w-[650px] animate-slide-in-bottom rounded-full p-2 font-semibold text-4xl text-neutral-900 tracking-tighter md:text-7xl"
                        style={{
                          backgroundColor: p.color ?? "transparent",
                        }}
                      >
                        {p.title}
                      </h1>
                    </Link>
                  </span>
                  <div
                    className="z-10 flex w-fit flex-col gap-1 rounded-xl p-2 py-1 font-medium text-neutral-800 text-sm sm:font-normal md:text-lg dark:text-neutral-800"
                    style={{
                      backgroundColor: p.color ?? "transparent",
                    }}
                  >
                    <span className="flex items-center">
                      <TbChevronDownLeft className="rotate-90" />
                      {formatDate(p.startedAt)}
                    </span>
                    <span className="flex items-center">
                      <TbChevronDownLeft />
                      {p.endedAt ? formatDate(p.endedAt) : "In Progress"}
                    </span>
                  </div>
                </div>
                <Image
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  title={`Cover Image for the project ${p.title}`}
                  className="-top-16 -right-60 md:-right-40 absolute opacity-50 md:opacity-100"
                  src={`/media/${p.slug}/${p.cover}`}
                  alt={p.title}
                  width={500}
                  height={500}
                />
              </header>
            </section>
            <nav className="flex w-full flex-wrap gap-4">
              {p.link ? (
                <Link
                  href={p.link}
                  hrefLang="en-us"
                  title="Visit Project"
                  className="flex h-full flex-1 animate-expand-vertically items-center justify-center gap-2 rounded-2xl px-3 py-2 text-secondary-900 text-xl transition-all hover:brightness-90 sm:justify-start"
                  target="_blank"
                  style={{
                    backgroundColor: p.color ?? "transparent",
                  }}
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">Link to the project</span>
                  <TbSearch size={20} />
                  <span>Visit Project</span>
                </Link>
              ) : null}
              {p.githubLink ? (
                <Link
                  title="Link to Github Source"
                  href={p.githubLink}
                  hrefLang="en-us"
                  className="flex h-full w-fit animate-expand-vertically items-center gap-2 truncate rounded-2xl px-3 py-2 text-black text-xl transition-all hover:brightness-90"
                  target="_blank"
                  style={{
                    backgroundColor: p.color ?? "transparent",
                  }}
                  rel="noopener noreferrer"
                >
                  <TbBrandGithub size={20} />
                  <span className="sr-only">Link to Github Source</span>
                  <span className="hidden md:block">View Source</span>
                </Link>
              ) : null}
              {p.npmLink ? (
                <Link
                  title="Link to NPM Package"
                  href={p.npmLink}
                  hrefLang="en-us"
                  className="flex h-full w-fit animate-expand-vertically items-center gap-2 truncate rounded-2xl px-3 py-2 text-black text-xl transition-all hover:brightness-90"
                  target="_blank"
                  style={{
                    backgroundColor: p.color ?? "transparent",
                  }}
                  rel="noopener noreferrer"
                >
                  <SiNpm size={20} />
                  <span className="sr-only">Link to NPM</span>
                  <span className="hidden md:block">View package</span>
                </Link>
              ) : null}
            </nav>
          </AnimatePresence>
        ),
        [p],
      )}
    </header>
  );
}

export default Header;
