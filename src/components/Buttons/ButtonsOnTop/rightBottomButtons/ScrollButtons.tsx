import { BsArrowUpShort } from "react-icons/bs";
import { IconButton } from "pol-ui";

const ScrollButton = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <IconButton
      onClick={goToTop}
      icon={<BsArrowUpShort size={30} />}
      rounded="xl"
    />
  );
};

export default ScrollButton;
