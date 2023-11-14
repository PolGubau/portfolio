import type { Metadata } from "next";
import Link from "next/link";
import { Blog, allBlogs } from "contentlayer/generated";
import BlogList from "./components/BlogList/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

const sortBlogs = (blogs: Blog[]) =>
  blogs.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8">Check my personal Blog</h1>
      <BlogList blogs={sortBlogs(allBlogs)} />
    </section>
  );
}
