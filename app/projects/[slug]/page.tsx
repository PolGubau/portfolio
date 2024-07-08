import { type Metadata, type ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Mdx } from "app/components/mdx";
import { allProjects } from "contentlayer/generated";
import {SimilarProjects} from "./components/similar-projects";
 import {ProjectBar} from "./components/project-bar";
import Header from "./components/Header";

export const dynamic = "force-static";

interface GenerateMetadataProps {
  params: { slug: string }
  searchParams: Record<string, string | string[] | undefined>
}
export async function generateMetadata(
  { params }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const post = allProjects.find(
    (postIteration) => postIteration.slug === `projects/${params.slug}`
  );
  if (!post) {
    return {
      title: "Not found",
      description: "This project was not found.",

      openGraph: {
        title: "Not found",
        description: "This project was not found.",
        type: "article",
        url: `https://polgubau.com/project/${params.slug}`,
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
    endedAt: publishedTime,
    summary: description,
    cover: image,
    slug,
  } = post;
  const ogImage = image
    ? `https://polgubau.com/images/${slug}/${image}`
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
export default function Page({ params }: {
  params: {
    slug: string;
  };
}) {
  const slug = `projects/${String(params.slug)}`
  const p = allProjects.find((post) => post.slug === slug);

  if (!p) {
    notFound();
  }

  return (
    <section className="flex flex-col gap-4 overflow-x-visible relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(p.structuredData),
        }}
       />
      <Header project={p} />
      <div className="overflow-visible px-1">
        <Mdx code={p.body.code} />
      </div>
      <SimilarProjects project={p} slug={params.slug} />
      <Link
        title="Back to projects"
        href="/projects"
        className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
      >
        <span className="sr-only">Back to projects</span>← Back
      </Link>
      {p.link ? <ProjectBar project={p} /> : null}{" "}
    </section>
  );
}
