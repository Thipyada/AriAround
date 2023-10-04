import { Router } from 'express'
import validate from '../validate/organization.validator'
import * as organizationController from '../controller/organization.controller'

const router = Router()

router.get('/', organizationController.getAllOrganizations)
router.get('/:id', organizationController.getOrganizationById)
router.post('/', validate, organizationController.createOrganization)
router.put('/:id', validate, organizationController.updateOrganization)
router.delete('/:id', organizationController.deleteOrganization)

export default router
