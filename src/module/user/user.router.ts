import { Router } from 'express'
import * as userController from './user.controller'
import { userUseEarnRule } from '../common/useruseearnrule.controller'
import { validatorInput } from '../../middleware/validatorInput'
import { z } from 'zod'
import { Status } from '@prisma/client'

export const userSchema = z.object({
  name: z.string(),
  organizationId: z.string(),
  status: z.nativeEnum(Status).optional()
})

const router = Router()

router.get('/', userController.getAllUsers)
router.get('/:id', userController.getUserById)
router.post('/', validatorInput(userSchema), userController.createUser)
router.put('/user-use-earnrule', userUseEarnRule) //user use earnrule @ shop
router.put('/:id', validatorInput(userSchema), userController.updateUser)
router.put('/earnrule/:id', userController.userAddEarnrule)
router.delete('/:id', userController.deleteUser)

export default router
