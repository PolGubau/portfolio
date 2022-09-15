import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "src/components/Card/utils/animations";
import "./Image.css";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";

export const Image = ({ isSelected, project, mobile }) => {
  const {
    pointOfInterestX,
    pointOfInterestY,
    pathToImg,
    width,
    backgroundColor,
  } = project;
  const inverted = useInvertedScale();
  return (
    <motion.div
      className={`card-image-container ${
        mobile && isSelected ? "mobileAndSelected" : ""
      }`}
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
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
        className="card-image"
        src={`images/${pathToImg}`}
        alt=""
        width={isSelected ? `${width + 200}px` : width}
        initial={false}
        animate={
          isSelected
            ? { x: pointOfInterestX + 50, y: pointOfInterestY + -20 }
            : { x: pointOfInterestX, y: pointOfInterestY }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};
