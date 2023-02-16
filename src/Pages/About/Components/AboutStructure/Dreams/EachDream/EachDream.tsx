import { motion, Variants } from "framer-motion";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Styled } from "./Styled";
import { useState } from "react";
//

const EachDream = ({ dream }: { dream: any }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const cardVariants: Variants = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  };
  const cardVariantsDelay: Variants = {
    offscreen: {
      width: 0,
    },
    onscreen: {
      width: "104%",
      transition: {
        delay: 0.5,
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <motion.li
      key={dream.id}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: "all" }}
      variants={cardVariants}
      onHoverStart={() => {
        setIsHovered(true);
      }}
      onHoverEnd={() => {
        setIsHovered(false);
      }}
    >
      <Styled done={dream.status} ishovered={isHovered as boolean}>
        {dream.status === "done" && (
          <>
            <motion.div
              className="line"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: "all" }}
              variants={cardVariantsDelay}
            ></motion.div>
            <RiCheckboxCircleLine className="done" />
          </>
        )}
        {dream.status === "loading" && (
          <AiOutlineLoading3Quarters className="loadingIcon" />
        )}
        {dream.status === "false" && (
          <RiCheckboxBlankCircleLine className="notDone" />
        )}
        <span>{dream.title}</span>
      </Styled>
    </motion.li>
  );
};

export default EachDream;
