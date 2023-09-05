import { useEffect, useState } from "react";
import ScrollButton from "./ScrollButtons";
import { RightBottomButtonsStyled } from "./Styles/RightButtonsStyled";
import { ThemeAtom } from "src/Recoil";
import { useRecoilState } from "recoil";
import { IconButton } from "pol-ui";
import { TbMoon, TbSun } from "react-icons/tb";

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

  const [theme, setTheme] = useRecoilState(ThemeAtom);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <RightBottomButtonsStyled>
      {show && <ScrollButton />}
      <IconButton
        onClick={toggleTheme}
        rounded="xl"
        icon={theme === "dark" ? <TbSun size={30} /> : <TbMoon size={30} />}
      />
    </RightBottomButtonsStyled>
  );
};

export default RightBottomButtons;
