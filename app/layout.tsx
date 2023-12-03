import "./global.css";
import type { Metadata } from "next";
import { metadata as constants } from "../lib/constants";
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
  alternates: {
    canonical: "/",
  },
  description: constants.description,
  themeColor: "#facc15",
  colorScheme: "light dark",
  viewport: "width=device-width, initial-scale=1.0",
  applicationName: constants.title,
  openGraph: {
    title: constants.title,
    description: constants.description,
    url: "https://polgubau.com",
    siteName: constants.title,
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
  generator: constants.title,
  keywords: constants.tags,
  publisher: constants.title,
  creator: constants.title,
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
  authors: [
    {
      name: constants.title,
      url: constants.links.website,
    },
  ],

  twitter: {
    site: constants.links.twitter,
    description: constants.description,
    creator: constants.links.twitter,
    title: constants.title,
    card: "summary_large_image",
  },
  appleWebApp: {
    title: constants.title,
    statusBarStyle: "black-translucent",
    capable: true,
    startupImage: "/brand/apple_splash_2048.png",
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
