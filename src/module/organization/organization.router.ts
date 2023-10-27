import { Router } from 'express'
import * as organizationController from './organization.controller'
import { z } from 'zod'
import { validatorInput } from '../../middleware/validatorInput'

const organizationSchema = z.object({
  name: z.string(),
  Instagram: z.string().optional(),
  Facebook: z.string().optional(),
  type: z.string(),
  status: z.string()
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
