import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import { ProjectsList } from "app/components/Projects/ProjectList/project-list";
import { orderedProjects } from "app/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover my recent projects and achievements.",
  keywords: [
    "projects",
    "portfolio",
    "web development",
    "coding",
    "Pol Gubau Amores",
  ],
  authors: {
    url: "https://polgubau.com",
    name: "Pol Gubau Amores",
  },
  openGraph: {
    title: "Projects | Pol Gubau Amores",
    description: "Discover my recent projects and achievements.",
    url: "https://polgubau.com/projects",
    locale: "en_US",
    images: [
      {
        url: "https://polgubau.com/brand/projects-thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Pol Gubau Amores' projects preview",
      },
    ],
    type: "website",
  },
};


export default function BlogPage() {
  return (
    <>
      <h1 className="font-medium md:font-semibold text-xl md:text-2xl mb-8 text-center md:text-start text-pretty ">
        Discover my recent Projects 🚀
      </h1>
      <ProjectsList projects={orderedProjects} />
    </>
  );
}
