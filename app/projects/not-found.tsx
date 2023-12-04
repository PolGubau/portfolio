import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Not found</h2>
      <p>Seems like this project is not available now, please try later</p>
      <Link className="bg-primary rounded-full px-3 py-1 text-neutral-800 w-fit" href="/">
        Return Home
      </Link>
    </div>
  );
}
