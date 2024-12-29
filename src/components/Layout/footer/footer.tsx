import { MainSocials } from "@/components/Social/MainSocials";
import { metadata } from "@/lib/constants";
import Link from "next/link";

export function Footer() {
  return (
    <div className="mt-24 mb-20 flex flex-col items-center justify-center gap-6 text-center text-neutral-700 md:justify-start md:text-left dark:text-neutral-300">
      <Link
        title="Download my CV"
        href="/files/PolGubau_CV.pdf"
        download={`${metadata.longName} CV`}
        passHref={true}
        target="_blank"
        className="flex w-fit items-center gap-2 rounded-full border border-secondary-900/30 bg-transparent px-5 py-3 transition-all hover:bg-secondary-900/10 dark:bg-secondary-50/10 dark:hover:bg-secondary-50/20"
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

      <MainSocials />
      <p>
        Made with <span className="font-semibold text-primary-700 dark:text-primary">love</span> by{" "}
        <Link href="https://polgubau.com" title="Visit my website">
          {metadata.longName}
        </Link>
      </p>
    </div>
  );
}
