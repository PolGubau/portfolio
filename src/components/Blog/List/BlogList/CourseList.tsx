import { IBlogData } from "src/Models/Courses/CoursesData";
import Blog from "../SingleBlog/Course";
import { BlogListStyled } from "./CourseListStyled";

const BlogList = ({ blogs }: { blogs: IBlogData[] }) => {
  return (
    <BlogListStyled>
      {blogs.map((course: IBlogData) => {
        return <Blog course={course} key={course.id} />;
      })}
    </BlogListStyled>
  );
};
export default BlogList;
