import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import { IBlogData } from "src/Models/Courses/CoursesData";
import { BlogStyled, OverlayStyled } from "./CourseStyled";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { baseTheme } from "src/styles/theme/baseTheme";

const Blog = ({ course }: { course: IBlogData }) => {
  const minContent = course.content;
  const navigate = useNavigate();

  const url = `/blog/${course.path}`;

  return (
    <BlogStyled
      to={url}
      color={course.color ? course.color : baseTheme.colors.blue}
    >
      <p className="name">{course.name}</p>
      <OverlayStyled>
        <span className="bigIcon">{course.icon ? course.icon : ""}</span>
      </OverlayStyled>
    </BlogStyled>
  );
};
export default Blog;
