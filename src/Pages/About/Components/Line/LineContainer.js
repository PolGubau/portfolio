import { useEffect, useRef, useState } from "react";
import { LineStyled } from "./LineStyled";
import { pathLine } from "./path";

export default function LineContainer() {
  const line = useRef(null);
  const [shown, setShown] = useState(false);

  function animateOnScroll(value) {
    var line_total_length = line.current.getTotalLength();

    line.current.style.strokeDasharray = line_total_length; // Get the starting position of the draw.
    line.current.style.strokeDashoffset = line_total_length;
    var draw = line_total_length * value;
    line.current.style.strokeDashoffset = line_total_length - draw;
  }
  useEffect(() => {
    const handleScroll = () => {
      setShown(true);
      const value = window.scrollY / 2600;
      animateOnScroll(value);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <LineStyled>
      {shown && (
        <svg
          width={237}
          height={3112}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax meet"
        >
          <path ref={line} d={pathLine} stroke="#000" />
        </svg>
      )}
    </LineStyled>
  );
}
