import { Router } from 'express'
import validate from '../validate/community.validator'
import * as communityController from '../controller/community.controller'

const router = Router()

router.get('/', communityController.getAllCommunities)
router.get('/:id', communityController.getCommunityById)
router.post('/', validate, communityController.createCommunity)
router.put('/earnrule/:id', communityController.addCommunityEarnrule)
router.put('/:id', validate, communityController.updateCommunity)
router.delete('/:id', communityController.deleteCommunity)

export default router
