import { z } from 'zod'
import { userSchema } from './user.router'

type userScheme = z.infer<typeof userSchema>

export function newUser(data: userScheme) {
  return userSchema.parse(data)
}
