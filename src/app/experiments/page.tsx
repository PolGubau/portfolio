import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const MansoryGrid = dynamic(() => import("./_components/MansoryGrid"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Concepts",
  description:
    "Discover some UI pieces I used for various projects, these are short videos that show the UI in action.",
  keywords: ["UI", "UX", "web development", "coding", "Pol Gubau Amores"],
  authors: {
    url: "https://polgubau.com",
    name: "Pol Gubau Amores",
  },
  openGraph: {
    title: "Concepts | Pol Gubau Amores",
    description:
      "Discover some UI pieces I used for various projects, these are short videos that show the UI in action.",
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
    <div>
      <h1 className="mb-8 text-pretty text-center font-medium text-xl md:text-start md:font-semibold md:text-2xl ">
        UI Concepts
      </h1>
      <section className="min-h-screen">
        <Suspense fallback={<div>Loading...</div>}>
          <MansoryGrid />
        </Suspense>
      </section>
    </div>
  );
}
