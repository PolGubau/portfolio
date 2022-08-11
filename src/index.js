import * as React from "react";
import { render } from "react-dom";
import Header from "./components/Header/Header";
import { CardList } from "./components/Card/CardList/CardList";
import "./styles.css";
import Footer from "./components/Footer/Footer";
import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <LangProvider>
      <div className="container">
        <Header />

        <CardList />
        <Footer />
      </div>
    </LangProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
