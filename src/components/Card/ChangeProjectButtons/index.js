import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./ChangeProjectButtons.css";
import { useHistory } from "react-router-dom";

//
export default function ChangeProjectButtons({ id, ids, isSelected }) {
  let actualID = ids.indexOf(id);
  //da la posición de la carta actual en el array ids
  let history = useHistory();

  const prevID = actualID - 1 < 0 ? ids[ids.length - 1] : ids[actualID - 1];
  const nextID = actualID + 1 > ids.length - 1 ? ids[0] : ids[actualID + 1];

  return (
    <>
      {isSelected && (
        <div className="buttons-image">
          <motion.button
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            animate={{ opacity: 1, x: 0 }}
            className="controls-image prev-image"
            onClick={() => history.push(`/${prevID}`)}
          >
            <FaArrowLeft size={25} />
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            animate={{ opacity: 1, x: 0 }}
            className="controls-image next-image"
            onClick={() => history.push(`/${nextID}`)}
          >
            <FaArrowRight size={25} />
          </motion.button>
          <div className="toHome" onClick={() => history.push(`/`)}></div>
        </div>
      )}
    </>
  );
}
