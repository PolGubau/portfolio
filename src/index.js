import * as React from "react";
import { render } from "react-dom";
import Header from "./components/Header/Header";
import { CardList } from "./components/Card/CardList";
import "./styles.css";
import Footer from "./components/Footer/Footer";
import langHook from "./hooks/langHook";

function App() {
  const lang = langHook();

  return (
    <div className="container">
      <Header lang={lang} />

      <CardList lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
