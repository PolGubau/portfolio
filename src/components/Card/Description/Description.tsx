import Madefor from "./MadeFor/MadeFor";
import { getTextByLang } from "src/utils/getTextByLang";
import { IProject } from "src/Interfaces";
import { DescriptionStyled } from "./DescriptionStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
export default function Description({ project }: { project: IProject }) {
  const l = useRecoilValue(LanguageAtom);
  const descriptionText = getTextByLang(l.code, project.description);
  return (
    <DescriptionStyled>
      <header>
        <Madefor madeFor={project.madeFor} />
      </header>
      <p>{descriptionText}</p>
    </DescriptionStyled>
  );
}
