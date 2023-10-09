import { Router } from 'express'
import Validate from '../validate/transaction.validator'
import { transaction } from '../controller/transaction.controller'

const router = Router()

router.post('/:id', Validate, transaction)

export default router
