import { allBlogs, allProjects } from "contentlayer/generated";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = allBlogs.map((post) => ({
    url: `https://polgubau.com/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: "daily",
    priority: 0.7,
  }));
  const projects = allProjects.map((post) => ({
    url: `https://polgubau.com/${post.slug}`,
    lastModified: post.startedAt,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const routes = ["", "/blog", "/projects"].map((route) => ({
    url: `https://polgubau.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    priority: 1,
  }));

  return [...routes, ...blogs, ...projects];
}
