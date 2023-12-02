import "./global.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "./components/sidebar";
import { Footer } from "./components/Layout";
import Meta from "./components/Meta";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  metadataBase: new URL("https://polgubau.com"),
  title: {
    default: "Pol Gubau Amores - Frontend Developer and UX Designer",
    template: "%s | Pol Gubau Amores",
  },
  description: "👋🏼 Hello! I'm Pol Gubau Amores, a Frontend Developer and Designer based in Barcelona. I love to create beautiful and functional websites and apps.",
  openGraph: {
    title: "Pol Gubau Amores",
    description: "👋🏼 Hello! I'm Pol Gubau Amores, a Frontend Developer and Designer based in Barcelona. I love to create beautiful and functional websites and apps.",
    url: "https://polgubau.com",
    siteName: "Pol Gubau Amores",
    locale: "en_US",
    images: [
      {
        url: "https://polgubau.com/brand/thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Pol Gubau Amores' website preview",
      },
    ],
    type: "website",
  },
  generator: "Pol Gubau Amores",
  keywords: ["Pol Gubau Amores", "Pol Gubau", "Pol", "Gubau", "Amores", "Frontend Developer", "Frontend", "Developer", "UX Designer", "Barcelona", "Mesalvo", "Best React Developer", "React", "React Developer", "UX Designer", "UI Designer", "Next.js developer", "TailwindCSS"],
  publisher: "Pol Gubau Amores",
  creator: "Pol Gubau Amores",
  manifest: "/brand/manifest.json",
  verification: {
    google: "google3c76d94f17d4b233",
  },
  icons: {
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
      color: "#facc15",
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
};
export const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.className} text-neutral-950 bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-900 transition-colors duration-200 w-full overflow-x-hidden`}>
      <Meta />

      <body className="antialiased w-full max-w-4xl mb-40 flex mt-8 md:mx-auto">
        <main className="flex-auto flex flex-col w-full px-8 md:px-10 ">
          <NextTopLoader color="#facc15" height={2} showSpinner={false} />
          <Sidebar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
