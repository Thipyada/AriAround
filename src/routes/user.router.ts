import { Router } from 'express'
import validate from '../validate/user.validator'
import * as userController from '../controller/user.controller'
import { userUseEarnRule } from '../controller/useruseearnrule.controller'

const router = Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', validate, userController.createUser)
router.put('/:id', validate, userController.updateUser)
router.put('/earnrule/:id', userController.userAddEarnrule)
router.put('/:id/:shopId/:earnruleId', userUseEarnRule) //user use earnrule @ shop
router.delete('/:id', userController.deleteUser)

export default router
