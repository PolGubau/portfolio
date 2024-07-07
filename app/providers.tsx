"use client";
import { PoluiProvider, Toaster } from "pol-ui";
import React from "react";

function Providers({ children }) {
  return (
    <PoluiProvider>
      <Toaster />
      {children}
    </PoluiProvider>
  );
}

export {Providers};
