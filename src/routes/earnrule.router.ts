import { Router } from 'express'
import validate from '../validate/earnrule.validator'
import * as earnruleController from '../controller/earnrule.controller'

const router = Router()

router.get('/', earnruleController.getAllEarnrules)
router.get('/:id', earnruleController.getEarnruleById)
router.post('/', validate, earnruleController.createEarnrule)
router.put('/:id', validate, earnruleController.updateEarnrule)
router.delete('/:id', earnruleController.deleteEarnrule)

export default router
