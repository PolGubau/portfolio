import { TbArrowBack, TbStairs } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
import { IBlogData } from "src/Models/Courses/CoursesData";
import { BlogContentStyled } from "./BlogContentStyled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";
import { getCoursesWithSameTags } from "src/resources/courses/getCourses";
import BlogList from "../List/BlogList/CourseList";
import remarkGfm from "remark-gfm";
const BlogContent = ({ blog }: { blog: IBlogData }) => {
  const similarBlogs = getCoursesWithSameTags(blog.tags, 3);
  return (
    <BlogContentStyled>
      <header>
        <Link to="/blog" className="goBack">
          <TbArrowBack />
          Back
        </Link>
        <h3>{blog.name}</h3>
      </header>
      <div className="details">
        <p className="level">
          <TbStairs />
          {blog.level}
        </p>
        <div className="tags">
          {blog.tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
      <ReactMarkdown
        className="content"
        children={blog.content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                showLineNumbers
                customStyle={{ borderRadius: "15px", margin: "10px 0 20px 0" }}
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                {...props}
                style={atomDark}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
        remarkPlugins={[remarkGfm]}
      />
      <section className="similarBlogs">
        <h2>Similar Blogs</h2>
        <BlogList blogs={similarBlogs} />
      </section>
    </BlogContentStyled>
  );
};
export default BlogContent;
