import { render } from "react-dom";
import Header from "./components/Header/Header";
import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import Router from "./components/Router/Router";
import LanguageButtons from "./components/Buttons/ButtonsOnTop/Language/LanguageButtons";
import { ThemeProvider } from "styled-components";
import { ThemeAtom } from "./Recoil/Atoms/ThemeAtoms";
import { useRecoilValue, RecoilRoot } from "recoil";
import { lightTheme } from "./styles/theme/lightTheme";
import { darkTheme } from "./styles/theme/darkMode";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className="container">
      <RecoilRoot>
        <Provider store={store}>
          <BrowserRouter>
            <Hero />
          </BrowserRouter>
        </Provider>
      </RecoilRoot>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
