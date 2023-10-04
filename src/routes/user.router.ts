import { Router } from 'express'
import validate from '../validate/user.validator'
import * as userController from '../controller/user.controller'

const router = Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', validate, userController.createUser)
router.put('/:id', validate, userController.updateUser)
router.delete('/:id', userController.deleteUser)

export default router
