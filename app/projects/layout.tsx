import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <h1 className="font-semibold text-2xl mb-8">
        Discover my recent Projects 🚀
      </h1>
      {children}
    </main>
  );
};

export default layout;
