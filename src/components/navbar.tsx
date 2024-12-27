"use client";

import { LayoutGroup } from "framer-motion";
import { useMemo } from "react";
import NavItem from "./nav-item";

const navItems = {
  "/": { name: "Home" },
  "/projects": { name: "Projects" },
  "/experiments": { name: "Experiments" },
  "/blog": { name: "Blog" },
};
export default function Navbar() {
  return (
    <aside
      className="mb-12 tracking-tight flex justify-center md:justify-start"
      style={{
        zIndex: 999,
      }}
    >
      <div className="sticky top-20 flex gap-2 items-center">
        {/* biome-ignore lint/correctness/useExhaustiveDependencies: <explanation> */}
        {useMemo(
          () => (
            <LayoutGroup>
              <nav className="flex flex-row items-start relative w-full">
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
