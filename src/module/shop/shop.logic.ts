import { z } from 'zod'

const shopSchema = z.object({
  name: z.string(),
  communityId: z.string()
})

type shopScheme = z.infer<typeof shopSchema>

export function newShop(data: shopScheme) {
  return shopSchema.parse(data)
}
