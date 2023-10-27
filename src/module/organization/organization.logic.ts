import { z } from 'zod'

const organizationSchema = z.object({
  name: z.string(),
  Instagram: z.string().optional(),
  Facebook: z.string().optional(),
  type: z.string(),
  status: z.string()
})

type organizationScheme = z.infer<typeof organizationSchema>

export function newOrganization(data: organizationScheme) {
  return organizationSchema.parse(data)
}
