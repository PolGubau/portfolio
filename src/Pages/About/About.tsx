import useMedia from "src/hooks/useMedia";
import AboutStructure from "./Components/AboutStructure/AboutStructure";
import LineContainer from "./Components/Line/LineContainer";
import { AboutStyled } from "./Styles/AboutStyled";
import { baseTheme } from "src/styles/theme/baseTheme";
const breakpoints = baseTheme.breakpoints;
const About = () => {
  const smallerThanTablet = useMedia(breakpoints.tablet);

  return (
    <AboutStyled>
      {!smallerThanTablet && <LineContainer />}
      <AboutStructure />
    </AboutStyled>
  );
};

export default About;
