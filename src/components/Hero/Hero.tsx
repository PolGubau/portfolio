import { useRecoilValue } from "recoil";
import LanguageButtons from "src/components/Buttons/ButtonsOnTop/Language/LanguageButtons";
import Footer from "src/components/Layout/Footer/Footer";
import Router from "src/components/Router/Router";
import { OptionsAtom } from "src/Recoil/Atoms/OptionsAtom";
import { projectSelectedAtom } from "src/Recoil/Atoms/ProjectSelectedAtom";
import { ThemeAtom } from "src/Recoil/Atoms/ThemeAtoms";
import { darkTheme } from "src/styles/theme/darkMode";
import { lightTheme } from "src/styles/theme/lightTheme";
import { ThemeProvider } from "styled-components";
import Header from "../Layout/Header/Header";
import { MainStyled } from "./MainStyles";
import OptionsModal from "../Modals/Options/Options";
import { RightBottomButtons } from "../Buttons/ButtonsOnTop/rightBottomButtons";

const Hero = () => {
  const theme = useRecoilValue(ThemeAtom);
  const options = useRecoilValue(OptionsAtom);
  const projectSelected = useRecoilValue(projectSelectedAtom);

  const actualTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={actualTheme}>
      <MainStyled>
        <div className="App">
          <LanguageButtons />
          {options.show && <OptionsModal />}
          {/* {options && options.show && <OptionsModal />} */}
          {!projectSelected.id && <RightBottomButtons />}

          <Header />
          <Router />
          <Footer />
        </div>
        <div className="background"></div>
      </MainStyled>
    </ThemeProvider>
  );
};

export default Hero;
