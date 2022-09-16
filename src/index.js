import { render } from "react-dom";
import Header from "./components/Header/Header";
import { CardList } from "./components/Card/CardList/CardList";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <LangProvider>
      <div className="container">
        <Router>
          <Header />
          <CardList />
          <Footer />
        </Router>
      </div>
    </LangProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
