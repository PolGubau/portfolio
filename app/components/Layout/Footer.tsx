import { metadata } from "lib/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col mt-24 mb-20 gap-6 text-neutral-700 dark:text-neutral-300 text-center justify-center md:justify-start md:text-left">
      <p>
        Made with ❤️ by{" "}
        <Link href="https://polgubau.com" title="Visit my website">
          Pol Gubau Amores
        </Link>
      </p>

      <Link
        title="Download my CV"
        href="/files/cv2023.pdf"
        download="Pol Gubau Amores CV"
        passHref
        target="_blank"
      >
        <span className="sr-only">Click here to download my CV</span>
        Download my CV
      </Link>

      <div className="flex gap-4 text-center justify-center md:justify-start md:text-left">
        <Link href={metadata.links.github} title="Visit my GitHub profile">
          <span className="sr-only">Visit my GitHub profile</span>
          <svg
            xlinkTitle="Visit my GitHub profile"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </Link>

        <Link href={metadata.links.linkedin} title="Visit my LinkedIn profile">
          <span className="sr-only">Visit my LinkedIn profile</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
