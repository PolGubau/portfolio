import { render } from "react-dom";
import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </RecoilRoot>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
