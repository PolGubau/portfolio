import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import List from "../Card/CardList/CardList";
import CenteredLoader from "../Loader/CenteredLoader";

const AboutLazy = lazy(() => import("src/Pages/About/About"));

//
const Router = () => {
  return (
    <Suspense fallback={<CenteredLoader />}>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:path" element={<List />} />
        <Route path="/about" element={<AboutLazy />} />

        <Route path="*" element={<List />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
