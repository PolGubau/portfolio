import Madefor from "./MadeFor/MadeFor";
import { useAppSelector } from "src/redux/app/hooks";
import { actualLanguage } from "src/redux/features/languageSlice";
import { getTextByLang } from "src/utils/getTextByLang";
import { IProject } from "src/Interfaces";
import { DescriptionStyled } from "./DescriptionStyled";

export default function Description({ project }: { project: IProject }) {
  const { description } = project;

  const { language: lang } = useAppSelector(actualLanguage);
  const descriptionText = getTextByLang(lang, description);

  return (
    <>
      <DescriptionStyled>
        <header>
          <Madefor madeFor={project.madeFor} />
        </header>
        <p>{descriptionText}</p>
      </DescriptionStyled>
    </>
  );
}
