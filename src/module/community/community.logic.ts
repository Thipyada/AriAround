import { z } from 'zod'
import { communitySchema } from './community.router'

type communityScheme = z.infer<typeof communitySchema>

export function newCommunity(data: communityScheme) {
  return communitySchema.parse(data)
}
