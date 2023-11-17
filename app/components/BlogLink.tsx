import Link from "next/link";
export function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
interface BlogLinkProps {
  slug: string;
  name: string;
  children?: React.ReactNode;
}
export function BlogLink({ slug, name, children }: Readonly<BlogLinkProps>) {
  return (
    <Link
      title={name}
      href={`${slug}`}
      className="w-full flex flex-1 bg-neutral-100 dark:bg-neutral-800 rounded-xl justify-between p-4 md:p-6 gap-6 balance items-center group hover:brightness-125 transition-all text-neutral-900 dark:text-neutral-100 no_underline"
    >
      <div className="flex flex-col gap-2">
        <span className="w-full font-semibold text-md md:text-lg ">{name}</span>
        {children && <span className="w-full">{children}</span>}
      </div>

      <div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
        <ArrowIcon />
      </div>
    </Link>
  );
}
