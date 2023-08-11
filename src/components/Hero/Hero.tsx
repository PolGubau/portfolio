import { useRecoilValue } from "recoil";
import LanguageButtons from "src/components/Buttons/ButtonsOnTop/Language/LanguageButtons";
import Footer from "src/components/Layout/Footer/Footer";
import Router from "src/components/Router/Router";
import { OptionsAtom } from "src/Recoil/Atoms/OptionsAtom";
import { projectSelectedAtom } from "src/Recoil/Atoms/ProjectSelectedAtom";
import { ThemeAtom } from "src/Recoil/Atoms/ThemeAtoms";
import { darkTheme } from "src/styles/theme/darkMode";
import { lightTheme } from "src/styles/theme/lightTheme";
import Header from "../Layout/Header/Header";
import { MainStyled } from "./MainStyles";
import OptionsModal from "../Modals/Options/Options";
import { RightBottomButtons } from "../Buttons/ButtonsOnTop/rightBottomButtons";
import { modalState } from "src/Recoil";
import { ThemeProvider } from "styled-components";
import FocusLock from "react-focus-lock";
import { ModalStyled } from "../Modals/Modal.styled";
import { useState } from "react";
const Hero = () => {
  const modal = useRecoilValue(modalState);
  const theme = useRecoilValue(ThemeAtom);
  const options = useRecoilValue(OptionsAtom);
  const projectSelected = useRecoilValue(projectSelectedAtom);

  const actualTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={actualTheme}>
      <MainStyled>
        <div className="App">
          <LanguageButtons />
          <ModalStyled
            onBackgroundClick={modal.handleClose}
            isOpen={modal.isOpen}
            onEscapeKeydown={modal.handleClose}
            aria-modal={true}
            aria-labelledby="modal-label"
            maxWidth={modal.maxWidth}
          >
            {modal.children}
          </ModalStyled>

          {options?.show && <OptionsModal />}
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
