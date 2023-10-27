import { Router } from 'express'
import * as earnruleController from './earnrule.controller'
import { userUseEarnRuleReset } from '../common/useruseearnrule.controller'
import { validatorInput } from '../../middleware/validatorInput'
import { z } from 'zod'

const earnRuleSchema = z.object({
  name: z.string(),
  type: z.string(),
  period: z.string(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  picture: z.string(),
  frequency: z.object({
    right: z.number(),
    frequency: z.string()
  }),
  setting: z.object({
    resultType: z.string(),
    value: z.object({
      amount: z.number(),
      coin: z.number()
    })
  }),
  active: z.boolean()
})

const router = Router()

router.get('/', earnruleController.getAllEarnrules)
router.get('/:id', earnruleController.getEarnruleById)
router.post(
  '/',
  validatorInput(earnRuleSchema),
  earnruleController.createEarnrule
)
router.put('/reset-used-earnrule', userUseEarnRuleReset)
router.put(
  '/:id',
  validatorInput(earnRuleSchema),
  earnruleController.updateEarnrule
)
router.delete('/:id', earnruleController.deleteEarnrule)

export default router
