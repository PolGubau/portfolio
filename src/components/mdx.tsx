import { useMDXComponent } from "next-contentlayer/hooks";
import Image, { type ImageProps } from "next/image";
import Link, { type LinkProps } from "next/link";
import type * as React from "react";
import { ArrowIcon, BlogLink } from "./BlogLink";
import { Badge } from "./badge/badge";
import { ThreePhones } from "./home/ThreePhones";

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
  return <Image className="mb-4 w-full rounded-xl" {...props} title={props.alt} />;
}

function Callout({ emoji, children }: Readonly<{ emoji: string; children: React.ReactNode }>) {
  return (
    <div className="mb-8 flex items-center rounded-xl border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-neutral-900 text-sm dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="mr-4 flex w-5 items-center">{emoji}</div>
      <div className="callout w-full">{children}</div>
    </div>
  );
}

interface ProsConsProps {
  title: string;
  pros: string[];
}
function ProsCard({ title, pros }: ProsConsProps) {
  return (
    <div className="my-4 w-full rounded-xl border border-emerald-200 bg-neutral-50 p-6 dark:border-emerald-900 dark:bg-neutral-900">
      <span>{title}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="mb-2 flex items-baseline font-medium">
            <div className="mr-2 h-4 w-4">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <title>Pros</title>
                <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <div className="my-6 w-full rounded-xl border border-red-200 bg-neutral-50 p-6 dark:border-red-900 dark:bg-neutral-900">
      <span>{title}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="mb-2 flex items-baseline font-medium">
            <div className="mr-2 h-4 w-4">
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
      className="mx-1 rounded-lg border border-neutral-300 bg-neutral-100 px-1 py-0.5 text-neutral-800 no-underline transition-all hover:bg-neutral-200 dark:border-neutral-500 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
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
      className="balance group no_underline flex w-full flex-1 items-center justify-between gap-6 rounded-xl bg-neutral-100 p-4 text-neutral-900 transition-all hover:brightness-125 md:p-6 dark:bg-neutral-800 dark:text-neutral-100"
    >
      <div className="flex flex-col gap-2">
        <span className="w-full font-semibold text-md md:text-lg ">{props.name}</span>
        {props.children ? <span className="w-full">{props.children}</span> : null}
      </div>

      <div className="group-hover:-translate-y-1 transition-all group-hover:translate-x-1">
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
