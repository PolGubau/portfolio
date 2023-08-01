import { useEffect, useState } from "react";
import ScrollButton from "./ScrollButtons";
import SettingsButtons from "./OptionsButton/OptionsButtons";
import { RightBottomButtonsStyled } from "./Styles/RightButtonsStyled";
import { projectSelectedAtom } from "src/Recoil/Atoms/ProjectSelectedAtom";
import { useRecoilValue } from "recoil";

const RightBottomButtons = () => {
  const [show, setShow] = useState(false);
  const projectSelected = useRecoilValue(projectSelectedAtom);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);
  return (
    <RightBottomButtonsStyled>
      {!projectSelected.id && show && <ScrollButton />}
      <SettingsButtons />
    </RightBottomButtonsStyled>
  );
};

export default RightBottomButtons;
