import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	tags: z.array(z.string()),
	image: z.string(),
	imageAlt: z.string().optional(),
});

export { blogSchema };
