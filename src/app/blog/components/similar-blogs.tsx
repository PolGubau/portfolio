import { BlogLink } from "@/components/blog-link";
import { type Blog, allBlogs } from ".contentlayer/generated";

function SimilarBlogs({ blog: p, slug }: { blog: Blog; slug: string }) {
  const similarTechProjects = (): Blog[] => {
    // get 3 projects that has tech in common, if it's not the case, get up to 3 random projects

    const tags = p.tags;
    const otherBlogs = allBlogs.filter((post) => post.slug !== `blog/${slug}`);
    const similarTechFiles = otherBlogs.filter((post) =>
      post.tags.some((t) => tags.includes(t)),
    );

    if (similarTechFiles.length > 3) {
      return similarTechFiles.slice(0, 3);
    }

    return otherBlogs.slice(0, 2);
  };
  return (
    <>
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mt-16">
        Similar Posts
      </h2>
      <div className="flex flex-wrap gap-2">
        {similarTechProjects().map((project) => {
          const realSlug = project.slug.replace("blog/", "");
          return (
            <BlogLink key={project.slug} name={project.title} slug={realSlug} />
          );
        })}
      </div>
    </>
  );
}

export default SimilarBlogs;
