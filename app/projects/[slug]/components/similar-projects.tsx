import { ProjectsList } from "app/components/Projects/ProjectList/project-list";
import { type Projects, allProjects } from "contentlayer/generated";

function SimilarProjects({
  project: p,
  slug,
}: {
  project: Projects;
  slug: string;
}): JSX.Element  {
  const similarTechProjects = (): Projects[] => {
    // get 3 projects that has tech in common, if it's not the case, get up to 3 random projects

    const tech = p.tech;
    const otherProjects = allProjects.filter(
      (post) => post.slug !== `projects/${slug}`
    );
    const similarProjects = otherProjects.filter((post) =>
      post.tech.some((t) => tech.includes(t))
    );

    if (similarProjects.length > 3) {
      return similarProjects.slice(0, 3);
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
}

export {SimilarProjects};
