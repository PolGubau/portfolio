import * as React from "react";
import { render } from "react-dom";
import Header from "./components/Header/Header";
import { CardList } from "./components/Card/CardList";
import "./styles.css";

import langHook from "./hooks/langHook";
import { useState, useEffect } from "react";

function App() {
  const [lang, setlang] = useState(langHook());

  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);


  return (
    <div className="container">
      <Header lang={lang} setLang={setlang} />

      <CardList lang={lang} />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
