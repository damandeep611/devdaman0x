import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

const posts = defineCollection({
  name: "posts",
  directory: "src/content/blog", // where your blog posts will live
  include: "**/*.mdx", // or "**/*.md" if you prefer plain markdown
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().pipe(z.coerce.date()),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, {
          theme: "github-dark",
          keepBackground: true,
        }]
      ],
    });
    const slug = document._meta.path;
    
    return {
      ...document,
      mdx,
      slug,
      url: `/blog/${slug}`,
    };
  },
});

export default defineConfig({
  collections: [posts],
});