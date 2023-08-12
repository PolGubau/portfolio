import React from "react";
export const useScrollLock = () => {
  const lockScroll = React.useCallback(() => {
    console.log("lockScroll");
    document.body.style.overflow = "hidden";
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = "";
  }, []);

  return {
    lockScroll,
    unlockScroll,
  };
};
