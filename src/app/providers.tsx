"use client";
import { PoluiProvider } from "pol-ui";
import type React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return <PoluiProvider>{children}</PoluiProvider>;
}
