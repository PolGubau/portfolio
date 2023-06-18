import { motion } from "framer-motion";
import { closeSpring, openSpring } from "src/components/Card/utils/animations";
import { FaArrowRight } from "react-icons/fa";
import { IProject } from "src/Interfaces";
import { getTextByLang } from "src/utils/getTextByLang";
import { TitleStyled } from "./TitleStyled";
import { LanguageAtom } from "src/Recoil/Atoms/LanguageAtom";
import { useRecoilValue } from "recoil";
import useGoTo from "src/hooks/useGoTo";
import useFilter from "src/hooks/useFilter";
export const Title = ({
  project,
  isSelected,
}: {
  project: IProject;
  isSelected: boolean;
}) => {
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
    <TitleStyled
      project={project}
      initial={false}
      transition={isSelected ? openSpring : closeSpring}
    >
      {isSelected ? (
        <a href={link} target="_blank">
          <h2 className="title titleOpened" style={{ color: textColor }}>
            {title}
            <motion.div
              transition={{ delay: 0.3, duration: 0.3 }}
              initial={{ display: "none", x: -100, opacity: 0 }}
              animate={{ display: "flex", x: 0, opacity: 1 }}
              className="arrow"
            >
              <FaArrowRight style={{ color: textColor }} />
            </motion.div>
          </h2>
        </a>
      ) : (
        <h2 className="title" style={{ color: textColor }}>
          {title}
        </h2>
      )}
      <div className="details">
        <span
          className="category"
          style={{ color: textColor, opacity: isSelected ? 1 : 0 }}
        >
          {categoryLangugaged}
        </span>
        <span
          className="yearCard"
          style={{ color: textColor, opacity: isSelected ? 1 : 0 }}
        >
          {year}
        </span>
      </div>
      {isSelected && (
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
      )}
    </TitleStyled>
  );
};
