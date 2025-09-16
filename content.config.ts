import { defineContentConfig, defineCollection, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    news: defineCollection({
      source: "news/*.md",
      type: "page",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        imageDescription: z.string().optional()
      })
    })
  }
})
