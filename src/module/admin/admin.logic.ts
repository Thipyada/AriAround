import { z } from 'zod'

const adminSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  profilePic: z.string().optional(),
  phone: z.string().optional(),
  permissions: z.array(
    z.object({
      feature: z.string(),
      show: z.boolean(),
      permissionFeature: z.string()
    })
  )
})

type adminScheme = z.infer<typeof adminSchema>

export function newAdmin(data: adminScheme) {
  return adminSchema.parse(data)
}
