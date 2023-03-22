import useMedia from "src/hooks/useMedia";
import AboutStructure from "./Components/AboutStructure/AboutStructure";
import { AboutStyled } from "./Styles/AboutStyled";
import { baseTheme } from "src/styles/theme/baseTheme";
const breakpoints = baseTheme.breakpoints;
const About = () => {
  return (
    <AboutStyled>
      {/* {!smallerThanTablet && <LineContainer />} */}
      <AboutStructure />
    </AboutStyled>
  );
};

export default About;
