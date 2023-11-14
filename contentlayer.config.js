import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },

  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      image: doc.cover
        ? `https://polgubau.com/images/${doc.title}/${doc.cover}`
        : `https://polgubau.com/og?title=${doc.title}`,
      url: `https://polgubau.com/projects/${doc._raw.flattenedPath}`,
      author: {
        "@type": "Person",
        name: "Pol Gubau Amores",
      },
    }),
  },
};

export const Project = defineDocumentType(() => ({
  name: "Projects",
  filePathPattern: `**/projects/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },

    startedAt: {
      type: "string",
      required: true,
    },
    endedAt: {
      type: "string",
    },
    color: {
      type: "string",
    },
    link: {
      type: "string",
    },
    githubLink: {
      type: "string",
    },
    npmCommand: {
      type: "string",
    },
    npmLink: {
      type: "string",
    },

    cover: {
      required: true,
      type: "string",
    },
    category: {
      type: "string",
      required: true,
    },
    tech: {
      type: "string",
      list: true,
    },
  },
  computedFields,
}));
export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/blog/**.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      required: true,
    },
    cover: {
      type: "string",
    },
    tags: {
      type: "string",
      list: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          defaultLang: "js",

          theme: "one-dark-pro",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
