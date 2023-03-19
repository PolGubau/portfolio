import { Link } from "react-router-dom";
import { LanguageStyled } from "./upperStyled";
import { useLocation } from "react-router-dom";
const UpperButtons = () => {
  const path = useLocation().pathname;

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
      <Link
        to="/blog"
        className={`option 
      ${path.includes("/blog") ? "active" : ""}`}
      >
        Blog
      </Link>
    </LanguageStyled>
  );
};

export default UpperButtons;
