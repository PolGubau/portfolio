import { metadata } from "lib/constants";
import Link from "next/link";
import React from "react";
import MainSocials from "../Social/MainSocials";

const Footer = () => {
  return (
    <div className="flex flex-col items-center mt-24 mb-20 gap-6 text-neutral-700 dark:text-neutral-300 text-center justify-center md:justify-start md:text-left">
      <Link
        title="Download my CV"
        href="/files/cv2023.pdf"
        download={`${metadata.longName} CV`}
        passHref
        target="_blank"
        className="bg-transparent border border-dark/30  dark:bg-light/10  rounded-full flex gap-2 w-fit py-3 px-5 items-center transition-all hover:bg-dark/10 dark:hover:bg-light/20"
      >
        <span className="sr-only">Click here to download my CV</span> {` `}
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        Download my CV
      </Link>{" "}
      <MainSocials />
      <p>
        Made with <span className="text-primary font-semibold">love</span> by{" "}
        <Link href="https://polgubau.com" title="Visit my website">
          {metadata.longName}
        </Link>
      </p>
    </div>
  );
};

export default Footer;
