import { motion } from "framer-motion";
import { closeSpring } from "src/components/Card/utils/animations";
import useMedia from "src/hooks/useMedia";
import { breakpoints } from "src/styles/theme";
import { IProject } from "src/Interfaces";
import { Title } from "../Title/Title";
import { ImageStyled } from "./ImageStyled";
import CloseButton from "src/components/Buttons/CloseButton/CloseButton";

export const Image = ({
  isSelected = true,
  project,
}: {
  isSelected?: boolean;
  project: IProject;
}) => {
  const mobile = useMedia(breakpoints.tablet);
  const { pathToImg, backgroundColor } = project;

  return (
    <ImageStyled
      opened={isSelected}
      mobile={mobile}
      backgroundColor={backgroundColor}
    >
    

      {isSelected && <CloseButton />}

      <motion.img
        className={`card-image`}
        src={`images/${pathToImg}`}
        alt={pathToImg}
        onMouseLeave={(e) => {
          if (isSelected) {
            const image = e.target as HTMLImageElement;
            image.style.transform = `rotateY(0deg) rotateX(0deg)`;
            image.style.transition = "all 0.3s ease";
          }
        }}
        onMouseEnter={(e) => {
          if (isSelected) {
            const image = e.target as HTMLImageElement;
            image.style.transform = `rotateY(0deg) rotateX(0deg)`;
            image.style.transform = "none";
          }
        }}
        onMouseMove={(e) => {
          if (isSelected) {
            const x = (e.pageX - window.innerWidth / 1) / 100;
            const y = (e.pageY - window.innerHeight / 1) / 100;
            const image = e.target as HTMLImageElement;
            image.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
          }
        }}
        transition={closeSpring}
      />
    </ImageStyled>
  );
};
