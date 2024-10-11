"use client";
 import { PoluiProvider, Toaster } from "pol-ui";
import React  from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  
 
  return (
    <PoluiProvider>
     
      <Toaster />
      {children} 

    </PoluiProvider>
  );
}
