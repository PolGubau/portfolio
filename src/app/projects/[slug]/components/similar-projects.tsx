import { ProjectsList } from "@/components/Projects/ProjectList/project-list";
import { type Project, allProjects } from ".contentlayer/generated";

function SimilarProjects({
  project: p,
  slug,
}: {
  project: Project;
  slug: string;
}) {
  const AMOUNT = 2;

  const similarTechProjects = (): Project[] => {
    // get AMOUNT projects that has tech in common, if it's not the case, get up to 2 random projects

    const tech = p.tech;
    const otherProjects = allProjects.filter(
      (post) => post.slug !== `projects/${slug}`,
    );
    const similarProjects = otherProjects.filter((post) =>
      post.tech.some((t) => tech.includes(t)),
    );

    if (similarProjects.length > AMOUNT) {
      const shuffled = similarProjects.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, AMOUNT);
    }

    return otherProjects.slice(0, AMOUNT);
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

export { SimilarProjects };
