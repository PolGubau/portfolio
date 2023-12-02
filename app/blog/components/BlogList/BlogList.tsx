"use client";
import React from "react";
import { motion } from "framer-motion";
import { Blog } from "contentlayer/generated";
import { BlogLink } from "app/components/BlogLink";
const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        type: "spring",
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <motion.ul variants={container} initial="hidden" animate="show" className="flex flex-col gap-4">
      {blogs.map((post) => (
        <motion.li key={post.slug} variants={item} className="text-neutral-900 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 bg-neutral-200  first-letter:hover:bg-neutral-300 rounded-xl transition-all">
          <BlogLink slug={post.slug} name={post.title}>
            {post.publishedAt}
          </BlogLink>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default BlogList;
