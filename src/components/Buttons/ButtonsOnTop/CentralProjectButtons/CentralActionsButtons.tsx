import { BsSearch } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { cardTexts } from "src/Consts";
import { useRecoilValue } from "recoil";
import { CentralActionsButtonsStyle } from "./Styled";
import { allProjects } from "src/Models/Texts/ProjectsTexts";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { getTextByLang } from "src/utils/getTextByLang";

const CentralActionsButtons = () => {
  const params = useParams<{ path: string }>();
  const cardPath: string = params.path || "";
  const lang = useRecoilValue(LanguageAtom);
  if (!cardPath) return null;

  const project = allProjects.find((project) => project.path === cardPath);
  if (!project) return null;

  const text = getTextByLang(lang.code, cardTexts);

  const ids = allProjects.map((project) => project.id);
  const actualID = ids.indexOf(project.id);
  //da la posición de la carta actual en el array ids
  const prevID = actualID - 1 < 0 ? ids[ids.length - 1] : ids[actualID - 1];
  const nextID = actualID + 1 > ids.length - 1 ? ids[0] : ids[actualID + 1];
  const prevPath = allProjects?.find((project) => project.id === prevID)?.path;
  const nextPath = allProjects?.find((project) => project.id === nextID)?.path;

  return (
    <>
      <CentralActionsButtonsStyle>
        <Link to={`/${prevPath}`} className="changeProjectLink">
          <FaArrowLeft size={25} />
        </Link>
        <a className="search" href={project.link} target="_blank">
          {text.linkButton}
          <span>
            <BsSearch />
          </span>
        </a>
        <Link to={`/${nextPath}`} className="changeProjectLink">
          <FaArrowRight size={25} />
        </Link>
      </CentralActionsButtonsStyle>
    </>
  );
};

export default CentralActionsButtons;
