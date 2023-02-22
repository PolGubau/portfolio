import { Routes, Route } from "react-router-dom";
import About from "src/Pages/About/About";
import List from "../Card/CardList/CardList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:path" element={<List />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
