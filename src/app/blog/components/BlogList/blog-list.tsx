import { BlogLink } from "@/components/blog-link";
import type { Blog } from ".contentlayer/generated";

function BlogList({ blogs }: { blogs: Blog[] }) {
  return (
    <ul className="flex flex-col gap-4 justify-center">
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

export default BlogList;
