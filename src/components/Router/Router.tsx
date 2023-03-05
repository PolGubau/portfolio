import { Routes, Route } from "react-router-dom";
import About from "src/Pages/About/About";
import BlogPage from "src/Pages/Blog/BlogPage";
import ConcreteBlog from "src/Pages/Blog/ConcreteBlog";
import List from "../Card/CardList/CardList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:path" element={<List />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/*" element={<ConcreteBlog />} />

      <Route path="*" element={<List />} />
    </Routes>
  );
};

export default Router;
