import * as React from "react";
import { render } from "react-dom";
import Header from "./components/Header/Header";
import { CardList } from "./components/Card/CardList";
import "./styles.css";
import Footer from "./components/Footer/Footer";
import { LangProvider } from "./context/LangContext";
import { Languages } from "./Consts";

function App() {
  const lang = Languages[0];
  return (
    <LangProvider>
      <div className="container">
        <Header lang={lang} />

        <CardList lang={lang} />
        <Footer lang={lang} />
      </div>
    </LangProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
