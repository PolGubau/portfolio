import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl">Not found</h2>
      <p>Seems like this blog post is not available now, please try later</p>
      <Link className="w-fit rounded-full bg-primary px-3 py-1 text-neutral-800" href="/">
        Return Home
      </Link>
    </div>
  );
}
