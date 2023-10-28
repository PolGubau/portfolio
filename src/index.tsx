import { RecoilRoot } from "recoil";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./styles/styles.css";
import ControlledApp from "./providers/ControlledApp";

function App() {
  return (
    <RecoilRoot>
      <ControlledApp />
      <Analytics />
    </RecoilRoot>
  );
}

const domNode = document.getElementById("root");
const root = createRoot(domNode!);

root.render(<App />);
