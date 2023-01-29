import { render } from "react-dom";
import Header from "./components/Header/Header";
import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import Router from "./components/Router/Router";
import LanguageButtons from "./components/Buttons/ButtonsOnTop/Language/LanguageButtons";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <BrowserRouter>
          <LanguageButtons />
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
