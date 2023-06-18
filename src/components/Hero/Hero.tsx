import { useRecoilState, useRecoilValue } from "recoil";
import LanguageButtons from "src/components/Buttons/ButtonsOnTop/Language/LanguageButtons";
import Footer from "src/components/Layout/Footer/Footer";
import Router from "src/components/Router/Router";
import { OptionsAtom } from "src/Recoil/Atoms/OptionsAtom";
import { projectSelectedAtom } from "src/Recoil/Atoms/ProjectSelectedAtom";
import { ThemeAtom } from "src/Recoil/Atoms/ThemeAtoms";
import { darkTheme } from "src/styles/theme/darkMode";
import { lightTheme } from "src/styles/theme/lightTheme";
import { ThemeProvider } from "styled-components";
import RightBottomButtons from "../Buttons/ButtonsOnTop/rightBottomButtons";
import Header from "../Layout/Header/Header";
import { Modal } from "pol-ui";
import { MainStyled } from "./MainStyles";

const Hero = () => {
  const theme = useRecoilValue(ThemeAtom);
  const options = useRecoilValue(OptionsAtom);
  const projectSelected = useRecoilValue(projectSelectedAtom);
  const [darkMode, setDarkMode] = useRecoilState(ThemeAtom);

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };
  const actualTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={actualTheme}>
      <MainStyled>
        <div className="App">
          <LanguageButtons />
          <Modal
            open={options && options.show}
            title="Options"
            onClose={() => {}}
          >
            <div className="option" onClick={toggleDarkMode}>
              <h3>Dark Mode</h3>
              <div
                className={`switch ${darkMode === "dark" ? "selected" : ""}`}
              ></div>
            </div>
          </Modal>
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
