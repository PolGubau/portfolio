import * as React from "react";
import { render } from "react-dom";
import Header from "./components/Header/Header";
import { CardList } from "./components/Card/CardList";
import "./styles.css";
import { useState } from "react";
import { Languages } from "./Service/Consts";

//import css
import "./styles.css";
function App() {
  const [lang, setLang] = useState(Languages[0]);

  return (
    <div className="container">
      <Header setLang={setLang} lang={lang} />

      <CardList />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
