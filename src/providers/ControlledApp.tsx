import { modalState } from "../Recoil";
import { useRecoilState } from "recoil";

import { BrowserRouter } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { ModalProps, PopupsProvider } from "pol-ui";
const ControlledApp = () => {
  const [modal, setModal] = useRecoilState<ModalProps>(modalState);

  return (
    <BrowserRouter>
      <PopupsProvider modal={modal} setModal={setModal}>
        <div className="flex w-full justify-center">
          <Hero />
        </div>
      </PopupsProvider>
    </BrowserRouter>
  );
};

export default ControlledApp;
