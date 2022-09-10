import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "src/components/Card/utils/animations";
import "./Image.css";
import { GrFormClose } from "react-icons/gr";
// import { FiMaximize2 } from "react-icons/fi";
import { Link } from "react-router-dom";

export const Image = ({ isSelected, project, openBig, setOpenBig }) => {
  const { pointOfInterestX, pointOfInterestY, id, width, backgroundColor } =
    project;
  const inverted = useInvertedScale();

  return (
    <motion.div
      className="card-image-container"
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
      
      {/* `Future ft */}
      {/* <motion.p
        onClick={() => setOpenBig(true)}
        initial={{ opacity: 0 }}
        className="bigButton"
        animate={isSelected ? { opacity: 1 } : { opacity: 0 }}
      >
        <FiMaximize2 className="bigIcon" size={20} />
      </motion.p> */}

      <motion.img
        className="card-image"
        src={`images/${id}/0.webp`}
        alt=""
        width={isSelected ? `${width + 100}px` : `${width}px`}
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
