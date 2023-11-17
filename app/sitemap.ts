import { allBlogs, allProjects } from "contentlayer/generated";

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `https://polgubau.com/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));
  const projects = allProjects.map((post) => ({
    url: `https://polgubau.com/blog/${post.slug}`,
    lastModified: post.startedAt,
  }));

  const routes = ["", "/blog", "/projects"].map((route) => ({
    url: `https://polgubau.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...projects];
}
