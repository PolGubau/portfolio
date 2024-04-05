import { BlogLink } from "app/components/BlogLink";
import { ProjectsList } from "app/components/Projects/ProjectList/ProjectList";
import { Projects, allProjects } from "contentlayer/generated";
import React from "react";

const SimilarProjects = ({
  project: p,
  slug,
}: {
  project: Projects;
  slug: string;
}) => {
  const similarTechProjects = (): Projects[] => {
    // get 3 projects that has tech in common, if it's not the case, get up to 3 random projects

    const tech = p.tech;
    const otherProjects = allProjects.filter(
      (post) => post.slug !== `projects/${slug}`
    );
    const similarTechProjects = otherProjects.filter((post) =>
      post.tech?.split(" ").some((t) => tech?.includes(t))
    );

    if (similarTechProjects.length > 3) {
      return similarTechProjects.slice(0, 3);
    }

    return otherProjects.slice(0, 3);
  };
  return (
    <>
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mt-16">
        Similar Projects
      </h2>
      <div className="flex flex-wrap gap-2">
        <ProjectsList projects={similarTechProjects()} />
      </div>
    </>
  );
};

export default SimilarProjects;
