import { Router } from 'express'
import * as shopController from './shop.controller'
import { z } from 'zod'
import { validatorInput } from '../../middleware/validatorInput'

export const shopSchema = z.object({
  name: z.string(),
  communityId: z.string()
})

const router = Router()

router.get('/', shopController.getAllShops)
router.get('/:id', shopController.getShopById)
router.post('/', validatorInput(shopSchema), shopController.createShop)
router.put('/:id', validatorInput(shopSchema), shopController.updateShop)
router.put('/earnrule/:id', shopController.addEarnruleToShop)
router.delete('/:id', shopController.deleteShop)

export default router
