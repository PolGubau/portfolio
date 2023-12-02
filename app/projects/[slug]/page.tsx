import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "app/components/mdx";
import { allProjects } from "contentlayer/generated";
import SimilarProjects from "./components/SimilarProjects";
import Header from "./components/Header";

export const dynamic = "force-static";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allProjects.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    endedAt: publishedTime,
    summary: description,
    cover: image,
    slug,
  } = post;
  const ogImage = image
    ? `https://polgubau.com${image}`
    : `https://polgubau.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://polgubau.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
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
    <section className="flex flex-col gap-4 overflow-x-hidden">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(p.structuredData),
        }}
      ></script>

      <Header project={p} />

      <div className="overflow-hidden">
        {/* table of content from the mdx content */}

        <Mdx code={p.body.code} />
      </div>
      <SimilarProjects project={p} slug={params.slug} />
    </section>
  );
}
