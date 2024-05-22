import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI",
  description: "Some of my UI creations and experiments",
  keywords: [
    "ui",
    "components",
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
  },
};

export default function BlogPage() {
  return (
    <>
      <h1 className="font-medium md:font-semibold text-xl md:text-2xl mb-8 text-center md:text-start text-balance">
        UI
      </h1>
      <div></div>
    </>
  );
}
