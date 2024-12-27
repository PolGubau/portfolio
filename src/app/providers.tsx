"use client";
import { PoluiProvider, Toaster } from "pol-ui";
import type React from "react";
import { useMemo } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PoluiProvider>
      {useMemo(
        () => (
          <Toaster />
        ),
        [],
      )}
      {children}
    </PoluiProvider>
  );
}
