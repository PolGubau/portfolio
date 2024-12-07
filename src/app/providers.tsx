"use client";
import { PoluiProvider, Toaster } from "pol-ui";
import type React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PoluiProvider>
      <Toaster />
      {children}
    </PoluiProvider>
  );
}
