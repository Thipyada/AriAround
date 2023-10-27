import { z } from 'zod'

const communitySchema = z.object({
  thaiName: z.string(),
  englishName: z.string(),
  founded: z.string(),
  active: z.boolean(),
  description: z.string().optional(),
  owner: z.string()
})

type communityScheme = z.infer<typeof communitySchema>

export function newCommunity(data: communityScheme) {
  return communitySchema.parse(data)
}
