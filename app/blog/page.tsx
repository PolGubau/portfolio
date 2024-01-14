import type { Metadata } from "next";
import { Blog, allBlogs } from "contentlayer/generated";
import BlogList from "./components/BlogList/BlogList";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
  keywords: ["projects", "portfolio", "web development", "coding"],
  authors: {
    url: "https://polgubau.com",
    name: "Pol Gubau Amores",
  },
  openGraph: {
    title: "Blog | Pol Gubau Amores",
    description:
      "Explore my thoughts on software development, design, and more.",
    url: "https://polgubau.com/blog",
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

const sortBlogs = (blogs: Blog[]) =>
  blogs.sort((a, b) => {
    const dateA = new Date(a.publishedAt);
    const dateB = new Date(b.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

export default function BlogPage() {
  return (
    <>
      <h1 className="font-semibold text-2xl mb-8">
        Check my personal Blog and Essays ✏️
      </h1>
      <BlogList blogs={sortBlogs(allBlogs)} />
    </>
  );
}
