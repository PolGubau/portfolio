import Link from "next/link";
export function ArrowIcon() {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 448 512"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
    </svg>
  );
}
interface BlogLinkProps {
  slug: string;
  name: string;
  children?: React.ReactNode;
  className?: string;
}
export function BlogLink({
  slug,
  name,
  children,
  className,
}: Readonly<BlogLinkProps>) {
  return (
    <Link
      title={name}
      href={`${slug}`}
      className={`w-full flex flex-1 bg-dark/10 dark:bg-light/10 hover:bg-dark/20 dark:hover:bg-light/20 rounded-full md:rounded-2xl justify-between px-5 py-4 md:px-6 md:py-6  gap-6 balance items-center group hover:brightness-125 transition-all ${className}`}
    >
      <div className="flex flex-col gap-2">
        <span className="w-full font-semibold text-md md:text-lg ">{name}</span>
        {children && <span className="w-full">{children}</span>}
      </div>

      <div className="group-hover:translate-x-1 group-hover:-translate-y-0 transition-all">
        <ArrowIcon />
      </div>
    </Link>
  );
}
