import { TbArrowBack, TbClockHour4, TbStairs } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
import { IBlogData } from "src/Models/Courses/CoursesData";
import { BlogContentStyled } from "./BlogContentStyled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";
import { getCoursesWithSameTags } from "src/resources/courses/getCourses";
import BlogList from "../List/BlogList/CourseList";
import remarkGfm from "remark-gfm";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import { timeToRead } from "../Functions/timeToRead";
import { useCallback, useEffect } from "react";
import { addBlogToAlreadyRedIfNotAlreadyRead } from "../Functions/userAlreadyRead";
import { coursePageText } from "src/Models/Texts/PagesText/coursePage.text";

//
const BlogContent = ({ blog }: { blog: IBlogData }) => {
  const similarBlogs = useCallback(() => {
    return getCoursesWithSameTags(blog, 4);
  }, [blog]);

  useEffect(() => {
    addBlogToAlreadyRedIfNotAlreadyRead(blog);
  }, [blog]);

  const l = useRecoilValue(LanguageAtom);
  const name = getTextByLang(l.code, blog.name);
  const level = getTextByLang(l.code, blog.level);
  const content = getTextByLang(l.code, blog.content);
  const coursePage = getTextByLang(l.code, coursePageText);

  //
  return (
    <BlogContentStyled>
      <header>
        <Link to="/blog" className="goBack">
          <TbArrowBack />
          {coursePage.goBack}
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="details">
        <p className="level">
          <TbStairs />
          {level}
        </p>
        <p className="level">
          <TbClockHour4 />
          {timeToRead(content.length)} min
        </p>
        <div className="tags">
          {blog.tags.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </div>
      </div>
      <ReactMarkdown
        className="content"
        children={content}
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
        <BlogList blogs={similarBlogs()} narrowLayout />
      </section>
    </BlogContentStyled>
  );
};
export default BlogContent;
