import { defineCollection } from "astro:content";
import { blogSchema } from "src/schemas";

const blogCollection = defineCollection({
	type: "content",
	schema: blogSchema,
});

export const collections = {
	blog: blogCollection,
};
