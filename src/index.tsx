import "./styles/styles.css";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Hero from "./components/Hero/Hero";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    </RecoilRoot>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode!);
root.render(<App />);
