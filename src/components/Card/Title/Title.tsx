import { IProject } from "src/Interfaces";
import { getTextByLang } from "src/utils/getTextByLang";
import { TitleStyled } from "./TitleStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import useGoTo from "src/hooks/useGoTo";
import { Text } from "pol-ui";
import useFilter from "src/hooks/useFilter";
export const Title = ({ project }: { project: IProject }) => {
  const l = useRecoilValue(LanguageAtom);

  const { title, textColor, year, category, link } = project;
  const categoryLangugaged = getTextByLang(l.code, category);
  const { goThere } = useGoTo();
  const { filterProjects } = useFilter();

  const handleClickTag = (tag: string) => {
    filterProjects(tag);
    goThere("/");
  };

  return (
    <TitleStyled project={project} initial={false}>
      <a href={link} target="_blank">
        <Text size={2} className="title titleOpened" value={title} />
      </a>
      <div className="details">
        <Text value={categoryLangugaged} className="category" />
        <Text value={year.toString()} className="yearCard" />
      </div>
      <div className="Description-tagsContainer">
        {project.tags.map((tag: string) => (
          <p
            key={tag}
            onClick={() => handleClickTag(tag)}
            className="Description-tag"
          >
            {tag}
          </p>
        ))}
      </div>
    </TitleStyled>
  );
};
