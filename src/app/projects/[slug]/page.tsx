import { Mdx } from "@/components/mdx";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "./components/Header";
import { ProjectBar } from "./components/ProjectBar";
import { SimilarProjects } from "./components/SimilarProjects";
import { allProjects } from ".contentlayer/generated";

export const dynamic = "force-static";

interface GenerateMetadataProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}
export async function generateMetadata(props: GenerateMetadataProps, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  // read route params

  const post = allProjects.find((postIteration) => postIteration.slug === `projects/${params.slug}`);
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
            url: "https://polgubau.com/og?title=Not found",
          },
        ],
      },
    };
  }
  const { title, endedAt: publishedTime, summary: description, cover: image, slug } = post;
  const ogImage = image ? `https://polgubau.com/media/${slug}/${image}` : `https://polgubau.com/og?title=${title}`;
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
export default async function Page(
  props: {
    params: Promise<{
      slug: string;
    }>;
  }
) {
  const params = await props.params;
  const slug = `projects/${String(params.slug)}`;
  const p = allProjects.find((post) => post.slug === slug);

  if (!p) {
    notFound();
  }

  return (
    <section className="relative flex flex-col gap-4 overflow-x-visible">
      <script
        type="application/ld+json"
        suppressHydrationWarning={true}
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
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
        hrefLang="en-us"
        className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 dark:hover:text-neutral-300"
      >
        <span className="sr-only">Back to projects</span>← Back
      </Link>
      {p.link ? <ProjectBar project={p} /> : null}{" "}
    </section>
  );
}
