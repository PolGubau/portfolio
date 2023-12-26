import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import { ProjectsList } from "app/components/Projects/ProjectList/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description: "Discover my recent projects and achievements.",
  keywords: ["projects", "portfolio", "web development", "coding"],
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
        url: "https://polgubau.com/brand/thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Pol Gubau Amores' website preview",
      },
    ],
    type: "website",
  },
};
const orderedProjects = allProjects.sort((a, b) => {
  return new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime();
});

export const firstProjects = orderedProjects.slice(0, 4);
export default function BlogPage() {
  return (
    <>
      <h1 className="font-semibold text-2xl mb-8">
        Discover my recent Projects 🚀
      </h1>
      <ProjectsList projects={orderedProjects} />
    </>
  );
}
