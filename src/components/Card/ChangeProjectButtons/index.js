import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./ChangeProjectButtons.css";
import { Link } from "react-router-dom";
import useMedia from "src/hooks/useMedia";

//
export default function ChangeProjectButtons({ id, ids, isSelected, allData }) {
  let actualID = ids.indexOf(id);
  //da la posición de la carta actual en el array ids
  const prevID = actualID - 1 < 0 ? ids[ids.length - 1] : ids[actualID - 1];
  const nextID = actualID + 1 > ids.length - 1 ? ids[0] : ids[actualID + 1];

  const prevPath = allData.find((project) => project.id === prevID).path;
  const nextPath = allData.find((project) => project.id === nextID).path;

  const isMobile = useMedia(700);

  return (
    <>
      {isSelected && (
        <>
          <div className="buttons-image">
            <Link to={`/${prevPath}`} className="changeProjectLink">
              <motion.button
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                animate={{ opacity: 1, x: 0 }}
                className="controls-image prev-image"
              >
                <FaArrowLeft size={25} />
              </motion.button>
            </Link>
            {!isMobile && (
              <Link to={`/`}>
                <div className="toHome"></div>
              </Link>
            )}
            <Link to={`/${nextPath}`} className="changeProjectLink">
              <motion.button
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                animate={{ opacity: 1, x: 0 }}
                className="controls-image next-image"
              >
                <FaArrowRight size={25} />
              </motion.button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
