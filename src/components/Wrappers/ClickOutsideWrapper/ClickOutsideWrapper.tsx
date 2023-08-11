import React, { useEffect, useRef } from "react";

interface ClickOutsideWrapperProps {
  onClickOutside: () => void;
  children: React.ReactNode;
}

export const ClickOutsideWrapper = ({
  onClickOutside,
  children,
}: ClickOutsideWrapperProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClickOutside]);

  return <div ref={wrapperRef}>{children}</div>;
};
