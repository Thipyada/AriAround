import { z } from 'zod'
import { shopSchema } from './shop.router'

type shopScheme = z.infer<typeof shopSchema>

export function newShop(data: shopScheme) {
  return shopSchema.parse(data)
}
