import * as React from "react";
import { motion } from "framer-motion";
import { closeSpring, openSpring } from "src/components/Card/utils/animations";
import "./Title.css";
import { FaArrowRight } from "react-icons/fa";

export const Title = ({ project, isSelected, lang }) => {
  const { title, textColor, year, category, link } = project;

  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <motion.div
      className="title-container"
      initial={false}
      transition={isSelected ? openSpring : closeSpring}
    >
      {isSelected ? (
        <a onClick={handleClick} href={link}>
          <h2 className="title" style={{ color: textColor }}>
            {title}
            <motion.div
              transition={{ delay: 0.3, duration: 0.3 }}
              initial={{ display: "none", x: -100, opacity: 0 }}
              duration={2}
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
          {category[lang]}
        </span>
        <span
          className="year"
          style={{ color: textColor, opacity: isSelected ? 1 : 0 }}
        >
          {year}
        </span>
      </div>
    </motion.div>
  );
};
