import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "src/components/Card/utils/animations";
import "./Image.css";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import useMedia from "src/hooks/useMedia";
import { breakpoints } from "src/styles/theme";
import { IProject } from "src/Interfaces";

export const Image = ({
  isSelected,
  project,
}: {
  isSelected: boolean;
  project: IProject;
}) => {
  const mobile = useMedia(breakpoints.tablet);
  const { pointOfInterest, pathToImg, width, backgroundColor } = project;
  const inverted = useInvertedScale();

  return (
    <motion.div
      className={`card-image-container ${
        mobile && isSelected ? "mobileAndSelected" : ""
      }  ${
        isSelected
          ? "card-image-container-selected"
          : "card-image-container-no-selected"
      }`}
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      {/* Close Button */}
      <Link to={`/`}>
        <motion.p
          initial={{ opacity: 0 }}
          className="closeButton"
          animate={isSelected ? { opacity: 1 } : { opacity: 0 }}
        >
          <GrFormClose className="closeIcon" size={29} />
        </motion.p>
      </Link>

      <motion.img
        className={`card-image  `}
        src={`images/${pathToImg}`}
        alt={pathToImg}
        width={isSelected ? `${width + 200}px` : width}
        initial={false}
        style={{
          originX: 0,
          originY: 0,
          perspective: isSelected ? 1000 : 0,
          marginTop: isSelected ? pointOfInterest.y - 50 : pointOfInterest.y,
          marginLeft: isSelected ? pointOfInterest.x + 100 : pointOfInterest.x,
        }}
        onMouseLeave={(e) => {
          if (isSelected) {
            const image = e.target as HTMLImageElement;
            image.style.transform = `rotateY(0deg) rotateX(0deg)`;
            image.style.transition = "all 0.5s ease";
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
    </motion.div>
  );
};
