import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BlogContent from "src/components/Blog/Show/BlogContent";
import { getCourseByPath } from "src/resources/courses/getCourses";

const ConcreteBlog = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const blog = getCourseByPath(path);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return <>{blog && <BlogContent blog={blog} />}</>;
};

export default ConcreteBlog;
