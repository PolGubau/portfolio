import type { Metadata } from "next";
import { MansoryGrid } from "./_components/concepts-grid";
  
export const metadata: Metadata = {
  title: "Concepts",
  description: "Read my thoughts on software development, design, and more.",
  keywords: [
    "UI",
    "UX",
    "web development",
    "coding",
    "Pol Gubau Amores",
  ],
  authors: {
    url: "https://polgubau.com",
    name: "Pol Gubau Amores",
  },
  openGraph: {
    title: "Concepts | Pol Gubau Amores",
    description:
      "Explore my thoughts on software development, design, and more.",
    url: "https://polgubau.com/concepts",
    locale: "en_US",
    images: [
      {
        url: "https://polgubau.com/brand/concepts-thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Pol Gubau Amores' Concepts",
      },
    ],
    type: "website",
  },
};



export default function Page() {
 
  return (
    <MansoryGrid/>
  );
}
