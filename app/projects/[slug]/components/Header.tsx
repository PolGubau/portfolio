import { BlogLink } from "app/components/BlogLink";
import { ChevronDownLeft } from "assets/icons/ChevronDownLeft";
import { Projects } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    <section className="flex flex-col gap-4 mb-8 ">
      <Link
        href="/projects"
        className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
      >
        ← Back
      </Link>
      <header
        className="flex justify-between items-end rounded-2xl overflow-hidden  relative min-h-[200px] md:min-h-[250px]  "
        style={{
          backgroundColor: p.color ?? "transparent",
        }}
      >
        <div className={`flex flex-col px-6 py-6`}>
          <div className="flex gap-4 items-center group">
            {p.link ? (
              <Link href={p.link}>
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
              <ChevronDownLeft className="rotate-90" />
              {formatDate(p.startedAt)}
            </p>
            <p className="flex items-center">
              <ChevronDownLeft />
              {p.endedAt ? formatDate(p.endedAt) : "In Progress"}
            </p>
          </div>
        </div>

        <Image
          style={{
            mixBlendMode: "multiply",
          }}
          className="absolute -top-16 -right-60 md:-right-40 opacity-50 md:opacity-100"
          src={`/images/${p.slug}/${p.cover}`}
          alt={p.title}
          width={500}
          height={500}
        />
      </header>
    </section>
  );
};

export default Header;
