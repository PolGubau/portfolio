import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx";
import { allBlogs } from "contentlayer/generated";
import Link from "next/link";
import SimilarBlogs from "../components/SimilarBlogs";

export const dynamic = "force-static";
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allBlogs.find((post) => post.slug === `blog/${params.slug}`);

  if (!post) {
    return {
      title: "Not found",
      description: "This blog was not found.",

      openGraph: {
        title: "Not found",
        description: "This blog was not found.",
        type: "article",
        url: `https://polgubau.com/blog/${params.slug}`,
        images: [
          {
            url: `https://polgubau.com/og?title=Not found`,
          },
        ],
      },
    };
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    cover,
    slug,
  } = post;
  const ogImage = cover
    ? `https://polgubau.com/images/${slug}/${cover}`
    : `https://polgubau.com/og?title=${title}`;
  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Pol Gubau Amores`,
      description,
      type: "article",
      publishedTime,
      url: `https://polgubau.com/${slug}`,
      images: [ogImage, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  const d = new Date(date);

  const fullDate = d.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate}`;
}

export default function Blog({ params }) {
  const post = allBlogs.find((post) => post.slug === `blog/${params.slug}`);
  if (!post) {
    notFound();
  }

  return (
    <section className="  w-full ">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      ></script>
      <Link
        href="/blog"
        className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
      >
        ← Back
      </Link>
      <h2 className="font-semibold text-2xl mt-4 balance">{post.title}</h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {formatDate(post.publishedAt)}
      </p>

      <article className="mb-8 w-full  flex flex-col gap-6">
        <Mdx code={post.body.code} />
        <SimilarBlogs blog={post} slug={params.slug} />
        <Link
          href="/blog"
          className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
        >
          ← Back to blog
        </Link>{" "}
      </article>
    </section>
  );
}
