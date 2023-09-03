import { IProject } from "src/Interfaces";
import { getTextByLang } from "src/utils/getTextByLang";
import { TitleStyled } from "./TitleStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import { Text } from "pol-ui";
export const Title = ({ project }: { project: IProject }) => {
  const l = useRecoilValue(LanguageAtom);

  const { title, year, category, link } = project;
  const categoryLangugaged = getTextByLang(l.code, category);

  return (
    <TitleStyled project={project} initial={false}>
      <a href={link} target="_blank">
        <Text size={2} className="title titleOpened" value={title} />
      </a>
      <div className="details">
        <Text value={categoryLangugaged} className="category" />
        <Text value={year.toString()} className="yearCard" />
      </div>
    </TitleStyled>
  );
};
