import { Router } from 'express'
import validate from '../validate/admin.validator'
import * as adminController from '../controller/admin.controller'

const router = Router()

router.get('/', adminController.getAllAdmins)
router.get('/:id', adminController.getAdminById)
router.post('/', validate, adminController.createAdmin)
router.put('/:id', validate, adminController.updateAdmin)
router.delete('/:id', adminController.deleteAdmin)

export default router
