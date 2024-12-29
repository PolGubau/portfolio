"use client";

import { LayoutGroup } from "framer-motion";
import { useMemo } from "react";
import NavItem from "./navItem";

const navItems = {
  "/": { name: "Home" },
  "/projects": { name: "Projects" },
  "/experiments": { name: "Experiments" },
  "/blog": { name: "Blog" },
};
export function Navbar() {
  return (
    <aside
      className="mb-12 flex justify-center tracking-tight md:justify-start"
      style={{
        zIndex: 999,
      }}
    >
      <div className="sticky top-20 flex items-center gap-2">
        {useMemo(
          () => (
            <LayoutGroup>
              <nav className="relative flex w-full flex-row items-start">
                {Object.entries(navItems).map(([path, { name }]) => {
                  return <NavItem key={path} path={path} name={name} />;
                })}
              </nav>
            </LayoutGroup>
          ),
          [navItems],
        )}
      </div>
    </aside>
  );
}
