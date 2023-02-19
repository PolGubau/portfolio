import React from "react";
import { useRecoilValue } from "recoil";
import LanguageButtons from "src/components/Buttons/ButtonsOnTop/Language/LanguageButtons";
import Footer from "src/components/Footer/Footer";
import Header from "src/components/Header/Header";
import Router from "src/components/Router/Router";
import { ThemeAtom } from "src/Recoil/Atoms/ThemeAtoms";
import { darkTheme } from "src/styles/theme/darkMode";
import { lightTheme } from "src/styles/theme/lightTheme";
import { ThemeProvider } from "styled-components";
import { MainStyled } from "./MainStyles";

const Hero = () => {
  const theme = useRecoilValue(ThemeAtom);
  const actualTheme = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={actualTheme}>
      <MainStyled>
        <div className="container">
          <LanguageButtons />
          <Header />
          <Router />
          <Footer />
        </div>
      </MainStyled>
    </ThemeProvider>
  );
};

export default Hero;
