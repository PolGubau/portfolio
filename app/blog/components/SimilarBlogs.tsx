import { BlogLink } from "app/components/BlogLink";
import { Blog, Projects, allBlogs } from "contentlayer/generated";
import React from "react";

const SimilarBlogs = ({ blog: p, slug }: { blog: Blog; slug: string }) => {
  const similarTechProjects = (): Blog[] => {
    // get 3 projects that has tech in common, if it's not the case, get up to 3 random projects

    const tags = p.tags;
    const otherBlogs = allBlogs.filter((post) => post.slug !== `blog/${slug}`);
    const similarTechProjects = otherBlogs.filter((post) =>
      post.tags?.split(" ").some((t) => tags?.includes(t))
    );

    if (similarTechProjects.length > 3) {
      return similarTechProjects.slice(0, 3);
    }

    return otherBlogs.slice(0, 2);
  };
  return (
    <>
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mt-16">
        Similar Posts
      </h2>
      <div className="flex flex-wrap gap-2">
        {similarTechProjects().map((p) => {
          const realSlug = p.slug.replace("blog/", "");
          return <BlogLink key={p.slug} name={p.title} slug={realSlug} />;
        })}
      </div>
    </>
  );
};

export default SimilarBlogs;
