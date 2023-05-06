import BlogList from "src/components/Blog/List/BlogList/CourseList";
import blogs from "src/Models/Courses/CoursesData";

const CoursesPage = () => {
  return <BlogList blogs={blogs} />;
};

export default CoursesPage;
