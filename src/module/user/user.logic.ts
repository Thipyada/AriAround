import { z } from 'zod'

const userSchema = z.object({
  name: z.string(),
  organizationId: z.string(),
  status: z.string().optional()
})

type userScheme = z.infer<typeof userSchema>

export function newUser(data: userScheme) {
  return userSchema.parse(data)
}
