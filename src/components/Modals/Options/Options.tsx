import { IoIosClose } from "react-icons/io";
import { useRecoilState } from "recoil";
import GenericWrapper from "src/components/Layout/Wrapper/GenericWrapper";

import { OptionsAtom } from "src/Recoil/Atoms/OptionsAtom";
import { ThemeAtom } from "src/Recoil/Atoms/ThemeAtoms";
import { OptionsStyled } from "./OptionsModalStyled";

const OptionsModal = () => {
  const [show, setShow] = useRecoilState(OptionsAtom);

  const [darkMode, setDarkMode] = useRecoilState(ThemeAtom);
  //
  const closeModal = () => {
    setShow({ show: false });
  };
  //
  const toggleDarkMode = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };
  //

  return (
    <>
      <OptionsStyled>
        <button className="closeButton" onClick={closeModal}>
          <IoIosClose size={40} />
        </button>
        <h2>Options</h2>
        <div className="option" onClick={toggleDarkMode}>
          <h3>Dark Mode</h3>
          <div className={`switch ${darkMode === "dark" ? "selected" : ""}`}>
            <span></span>
          </div>
        </div>
      </OptionsStyled>
      <GenericWrapper onClick={closeModal} />
    </>
  );
};

export default OptionsModal;
