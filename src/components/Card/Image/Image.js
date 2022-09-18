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
        alt=""
        width={isSelected ? `${width + 200}px` : width}
        initial={false}
        // animate={
        //   isSelected
        //     ? { x: pointOfInterestX + 50, y: pointOfInterestY + -20 }
        //     : { x: pointOfInterestX, y: pointOfInterestY }
        // }
        style={{
          originX: 0,
          originY: 0,
          perspective: isSelected ? 1000 : 0,
          marginTop: isSelected ? pointOfInterestY - 50 : pointOfInterestY,
          marginLeft: isSelected ? pointOfInterestX + 100 : pointOfInterestX,
        }}
        onMouseLeave={(e) => {
          if (isSelected) {
            e.target.style.transform = `rotateY(0deg) rotateX(0deg)`;

            e.target.style.transition = "all 0.5s ease";
          }
        }}
        onMouseEnter={(e) => {
          if (isSelected) {
            e.target.style.transform = `rotateY(0deg) rotateX(0deg)`;

            e.target.style.transition = "none";
          }
        }}
        onMouseMove={(e) => {
          if (isSelected) {
            const x = (e.pageX - window.innerWidth / 1) / 100;
            const y = (e.pageY - window.innerHeight / 1) / 100;
            e.target.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
          }
        }}
        transition={closeSpring}
      />
    </motion.div>
  );
};
