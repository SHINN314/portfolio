import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { blogSchema } from "./schemas";

const blog = defineCollection({
	loader: glob({ pattern: "**/*.(md|mdx)", base: "src/content/blog" }),
	schema: blogSchema,
});

export const collections = { blog };
