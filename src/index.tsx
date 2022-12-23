import { render } from "react-dom";
import Header from "./components/Header/Header";
import { CardList } from "./components/Card/CardList/CardList";
import "./styles/styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Router>
          <Header />
          <CardList />
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
