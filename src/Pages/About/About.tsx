import useMedia from "src/hooks/useMedia";
import { breakpoints } from "src/styles/theme";
import AboutStructure from "./Components/AboutStructure/AboutStructure";
import LineContainer from "./Components/Line/LineContainer";
import { AboutStyled } from "./Styles/AboutStyled";
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
