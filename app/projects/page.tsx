import type { Metadata } from "next";
import { ProjectsList } from "app/components/Projects/ProjectList/project-list";
import { allProjects } from "contentlayer/generated";

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

export default function Page() {
  const orderedProjects = allProjects.sort((a, b) => {
  const today = new Date().toISOString().split("T")[0];
  const aEnded =  !a.endedAt ? today : a.endedAt || today 
  const bEnded = !b.endedAt ? today : b.endedAt || today;
  if(!aEnded || !bEnded) return 0;
  if (aEnded < bEnded) return 1;
  if (aEnded > bEnded) return -1;
  return 0;
});
  return (
    <>
      <h1 className="font-medium md:font-semibold text-xl md:text-2xl mb-8 text-center md:text-start text-pretty ">
        Discover my recent Projects 🚀
      </h1>
      <ProjectsList projects={orderedProjects} />
    </>
  );
}
