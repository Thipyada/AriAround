import { Router } from 'express'
import * as communityController from './community.controller'
import { z } from 'zod'
import { validatorInput } from '../../middleware/validatorInput'

export const communitySchema = z.object({
  thaiName: z.string(),
  englishName: z.string(),
  founded: z.string(),
  active: z.boolean(),
  description: z.string().optional(),
  owner: z.string()
})

const router = Router()

router.get('/', communityController.getAllCommunities)
router.get('/:id', communityController.getCommunityById)
router.post(
  '/',
  validatorInput(communitySchema),
  communityController.createCommunity
)
router.put('/earnrule/:id', communityController.addCommunityEarnrule)
router.put(
  '/:id',
  validatorInput(communitySchema),
  communityController.updateCommunity
)
router.delete('/:id', communityController.deleteCommunity)

export default router
