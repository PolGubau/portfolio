import { Link } from "react-router-dom";
import AboutStructure from "./Components/AboutStructure/AboutStructure";
import LineContainer from "./Components/Line/LineContainer";
import { AboutStyled } from "./Styles/AboutStyled";
const About = () => {
  return (
    <AboutStyled>
      <LineContainer />
      <AboutStructure />
    </AboutStyled>
  );
};

export default About;
