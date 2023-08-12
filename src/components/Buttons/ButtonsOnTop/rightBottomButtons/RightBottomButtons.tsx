import { useEffect, useState } from "react";
import ScrollButton from "./ScrollButtons";
import SettingsButtons from "./OptionsButton/OptionsButtons";
import { RightBottomButtonsStyled } from "./Styles/RightButtonsStyled";

const RightBottomButtons = () => {
  const [show, setShow] = useState(false);
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
      {show && <ScrollButton />}
      <SettingsButtons />
    </RightBottomButtonsStyled>
  );
};

export default RightBottomButtons;
