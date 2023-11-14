import type { Metadata } from "next";
import { allProjects } from "contentlayer/generated";
import { ProjectsList } from "app/components/Projects/ProjectList/ProjectList";
export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

const orderedProjects = allProjects.sort((a, b) => {
  return new Date(b.startedAt).getTime() - new Date(a.startedAt).getTime();
});

export const firstProjects = orderedProjects.slice(0, 4);
export default function BlogPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8">
        Discover my recent Projects 🚀
      </h1>
      <ProjectsList projects={orderedProjects} />
    </section>
  );
}
