import { Link } from "react-router-dom";
import { LanguageStyled } from "./upperStyled";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const UpperButtons = () => {
  const path = useLocation().pathname;
  console.log(path);

  return (
    <LanguageStyled>
      <Link to="/" className={`option ${path === "/" ? "active" : ""}`}>
        Home
      </Link>
      <Link
        to="/about"
        className={`option ${path === "/about" ? "active" : ""}`}
      >
        About
      </Link>
    </LanguageStyled>
  );
};

export default UpperButtons;
