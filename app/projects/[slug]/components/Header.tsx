"use client";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SiNpm } from "react-icons/si";
import { TbBrandGithub, TbChevronDownLeft, TbSearch } from "react-icons/tb";
import { type Projects } from "contentlayer/generated";
 
function Header({ project: p }: { project: Projects }) {
  function formatDate(date: string) {
    const fullDate = new Date(date).toLocaleString("en-us", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return fullDate;
  }
  return (
    <header className="flex flex-col gap-6   mb-8">
      <AnimatePresence>
        <section className="flex flex-col gap-4  ">
          <Link
            title="Back to projects"
            href="/projects"
            className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
          >
            <span className="sr-only">Back to projects</span>← Back
          </Link>
          <header
            className="flex justify-between items-end rounded-2xl overflow-hidden  relative min-h-[200px] md:min-h-[250px]  "
            style={{
              backgroundColor: p.color ?? "transparent",
            }}
          >
            <div className="flex flex-col px-6 py-6">
              <div className="flex gap-4 items-center group">
                {p.link ? (
                  <Link href={p.link} target="_blank">
                    <h1
                      title="Visit Project"
                      className="font-semibold text-4xl md:text-7xl tracking-tighter max-w-[650px] text-neutral-900 z-10 rounded-full w-fit p-2 balance"
                      style={{
                        backgroundColor: p.color ?? "transparent",
                      }}
                    >
                      {p.title}
                    </h1>
                  </Link>
                ) : (
                  <h1
                    className="font-semibold text-4xl md:text-7xl tracking-tighter max-w-[650px] text-neutral-900 z-10 rounded-full w-fit p-2 balance"
                    style={{
                      backgroundColor: p.color ?? "transparent",
                    }}
                  >
                    {p.title}
                  </h1>
                )}
              </div>
              <div
                className="rounded-xl p-2 py-1 font-medium sm:font-normal w-fit text-neutral-800 dark:text-neutral-800 z-10 text-sm md:text-lg flex gap-1 flex-col "
                style={{
                  backgroundColor: p.color ?? "transparent",
                }}
              >
                <p className="flex items-center">
                  <TbChevronDownLeft className="rotate-90" />
                  {formatDate(p.startedAt)}
                </p>
                <p className="flex items-center">
                  <TbChevronDownLeft />
                  {p.endedAt ? formatDate(p.endedAt) : "In Progress"}
                </p>
              </div>
            </div>

            <Image
              style={{
                mixBlendMode: "multiply",
              }}
              title={`Cover Image for the project ${p.title}`}
              className="absolute -top-16 -right-60 md:-right-40 opacity-50 md:opacity-100"
              src={`/media/${p.slug}/${p.cover}`}
              alt={p.title}
              width={500}
              height={500}
            />
          </header>
        </section>
        <nav className="w-full flex flex-wrap gap-4">
          {p.link ? <Link
                href={p.link}
                title="Visit Project"
                className="hover:brightness-90 flex-1 px-3 py-2 text-xl text-background rounded-2xl text-black flex gap-2 items-center justify-center sm:justify-start h-full animate-expand-vertically"
                target="_blank"
                style={{
                  backgroundColor: p.color ?? "transparent",
                }}
                rel="noopener noreferrer"
              >
                <span className="sr-only">Link to the project</span>
                <TbSearch size={20} />
                <span>Visit Project</span>
              </Link> : null}
          {p.githubLink ? <Link
                title="Link to Github Source"
                href={p.githubLink}
                className="hover:brightness-90 px-3 py-2 text-xl text-background rounded-2xl text-black flex gap-2 items-center w-fit truncate h-full animate-expand-vertically"
                target="_blank"
                style={{
                  backgroundColor: p.color ?? "transparent",
                }}
                rel="noopener noreferrer"
              >
                <TbBrandGithub size={20} />
                <span className="sr-only">Link to Github Source</span>
                <span className="hidden md:block">View Source</span>
              </Link> : null}
          {p.npmLink ? <Link
                title="Link to NPM Package"
                href={p.npmLink}
                className="hover:brightness-90 px-3 py-2 text-xl text-background rounded-2xl text-black flex gap-2 items-center w-fit truncate h-full animate-expand-vertically"
                target="_blank"
                style={{
                  backgroundColor: p.color ?? "transparent",
                }}
                rel="noopener noreferrer"
              >
                <SiNpm size={20} />
                <span className="sr-only">Link to NPM</span>
                <span className="hidden md:block">View package</span>
              </Link> : null}
        </nav>
      </AnimatePresence>
    </header>
  );
}

export default Header;
