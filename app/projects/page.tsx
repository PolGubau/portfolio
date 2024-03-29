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

// order by date with the 'toSorted' function, the projects without endedAt will act as 'ended today', then order from the most recent to the oldest
const orderedProjects = allProjects.toSorted((a, b) => {
  const today = new Date().toISOString().split("T")[0];
  const aEnded = !a.endedAt ? today : a.endedAt;
  const bEnded = !b.endedAt ? today : b.endedAt;
  if (aEnded < bEnded) return 1;
  if (aEnded > bEnded) return -1;
  return 0;
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
