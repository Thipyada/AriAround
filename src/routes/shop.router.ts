import { Router } from 'express'
import validate from '../validate/shop.validator'
import * as shopController from '../controller/shop.controller'

const router = Router()

router.get('/', shopController.getAllShops)
router.get('/:id', shopController.getShopById)
router.post('/', validate, shopController.createShop)
router.post('/addearnrule/:id', shopController.addEarnruleToShop)
router.put('/:id', validate, shopController.updateShop)
router.delete('/:id', shopController.deleteShop)

export default router
