import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx";
import { allProjects } from "contentlayer/generated";
import SimilarProjects from "./components/SimilarProjects";
import Header from "./components/Header";
import ProjectBar from "./components/ProjectBar";

export const dynamic = "force-static";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params

  const post = allProjects.find(
    (post) => post.slug === `projects/${params.slug}`
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

export default function Blog({ params }) {
  const p = allProjects.find((post) => post.slug === `projects/${params.slug}`);

  if (!p) {
    notFound();
  }

  return (
    <section className="flex flex-col gap-4 overflow-x-hidden relative">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(p.structuredData),
        }}
      ></script>

      <Header project={p} />

      <div className="overflow-hidden px-1">
        {/* table of content from the mdx content */}

        <Mdx code={p.body.code} />
      </div>
      <SimilarProjects project={p} slug={params.slug} />
      <ProjectBar project={p} />
    </section>
  );
}
