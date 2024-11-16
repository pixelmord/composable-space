import { defineCollection, z } from "astro:content";

const seoSchema = z.object({
  title: z.string().min(5).max(120).optional(),
  description: z.string().min(15).max(160).optional(),
  image: z
    .object({
      src: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  pageType: z.enum(["website", "article"]).default("website"),
});

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    datePublished: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    isFeatured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    seo: seoSchema.optional(),
  }),
});

const pages = defineCollection({
  schema: z.object({
    title: z.string(),
    seo: seoSchema.optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    datePublished: z.coerce.date(),
    isFeatured: z.boolean().default(false),
    seo: seoSchema.optional(),
  }),
});
const recipes = defineCollection({
  type: "data",
  // Type-check frontmatter using Zod
  schema: z.object({
    "@context": z
      .union([
        z.literal("https://schema.org/"),
        z.literal("http://schema.org/"),
        z.literal("https://schema.org"),
        z.literal("http://schema.org"),
      ])
      .optional(), // Ensure JSON-LD context
    "@type": z.literal("Recipe"),
    name: z.string().describe("The name of the recipe"),
    author: z
      .union([
        z
          .object({
            "@type": z.literal("Person"),
            name: z.string(),
          })
          .optional(),
        z.array(
          z.object({
            "@type": z.literal("Person"),
            name: z.string(),
          }),
        ),
      ])
      .describe("The author of the recipe"),
    description: z.string().describe("A brief description of the recipe"),
    datePublished: z.coerce
      .date()
      .optional()
      .describe("The date the recipe was published (YYYY-MM-DD)"),
    image: z
      .array(z.string())
      .optional()
      .describe("An array of image URLs for the recipe"),
    recipeYield: z
      .string()
      .optional()
      .describe('The yield of the recipe (e.g., "1 loaf", "12 servings")'),
    prepTime: z
      .string()
      .optional()
      .describe('Preparation time in ISO 8601 format (e.g., "PT15M")'),
    cookTime: z
      .string()
      .optional()
      .describe('Cooking time in ISO 8601 format (e.g., "PT30M")'),
    totalTime: z
      .string()
      .optional()
      .describe('Total time in ISO 8601 format (e.g., "PT45M")'),
    recipeIngredient: z
      .array(z.string())
      .describe("An array of recipe ingredients"),
    recipeInstructions: z
      .array(
        z.object({
          "@type": z.literal("HowToStep"),
          text: z.string(),
          name: z.string().optional(),
          url: z.string().optional(),
        }),
      )
      .describe("An array of recipe instructions as HowToSteps"),
    // Add other properties as needed from schema.org/Recipe
  }),
});

export const collections = { blog, pages, projects, recipes };
