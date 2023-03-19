import BlogList from "src/components/Blog/List/BlogList/CourseList";
import blogs from "src/Models/Courses/CoursesData";

const BlogPage = () => {
  return <BlogList blogs={blogs} />;
};

export default BlogPage;
