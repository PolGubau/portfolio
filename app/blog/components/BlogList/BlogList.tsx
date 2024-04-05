import React from "react";
import { Blog } from "contentlayer/generated";
import { BlogLink } from "app/components/BlogLink";
const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <ul className="flex flex-col gap-4 justify-center">
      {blogs.map((post, i) => (
        <li key={post.slug} className="width-animation-both">
          <BlogLink slug={post.slug} name={post.title}>
            {post.publishedAt}
          </BlogLink>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
