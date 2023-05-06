import { Link } from "react-router-dom";
import { LanguageStyled } from "./upperStyled";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";
import { NavContent } from "src/Models/Texts/PagesText/layout.text";

const UpperButtons = () => {
  const l = useRecoilValue(LanguageAtom);

  const path = useLocation().pathname;

  const navTabsActives = NavContent.filter((item) => item.active);

  const isThisPathOpen = (actualPath: string, pathFromTab: string) => {
    // we want to return true if the actual path contains the path from the tab, if the path from tab is home, means '/', we want to return true if the actual path is home but not if it is '/about' or '/courses'
    if (pathFromTab === "/") {
      return actualPath === "/";
    } else {
      return actualPath.includes(pathFromTab);
    }
  };
  return (
    <LanguageStyled>
      {navTabsActives.map((item) => {
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`option ${
              isThisPathOpen(path, item.path) ? "active" : ""
            }`}
          >
            {getTextByLang(l.code, item.labels)}
          </Link>
        );
      })}
    </LanguageStyled>
  );
};

export default UpperButtons;
