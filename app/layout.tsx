import "./global.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Sidebar from "./components/sidebar";
import { Analytics } from "@vercel/analytics/react";

import { Footer } from "./components/Layout";
import Meta from "./components/Meta";

export const metadata: Metadata = {
  metadataBase: new URL("https://polgubau.com"),
  title: {
    default:
      "Pol Gubau Amores - Frontend Developer and UX Designer based in Barcelona",
    template: "%s | Pol Gubau Amores",
  },
  description:
    "👋🏼 Hello! I'm Pol Gubau Amores, a Frontend Developer and Designer based in Barcelona. I love to create beautiful and functional websites and apps. In my portfolio you can read my blog and check my most important projects.",
  openGraph: {
    title: "Pol Gubau Amores",
    description:
      "👋🏼 Hello! I'm Pol Gubau Amores, a Frontend Developer and Designer based in Barcelona. I love to create beautiful and functional websites and apps.",
    url: "https://polgubau.com",
    siteName: "Pol Gubau Amores",
    locale: "en_US",
    type: "website",
  },
  generator: "Pol Gubau Amores",
  keywords: [
    "Pol Gubau Amores",
    "Pol Gubau",
    "Pol",
    "Gubau",
    "Amores",
    "Frontend Developer",
    "Frontend",
    "Developer",
    "UX Designer",
    "Barcelona",
    "Mesalvo",
    "Best React Developer",
    "React",
    "React Developer",
    "UX Designer",
    "UI Designer",
    "Next.js developer",
    "TailwindCSS",
  ],
  publisher: "Pol Gubau Amores",
  creator: "Pol Gubau Amores",
  themeColor: [
    {
      color: "#fef08a",
      media: "light",
    },
    {
      color: "#facc15",
      media: "dark",
    },
  ],
  manifest: "/brand/manifest.json",
  icons: {
    /** rel="icon" */
    icon: [
      {
        url: "/brand/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/brand/favicon_dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "/brand/apple-touch-icon.png",
      type: "image/png",
      sizes: "180x180",
      color: "#fef08a",
      rel: "apple-touch-icon",
      media: "light",
      fetchPriority: "high",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Pol Gubau Amores",
  authors: [
    {
      name: "Pol Gubau Amores",
      url: "https://polgubau.com",
    },
  ],

  twitter: {
    title: "Pol Gubau Amores",
    card: "summary_large_image",
  },
  verification: {
    google: "a2dehJer8aiyNPzYUrl1PNnhx3cejg6OxfZKcwYmm50",
  },
};
export const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.className} text-neutral-950 bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-900 transition-colors duration-200 w-full overflow-x-hidden`}
    >
      <Meta />
      <body className="antialiased w-full max-w-4xl mb-40 flex mt-8 md:mx-auto">
        <main className="flex-auto flex flex-col w-full px-8 md:px-10 ">
          <Sidebar />
          {children}
          <Analytics />
          <Footer />
        </main>
      </body>
    </html>
  );
}
