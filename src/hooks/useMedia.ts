import { useEffect, useState } from "react";

const useMedia = (width: undefined | number) => {
  if (!width) width = 700;
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`);
    const listener = () => setIsDesktop(media.matches);
    listener();
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  }, [isDesktop]);
  return !isDesktop;
};

export default useMedia;
