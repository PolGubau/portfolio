"use client";

import { LayoutGroup } from "framer-motion";
import NavItem from "./nav-item";
const navItems = {
  "/": {
    name: "Home",
  },
  "/projects": {
    name: "Projects",
  },
  "/blog": {
    name: "Blog",
  },
};

export default function Navbar() {
  return (
    <aside className="mb-12 tracking-tight flex justify-center md:justify-start">
      <div className="lg:sticky lg:top-20 flex gap-2 items-center">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-2 pb-0 fade md:overflow-auto scroll-pr-6 md:relative w-full "
            id="nav"
          >
            {Object.entries(navItems).map(([path, { name }]) => {
              return <NavItem key={path} path={path} name={name} />;
            })}
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
