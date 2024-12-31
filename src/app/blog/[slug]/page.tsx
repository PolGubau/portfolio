import { Mdx } from "@/components/mdx";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SimilarBlogs } from "../components/SimilarBlogs";
import { allBlogs } from ".contentlayer/generated";

export const dynamic = "force-static";
interface GenerateMetadataProps {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
}
export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = allBlogs.find((p) => p.slug === `blog/${params.slug}`);

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
            url: "https://polgubau.com/og?title=Not found",
          },
        ],
      },
    };
  }

  const { title, publishedAt: publishedTime, summary: description, cover, slug } = post;
  const ogImage = cover ? `https://polgubau.com/media/${slug}/${cover}` : `https://polgubau.com/og?title=${title}`;
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

  return fullDate;
}
export default function Page({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allBlogs.find((p) => p.slug === `blog/${String(params.slug)}`);
  if (!post) {
    notFound();
  }

  return (
    <section className="w-full ">
      <script
        type="application/ld+json"
        suppressHydrationWarning={true}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      />
      <Link
        href="/blog"
        className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
      >
        ← Back
      </Link>
      <h1 className="balance mt-4 font-semibold text-2xl">{post.title}</h1>
      <p className="text-neutral-600 text-sm dark:text-neutral-400">{formatDate(post.publishedAt)}</p>

      <article className="mb-8 flex w-full flex-col gap-6">
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
