import { useMDXComponent } from "next-contentlayer/hooks";
import Image, { type ImageProps } from "next/image";
import Link, { type LinkProps } from "next/link";
import type * as React from "react";
import { Badge } from "./badge/badge";
import { ArrowIcon, BlogLink } from "./blog-link";
import { ThreePhones } from "./home";

interface CustomLinkProps extends Omit<LinkProps, "href"> {
  children?: React.ReactNode;
  className?: string;
  href: string;
}
function CustomLink(props: CustomLinkProps) {
  const href = props.href;

  if (String(href).startsWith("/")) {
    return (
      <Link {...props} href={props.href}>
        {props.children}
      </Link>
    );
  }

  if (String(href).startsWith("#")) {
    return <Link {...props} />;
  }

  return <Link target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage({ ...props }: ImageProps) {
  return (
    <Image className="rounded-xl mb-4 w-full" {...props} title={props.alt} />
  );
}

function Callout({
  emoji,
  children,
}: Readonly<{ emoji: string; children: React.ReactNode }>) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 rounded-xl p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-5 mr-4">{emoji}</div>
      <div className="w-full callout">{children}</div>
    </div>
  );
}

interface ProsConsProps {
  title: string;
  pros: string[];
}
function ProsCard({ title, pros }: ProsConsProps) {
  return (
    <div className="border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
      <span>{title}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <title>Pros</title>
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
interface ConsCardProps {
  title: string;
  cons: string[];
}
function ConsCard({ title, cons }: ConsCardProps) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
      <span>{title}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <title>Cons</title>
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface AtProps {
  label: string;
  href: string;
}
function At({ label, href }: AtProps) {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={label}
      className="no-underline bg-neutral-100 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all rounded-lg py-0.5 px-1 mx-1 border border-neutral-300 dark:border-neutral-500"
    >
      @{label}
    </Link>
  );
}

interface StyledLinkProps extends Omit<CustomLinkProps, "className"> {
  name: string;
}
function StyledLink(props: StyledLinkProps) {
  return (
    <CustomLink
      {...props}
      className="w-full flex flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl justify-between p-4 md:p-6 gap-6 balance items-center group hover:brightness-125 transition-all text-neutral-900 dark:text-neutral-100 no_underline"
    >
      <div className="flex flex-col gap-2">
        <span className="w-full font-semibold text-md md:text-lg ">
          {props.name}
        </span>
        {props.children ? (
          <span className="w-full">{props.children}</span>
        ) : null}
      </div>

      <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
        <ArrowIcon />
      </div>
    </CustomLink>
  );
}

const components = {
  Image: RoundedImage,
  StyledLink,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  At,
  Badge,
  ThreePhones,
  BlogLink,
};

export function Mdx({ code }: Readonly<{ code: string }>) {
  const Component = useMDXComponent(code);

  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert w-full">
      <Component components={components} />
    </article>
  );
}
