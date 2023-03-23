import { IBlogData } from "src/Models/Courses/CoursesData";
import Blog from "../SingleBlog/Course";
import { BlogListStyled } from "./CourseListStyled";

const BlogList = ({
  blogs,
  narrowLayout = false,
}: {
  blogs: IBlogData[];
  narrowLayout?: boolean;
}) => {
  return (
    <BlogListStyled narrowLayout={narrowLayout}>
      {blogs.map((course: IBlogData) => {
        return <Blog course={course} key={course.id} />;
      })}
    </BlogListStyled>
  );
};
export default BlogList;
