import { Router } from 'express'
import * as organizationController from './organization.controller'
import { z } from 'zod'
import { validatorInput } from '../../middleware/validatorInput'
import { Status } from '@prisma/client'

export const organizationSchema = z.object({
  name: z.string(),
  instagram: z.string().optional(),
  facebook: z.string().optional(),
  type: z.string(),
  status: z.nativeEnum(Status)
})

const router = Router()

router.get('/', organizationController.getAllOrganizations)
router.get('/:id', organizationController.getOrganizationById)
router.post(
  '/',
  validatorInput(organizationSchema),
  organizationController.createOrganization
)
router.put(
  '/:id',
  validatorInput(organizationSchema),
  organizationController.updateOrganization
)
router.delete('/:id', organizationController.deleteOrganization)

export default router
