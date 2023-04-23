import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import List from "../Card/CardList/CardList";

const AboutLazy = lazy(() => import("src/Pages/About/About"));
const BlogPageLazy = lazy(() => import("src/Pages/Blog/BlogPage"));
const ConcreteBlogLazy = lazy(() => import("src/Pages/Blog/ConcreteBlog"));
//
const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:path" element={<List />} />
        <Route path="/about" element={<AboutLazy />} />
        <Route path="/courses" element={<BlogPageLazy />} />
        <Route path="/courses/:path" element={<ConcreteBlogLazy />} />
        <Route path="*" element={<List />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
