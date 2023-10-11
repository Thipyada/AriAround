import { Router } from 'express'
import validate from '../validate/user.validator'
import * as userController from '../controller/user.controller'
import { userUseEarnRule } from '../controller/useruseearnrule.controller'

const router = Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', validate, userController.createUser)
router.put('/user-use-earnrule', userUseEarnRule) //user use earnrule @ shop
router.put('/:id', validate, userController.updateUser)
router.put('/earnrule/:id', userController.userAddEarnrule)
router.delete('/:id', userController.deleteUser)

export default router
