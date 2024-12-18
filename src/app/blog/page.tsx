import type { Metadata } from "next";
import BlogList from "./components/BlogList/blog-list";
import { type Blog, allBlogs } from ".contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
  keywords: [
    "projects",
    "portfolio",
    "web development",
    "coding",
    "Pol Gubau Amores",
  ],
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
        url: "https://polgubau.com/brand/blog-thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Pol Gubau Amores' blog",
      },
    ],
    type: "website",
  },
};

export default function Page() {
  const sortBlogs = (blogs: Blog[]) =>
    blogs.sort((a, b) => {
      const dateA = new Date(a.publishedAt);
      const dateB = new Date(b.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });
  return (
    <>
      <h1 className="font-medium md:font-semibold text-xl md:text-2xl mb-8 text-center md:text-start text-pretty ">
        Some thoughts written down ✏️
      </h1>
      <BlogList blogs={sortBlogs(allBlogs)} />
    </>
  );
}
