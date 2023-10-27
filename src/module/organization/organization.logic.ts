import { z } from 'zod'
import { organizationSchema } from './organization.router'

type organizationScheme = z.infer<typeof organizationSchema>

export function newOrganization(data: organizationScheme) {
  return organizationSchema.parse(data)
}
