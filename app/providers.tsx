"use client";
import { PoluiProvider, Toaster } from "pol-ui";
import React from "react";

const Providers = ({ children }) => {
  return (
    <PoluiProvider>
      <Toaster />
      {children}
    </PoluiProvider>
  );
};

export default Providers;
