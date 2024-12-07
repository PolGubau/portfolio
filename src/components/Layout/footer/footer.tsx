import MainSocials from "@/components/Social/main-socials";
import { metadata } from "@/lib/constants";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col items-center mt-24 mb-20 gap-6 text-neutral-700 dark:text-neutral-300 text-center justify-center md:justify-start md:text-left">
      <Link
        title="Download my CV"
        href="/files/PolGubau_CV.pdf"
        download={`${metadata.longName} CV`}
        passHref={true}
        target="_blank"
        className="bg-transparent border border-secondary-900/30  dark:bg-secondary-50/10  rounded-full flex gap-2 w-fit py-3 px-5 items-center transition-all hover:bg-secondary-900/10 dark:hover:bg-secondary-50/20"
      >
        <span className="sr-only">Click here to download my CV</span>{" "}
        <svg
          xlinkTitle="Download my CV"
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
          <title>Download my CV</title>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Download my CV
      </Link>
      " "
      <MainSocials />
      <p>
        Made with{" "}
        <span className="text-primary-700 dark:text-primary font-semibold">
          love
        </span>
        " " by" "
        <Link href="https://polgubau.com" title="Visit my website">
          {metadata.longName}
        </Link>
      </p>
    </div>
  );
}

export default Footer;
