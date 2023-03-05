import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div>
      <Link to="/blog/introduction">Go to this course</Link>
    </div>
  );
};

export default BlogPage;
