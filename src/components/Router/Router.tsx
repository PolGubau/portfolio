import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import List from "../Card/CardList/CardList";
import CenteredLoader from "../Loader/CenteredLoader";

const AboutLazy = lazy(() => import("src/Pages/About/About"));
const BlogPageLazy = lazy(() => import("src/Pages/Blog/CoursesPage"));
const ConcreteBlogLazy = lazy(() => import("src/Pages/Blog/ConcreteBlog"));
//
const Router = () => {
  return (
    <Suspense fallback={<CenteredLoader />}>
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
