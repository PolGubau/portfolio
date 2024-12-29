import { BlogLink } from "@/components/BlogLink";
import type { Blog } from ".contentlayer/generated";

export function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <ul className="flex flex-col justify-center gap-4">
      {blogs.map((post) => (
        <li key={post.slug} className=" project-cascade ">
          <BlogLink slug={post.slug} name={post.title}>
            {post.publishedAt}
          </BlogLink>
        </li>
      ))}
    </ul>
  );
}
